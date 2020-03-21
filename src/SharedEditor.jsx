import React, { Component } from "react";
import Editor from "@monaco-editor/react";
import "./SharedEditor.css";

class SharedEditor extends Component {
  render() {
    return (
      <div className="shared-editor">
        <Editor height="90vh" language="javascript" theme="dark" />
      </div>
    );
  }
}

export default SharedEditor;
