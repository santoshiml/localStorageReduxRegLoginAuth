import { REGISTER_USER } from "../actionType";
import {LOGIN_USER} from "../actionType";

export const registeruser = (info) =>{
    return{
        type:REGISTER_USER,
        payload:info
    }
}

export const loginuser =(info) =>{
   
    return{
        type:LOGIN_USER,
        payload:info
    }
}