import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";

const rootReducer = combineReducers({ lists: BoardReducer });

export default rootReducer;
