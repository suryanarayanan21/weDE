import actionTypes from "../actions/actionTypes";

const initialCode = "//Type your code here";

let code = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialCode;
  if (type === actionTypes.UPDATE_EDITOR) {
    return payload.text;
  } else return state;
};

export default code;
