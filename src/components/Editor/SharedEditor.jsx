import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sharedEditorValue } from "../../store/selectors/sharedEditor";
import selectCurrentProjectID from "../../store/selectors/projectID";
import selectUserName from "../../store/selectors/userName";
import {
  setSharedEditor,
  setSharedEditorValue,
} from "../../store/actions/actionCreators";
import { ControlledEditor } from "@monaco-editor/react";
import socketIOClient from "socket.io-client";
import "./SharedEditor.css";

let socket;
let cpID;

let SharedEditor = (props) => {
  const value = useSelector(sharedEditorValue);
  const currentProjectID = useSelector(selectCurrentProjectID);
  const [remoteChange, setRemoteChange] = useState(false);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  useEffect(() => {
    socket = socketIOClient("http://localhost:5000");
    cpID = currentProjectID;

    socket.emit("editor join", { userName, currentProjectID }, (error) => {
      alert("A socket error occured");
    });

    return () => {
      socket.disconnect();
    };
  }, [currentProjectID]);

  useEffect(() => {
    socket.on("remote editor change", (value) => {
      console.log("remote change");
      setRemoteChange(true);
      dispatch(setSharedEditorValue(value));
    });
  }, [currentProjectID]);

  useEffect(() => {
    socket.removeAllListeners("remit");
    socket.on("remit", () => {
      console.log("Remit to: " + currentProjectID);
      socket.emit("editor change", { value, currentProjectID });
    });
  }, [value, currentProjectID]);

  let handleEditorChange = (ev, value) => {
    setRemoteChange((rc) => {
      if (!rc) {
        dispatch(setSharedEditorValue(value));
        socket.emit("editor change", { value, currentProjectID: cpID });
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
