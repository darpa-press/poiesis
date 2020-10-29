const INITIAL_STATE = {
    font: "Williams Caslon",
    template: false,
    showAnalysis: true,
    showSidebar: false,
    isProseMode: false
};

function optionsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_OPTION": {
            let newState = { ...state };
            newState[action.option] = action.setting;
            return newState;
        }
        case "TOGGLE_OPTION": {
            let newState = { ...state };
            newState[action.option] = !state[action.option];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default optionsReducer;
