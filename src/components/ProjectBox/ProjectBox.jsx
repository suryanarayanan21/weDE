import React from "react";
import "./projectBox.css";

import javascriptImage from "./javascript.png";
import pythonImage from "./python.png";
import javaImage from "./java.png";

const images = {
  javascript: javascriptImage,
  java: javaImage,
  python: pythonImage,
};

let ProjectBox = (props) => {
  let { projectName, collaborators, language } = props;
  const collaboratorsString = collaborators.join(", ");

  return (
    <div className="project-box">
      <img src={images[language]} alt="Project" />
      <span className="project-name">{projectName}</span>
      <span className="collaborators-string">{collaboratorsString}</span>
    </div>
  );
};

export default ProjectBox;
