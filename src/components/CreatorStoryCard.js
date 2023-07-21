import React from "react";
import UserHomepage from "../pages/UserHomepage";
import { useNavigate } from "react-router-dom";
//this is the card that appears on the user homepage after login
//displays all stories the user made
function CreatorStoryCard(props) {
  const creatorStory = props.creatorIdSelector;
  console.log(creatorStory, "i am the creator story");
  const navigate = useNavigate();

  const handleEditStoryClick = () => {
    console.log("INSIDE EDIT STORY CLICK HANDLER");
    navigate(`/createStory/${creatorStory._id}`);
  };

  const handlePlayClick = () =>{
    navigate(`/stories/${creatorStory._id}`)
  }

  return (
    <div>
      CreatorStoryCard: Title: {creatorStory.title} &nbsp;
      <button onClick={handleEditStoryClick}>✎ Edit ✎</button>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  );
}

export default CreatorStoryCard;
