import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sharedEditorValue } from "../../store/selectors/sharedEditor";
import { setSharedEditor } from "../../store/actions/actionCreators";
import { ControlledEditor } from "@monaco-editor/react";
import socketIOClient from "socket.io-client";
import "./SharedEditor.css";

let SharedEditor = (props) => {
  const value = useSelector(sharedEditorValue);
  const [remoteChange, setRemoteChange] = useState(false);
  const editorRef = useRef();
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let s = socketIOClient("http://localhost:9000");

    s.on("remote editor change", (value) => {
      setRemoteChange(true);
      dispatch(setSharedEditor(value));
    });

    setSocket(s);

    return () => {
      setSocket((socket) => {
        socket.disconnect();
        return socket;
      });
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
