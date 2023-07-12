import characterActionTypes from "./character_type";

export const INITIAL_CHARACTER_STATE = {
    characters: []
}

function characterReducer(state = INITIAL_CHARACTER_STATE, action) {
    switch (action.type) {
        //add the character to the current character
        case characterActionTypes.ADD_CHARACTER:
            return { ...state, characters: [...state.characters, action.payload] };
        //remove the character by the id 
        case characterActionTypes.REMOVE_CHARACTER:
            return { ...state, characters: state.characters.filter(character => character.id !== action.payload) };
        case characterActionTypes.EDIT_CHARACTER:
            return {
                ...state, characters: state.characters.map(character =>
                    character.id === action.payload.id ? action.payload : character
                )
            };

        default:
            break;
    }
}

export default characterReducer;