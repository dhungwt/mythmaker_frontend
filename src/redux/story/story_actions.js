import axios from "axios";
import storyActionTypes from "./story_types";


//fetch story by id to get title action
// FETCH_INDIVIDUAL_STORY_BY_CREATORID
const fetchIndividualStoryByCreatorId = (title) => {
  console.log("fetchIndividualStoryByCreatorId action")

  return {
    type: storyActionTypes.FETCH_INDIVIDUAL_STORY_BY_CREATORID,
    payload: title,
  }
}

export const fetchIndividualStoryByCreatorIdThunk = (userId) =>{
  console.log('fetchIndividualStoryByCreatorIdThunk firing...');

  return async (dispatch) => {
    try{
      const response = await axios.get(`http://localhost:8080/api/stories/getCreatorStoryByTitle/${userId}`)
      // dispatch(fetchIndividualStoryByCreatorId(response.data.title));
      console.log(response.data, "i am response dataa")
      dispatch(fetchIndividualStoryByCreatorId(response.data))
    } catch (error){
      console.log("error has occured with fetchIndividualStoryByCreatorIdThunk", error)
    }
  }
}

//fetch single story action
const fetchIndividualStory = (payload) => {
  console.log("fetchIndividualStory action")

  return {
    type: storyActionTypes.FETCH_INDIVIDUAL_STORY,
    payload: payload,
  }
}

// fetch single story Thunk, receive id from the dispatch in IndividualStoryPages,
// fires off the action and get single story data
export const  fetchIndividualStoryThunk = (id) => {
  console.log("fetchIndividualStoryThunk")

  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/stories/${id}`);
      dispatch(fetchIndividualStory(response.data));
    } catch (error) {
      console.log("fetchIndividualStoryThunk error : ", error);
    }
  }
}

//edit story action, passed the updated story
const editStory = (story) => ({
    type: storyActionTypes.EDIT_STORY,
    payload: story,
});

export const editStoryThunk = (updatedStory) => async (dispatch) =>{
    try {
        console.log("EDIT STORY THUNK IS RUNNING");
        const response = await axios.patch(`http://localhost:8080/api/stories/${updatedStory._id}`,updatedStory);
        dispatch(editStory(response.data));
        console.log("EDIT STORY IS COMPLETED");
    } catch (error) {
        console.log(error);
    }
}


export const editStoryCharacterIdThunk = (storyId, characterId) => async (dispatch) => {
    try {
        console.log("EDIT STORY CHARACTER ID THUNK IS ACTIVE");
        //add the character id to the array of characterid in the story
        const response = await axios.patch(`http://localhost:8080/api/stories/${storyId}/${characterId}`);
      
        dispatch(editStory(response.data));
        
        console.log("EDIT STORY CHARACTER ID SUCCESSFULLY");
      } catch (error) {
        console.error(error);
      }
};

// ALL STORIES
export const fetchAllStories = (payload) => {
  console.log("FETCH ALL STORIES")
  return{
    type: storyActionTypes.FETCH_ALL_STORIES,
    payload: payload,
  };
};

export const fetchAllStoriesThunk = () => {
  return async (dispatch) => {               //wrong link for now
    try{
    const response = await axios.get(`http://localhost:8080/api/stories/`)
    console.log('FETCHALLSTORIES THUNK COMPLETE')
    dispatch(fetchAllStories(response.data));
    } catch (error) {
      console.log(error);
    }
    
  }
}

//add story action
const addStory =(story) =>({
    
    type: storyActionTypes.ADD_STORY,
    payload:story,
});

export const addStoryThunk = (story) => async (dispatch) => {
    try {
        console.log("ADD STORY THUNK IS RUNNING");
        const response = await axios.post(process.env.REACT_APP_STORY_KEY, story);
 
        dispatch(addStory(response.data));
        console.log("ADD STORY IS COMPLETED");
        return response.data;
    }catch(error){
        console.log(error);

    }
};

//delete story action
const deleteStory = (storyId) =>({
    type: storyActionTypes.DELETE_STORY,
    payload: storyId,
});

export const deleteStoryThunk = (storyId) => async(dispatch) =>{
    try {
        console.log("Delete STORY THUNK IS RUNNING");
        await axios.delete(`http://localhost:8080/api/stories/${storyId}`);
        dispatch(deleteStory(storyId));
        console.log("DELETE STORY IS COMPLETED");
    } catch (error) {
        console.log(error);
    }

};