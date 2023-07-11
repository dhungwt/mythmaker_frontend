import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login,Signup } from './components/AuthForm';
import NavBar from './components/NavBar';
import UserHomepage from './pages/UserHomepage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/Auth';


function App() {
  return (
    <Router>
      {/*NavBar is rendered across all routes */}
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login name="login" displayName='Log In' />}/>
        <Route path="/signup" element={<Signup name="signup" displayName='Sign Up'/>}/>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<UserHomepage />}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
