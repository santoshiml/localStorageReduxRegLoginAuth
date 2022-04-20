import React from "react";
import { useNavigate } from "react-router";


const Dashboard = () =>{
    const navigate = useNavigate();

const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Token")
    navigate("/");
}

    return(
        <div>
            <h2>Welcome to Dashboard </h2><br/><br/>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Dashboard;