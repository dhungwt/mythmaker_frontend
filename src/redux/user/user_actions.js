import axios from "axios";
import userActionTypes from "./user_type";
import { defaultUser } from "./user_reducer";

// UPDATE_ENTIRE_USER
const updateEntireUser = (payload) =>{
    return{
        type: userActionTypes.UPDATE_ENTIRE_USER,
        payload: payload,
    }
}

// return async (dispatch) => {    };
export const updateEntireUserThunk =  (userID, data) => {
    return async (dispatch) => {  
        console.log("FIRING UPDATE ENTIRE USER THUNK");
        try{
            const response = await axios.patch(`${process.env.REACT_APP_USER_KEY}${userID}`, data)
            dispatch(updateEntireUser(response.data))
            console.log(response, "updateEntireUserThunk successful")
        } catch (error) {
            console.log(error, "error occurerd on updateEntireUserThunk")
      };
   
    }

}

//payload is the user
const getUser = (user) => (
    {
        type: userActionTypes.GET_USER,
        user
    }
);

//get all the stories a user has created
const fetchUserStories = (storyIds) => {
    return {
        type: userActionTypes.FETCH_USER_STORIES,
        payload: storyIds
    }
};

//remove the user
const removeUser = () => {
    return {
        type: userActionTypes.REMOVE_USER
    }
};

//fetch the current authenticated user from the server
//07/11: api address is temp
export const me = () => async (dispatch) => {
    try {
        console.log("FETCHING GET USER")
        const res = await axios.get(`${process.env.REACT_APP_USER_KEY}auth/me`);
        dispatch(getUser(res.data || defaultUser));
        console.log("GET USER IS DONE")
    } catch (error) {
        console.error(error);
    }

};

export const fetchUserStoriesThunk = (userID) => {
    return async (dispatch) => {
        try {
            //change this url to user stories api once it is set up
            const response = await axios.get(`${process.env.REACT_APP_USER_KEY}${userID}/`);
            console.log("data", response.data);
            dispatch(fetchUserStories(response.data.storyIds));
            // no route to access all the stories of a user yet  
        } catch (error) {
            console.error(error);
        }
    };
};

//handle user authentication
export const auth = (email, password, method) => async (dispatch) => {
    let res;
    try {
        res = await axios.post(`${process.env.REACT_APP_USER_KEY}auth/${method}`, {
            email,
            password,
        });

    } catch (authError) {
        return dispatch(getUser({ error: authError }));

    }

    try {
        dispatch(getUser(res.data));
    } catch (dispatchOrHistoryErr) {
        console.error(dispatchOrHistoryErr);
    }
};

export const oAuth = (_id, password, googleId, storyHistory, storyIds) => async (dispatch) => {

    try {
        dispatch(getUser({_id, password, googleId, storyHistory, storyIds}));
    } catch (dispatchOrHistoryErr) {
        console.error(dispatchOrHistoryErr);
    }
};

export const logout = () => async (dispatch) => {
    try {
        console.log("hey, are you here!")
        // const response = await axios.post(
        //     "http://localhost:8080/api/logout",
        //     {},
        //     { withCredentials: true }
        //   );
        await axios.post(`${process.env.REACT_APP_USER_KEY}auth/logout`,{}, {headers: {
            "Access-Control-Allow-Origin": "https://mythmaker.netlify.app/"
    }, withCredentials:true });
        console.log('Before dispatch removeUser');
        dispatch(removeUser());
        console.log('After dispatch removeUser');
    } catch (error) {
        console.error(error);
    }
};

export const updatedUserThunk = (userId, storyId) => {
    return async (dispatch) => {
        try {
            //editing story id
            const response = await axios.patch(`${process.env.REACT_APP_USER_KEY}${userId}`, { storyId });
            //dispatch the data
            dispatch({
                type: userActionTypes.UPDATE_USER,
                user: response.data
            });

            //dispatch the update user story ids action
            dispatch({
                type: userActionTypes.UPDATE_USER_STORY_IDS,
                payload: storyId
            });
        } catch (error) {
            console.error(error);
        }
    }
}

//function use to update user's story ids
export const updateUserStoryIds = (newStoryId) => ({
    type: userActionTypes.UPDATE_USER_STORY_IDS,
    payload: newStoryId,

});

