import { combineReducers } from "redux";
import { battleReducer } from "./battle.reducer";
import { popularReducer } from "./popular.reducer";

export default combineReducers({
	userName: battleReducer,
	popular: popularReducer,
	battle: battleReducer,
});
