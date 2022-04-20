import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registeruser } from "../Redux/Action/userAction";
import { useForm } from "react-hook-form";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const RegisterUser = (data) => {
    console.log(data)
    // e.preventDefault();
    // let data = { firstName, lastName, email, password };
   
    dispatch(registeruser(data));
    navigate("/login");
  };

  return (
    <div>
      <h2>Registration Form!</h2>
      <form onSubmit={handleSubmit(RegisterUser)}>
        <div className="field-form">
       
          <input
            type="text"
            placeholder="Enter First Name"
            {...register("firstName", {
              required: true})}
          />
           {errors?.firstName?.type === "required" && <p className="error">First Name required*</p>}
        </div><br/>

        <div className="field-form">
       
          <input
            type="text"
            placeholder="Enter Last Name"
            {...register("lastName", {
              required: true})}
  
          />
          {errors?.lastName?.type === "required" && <p className="error">Last Name required*</p>}
        </div><br/>

        <div className="field-form">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: true})}
            
          />
          {errors?.email?.type === "required" && <p className="error">Email required*</p>}
        </div><br/>
        <div className="field-form">
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: true})}
            
          />
          {errors?.password?.type === "required" && <p className="error">Password required*</p>}
        </div><br/>
        <div className="field-form">
        <span>Have an account?</span>
        <Link to="/login"> Login</Link>{" "}
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
