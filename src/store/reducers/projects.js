import actionTypes from "../actions/actionTypes";

const initialProjects = [
  {
    projectName: "Project name",
    collaborators: ["collaborators"],
    projectID: "projectID",
  },
];

let projects = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialProjects;

  switch (type) {
    case actionTypes.SET_PROJECTS:
      return payload;
    case actionTypes.ADD_PROJECT:
      return [...state, payload];
    case actionTypes.REMOVE_PROJECT:
      return state.filter((value) => {
        if (value.projectID === payload.projectID) return false;
        else return true;
      });
    default:
      return state;
  }
};

export default projects;
