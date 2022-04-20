import { REGISTER_USER } from "../actionType";
import {LOGIN_USER} from "../actionType";

const initialState = {
    data:[]
}

const UserReducer = (state=initialState , action) =>{
    
    switch(action.type){
        case REGISTER_USER :
            const registerlist = state.data;
            registerlist.push(action.payload)
            localStorage.setItem("key",JSON.stringify(registerlist))
            return{
                ...state,
                data:[...registerlist]
                
            }
            break;

            case LOGIN_USER :
                let userlist = localStorage.getItem("key");
                let userlist1 = JSON.parse(userlist) 
                // debugger;
                console.log('uuuuu111',userlist1)
                {userlist1.map((e) => {  
               if(action.payload.email === e.email && action.payload.password === e.password){
                let token = "21sdf2sdf15d1SDfsdf1654";
                localStorage.setItem("Token",JSON.stringify(token))
            }    
                }
                
                )}
            return{
                ...state,
           
            }
            break;
            default:
                return state
    }
}

export default UserReducer;