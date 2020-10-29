const INITIAL_STATE = [];

// should handle an updateLines action (this should kick off )
function analysisReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_ANALYSIS":
            let newState = [...state];
            newState[action.lineIndex] = action.analysis;
            return newState;
        default:
            return state;
    }
}

export default analysisReducer;
