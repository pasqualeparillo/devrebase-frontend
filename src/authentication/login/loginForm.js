import React, { useContext } from "react";
import { Wrapper, Button } from "../../components/button";
import useForm from "react-hook-form";
import { useLogin } from "../../hooks/authentication";
import { LoginContext } from "../../store/login";
export default function LoginForm() {
  const { token } = useContext(LoginContext);
  const { register, handleSubmit } = useForm();
  const { error, loading, setCredentials } = useLogin();
  function onSubmit(values) {
    setCredentials({ email: values.email, password: values.password });
  }
  const variant = {
    active: {
      x: -5,
      y: 5
    },
    inactive: {
      x: 0,
      y: 0
    }
  };
  return (
    <div className="w-full h-full flex flex-wrap flex-grow justify-center mt-2">
      {console.log(error, token)}
      {loading ? (
        <p>loading...</p>
      ) : (
        <form
          className="lg:w-5/6 w-11/12 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-xs font-bold">Email:</label>
          <input
            type="email"
            className="border-2 border-black p-2 mt-2 rounded-none"
            name="email"
            ref={register({ required: true })}
          />
          <label className="text-xs font-bold mt-2">Password:</label>
          <input
            type="password"
            className="border-2 border-black p-2 mt-2 rounded-none"
            name="password"
            ref={register({ required: true })}
          />
          <div className="mt-4">
            <Wrapper first={true} className="flex-grow">
              <Button
                variants={variant}
                initial={"inactive"}
                whileHover={"active"}
              >
                Submit
              </Button>
            </Wrapper>
          </div>
        </form>
      )}
    </div>
  );
}
