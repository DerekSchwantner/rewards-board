import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";

// export default combineReducers({
//   board: BoardReducer,
// });

const rootReducer = combineReducers({ lists: BoardReducer });

export default rootReducer;
