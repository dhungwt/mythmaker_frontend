import characterActionTypes from "./character_type";

export const INITIAL_CHARACTER_STATE = {
    characters: [],
    singleCharacter: null,
}

function characterReducer(state = INITIAL_CHARACTER_STATE, action) {
    switch (action.type) {
        //add the character to the current character
        case characterActionTypes.ADD_CHARACTER:
            return { ...state, characters: [...state.characters, action.payload] };
        //remove the character by the id 
        case characterActionTypes.REMOVE_CHARACTER:
            return { ...state, characters: state.characters.filter(character => character._id !== action.payload) };
        case characterActionTypes.EDIT_CHARACTER:
            return {
                ...state, characters: state.characters.map(character =>
                    character._id === action.payload._id ? action.payload : character
                ),
                singleCharacter: action.payload,
            };
        case characterActionTypes.FETCH_ALL_CHARACTER:
            return { ...state, characters:action.payload};
        case characterActionTypes.FETCH_SINGLE_CHARACTER:
            return { ...state, singleCharacter:action.payload};
        default:
            return state;
    }
}

export default characterReducer;