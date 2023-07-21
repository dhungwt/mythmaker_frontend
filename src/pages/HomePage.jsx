import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './pages.css';
import '../App.css'

export default function HomePage() {
  

  return (
    <div id='home-page' className="cssGradientMotion" style={{color:"white"}}>
      <section className="content" style={{}}>
        <h1>Welcome to  <br/> MythMaker! </h1>
         <p>Choose wisely as you navigate through different scenarios and decide <br/> between two options in this fun and challenging "This or That" game.</p>
         <button type='button'> Sign Up Now </button>
         {}
      </section>
    </div>
   )
}

