import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginuser } from "../Redux/Action/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginUser = (data) => {
    dispatch(loginuser(data));

    const mytoken = localStorage.getItem("Token");
    if (mytoken) {
      alert("login successfully");
      navigate("/dashboard");
    } else {
      alert("Invalid user Id or Password");
      navigate("/login");
    }
  };

  return (
    <div>
      <h3>Login Form! </h3>
      <form onSubmit={handleSubmit(LoginUser)}>
        <div className="field-form">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error">Email required*</p>
          )}
        </div>
        <br />
        <div className="field-form">
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: true,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="error">Password required*</p>
          )}
        </div>
        <br />
        <div className="field-form">
          <span>Not have an account?</span>
          <Link to="/register"> Register</Link> <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
