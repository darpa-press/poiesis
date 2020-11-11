import { createStore, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import ReduxThunk from "redux-thunk";

import rootReducer from "../reducers";

const createStoreWithMiddleware = applyMiddleware(save(), ReduxThunk)(
    createStore
);

const store = createStoreWithMiddleware(
    rootReducer,
    load(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
