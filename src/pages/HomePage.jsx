import React from "react";
import { Link, Navigate } from "react-router-dom"; // Import Link for navigation
import { auth } from '../components/Auth'
import {LogIn, Signup} from '../components/AuthForm'
import { useSelector } from "react-redux"; 
import './pages.css';
import '../App.css'

export default function HomePage() {
  const isLoggedIn = useSelector((state) => !!state.user._id);

  
  return (
    <div id='home-page' className="cssGradientMotion" style={{color:"white"}}>
      <section className="content" style={{}}>
        <h1>Welcome to  <br/> MythMaker! </h1>
         <p>Choose wisely as you navigate through different scenarios and decide <br/> between two options in this fun and challenging "This or That" game.</p>
          
          <Link to = "/signup" style={{textDecoration:"none", border:"none"}}>
              <button type='button' > Sign Up Now </button>  
          </Link>
      </section>
    </div>
   )
}

