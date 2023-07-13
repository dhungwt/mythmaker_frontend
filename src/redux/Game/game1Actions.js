//this action creator will set the current cutscene in the game state
export const setCutScene = (cutScene) => {
    return{
        //'SET_OUTCOME' is the action type, which indicates we are setting the cutscene itself
        type: 'SET_CUTSCENE', //did this way instead of making a new actiontypes action file
        //payload is the data associated with the action, and in this type of case, it will be the outcome itself,
        payload: cutScene
    }
}

//Action creator that will handle the users choice of an option during the cutscenes
export const option = (optionScreen) => {
    return {
        //since SET_OPTIONAL is an action type, it indicates whether the user is choosing an option
        type:'SET_OPTION',
        //since payload is the data associated with the action, here, this is the chosen option
        payload: optionScreen
    }
} 
//basically, setCutScene is the cut scene and the optionScreen is where the user can select an option on the screen.