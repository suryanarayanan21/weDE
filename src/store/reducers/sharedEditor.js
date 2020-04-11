import actionTypes from "../actions/actionTypes";

const initialCode = { value: "// Type your code here", remoteChange: false };

let sharedEditor = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialCode;
  switch (type) {
    case actionTypes.SET_SHARED_EDITOR_VALUE:
      return { ...state, value: payload.value };
    case actionTypes.SET_SHARED_EDITOR_REMOTE_CHANGE:
      return { ...state, remoteChange: payload.remoteChange };
    case actionTypes.SET_SHARED_EDITOR:
      return payload;
    default:
      return state;
  }
};

export default sharedEditor;
