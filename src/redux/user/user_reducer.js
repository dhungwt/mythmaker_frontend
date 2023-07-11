import userActionTypes from "./user_type";

export const defaultUser = {};

export default function userReducer(state = defaultUser, action){
    switch (action.type) {
        case userActionTypes.GET_USER:
          return action.user;
        case userActionTypes.REMOVE_USER:
          return defaultUser;
        default:
          return state;
      }
};