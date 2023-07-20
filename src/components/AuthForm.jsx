import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../redux/user/user_actions";
import { useNavigate } from "react-router-dom";
import './components.css'


const AuthForm = ({ name, displayName }) => {
    //to navigate between pages
    const navigate = useNavigate();
    //dispatch actions
    const dispatch = useDispatch();

    const error = useSelector((state) => state.user.error);
    //const user = useSelector((state) => state.user);
    

    //submit the email address(username) and password and the form name
    const handleSubmit = async (event) => {
        event.preventDefault();

        //get the form name
        const formname = name;

        //get the email address
        const email = event.target.email.value;

        //get the password
        const password = event.target.password.value;

        try{
            console.log("DISPATCH AUTH ACTION IN AUTH FORM")
            await dispatch(auth(email, password, formname)); 
            navigate("/home");
        }catch(error){
            console.error("Auth Failed");

        }

        

        //after the submission, navigate to the home page
       

    };

    return (
        <div className="authform" style={{marginTop:"10%"}}>
            <section class="container">
            <form onSubmit={handleSubmit} name={name} className="form">
                <h1 className="signInText"> SIGN IN FORM </h1>
                {/*email input*/}
                <div className="emailinput">
                    <label htmlFor="email" >
                        <small>Email</small>
                    </label>
                    <input name="email" type="email" className="box" id="emailBox" placeholder="Enter email..."/>
                </div>
                {/*password input*/}
                <div className="passwordinput">
                    <label htmlFor="password">
                        <small>Password</small>
                    </label>
                    <input name="password" type="password" className="box" placeholder="Enter password..."/>
                </div>
                {/*for the submit button */}
                <div className="authformsubmit">
                    <button type="submit" className="submitText">{displayName}</button>
                </div>
                {/*if there is error we can handle the error message */}
                {error && error.response && <div> {error.response.data.message} </div>}
                {/*Google Oauth button */}
                <a href="http://localhost:8080/auth/google" >{displayName} with Google</a>
            </form>
            <div class="side"> 
                <img src="https://th.bing.com/th/id/R.b6acdd1c51f98273c00f30fe3d790e00?rik=%2frAFCYCNgGI75w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2f3%2f4%2f490956.jpg&ehk=ZeJXCAdIr1OhW6vBsS8rasfFea9TWgtdhSN0tEGEopM%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            
            </section>
        </div>

    );
};

// Specifying the prop types for the AuthForm component
AuthForm.propTypes = {
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
};

// Exporting the AuthForm component as Login and Signup
export const Login = AuthForm;
export const Signup = AuthForm;