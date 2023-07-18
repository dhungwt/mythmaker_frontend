import React from "react";
import UserHomepage from "../pages/UserHomepage";

function CreatorStoryCard(props) {
  const creatorStory = props.creatorIdSelector;
  console.log(creatorStory, "i am the creator story");

  const handleEditStoryClick = () => {
    console.log("INSIDE EDIT STORY CLICK HANDLER");
    window.location.href = `./createStory/${creatorStory._id}`;
  };

  return (
    <div>
      CreatorStoryCard: Title: {creatorStory.title}
      <button onClick={handleEditStoryClick}>✎ Edit ✎</button>
    </div>
  );
}

export default CreatorStoryCard;
