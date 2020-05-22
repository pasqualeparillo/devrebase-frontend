import React, { useContext } from "react";
import { LoginContext } from "../store/login";
import Axios from "axios";
import GoogleLogin from "react-google-login";
import { motion } from "framer-motion";
export default function GitHubLogin() {
  let store = require("store");
  const { user, setUser } = useContext(LoginContext);
  const responseGoogle = response => {
    login(response);
  };
  function login(data) {
    Axios.post("http://localhost:8000/dj-rest-auth/google/", {
      access_token: data.accessToken
    }).then(res =>
      setUser(
        store.set("user", {
          token: res.data.access_token,
          refreshToken: res.data.refresh_token,
          email: res.data.user.email
        })
      )
    );
  }
  function logOut() {
    store.remove("user");
    setUser(null);
  }
  return (
    <div className="w-full flex flex-col justify-center">
      {user === null ? (
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_KEY}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={renderProps => (
              <motion.button
                className="w-full rounded text-white mt-8 py-4 subtext"
                style={{ backgroundColor: "blue" }}
                whileHover={{ backgroundColor: "darkblue" }}
                whileTap={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Continue with google
              </motion.button>
            )}
          />
        </div>
      ) : (
        <div>
          <p>Hello {user.email}</p>
          <button onClick={() => logOut()}>Logout</button>
        </div>
      )}
      <div>{console.log(user)}</div>
    </div>
  );
}
