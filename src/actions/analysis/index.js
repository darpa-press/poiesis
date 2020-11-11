import axios from "axios";

const FETCHING_ANALYSIS = "FETCHING_ANALYSIS";
const UPDATE_ANALYSIS = "UPDATE_ANALYSIS";
const NO_ANALYSIS_CHANGE = "NO_ANALYSIS_CHANGE";

export const compareLines = (oldLines, oldAnalysis, newLines) => {
    const emptyLine = {
        noOfSyllables: 0,
        stresses: [],
        syllables: [],
    };

    const newActions = newLines
        .map((line, index) => {
            if (oldLines[index] !== line) {
                // line has changed
                if (line.trim() === "") {
                    // line is empty, send empty analysis
                    return updateAnalysis(index, emptyLine);
                } else if (oldLines[index - 1] === line) {
                    // send previous analysis
                    return updateAnalysis(index, oldAnalysis[index - 1]);
                } else if (oldLines[index + 1] === line) {
                    // send new analysis
                    return updateAnalysis(index, oldAnalysis[index + 1]);
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

export const fetchingAnalysis = (lineIndex, lineText) => ({
    type: FETCHING_ANALYSIS,
    lineIndex: lineIndex,
    lineText: lineText,
});

export const fetchAnalysis = (lineIndex, lineText) => (dispatch) => {
    dispatch(fetchingAnalysis(lineIndex, lineText));
    return axios.post("/api/analyse", { lines: lineText }).then((response) => {
        dispatch({
            type: UPDATE_ANALYSIS,
            lineIndex: lineIndex,
            analysis: response.data.lines[0],
        });
    });
};

export const updateAnalysis = (lineIndex, analysis) => ({
    type: UPDATE_ANALYSIS,
    lineIndex,
    analysis,
});
