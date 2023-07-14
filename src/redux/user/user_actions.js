import axios from "axios";
import userActionTypes from "./user_type";
import { defaultUser } from "./user_reducer";


//payload is the user
const getUser=(user)=>(
    {
        type: userActionTypes.GET_USER,
        user
    }
);

//remove the user
const removeUser = () =>{
    return {type:userActionTypes.REMOVE_USER}
};

//fetch the current authenticated user from the server
//07/11: api address is temp
export const me = () => async (dispatch) =>{
    try {
        console.log("FETCHING GET USER")
        const res = await axios.get("http://localhost:8080/api/users/auth/me");
        dispatch(getUser(res.data || defaultUser));
        console.log("GET USER IS DONE")
    } catch (error) {
        console.error(error);
    }

};

//handle user authentication
export const auth = (email,password,method) => async (dispatch) =>{
    let res;
    try {
        res = await axios.post(`http://localhost:8080/api/users/auth/${method}`,{
            email,
            password,
        });

    } catch (authError) {
        return dispatch(getUser({error:authError}));
        
    }

    try {
        dispatch(getUser(res.data));
    } catch (dispatchOrHistoryErr) {
        console.error(dispatchOrHistoryErr);
    }
};

export const logout = () => async (dispatch) => {
    try{
        await axios.post("http://localhost:8080/api/users/auth/logout");
        dispatch(removeUser());
    }catch(error){
        console.error(error);
    }
};

