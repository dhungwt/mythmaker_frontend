import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login,Signup } from './components/AuthForm';

import NavBar from './components/NavBar';
import UserHomepage from './pages/UserHomepage';
import HomePage from './pages/HomePage';
import IndividualStoryPage from './pages/IndividualStoryPage';
import PrivateRoute from './components/Auth';
import ErrorPage from './pages/ErrorPage';
// import HafeefasQuest from  './components/HafeefasQuest';
import StoriesPage from './pages/StoriesPage';

//css imports
import '../src/pages/pages.css';

function App() {
  return (
    <Router className='home-page'>
      <div id='home-page'>
      {/*NavBar is rendered across all routes */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login name="login" displayName='Log In' />}/>
        <Route path="/signup" element={<Signup name="signup" displayName='Sign Up'/>}/>
        
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<UserHomepage />}/>
        </Route>

        {/* <Route path="/gameplay" element={<HafeefasQuest/>} /> */}

        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/stories/:id" element={<IndividualStoryPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
