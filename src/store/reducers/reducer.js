import { combineReducers } from "redux";
import projects from "./projects";
import sharedEditor from "./sharedEditor";
import currentProjectID from "./projectID";

const reducers = { projects, sharedEditor, currentProjectID };

let reducer = combineReducers(reducers);

export default reducer;
