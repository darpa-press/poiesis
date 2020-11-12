const INITIAL_STATE = { lines: [], tokens: [], statsToken: "", stats: {} };

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
        case "FETCHING_STATS":
            newState = { ...state };
            newState.statsToken = action.token;
            return newState;
        case "UPDATE_STATS":
            newState = { ...state };
            if (action.token === newState.statsToken) {
                newState.stats = action.stats;
            }
            return newState;
        default:
            return state;
    }
}

export default analysisReducer;
