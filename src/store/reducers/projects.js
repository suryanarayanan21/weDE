import actionTypes from "../actions/actionTypes";

const initialProjects = [
  {
    projectName: "Project name very very long",
    collaborators: ["collaborators", "collaborators2", "collaborators 3"],
    projectID: "projectID",
    language: "javascript",
    accepted: true,
  },
  {
    projectName: "Project name 2",
    collaborators: ["collaborators"],
    projectID: "projectID2",
    language: "python",
    accepted: false,
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
    case actionTypes.ACCEPT_PROJECT:
      return state.map((value) => {
        if (value.projectID === payload.projectID) {
          return { ...value, accepted: true };
        } else {
          return value;
        }
      });
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
