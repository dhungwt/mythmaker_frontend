import storyActionTypes from "./story_types";

export const INITIAL_STORY_STATE = {
    singleStory: null,

};

// allStory and single story need to be in two different functions
const storyReducer = (state = INITIAL_STORY_STATE, action) => {
    switch (action.type) {
            // receive action to fetch single story
        case storyActionTypes.FETCH_INDIVIDUAL_STORY:
            return action.payload;
        
            //not tested yet
        case storyActionTypes.EDIT_STORY:
            return {
                ...state,
                singleStory: action.payload,
            };

        default:
            return state;
    }
};

export default storyReducer;