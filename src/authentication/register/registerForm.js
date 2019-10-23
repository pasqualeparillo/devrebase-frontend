import React, { useContext } from "react";
import { Wrapper, Button } from "../../components/button";
import useForm from "react-hook-form";
import { useRegister } from "../../hooks/authentication";
import { LoginContext } from "../../store/login";
export default function RegisterForm() {
  const { token } = useContext(LoginContext);
  const { error, loading, setCredentials } = useRegister();
  const { register, handleSubmit } = useForm();
  function onSubmit(values) {
    setCredentials({
      username: values.username,
      email: values.email,
      password1: values.password1,
      password2: values.password2
    });
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
      {console.log(token)}
      <form
        className="lg:w-5/6 w-11/12 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-xs font-bold mb-2">Username:</label>
        <input
          type="text"
          className="border-2 border-black p-1 rounded-none"
          name="username"
          ref={register({ required: true })}
        />
        <label className="text-xs font-bold mb-2 mt-2">Email:</label>
        <input
          type="email"
          className="border-2 border-black p-1 rounded-none"
          name="email"
          ref={register({ required: true })}
        />
        <label className="text-xs font-bold mb-2 mt-2">Password:</label>
        <input
          type="password"
          className="border-2 border-black p-1 rounded-none"
          name="password1"
          ref={register({ required: true })}
        />
        <label className="text-xs font-bold mb-2 mt-2">Confirm Password:</label>
        <input
          type="password"
          className="border-2 border-black p-1 rounded-none"
          name="password2"
          ref={register({ required: true })}
        />
        <div className="mt-4 flex">
          <Wrapper className="flex-grow" first={true}>
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
    </div>
  );
}
