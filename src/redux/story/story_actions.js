import gameActionTypes from "./story_types";

//we use here to update the game title
export const updateGameTitle = (title) =>{
    return {
        type: gameActionTypes.UPDATE_GAME_TITLE,
        payload: title,
    }
}