import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers";

const composedEnhancer = applyMiddleware(thunkMiddleware);

export default createStore(rootReducer, composedEnhancer);