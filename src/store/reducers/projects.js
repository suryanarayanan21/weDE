import actionTypes from "../actions/actionTypes";

const initialProjects = {};

let projects = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialProjects;
  if (type === actionTypes.ADD_PROJECT) {
    return [...state, payload];
  } else return state;
};

export default projects;
