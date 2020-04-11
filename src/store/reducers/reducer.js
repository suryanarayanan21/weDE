import { combineReducers } from "redux";
import projects from "./projects";
import code from "./code";

const reducers = { projects, code };

let reducer = combineReducers(reducers);

export default reducer;
