import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './pages.css';
import '../App.css'

export default function HomePage() {
  return (
    <div id='home-page' className="cssGradientMotion">
        <h1>Welcome to This or That</h1>

      <p>Choose wisely as you navigate through different scenarios and decide between two options in this fun and challenging "This or That" game.</p>

      {/* Show Start Game button only if the user is logged in */}
      {isLoggedIn() ? (
        <Link to="/home">
          <button className="start-button">Start Game</button>
        </Link>
      ) : (
        <p>Log in to start playing!</p>
      )}

      <div className="instructions">
        <h2>Instructions:</h2>
        <p>Read each scenario and choose one of the two options provided. Click on your choice to proceed to the next scenario. Have fun!</p>
      </div>

      <div className="features">
        <h2>Game Features:</h2>
        <ul>
          <li>Exciting "This or That" scenarios</li>
          <li>Test your decision-making skills</li>
          <li>Multiple levels and challenges</li>
        </ul>
      </div>

      {/* Show a section with other people's stories only if the user is logged in */}
      {isLoggedIn() && (
        <div className="other-stories">
          <h2>Explore Other People's Stories:</h2>
          {/* Display a list of other people's stories */}
        </div>
      )}

      {/* Show a section for creating and editing own stories only if the user is logged in */}
      {isLoggedIn() && (
        <div className="create-edit-stories">
          <h2>Create and Edit Your Own Stories:</h2>
          {/* Display options for creating and editing stories */}
          {/* You can use Link to navigate to specific pages for these actions */}
        </div>
      )}

      <footer>
        <p>&copy; 2023 Your Game Name. All rights reserved.</p>
        {/* Add links to privacy policy, terms of service, etc. if applicable */}
      </footer>
    </div>
  );
}

// Function to check if the user is logged in (replace this with your actual authentication check)
function isLoggedIn() {
  // Replace this with your actual authentication check logic
  // For example, using Firebase Authentication or checking the presence of a valid JWT
  return true; // Assume the user is logged in for demonstration purposes
}
