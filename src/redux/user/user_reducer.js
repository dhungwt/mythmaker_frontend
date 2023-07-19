import userActionTypes from "./user_type";

//testing with only storyIds to test fetchUserStories
export const defaultUser = {
  "storyIds": []
};

export default function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case userActionTypes.GET_USER:
      return { ...state, ...action.user };
    case userActionTypes.REMOVE_USER:
      return defaultUser;
    case userActionTypes.FETCH_USER_STORIES:
      return { ...state, storyIds: action.payload };
    case userActionTypes.UPDATE_USER:
      return { ...state, ...action.user };
    case userActionTypes.UPDATE_USER_STORY_IDS:
      return {
        ...state,
        storyIds: [...state.storyIds, action.payload]
      }
    default:
      return state;
  }
};