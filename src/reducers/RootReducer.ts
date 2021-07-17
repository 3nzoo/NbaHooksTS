import { combineReducers } from "redux";
import playerReducer from "./PlayerReducer";

const RootReducer = combineReducers({
    player:playerReducer
});

export default RootReducer

