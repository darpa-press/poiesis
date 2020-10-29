import axios from "axios";

const UPDATE_LINES = "UPDATE_LINES";
const UPDATE_PLACEHOLDER = "UPDATE_PLACEHOLDER";
const FETCHING_PREFILL = "FETCHING_PREFILL";
const UPDATE_PREFILL = "UPDATE_PREFILL";
const DENIED_PREFILL = "DENIED_PREFILL";

// TODO: update single line? (line, index)
export const updateLines = lines => ({
    type: UPDATE_LINES,
    lines
});

export const updatePlaceholder = result => ({
    TYPE: UPDATE_PLACEHOLDER,
    result
});

export const fetchingPrefill = isPlaceholder => ({
    type: FETCHING_PREFILL,
    isPlaceholder: isPlaceholder
});

export const fetchPrefill = isPlaceholder => dispatch => {
    if (
        isPlaceholder ||
        window.confirm("This will clear the current poem—is that OK?")
    ) {
        dispatch(fetchingPrefill(isPlaceholder));
        return axios.get("/api/prefill").then(response => {
            dispatch({
                type: isPlaceholder ? UPDATE_PLACEHOLDER : UPDATE_PREFILL,
                result: response.data
            });
        });
    } else {
        dispatch({
            type: DENIED_PREFILL
        });
    }
};

export const updatePrefill = result => ({
    TYPE: UPDATE_PREFILL,
    result
});
