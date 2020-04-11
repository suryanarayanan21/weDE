let sharedEditorValue = (state) => {
  return state.sharedEditor.value;
};

let sharedEditorRemoteChange = (state) => {
  return state.sharedEditor.remoteChange;
};

export { sharedEditorValue, sharedEditorRemoteChange };
