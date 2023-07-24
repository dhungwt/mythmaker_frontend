import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/user/user_actions";
import '../pages/pages.css'
import logoMM from './logoMM.jpg'


// this component will display different links based on whether user is logged in or not

//define the linkbutton that create navigational link with option onclick behavior
const LinkButton = ({ to, children, onClick }) => (
    <NavLink to={to} onClick={onClick}>
         {children}
     </NavLink>
);

// //define the component part
const NavBar = () => {
    //dispatch the redux
    const dispatch = useDispatch();

    //navigate between the pages
    const navigate = useNavigate();

    //determine the user logged in or not
    const isLoggedIn = useSelector((state) => !!state.user._id);

    console.log("isloggen in:", isLoggedIn);


    //handle the log out bytton
    const handleLogOut = (event) => {
        event.preventDefault();
        dispatch(logout())
            .then(() => navigate("/login"))
            .catch(err => console.error(err));
        console.log("isloggen in:", isLoggedIn);
    };


    return (

        <div className="navbar" id='background' style={{
            position: "relative",
            zIndex: "1000",
        }}>
            <h1>MYTH⚔MAKER</h1>
            <nav>
                {/*condition rendering based on log in or not */}
                {/* <LinkButton to="/gameplay"> game </LinkButton> */}
                <LinkButton to="/stories"> Browse Stories </LinkButton>


        <nav class="navbar navbar-expand-md navbar-light" style= {{backgroundColor:"#232946", zIndex:"100"}}>
            {isLoggedIn ? (
                <div className="logo-container">
                    <a class="navbar-item " href="/home">
                      
                        <img src={logoMM} 
                        alt="myth maker logo" style={{ width: "25vh" }} className="logo" />
                    </a>
                </div>
                ) : (
                <div className="logo-container">
                    <a class="navbar-item mx-a" href="/">
                    <img src={logoMM} alt="myth maker logo" style={{ width: "25vh" }} className="logo" />
                    </a>
                </div>
                )
            }
            {/* MYTHMAKER */}
        {/* </a> */}
        <button class="navbar-toggler" style={{backgroundColor:"white", color:"#232946", margin:"15px"}} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/stories" style={{color:"white", backgroundColor:"#232946"}}>
                Stories
                {/* <LinkButton to="/stories">Stories</LinkButton> */}
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="/">
                Features
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
        
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
            <li class="nav-item">
                {isLoggedIn ? (
                    <div className="homePageLogin">
                        <a  class="nav-link" href="/home" style={{color:"white", backgroundColor:"#232946"}}>
                            HomePage
                        </a>
                        {/* <button to="/home"> HomePage </button> */}
                    </div>
                ):(
                    <div className="homePageLogout">
                        <a class ="nav-link" href="/" style={{backgroundColor:"#232946", color:"white"}}>
                            Home
                        </a>
                        {/* <LinkButton to= "/"> Home </LinkButton> */}
                    </div>
                )
                }
              {/* </a> */}
            </li>
          </ul>
          
          {/* have to render the below span conditionally based on if the hamburger is showing or not */}
            {/* can use media query of when the hamburger shows up when the screen gets smaller on span */}
        {/* first check if bootstrap has it and if not then do media query */}


        </div >

           <span class="navbar-text"> 
             {isLoggedIn ? (
              <div className="haslogin">
                {/* <LinkButton to="/home" style={{}}>Home</LinkButton> */}
                {/* <LinkButton onClick={handleLogOut} style={{}}>Log out</LinkButton> */}
                <a className="nav-link" onClick={handleLogOut} style={{backgroundColor:"#232946", color:"white", zIndex:"100"}}> Log Out </a>
              </div>
            ) : (
              <div className="notlogin" style={{display:"flex"}}>
                <a  className="nav-link "  id="login" href="/login" style={{backgroundColor:"#232946",color:"white"}} > Login </a>
                {/* <LinkButton to="/login" className="login" >Login</LinkButton> */}
                <a className="nav-link" id="signup" href="/signup" style={{backgroundColor:"#232946", color:"white"}}> Sign up </a>
                 {/* <LinkButton to="/signup">Sign Up</LinkButton> */}
               </div>
            )} 
           </span> 
        </div>
      </nav>
      

    );
}

export default NavBar;
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Stories', 'Login', 'Logout'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" style={{backgroundColor:"#232946"}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component={NavLink}
//             to="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             {/* ^^ the route when click on image is above */}
//         <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//             <img src={logoMM} alt="myth maker logo" style={{ width: "25vh" }} className="logo" />
//           </NavLink>
//      </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} component= {NavLink} to = "/stories" onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* the logo from resize screen: */}
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//  <img src={logoMM} alt="myth maker logo" style={{ width: "25vh" }} className="logo" />          
//  {/* </Typography> */}
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//                 component= {NavLink} to = "/stories" 
//               >
//                 {page} 
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {/* the logo: */}
//                 {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;