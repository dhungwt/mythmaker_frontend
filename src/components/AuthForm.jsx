import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../redux/user/user_actions";
import { useNavigate } from "react-router-dom";
import './components.css'
//import mythmakerpic from './mythmakerpic.png'
import ParticleBackground from "./Particles/ParticleBackground";
import "./AuthForm_Google.css";
import MMlogoDog from "../pages/assets/MMlogoDog.png"


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

        try {
            console.log("DISPATCH AUTH ACTION IN AUTH FORM")
            await dispatch(auth(email, password, formname));
            navigate("/home");
        } catch (error) {
            console.error("Auth Failed");

        }



        //after the submission, navigate to the home page


    };

    return (
        <div className="authform" style={{}}>

            <div className="Auth_Form_Background" style={{
                position: "absolute",
                zIndex: "1",
            }}>
                <ParticleBackground />

            </div>
            <div className="Auth_Form_Container" style={{
                position: "relative",
                zIndex: "2",
            }}>


                <section className="container" style={{ backgroundColor: "#232946", paddingLeft: "20px", border: "20px #b8c1ec solid", marginTop: "10px" }}>
                    <form onSubmit={handleSubmit} name={name} className="form">
                        <h1 className="signInText" style={{ color: "white" }}> {displayName} Form </h1>
                        {/*email input*/}
                        <div className="emailinput">
                            <label htmlFor="email" style={{color:"pink"}}>
                                Email
                            </label>
                            <input name="email" type="email" className="box" id="emailBox" placeholder="Enter email..." />
                        </div>
                        {/*password input*/}
                        <div className="passwordinput">
                            <label htmlFor="password" style={{color:"pink"}}>
                                Password
                            </label>
                            <input name="password" type="password" className="box" placeholder="Enter password..." />
                        </div>
                        {/*for the submit button */}
                        <div className="authformsubmit">
                            <button type="submit" className="submitText">{displayName}</button>
                        </div>
                        {/*if there is error we can handle the error message */}
                        {error && error.response && <div style={{color:"pink"}}> {error.response.data.message} </div>}
                        {/*Google Oauth button */}
                        <a href="http://localhost:8080/auth/google" className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
                            </div>
                            <p className="btn-text"><b>{displayName} with Google</b></p>
                        </a>
                    </form>
                    <div className="side">
                        <img src={MMlogoDog} alt="BoW WoW" style={{ maxWidth: "100%", margin:"10px", pointerEvents:"none" }} />
                    </div>

                </section>

            </div>
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