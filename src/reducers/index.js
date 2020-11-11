import { combineReducers } from "redux";

import linesReducer from "./linesReducer";
import optionsReducer from "./optionsReducer";
import analysisReducer from "./analysisReducer";
import placeholderReducer from "./placeholderReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
    lines: linesReducer,
    options: optionsReducer,
    analysis: analysisReducer,
    placeholder: placeholderReducer,
    loading: loadingReducer
});

export default rootReducer;
