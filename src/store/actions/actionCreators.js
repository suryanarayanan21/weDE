import actionTypes from "./actionTypes";

let setSharedEditorValue = (value) => {
  return { type: actionTypes.SET_SHARED_EDITOR_VALUE, payload: { value } };
};

export { setSharedEditorValue };
