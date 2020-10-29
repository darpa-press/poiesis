const INITIAL_STATE = [""];

function lineReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_LINES":
            return action.lines;
        case "UPDATE_FROM_FILE":
            return action.lines;
        case "FETCHING_PREFILL":
            return state;
        case "UPDATE_PREFILL": {
            const data = action.result;
            const prefillFormatted = [
                ...data.Content.split("\n"),
                "",
                "",
                ...data.Author.split("\n"),
                ...data.Title.split("\n")
            ];
            return prefillFormatted;
        }
        default:
            return state;
    }
}

export default lineReducer;
