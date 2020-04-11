import { combineReducers } from "redux";
import projects from "./projects";
import sharedEditor from "./sharedEditor";

const reducers = { projects, sharedEditor };

let reducer = combineReducers(reducers);

export default reducer;
