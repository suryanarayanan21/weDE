import actionTypes from "./actionTypes";

let setSharedEditorValue = (value) => {
  return { type: actionTypes.SET_SHARED_EDITOR_VALUE, payload: { value } };
};

let setProjects = (projects) => {
  let { projectName, collaborators, projectID } = projects;
  return {
    type: actionTypes.SET_PROJECTS,
    payload: { projectName, collaborators, projectID },
  };
};

let addProject = (projectName, collaborators, projectID) => {
  return {
    type: actionTypes.ADD_PROJECT,
    payload: { projectName, collaborators, projectID },
  };
};

let removeProject = (projectID) => {
  return {
    type: actionTypes.REMOVE_PROJECT,
    payload: { projectID },
  };
};

export { setSharedEditorValue, setProjects, addProject, removeProject };
