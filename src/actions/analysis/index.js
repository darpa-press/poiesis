import axios from "axios";

const FETCHING_ANALYSIS = "FETCHING_ANALYSIS";
const UPDATE_ANALYSIS = "UPDATE_ANALYSIS";
const NO_ANALYSIS_CHANGE = "NO_ANALYSIS_CHANGE";

export const compareLines = (oldLines, oldAnalysis, newLines) => {
    const emptyLine = {
        noOfSyllables: 0,
        words: [],
    };

    const newActions = newLines
        .map((line, index) => {
            if (oldLines[index] !== line) {
                // line has changed
                if (line.trim() === "") {
                    // line is empty, send empty analysis
                    console.log("empty", index, emptyLine);
                    return updateAnalysis(index, emptyLine, false, true);
                } else if (oldLines[index - 1] === line) {
                    // send previous analysis
                    return updateAnalysis(
                        index,
                        oldAnalysis[index - 1],
                        false,
                        true
                    );
                } else if (oldLines[index + 1] === line) {
                    // send new analysis
                    return updateAnalysis(
                        index,
                        oldAnalysis[index + 1],
                        false,
                        true
                    );
                } else {
                    // doesn't match either, do a new analysis
                    return fetchAnalysis(index, line);
                }
            } else {
                // line hasn't changed, skip it.
                return null;
            }
        })
        .filter((a) => a !== null);

    if (newActions.length > 0) {
        return (dispatch) =>
            newActions.filter((a) => a !== null).map((a) => dispatch(a));
    } else {
        return { type: NO_ANALYSIS_CHANGE };
    }
};

export const fetchingAnalysis = (lineIndex, lineText, token) => ({
    type: FETCHING_ANALYSIS,
    lineIndex: lineIndex,
    lineText: lineText,
    token: token,
});

export const fetchAnalysis = (lineIndex, lineText) => (dispatch) => {
    const token = Math.random().toString(36).substr(2);
    dispatch(fetchingAnalysis(lineIndex, lineText, token));
    return axios
        .post("https://darpa-poiesis-analyse.herokuapp.com/", {
            lines: lineText,
        })
        .then((response) => {
            dispatch({
                type: UPDATE_ANALYSIS,
                lineIndex: lineIndex,
                analysis: response.data.lines[0],
                token: token,
                isMoved: false,
            });
        });
};

// see above not used for axios for some reason (could refactor)
export const updateAnalysis = (lineIndex, analysis, token, isMoved) => ({
    type: UPDATE_ANALYSIS,
    lineIndex,
    analysis,
    token,
    isMoved,
});
