import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/user/user_actions";
import '../pages/pages.css'
import MMlogo from "../pages/assets/MMlogo.png"
// this component will display different links based on whether user is logged in or not

// //define the linkbutton that create navigational link with option onclick behavior
// const LinkButton = ({ to, children, onClick }) => (
//     <NavLink to={to} onClick={onClick}>
//          {children}
//      </NavLink>
// );

// // //define the component part
const NavBar = () => {
    //dispatch the redux
    const dispatch = useDispatch();

    //navigate between the pages
    const navigate = useNavigate();

    //determine the user logged in or not
    const isLoggedIn = useSelector((state) => !!state.user._id);

    console.log("isloggen in:", isLoggedIn);

    //handle the log out button
    const handleLogOut = (event) => {
        event.preventDefault();
        dispatch(logout())
            .then(() => navigate("/login"))
            .catch(err => console.error(err));
        console.log("isloggen in:", isLoggedIn);
    };

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <div className="navbar" id='background' style=
        {{
            position: "relative",
            zIndex: "1000",
        }}>
            <nav className="navbar navbar-expand-md navbar-light" style= {{backgroundColor:"#232946", zIndex:"100"}}>
                {isLoggedIn ? (
                    <div className="logo-container" onClick={handleLogoClick}>
                        <img src={MMlogo} alt="myth maker logo" style={{ width: "25vh"}} className="logo" />
                    </div>
                ) : (
                    <div className="logo-container" onClick={handleLogoClick}>
                        <img src={MMlogo} alt="myth maker logo" style={{ width: "25vh"}} className="logo" />
                    </div>
                )}
                <button className="navbar-toggler" style={{backgroundColor:"#d4939d", color:"#232946", margin:"15px"}} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {isLoggedIn ? (
                                <div className="homePageLogin">
                                    <a  className="nav-link" href="/home" style={{color:"white", backgroundColor:"#232946"}}>
                                        Home Page
                                    </a>
                                </div>
                            ):(
                                <div className="homePageLogout">
                                    <a className="nav-link" href="/" style={{backgroundColor:"#232946", color:"white"}}>
                                        Home
                                    </a>
                                </div>
                            )}
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/stories" style={{color:"white", backgroundColor:"#232946"}}>
                                Browse Stories
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/about" style={{color:"white", backgroundColor:"#232946"}}>
                                About
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text"> 
                        {isLoggedIn ? (
                            <div>

                                <a className="nav-link" onClick={handleLogOut} style={{backgroundColor:"#232946", color:"white", zIndex:"100", marginRight:"20px"}}> Log Out </a>

                            </div>
                        ) : (
                            <div className="logBtn notlogin" style={{display:"flex"}}>
                                <a  className="nav-link"  id="login" href="/login" style={{backgroundColor:"#232946",color:"white", minWidth:"fit-content", marginRight:"5px"}} > Login </a>
                                <a className="nav-link" id="signup" href="/signup" style={{backgroundColor:"#232946", color:"white", minWidth:"fit-content"}}> Sign up </a>
                            </div>
                        )}
                    </span> 
                </div>
            </nav>
        </div>
    );
}

export default NavBar;