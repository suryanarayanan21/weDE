import actionTypes from "../actions/actionTypes";
import { act } from "react-dom/test-utils";

const initialUserName = "User Name";

let userName = (state, action) => {
  const { type, payload } = action;

  if (state === undefined) return initialUserName;

  switch (type) {
    case actionTypes.SET_USER_NAME:
      return payload;
    default:
      return state;
  }
};

export default userName;
