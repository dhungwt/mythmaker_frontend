import React from "react";

import { useSelector } from "react-redux";

//This the user's homepage
//07/11 created: just simple page created

const UserHomepage = () =>{
    //get the email address from the store state

    const email = useSelector((state)=>state.user.email);

    return (
        <div>
            <h3>Welcome, {email}</h3>
        </div>
    );



};


export default UserHomepage;