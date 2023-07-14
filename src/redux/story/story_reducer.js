import storyActionTypes from "./story_types";
import allStoryTypes from './story_actions';


export const INITIAL_STORY_STATE = {
    singleStory: null,
};

export const Initial_All_Story = {
    allStory: [],
}

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

// ALL STORY
const allStoryReducer = (state = Initial_All_Story, {type, payload}) => {
    console.log("ALL STORY IS HANDLING FOR ALL STUDENTS")
    switch(type){
        // fetchallstories is something new btw
        case storyActionTypes.FETCH_ALL_STORIES:
            return {...state, allStory: payload};
    
    default:
        return state;
    }   
}

export { storyReducer, allStoryReducer };
