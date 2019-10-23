import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../store/login";
import { LOGIN_URL, REGISTER_URL } from "../constants";

export const useLogin = () => {
  const { setToken } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: null,
    password: null
  });
  const [error, setError] = useState({ isError: false, errorDetails: null });
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const userLogin = async function() {
      if (credentials.email && credentials.password !== null) {
        try {
          setLoading(true);
          const response = await axios.post(LOGIN_URL, {
            email: credentials.email,
            password: credentials.password
          });
          if (response.status === 200) {
            setToken(response.data.key);
          }
        } catch (error) {
          setError({ isError: true, errorDetails: error.toString() });
          setSuccess(false);
        } finally {
          setLoading(false);
          setSuccess(true);
        }
      }
    };
    userLogin();
  }, [credentials]);
  return { error, loading, setCredentials, success };
};

export const useRegister = () => {
  const { setToken } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: null,
    password1: null,
    password2: null
  });
  const [error, setError] = useState({ isError: false, errorDetails: null });
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const userRegister = async function() {
      if (
        credentials.username &&
        credentials.email &&
        credentials.password1 &&
        credentials.password2 !== null
      ) {
        try {
          setLoading(true);
          const response = await axios.post(REGISTER_URL, {
            username: credentials.username,
            email: credentials.email,
            password1: credentials.password1,
            password2: credentials.password2
          });
          if (response.status === 201) {
            setToken(response.data.key);
          }
        } catch (error) {
          setError({ isError: true, errorDetails: error.toString() });
          setSuccess(false);
        } finally {
          setLoading(false);
          setSuccess(true);
        }
      }
    };
    userRegister();
  }, [credentials]);
  return { error, loading, setCredentials, success };
};
