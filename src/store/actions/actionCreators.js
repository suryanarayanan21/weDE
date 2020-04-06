import actionTypes from "./actionTypes";

let updateEditor = (text) => {
  return { payload: { text }, type: actionTypes.UPDATE_EDITOR };
};

let addMessage = (text, chatRoomID, userID) => {
  return {
    payload: { text, chatRoomID, userID },
    type: actionTypes.ADD_MESSAGE,
  };
};

let fetchData = (userID) => {
  return { payload: { userID }, type: actionTypes.FETCH_DATA };
};

let loadStore = (userID) => {
  return { payload: { userID }, type: actionTypes.LOAD_STORE };
};

export { updateEditor, addMessage, loadStore, fetchData };
