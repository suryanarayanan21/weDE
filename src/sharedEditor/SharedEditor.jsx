import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import codeSelector from "../store/selectors/codeSelector";
import { updateEditor } from "../store/actions/actionCreators";
import { ControlledEditor } from "@monaco-editor/react";
import socketIOClient from "socket.io-client";
import "./SharedEditor.css";

let SharedEditor = (props) => {
  const code = useSelector(codeSelector);
  const [remoteChange, setRemoteChange] = useState(false);
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let s = socketIOClient("http://localhost:9000");
    s.on("remote editor change", (value) => {
      setRemoteChange(true);
      dispatch(updateEditor(value));
    });
    setSocket(s);
    return () => {
      socket.disconnect();
    };
  }, []);

  let handleEditorChange = (ev, value) => {
    console.log(remoteChange);
    if (!remoteChange) {
      socket.emit("editor change", value);
    } else {
      setRemoteChange(false);
    }
  };

  return (
    <div className="shared-editor">
      <ControlledEditor
        language="javascript"
        value={code}
        onChange={(ev, value) => {
          handleEditorChange(ev, value);
        }}
        theme="dark"
      />
    </div>
  );
};

export default SharedEditor;
