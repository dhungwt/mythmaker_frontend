import React from "react";
import PropTypes from "prop-types";
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

UserHomepage.PropTypes = {
    //actually to check the "email" if provided, it must be the string
    email: PropTypes.string,
};

export default UserHome;