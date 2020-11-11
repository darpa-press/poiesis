const INITIAL_STATE = {
    loadingPrefill: false
};

function loadingReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "FETCHING_PREFILL":
            return { ...state, loadingPrefill: !action.isPlaceholder };
        case "UPDATE_PREFILL":
            return { ...state, loadingPrefill: false };
        default:
            return state;
    }
}

export default loadingReducer;
