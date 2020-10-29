const INITIAL_STATE = "";

function placeholderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_PLACEHOLDER": {
            const data = action.result;
            return data.Content.split("\n")[0];
        }
        default:
            return state;
    }
}

export default placeholderReducer;
