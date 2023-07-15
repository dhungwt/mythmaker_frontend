import characterActionTypes from "./character_type";
import axios from "axios";

//add character 
const addCharacter = (newcharacter) => ({

    type: characterActionTypes.ADD_CHARACTER,
    payload: newcharacter,

});

//deleteCharacter: pass by the character id
const deleteCharacter = (characterId) => ({
    type: characterActionTypes.REMOVE_CHARACTER,
    payload: characterId,
});

//edit character info passed by the current character
const editCharacter = (character) => ({
    type: characterActionTypes.EDIT_CHARACTER,
    payload: character,
});

//fetch all charcters
const fetchAllCharacters = (payload) =>({
    type: characterActionTypes.FETCH_ALL_CHARACTER,
    payload:payload,
});

//fetch single character
const fetchSingleCharacter =(singlecharacter) =>({
    type: characterActionTypes.FETCH_SINGLE_CHARACTER,
    payload: singlecharacter,
})


//add the new character
export const addCharacterThunk = (newCharacter) => async (dispatch) => {
    try {
        console.log("ADD CHARACTER THUNK IS RUN");
        const response = await axios.post(process.env.REACT_APP_CHARACTER_KEY, newCharacter);
        dispatch(addCharacter(response.data));
        console.log("ADD CHARACTER SUCCESSFULLY");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


//delete the character by the character id
//api call address should bve wrong(07/12)
export const deleteCharacterThunk = (characterId) => async (dispatch) => {
    try {
        console.log("DELETE CHARACTER THUNK")

        await axios.delete(`${process.env.REACT_APP_CHARACTER_KEY}${characterId}`);
        dispatch(deleteCharacter(characterId));
        console.log("DELETE CHARACTER SUCCESSFULLY")
    } catch (error) {
        console.error(error);
    }
};

//edit the current character, dispatch the action and call the edit function in the backend
//api call address could be wrong
export const editCharacterThunk = (updatedCharacter) => async (dispatch) => {
    try {
        console.log("EDIT CHARACTER THUNK IS ACTIVE")
        const response = await axios.patch(`${process.env.REACT_APP_CHARACTER_KEY}${updatedCharacter._id}`, updatedCharacter);
        dispatch(editCharacter(response.data));
        console.log("EDIT SUCCESSFULLY");
    } catch (error) {
        console.error(error);
    }
};

//fetch all the characters
//api call addre need to modify when the backend is ready
export const fetchAllCharactersThunk = (storyId) =>{
    return async (dispatch) => {
        try {
            console.log("FETCH ALL CHARACTERS THUNK IS RUNNING");
            //get the date from the backend
            const response =await axios.get(`api call address/${storyId}`);
            //send the data as payload
            dispatch(fetchAllCharacters(response.data));
            console.log("FETCH ALL CHARCTERS IS DONE");
        } catch (error) {
            console.error(error);
        }
    };
};


//fetch single character by the character by the id 
export const fetchSingleCharacterThunk = (characterId) =>{
    return async (dispatch) => {
        try {
            console.log("FETCH SINGLE CHARACTER THUNK IS RUNNING ");
            //get the single character from the backend
            const response = await axios.get(`${process.env.REACT_APP_CHARACTER_KEY}${characterId}`);
            dispatch(fetchSingleCharacter(response.data));
            console.log("FETCH SINGLE CHARACTER IS DONE");
        } catch (error) {
            console.error(error);
        }
    }
};


