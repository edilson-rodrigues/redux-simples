import {combineReducers} from "redux";
import numberReducer from "./numbers_reducers";

export default combineReducers({
    number: numberReducer,
});
