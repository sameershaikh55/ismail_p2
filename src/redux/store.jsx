import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);
const rootReducer = combineReducers({});
const store = createStore(rootReducer, middleware);
export default store;
