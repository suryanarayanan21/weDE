import actionTypes from "./actionTypes";
import { act } from "react-dom/test-utils";

let setSharedEditorValue = (value) => {
  return { type: actionTypes.SET_SHARED_EDITOR_VALUE, payload: { value } };
};

let acceptProject = (projectID) => {
  return { type: actionTypes.ACCEPT_PROJECT, payload: { projectID } };
};

let setProjects = (projects) => {
  return {
    type: actionTypes.SET_PROJECTS,
    payload: projects,
  };
};

let setUserName = (name) => {
  return {
    type: actionTypes.SET_USER_NAME,
    payload: name,
  };
};

let addProject = (
  projectName,
  collaborators,
  projectID,
  language,
  accepted
) => {
  return {
    type: actionTypes.ADD_PROJECT,
    payload: { projectName, collaborators, projectID, language, accepted },
  };
};

let removeProject = (projectID) => {
  return {
    type: actionTypes.REMOVE_PROJECT,
    payload: { projectID },
  };
};

let setCurrentProjectID = (projectID) => {
  return {
    type: actionTypes.SET_CURRENT_PROJECT_ID,
    payload: { projectID },
  };
};

export {
  setSharedEditorValue,
  setProjects,
  addProject,
  removeProject,
  setCurrentProjectID,
  acceptProject,
  setUserName,
};
