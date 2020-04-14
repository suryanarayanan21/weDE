import actionTypes from "../actions/actionTypes";

const initialProjectID = "ProjectID";

let currentProjectID = (state, action) => {
  let { type, payload } = action;
  if (state === undefined) return initialProjectID;

  switch (type) {
    case actionTypes.SET_CURRENT_PROJECT_ID:
      return payload.projectID;
    default:
      return state;
  }
};

export default currentProjectID;
