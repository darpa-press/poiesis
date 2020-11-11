const INITIAL_STATE = { lines: [], tokens: [] };

// should handle an updateLines action (this should kick off )
function analysisReducer(state = INITIAL_STATE, action) {
    let newState = { ...state };
    switch (action.type) {
        case "UPDATE_ANALYSIS":
            newState = { ...state };
            console.log(
                newState,
                action.token,
                action.lineIndex,
                newState.tokens[action.lineIndex],
                action.token === newState.tokens[action.lineIndex]
            );
            if (
                !newState.tokens[action.lineIndex] ||
                action.token === newState.tokens[action.lineIndex]
            ) {
                newState.lines[action.lineIndex] = action.analysis;
            } else {
                console.log("came in late, not updating");
            }
            return newState;
        case "FETCHING_ANALYSIS":
            console.log(
                "updating token in line",
                action.lineIndex,
                action.token
            );
            newState = { ...state };
            newState.tokens[action.lineIndex] = action.token;
            return newState;
        default:
            return state;
    }
}

export default analysisReducer;
