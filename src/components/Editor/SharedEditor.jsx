import React, { Component } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import socketIOClient from "socket.io-client";
import "./SharedEditor.css";

class SharedEditor extends Component {
  state = {
    value: "",
    remoteChange: false
  };

  componentDidMount() {
    let socket = socketIOClient("http://localhost:5000");

    socket.on("remote editor change", value => {
      let currentState = {};
      Object.assign(currentState, this.state);
      currentState.value = value;
      currentState.remoteChange = true;
      this.setState(currentState);
    });

    let currentState = {};
    Object.assign(currentState, this.state);
    this.setState({ ...currentState, socket });
  }

  handleEditorChange = (ev, value) => {
    if (!this.state.remoteChange) {
      this.state.socket.emit("editor change", value);
    } else {
      let currentState = {};
      Object.assign(currentState, this.state);
      currentState.remoteChange = false;
      this.setState(currentState);
    }

    if (value.includes("Surya")) {
      this.setState({ value: "SURYA" });
    } else {
      this.setState({ value: value });
    }
  };

  render() {
    return (
      <div className="shared-editor">
        <ControlledEditor
          language="javascript"
          value={this.state.value}
          onChange={(ev, value) => {
            this.handleEditorChange(ev, value);
          }}
          theme="dark"
        />
      </div>
    );
  }
}

export default SharedEditor;
