import React, { useEffect } from "react";
// import  {useEffect} from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
// import { fetchAllStories } from "../redux/story/story_actions";
import { useSelector } from "react-redux";
// import { fetchUserStoriesThunk} from "../redux/user/user_actions";
import { useNavigate } from "react-router-dom";
import { addCharacterThunk } from "../redux/character/character_action";
import "./pages.css";
import "../App.css";
import "../components/Button/StreamingButton.css";
import {
  addStoryThunk,
  fetchIndividualStoryByCreatorIdThunk,
} from "../redux/story/story_actions";
//import CreateStory from "./CreateStoryPage";
import CreatorStoryCard from "../components/CreatorStoryCard";
import HistoryCard from "../components/HistoryCard";
import { addEventThunk } from "../redux/event/event_actions";
import { editEventThunk } from "../redux/event/event_actions";
import { updatedUserThunk } from "../redux/user/user_actions";
import ParticleBackground from "../components/Particles/ParticleBackground.js";
import { Fragment } from "react";
//This the user's homepage
//07/11 created: just simple page created

const UserHomepage = () => {
  const dispatch = useDispatch();
  //useSelctor for the logged in user
  const user = useSelector((state) => state.user); //looks into the global store(state) to recieve the info of current user thats logged in
  // const fetchUserStories = (userID) => {
  //     console.log("RUNNING DISPATCH FROM fetchUserStories");
  //     return dispatch(fetchUserStoriesThunk(userID));
  //   };

  const creatorIdSelector = useSelector((state) => state.creatorStory); //check home page, redux console
  const navigate = useNavigate();

  //get the userid
  const userID = user._id;

  //set the default character
  const defaultCharacter = {
    name: "narrator",
  };

  //set the defaultStory
  //this is sent to the backend to create a new story when clicked on
  const defaultStory = {
    title: "Untitled",
    events: [],
    characters: [],
    currentEvent: null,
    creatorId: userID,
  };

  console.log("what is the user id:", userID);

  useEffect(() => {
    const fetchUserCreatorStory = async () => {
      console.log(
        "Dispatching from fetching creator stories for individual story"
      );
      dispatch(fetchIndividualStoryByCreatorIdThunk(userID));
    };
    fetchUserCreatorStory();
  }, []);

  //navigate to Stories page when user has not played any stories
  const handleClickBrowse = (e) => {
    e.preventDefault();
    navigate(`/stories`); //redirects to the stories page
  };

  //handle the default story we create
  const handleCreateStory = async () => {
    //create the new character
    const newCharacter = await dispatch(addCharacterThunk(defaultCharacter));
    //console.log("Where si the new Character:", newCharacter);
    //create the default option
    const defaultOption = {
      name: "Default Option Name",
      text: "Default Option Text",
      next: null,
    };
    //set the default Event
    let defaultEvent = {
      name: "Default Name",
      text: "Default Text",
      characterId: newCharacter?._id,
      option1: defaultOption,
      option2: defaultOption,
      option3: defaultOption,
      storyId: null,
    };

    //dispatch an action to create new event
    const newEvent = await dispatch(addEventThunk(defaultEvent));

    //put the new character into the default story
    defaultStory.characters.push(newCharacter._id);

    //put the new event into the story
    defaultStory.events.push(newEvent._id);

    //put the current event by the dewfault event
    defaultStory.currentEvent = newEvent._id;

    //console.log("what is the character id:", newCharacter._id);
    //create the new story
    const newStory = await dispatch(addStoryThunk(defaultStory));
    defaultEvent.storyId = newStory._id;
    await dispatch(editEventThunk(newEvent._id, defaultEvent));

    //we push the new story id into the user storyids

    dispatch(updatedUserThunk(userID, newStory._id));

    //once we create the newstory, we will jump to the page to create the story
    navigate(`/createStory/${newStory._id}`);
  };

  console.log(creatorIdSelector, "the creator id selectorr");

  return (
    <div>
      <div className="particlebackground">
        <ParticleBackground />
      </div>
      <div className="background-container">
        <button
          onClick={handleCreateStory}
          className="btn-6"
          // style={{marginBottom:"20px", backgroundColor:"#b8c1ec", borderRadius:"25px", color:"#232946", }}
        >
          <strong>Create a New Story</strong>
        </button>

        <h2 className="stories-history" style={{ paddingTop: "3vh" }}>
          <strong>Play History</strong>
        </h2>

        <div className="playhistory-grid">
          {user.storyHistory?.length > 0 ? (
            user.storyHistory.map((singleStoryHistory, index) => {
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                {" "}
              </Grid>;
              return (
                <HistoryCard
                  singleStoryHistory={singleStoryHistory}
                  key={index}
                />
              );
            })
          ) : (
            <Fragment>
              <h1>
                <div className="error-text">
                  You haven't played any games yet. Check out some games to get
                  started.
                </div>
              </h1>
              <div className="line-break"> </div>
              <button className="btn" onClick={handleClickBrowse}>
                Browse Stories
              </button>
            </Fragment>
          )}
        </div>
        <div className="created-stories">
          <h2 style={{}}>
            {" "}
            <strong>Stories Created</strong>
          </h2>
        </div>
        <div className="storiesContainer">
          {creatorIdSelector.length > 0 ? (
            creatorIdSelector.map((creatorStoryList, index) => {
              return (
                <CreatorStoryCard
                  creatorIdSelector={creatorStoryList}
                  key={index}
                />
              );
            })
          ) : (
            <div className="error-text">
              <br />
              <br />
              <h1 className="error-text"> You have not created a story yet. </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHomepage;
