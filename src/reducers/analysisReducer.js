const INITIAL_STATE = { lines: [], tokens: [] };

// should handle an updateLines action (this should kick off )
function analysisReducer(state = INITIAL_STATE, action) {
    let newState = { ...state };
    switch (action.type) {
        case "UPDATE_ANALYSIS":
            newState = { ...state };

            if (
                action.isMoved ||
                !newState.tokens[action.lineIndex] ||
                action.token === newState.tokens[action.lineIndex]
            ) {
                newState.lines[action.lineIndex] = action.analysis;
            }
            return newState;
        case "FETCHING_ANALYSIS":
            newState = { ...state };
            newState.tokens[action.lineIndex] = action.token;
            return newState;
        default:
            return state;
    }
}

export default analysisReducer;
