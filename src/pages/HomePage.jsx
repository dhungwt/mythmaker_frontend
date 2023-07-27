import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// import { auth } from '../components/Auth'
// import {LogIn, Signup} from '../components/AuthForm'
import { useSelector } from "react-redux"; 
import ParticleBackground from "../components/Particles/ParticleBackground";
import "./StyleSheets/homePage.css";
import "../components/Button/StreamingButton.css"
import MMlogo from "./assets/MMlogo.png"

export default function HomePage() {
  const isLoggedIn = useSelector((state) => !!state.user._id);
  
  return (
    <div className="homePage">
      <div className="particlebackground">
          <ParticleBackground />
      </div>
      <section>
        <h1 className="homePageTitle">Welcome To </h1>
         <img className="logoImg" src={MMlogo} alt="MMlogo"></img>
         <p>Choose wisely as you navigate through different scenarios and decide <br/> between two options in this fun and challenging "This or That" game.</p>
          
          { !isLoggedIn ? (
            <div className="homePageBtnBox">
              <Link to = "/login">
                  <button className="homePageButton btn" type='button' > Log In </button>  
              </Link>
              <Link to = "/signup">
                  <button className="homePageButton btn" type='button' > Sign Up </button>  
              </Link>
            </div>
              
            ) : (
              <Link to = "/home">
                  <button className="homePageButton btn" type='button' > Your HomePage </button>  
              </Link>
            )
          }
      </section>
    </div>
   )
}

