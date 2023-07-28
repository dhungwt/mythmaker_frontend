//this card is for the browse all stories page
import React from "react";
import "./components.css";
import { useNavigate } from "react-router-dom";
import books from "../pages/assets/books.png";

function StoryCard(props) {
  // const { title, event } = props;
  const story = props.story;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/stories/${story._id}`); //redirects to the individual story page
  };
  //does essentially the samething as the StoriesPage where we check if the input/title exists

  return (

    <div className="story-card" onClick={handleClick}>
      <div className="card">
        <img
          className="card-img-top"
          src={books}
          alt="Card image cap"
          // Set a fixed height for the card image
        />

        <div className="card-body">
          <h5 className="card-title btn btn-primary" onClick={handleClick}>
            {story.title}
          </h5>

          <p className="card-text">{story.event}</p>
          {/* <h1 className="btn btn-primary" onClick={handleClick}>
          Go somewhere
        </h1>  */}
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
