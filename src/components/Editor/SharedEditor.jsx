import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sharedEditorValue } from "../../store/selectors/sharedEditor";
import {
  setSharedEditor,
  setSharedEditorValue,
} from "../../store/actions/actionCreators";
import { ControlledEditor } from "@monaco-editor/react";
import socketIOClient from "socket.io-client";
import "./SharedEditor.css";

let socket;

let SharedEditor = (props) => {
  const value = useSelector(sharedEditorValue);
  const [remoteChange, setRemoteChange] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    socket = socketIOClient("http://localhost:5000");

    socket.on("remote editor change", (value) => {
      setRemoteChange(true);
      dispatch(setSharedEditorValue(value));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  let handleEditorChange = (ev, value) => {
    setRemoteChange((rc) => {
      console.log(rc);
      if (!rc) {
        socket.emit("editor change", value);
        return false;
      } else {
        return false;
      }
    });
  };

  return (
    <div className="shared-editor">
      <ControlledEditor
        language="javascript"
        value={value}
        onChange={handleEditorChange}
        theme="dark"
      />
    </div>
  );
};

export default SharedEditor;
