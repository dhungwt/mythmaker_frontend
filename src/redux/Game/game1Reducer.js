const initialState = {
    cutScene: 'Game begins', // This can be the first cutscene, displayed when the game first begins
    optionScreen: ['start apologizing', 'scold him for being in the way'] // The first options for the gamer
  };
  
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CUTSCREEN': 
        return { 
          ...state,
          cutScene: action.payload, // Update the cutscene with the provided payload, which basically means switching from the initial scene to the next scene
          options: [], // Reset the options to an empty array
        };
      case 'SET_CUTSCENE':
        if (state.cutScene === 'Game begins') {
          if (action.payload === 'Start apologizing') { // The wrong choice to make
            return {
              ...state,
              cutScene: 'Todoroki gets super shy and fires his powers at you. You die a burning death.',
              options: []
            };
          } else if (action.payload === 'You scold him for being in the way') {
            return {
              ...state,
              cutScene: 'You scold Todoroki for being in the way. He noticed you! One step closer to marriage',
              options: []
            };
          }
        } else if (state.cutScene === 'Apologize for being rude') {
          if (action.payload === 'walk away without saying anything') {
            return {
              ...state,
              cutScene: 'Todoroki gets mad and blows up along with the entire school, killing you in the explosion as well',
              options: []
            };
          }
        }
        return state; // Return the updated state based on the chosen option and cutscene
      default:
        return state; // Return the current state if the action type is not recognized
    }
  };
  
  export default gameReducer;
  