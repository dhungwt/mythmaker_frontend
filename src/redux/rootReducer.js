import { combineReducers } from "redux";
import userReducer from "./user/user_reducer";
import characterReducer from "./character/character_reducer";
import eventReducer from "./event/event_reducer";

const rootReducer = combineReducers({
  user: userReducer,
  character: characterReducer,
  event: eventReducer,
});

export default rootReducer;