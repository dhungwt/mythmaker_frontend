import eventActionTypes from "./event_types";
import axios from "axios";

//add event
const addEvent = (newevent) => ({
    type: eventActionTypes.ADD_EVENT,
    payload: newevent,
});

//add the new event thunk
export const addEventThunk = (newEvent) => async (dispatch) =>{
    try {
        console.log("ADD EVENT THUNK IS RUN");
        const response = await axios.post(process.env.REACT_APP_EVENT_KEY,newEvent);
        dispatch(addEvent(response.data));
        console.log("ADD EVENT SUCCESSFULLY");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

//delete event, passed by the event id
const deleteEvent =(eventId)=>({
    type: eventActionTypes.REMOVE_EVENT,
    payload: eventId,
});

//delete the event by the event id
//api call address should bve wrong(07/12)
export const deleteEventThunk = (eventId) => async (dispatch) => {
    try {
        console.log("DELETE EVENT THUNK")

        await axios.delete(`${process.env.REACT_APP_EVENT_KEY}${eventId}`);
        dispatch(deleteEvent(eventId));
        console.log("DELETE EVENT SUCCESSFULLY")
    } catch (error) {
        console.error(error);
    }
};


//edit event info passed by the current event
const editEvent = (event) => ({
    type: eventActionTypes.EDIT_EVENT,
    payload: event,
});

//edit the current event, dispatch the action and call the edit function in the backend
//api call address could be wrong
export const editEventThunk = (updatedEventId, updatedEvent) => async (dispatch) => {
    try {
        console.log("EDIT EVENT THUNK IS ACTIVE")
        const response = await axios.patch(`${process.env.REACT_APP_EVENT_KEY}${updatedEventId}`, updatedEvent);
        dispatch(editEvent(response.data));
        console.log("EDIT EVENT SUCCESSFULLY");
    } catch (error) {
        console.error(error);
    }
};

//fetch all events based on the story id
const fetchAllEventsByStory = (payload) => ({
    type: eventActionTypes.FETCH_ALL_EVENTS_BY_STORY,
    payload:payload,
});

//fetch all the events based on the storyid
//api call addre need to modify when the backend is ready
export const fetchAllEventsByStoryThunk = (storyId) =>{
    return async (dispatch) => {
        try {
            //console.log("FETCH ALL EVENTS THUNK IS RUNNING");
            //get the date from the backend
            const response =await axios.get(`http://localhost:8080/api/events/${storyId}`);
            //send the data as payload
            //console.log("Hey I am the bug you are looking for",response.data);
            dispatch(fetchAllEventsByStory(response.data));
            //console.log("FETCH ALL EVENTS BY STORYID IS DONE");
        } catch (error) {
            console.error(error);
        }
    };
};

//fetch single event based on the event id
const fetchSingleEvent = (singleEvent) =>({
    type: eventActionTypes.FETCH_SINGLE_EVENT,
    payload:singleEvent,
});

//fetch single Event by the Event by the id 
export const fetchSingleEventThunk = (storyId, eventId) =>{
    return async (dispatch) => {
        try {
            console.log("FETCH SINGLE EVENT THUNK IS RUNNING ");
            //get the single Event from the backend
            const response = await axios.get(`http://localhost:8080/api/events/${storyId}/${eventId}`);
            dispatch(fetchSingleEvent(response.data));
            console.log("FETCH SINGLE Event IS DONE");
        } catch (error) {
            console.error(error);
        }
    }
};

