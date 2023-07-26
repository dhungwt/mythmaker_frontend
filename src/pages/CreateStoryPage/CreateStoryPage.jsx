import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteStoryThunk } from "../../redux/story/story_actions";
import { deleteEventThunk } from "../../redux/event/event_actions";
import { deleteCharacterThunk } from "../../redux/character/character_action";
import { editStoryThunk } from "../../redux/story/story_actions";
import { fetchIndividualStoryThunk } from "../../redux/story/story_actions";
import { fetchAllEventsByStoryThunk } from "../../redux/event/event_actions";
import CharacterList from "../../components/CharacterList/CharacterList";
import DisplayEvent from "../../components/EventPart/DispalyEvent/DisplayEvent";
import "./CreateStoryPage.css";
import "../../components/Button/StreamingButton.css";
import "../../components/Button/Dropdown.css";
import ParticleBackground from "../../components/Particles/ParticleBackground.js";

const CreateStory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get the story id
  const { storyId } = useParams();

  //get the all events
  const events = useSelector((state) => state.event.events);

  //fetch the current story
  useEffect(() => {
    dispatch(fetchIndividualStoryThunk(storyId));
    dispatch(fetchAllEventsByStoryThunk(storyId));
    // Check if the title exists in local storage, if not set it
    // const savedTitle = localStorage.getItem(storyId);
    // if (!savedTitle && story) {
    //     setStoryTitle(story.title);
    //     localStorage.setItem(storyId, story.title);
    // }
  }, [dispatch, storyId]);

  //get the current story
  const story = useSelector((state) => state.story.singleStory);

  //set the story title
  const [storyTitle, setStoryTitle] = useState("Untitle"); //remove at one point but it's working now with it???

  useEffect(() => {
    if (story && story?._id === storyId && !localStorage.getItem(storyId)) {
      setStoryTitle(story.title);
      localStorage.setItem(storyId, story.title);
    } else if (story) {
      setStoryTitle(localStorage.getItem(storyId));
    }
  }, [story?.title]);

  // if(story && !localStorage.getItem(storyId))
  //     localStorage.setItem(storyId, storyTitle);
  // else
  //     setStoryTitle(localStorage.getItem(storyId));

  //handle the story title change in the input title form
  const handleStoryTitleChange = (event) => {
    setStoryTitle(event.target.value);
    localStorage.setItem(storyId, event.target.value);
  };

  //handle the story save change
  const handleSaveChanges = async (e) => {
    try {
      e.preventDefault();
      //updated on 07/17
      const updatedStory = {
        _id: storyId,
        title: storyTitle, //send the new title here
      };
      await dispatch(editStoryThunk(updatedStory));
      console.log("Changes saved successfully");
    } catch (error) {
      console.log("Error saving changes:", error);
    }
  };

  //please must delete the story when you test here
  const handleDeleteStory = async () => {
    try {
      //delete all characters associated with the story
      for (let character of story.characters) {
        console.log("I try to delete the character", character);
        await dispatch(deleteCharacterThunk(character._id));
      }

      //delete all events associated with the story
      for (let eventId of story.events) {
        console.log("what is the eventid i want to delete:", eventId);
        await dispatch(deleteEventThunk(eventId));
      }

      //delete the story
      await dispatch(deleteStoryThunk(storyId));
      console.log("Story, characters and events deleted successfully");
      navigate("/home"); // Navigate back to user home page after deletion
    } catch (error) {
      console.log("Error deleting story:", error);
    }
  };

  //style the body
  useEffect(() => {
    // When the component is mounted, add the class
    document.body.classList.add("story-body");

    // When the component is unmounted, remove the class
    return () => {
      document.body.classList.remove("story-body");
    };
  }, []);

  return (
    <div>
      <div>
        <div className="particlebackground">
          <ParticleBackground />
        </div>
        <div className="create-story-container">
          <div className="create-story-title card-bg">
            <h2>Title: &nbsp; </h2> &nbsp;
            <input
              type="text"
              value={storyTitle}
              onChange={handleStoryTitleChange}
            />
          </div>

          <div className="add-character-field card-bg">
            <h2>Select Character Speaking: &nbsp;</h2>
            <CharacterList storyId={storyId} onCharacterChange={() => {}} />
          </div>
          <div className="display-event-field">
            <h2>Current Story Events:</h2>
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <DisplayEvent event={event} />
              </div>
            ))}
          </div>

          <div className="save-delete-create-story-button">
            <h3 className="warningText">
              To save the changes to your story, please click Save Story below.
              <br />To discard your story, click Delete Story.
            </h3>
            <div className="bottomBtns">
              <button className="btn" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="btn" onClick={handleDeleteStory}>
                Delete Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
