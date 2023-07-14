import eventActionTypes from "./event_types";

export const INITIAL_EVENT_STATE ={
    events: [],
    singleEvent: null,
}

function eventReducer(state = INITIAL_EVENT_STATE, action){
    switch(action.type) {
        //add the event to the current event list
        case eventActionTypes.ADD_EVENT:
            return {...state, events:[...state.events, action.payload]};
        //remove the event by the id 
        case eventActionTypes.REMOVE_EVENT:
            return {...state, events: state.events.filter(event => event.id !== action.payload)};
       // edit the current event
        case eventActionTypes.EDIT_EVENT:
            return {
                ...state, events: state.events.map(event =>
                    event.id === action.payload.id ? action.payload : event
                ),
                singleEvent: action.payload,
            };
        case eventActionTypes.FETCH_ALL_EVENTS_BY_STORY:
            return { ...state, events:action.payload};
        case eventActionTypes.FETCH_SINGLE_EVENT:
            return { ...state, singleEvent:action.payload};
        default:
            return state;

    }
}

export default eventReducer;