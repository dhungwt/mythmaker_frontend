import axios from "axios";
import storyActionTypes from "./story_types";


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


export const editStoryCharacterIdThunk = (storyId, characterId) => async (dispatch) => {
    try {
        console.log("EDIT STORY CHARACTER ID THUNK IS ACTIVE");
        //add the character id to the array of characterid in the story
        const response = await axios.patch(`http://localhost:8080/api/stories/${storyId}`);
      
        dispatch(editStory(response.data));
        console.log("EDIT STORY CHARACTER ID SUCCESSFULLY");
      } catch (error) {
        console.error(error);
      }
};