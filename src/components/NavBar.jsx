import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/user/user_actions";
import '../pages/pages.css'


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
        <div className="navbar" id='background'>
            <h1>MYTHMAKER</h1>
            <nav>
                {/*condition rendering based on log in or not */}
                {/* <LinkButton to="/gameplay"> game </LinkButton> */}
                <LinkButton to="/stories"> story </LinkButton>

                {isLoggedIn ? (

                    <div className="haslogin">
                        {/* Show these links if the user is logged in */}
                        {/*add more link when other page ready */}
                        <LinkButton to="/home">Home</LinkButton>
                        <LinkButton onClick={handleLogOut}>Log out</LinkButton>

                    </div>

                ) : (
                    <div className="notlogin">
                        {/*show the links if the user is not logged in */}
                        <LinkButton to="/login">Login</LinkButton>
                        <LinkButton to="/signup">Sign Up</LinkButton>
                    </div>
                )}
            </nav>
            <hr />

        </div>
    );




}

export default NavBar;