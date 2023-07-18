import React from "react";
import UserHomepage from "../pages/UserHomepage";

//this is the card that appears on the user homepage after login
//displays all stories the user made
function CreatorStoryCard(props) {
  const creatorStory = props.creatorIdSelector;
  console.log(creatorStory, "i am the creator story");

  const handleEditStoryClick = () => {
    console.log("INSIDE EDIT STORY CLICK HANDLER");
    window.location.href = `./createStory/${creatorStory._id}`;
  };

  return (
    <div>
      CreatorStoryCard: Title: {creatorStory.title} &nbsp;
      <button onClick={handleEditStoryClick}>✎ Edit ✎</button>
    </div>
  );
}

export default CreatorStoryCard;
