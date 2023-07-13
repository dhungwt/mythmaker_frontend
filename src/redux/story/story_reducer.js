import storyActionTypes from "./story_types";

export const INITIAL_STORY_STATE = {
    singleStory: null,

};

const storyReducer = (state = INITIAL_STORY_STATE, action) => {
    switch (action.type) {
        case storyActionTypes.EDIT_STORY:
            return {
                ...state,
                story: action.payload,
            };

        default:
            return state;
    }
};

export default storyReducer;