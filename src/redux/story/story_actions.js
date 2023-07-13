import storyActionTypes from "./story_types";

//edit story action, passed the updated story
const editStory = (story) => ({
    type: storyActionTypes.EDIT_STORY,
    payload: story,
});


export const editStoryCharacterIdThunk = (storyId, characterId) => async (dispatch) => {
    try {
        console.log("EDIT STORY CHARACTER ID THUNK IS ACTIVE");
        //add the character id to the array of characterid in the story
        const response = await axios.patch(`/api/stories/${storyId}/characters/${characterId}`);
        dispatch(editStory(response.data));
        console.log("EDIT STORY CHARACTER ID SUCCESSFULLY");
      } catch (error) {
        console.error(error);
      }
};