import './App.css';
import {  Routes, Route, useNavigate } from "react-router-dom";
import { Login,Signup } from './components/AuthForm';

import CreateStory from './pages/CreateStoryPage/CreateStoryPage';


import NavBar from './components/NavBar';
import UserHomepage from './pages/UserHomepage';
import HomePage from './pages/HomePage';
import IndividualStoryPage from './pages/IndividualStoryPage';
import PrivateRoute from './components/Auth';
import ErrorPage from './pages/ErrorPage';
// import HafeefasQuest from  './components/HafeefasQuest';
import StoriesPage from './pages/StoriesPage';
import EditEvent from './components/EventPart/EditEventModal/EditEvent';
import { useEffect } from 'react';
import axios from 'axios';
import { oAuth } from './redux/user/user_actions';
import { useDispatch, useSelector } from 'react-redux';

//css imports
import '../src/pages/pages.css';


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => !!state.user._id);

  useEffect (() =>{
    const getAuthedUser = async () => {
      try{
        const response = await axios.get("http://localhost:8080/auth/login/success",{ 
          withCredentials : true
        })
        console.log("LOGIN SUCCESS RESPONSE", response)
        if(response.status==200){
          await dispatch(oAuth(response.data.user._id,response.data.user.password, response.data.user.googleId, response.data.user.storyHistory, response.data.user.storyIds )); 
        }else{
          throw new Error("AUTHENICATION HAS FAILED")
        }

      }catch(error){
        console.log("ERROR GETTING AUTHED USER", error)
      }
    } 

    if(!isLogin){
      console.log("isLogin HIT")
      getAuthedUser();
      navigate("/home");
    }
  },[])


  return (
    
      <div id='home-page'>
      {/*NavBar is rendered across all routes */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login name="login" displayName='Log In' />}/>
        <Route path="/signup" element={<Signup name="signup" displayName='Sign Up'/>}/>
        
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<UserHomepage />}/>
          <Route path="/createStory/:storyId" element={<CreateStory />} />
          <Route path="/editEvent/:eventStoryId/:eventId" element={<EditEvent />} />
        </Route>

        {/* <Route path="/gameplay" element={<HafeefasQuest/>} /> */}

        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:id" element={<IndividualStoryPage />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
    
  );
}

export default App;
