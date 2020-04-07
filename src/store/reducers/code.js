import actionTypes from "../actions/actionTypes";

const initialCode = "//Type your code here";

let code = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialCode;
  if (type === actionTypes.ADD_PROJECT) {
    return payload.text;
  } else return state;
};

export default code;
