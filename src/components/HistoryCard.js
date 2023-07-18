import React from "react";

//this card displays stories the user has played
function HistoryCard(props) {
  //history will hold all the information within
  // the individual stories in the user's history
  const history = props.singleStoryHistory;

  const handleHistoryClick = () => {
    console.log("INSIDE HISTORY CLICK HANDLER");
    //will redirect user to the url of the individual story
    window.location.href = `./stories/${history._id}`;
  };

  return <div onClick={handleHistoryClick}>{history.Title}</div>;
}

export default HistoryCard;
