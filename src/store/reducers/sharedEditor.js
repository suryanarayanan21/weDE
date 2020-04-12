import actionTypes from "../actions/actionTypes";

const initialCode = { value: "// Type your code here" };

let sharedEditor = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialCode;
  switch (type) {
    case actionTypes.SET_SHARED_EDITOR_VALUE:
      return { ...state, value: payload.value };
    default:
      return state;
  }
};

export default sharedEditor;
