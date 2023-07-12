import { combineReducers } from "redux";
import userReducer from "./user/user_reducer";
import characterReducer from "./character/character_reducer";

const rootReducer = combineReducers({
  user: userReducer,
  character: characterReducer,
});

export default rootReducer;