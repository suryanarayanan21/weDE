import actionTypes from "./actionTypes";

let setSharedEditorValue = (value) => {
  return { type: actionTypes.SET_SHARED_EDITOR_VALUE, payload: { value } };
};

let setSharedEditorRemoteChange = (remoteChange) => {
  return {
    type: actionTypes.SET_SHARED_EDITOR_REMOTE_CHANGE,
    payload: { remoteChange },
  };
};

let setSharedEditor = (value, remoteChange) => {
  return {
    type: actionTypes.SET_SHARED_EDITOR,
    payload: { value, remoteChange },
  };
};

export { setSharedEditorValue, setSharedEditorRemoteChange, setSharedEditor };
