import React from 'react'
import ParticleBackground from "../components/Particles/ParticleBackground";
import "./StyleSheets/homePage.css";
import "../components/Button/StreamingButton.css"

function ErrorPage(props) {

  if(props?.msg){
    return (
      <div className='errorPage'>
      <div className="particlebackground">
          <ParticleBackground />
      </div>
      <h1 className='errorPageTitle'>{props.msg}</h1>
      <p>If it's loading for way too long, the story likely doesn't exist.</p>
    </div>
    )
  }

  return (
    <div className='errorPage'>
      <div className="particlebackground">
          <ParticleBackground />
      </div>
      <h1 className='errorPageTitle'>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

export default ErrorPage