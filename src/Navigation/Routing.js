import React from "react";
import { Routes ,Route } from "react-router-dom";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Dashboard from "../Component/Dashboard";

const Routing = () =>{
    let message = localStorage.getItem("Token")
    console.log('llllll', message)

    return(
        <div>
            { message ?
           
                <>
                <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                </Routes>

                </>
                :
                <>
                <Routes>
                
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                </Routes>
                </>            
           
            }
        </div>
    )
}

export default Routing;