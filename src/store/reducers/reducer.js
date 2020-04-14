import { combineReducers } from "redux";
import projects from "./projects";
import sharedEditor from "./sharedEditor";
import userName from "./userName";
import currentProjectID from "./projectID";

const reducers = { projects, sharedEditor, currentProjectID, userName };

let reducer = combineReducers(reducers);

export default reducer;
