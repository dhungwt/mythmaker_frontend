import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/user/user_actions";
import '../pages/pages.css'
import logoMM from './logoMM.jpg'


//this component will display different links based on whether user is logged in or not

//define the linkbutton that create navigational link with option onclick behavior
const LinkButton = ({ to, children, onClick }) => (
    <NavLink to={to} onClick={onClick}>
        {children}
    </NavLink>
);

//define the component part
const NavBar = () => {
    //dispatch the redux
    const dispatch = useDispatch();

    //navigate between the pages
    const navigate = useNavigate();

    //determine the user logged in or not
    const isLoggedIn = useSelector((state) => !!state.user._id);
    console.log("isloggen in:",isLoggedIn);
  

    
    //handle the log out bytton
    const handleLogOut = (event) => {
        event.preventDefault();
        dispatch(logout())
            .then(() => navigate("/login"))
            .catch(err => console.error(err));
            console.log("isloggen in:",isLoggedIn);
    };


    return (
        <nav class="navbar navbar-expand-lg" style= {{backgroundColor:"#232946"}}>
        <a class="navbar-brand" href="/">
            {/* MYTHMAKER */}
          <img src={logoMM} alt="myth maker logo" style={{ width: "25vh" }} className="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/stories">
                <LinkButton to="/stories">Story</LinkButton>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            {isLoggedIn ? (
              <div className="haslogin">
                <LinkButton to="/home">Home</LinkButton>
                <LinkButton onClick={handleLogOut}>Log out</LinkButton>
              </div>
            ) : (
              <div className="notlogin">
                <LinkButton to="/login">Login</LinkButton>
                <LinkButton to="/signup">Sign Up</LinkButton>
              </div>
            )}
          </span>
        </div>
      </nav>
      
    );




}

export default NavBar;