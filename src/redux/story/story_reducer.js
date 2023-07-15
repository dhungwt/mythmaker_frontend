import storyActionTypes from "./story_types";


export const INITIAL_STORY_STATE = {
    singleStory: null,
};

export const Initial_All_Story = {
    allStory: [], // Array for holding all stories
};

// allStory and single story need to be in two different functions
const storyReducer = (state = INITIAL_STORY_STATE, action) => {
    switch (action.type) {
        // receive action to fetch single story
        case storyActionTypes.FETCH_INDIVIDUAL_STORY:
            return { ...state, singleStory: action.payload };

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

// ALL STORY
const allStoryReducer = (state = Initial_All_Story, { type, payload }) => {

    switch (type) {
        // fetchallstories is something new btw
        case storyActionTypes.FETCH_ALL_STORIES:
            return { ...state, allStory: payload };
        case storyActionTypes.ADD_STORY:
            return {
                ...state,
                allStory: [...state.allStory, payload],
            };
        case storyActionTypes.DELETE_STORY:
            return {
                ...state,
                allStory: state.allStory.filter(story => story._id !== payload)
            };
        default:
            return state;
    }
}

export { storyReducer, allStoryReducer };
