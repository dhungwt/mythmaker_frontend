import React from "react";
//import UserHomepage from "../pages/UserHomepage";
import { useNavigate } from "react-router-dom";
import "../components/Button/StreamingButton.css";
import './components.css'

//this is the card that appears on the user homepage after login
//displays all stories the user made
function CreatorStoryCard(props) {
  const creatorStory = props.creatorIdSelector;
  //console.log(creatorStory, "i am the creator story");
  const navigate = useNavigate();

  const handleEditStoryClick = () => {
    console.log("INSIDE EDIT STORY CLICK HANDLER");
    navigate(`/createStory/${creatorStory._id}`);
  };

  const handlePlayClick = () =>{
    navigate(`/stories/${creatorStory._id}`)
  }

  return (
    <div className="" style={{}}>
      <div className="creatorStoryTitle"style={{}}>
         {creatorStory.title} &nbsp;
        <button className="btn" onClick={handleEditStoryClick} style={{fontSize:"18px",}}>✎ Edit ✎</button>
        <button className="btn" onClick={handlePlayClick} style={{fontSize:"17px",}}>Play</button>
      </div>
    </div>
  );
}

export default CreatorStoryCard;
