import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectProjects from "../../store/selectors/projects";
import "./Projects.css";

let ProjectList = (props) => {
  const projects = useSelector(selectProjects);

  return (
    <div className="project-list">
      <h3>Active Projects</h3>
      {projects.map((project) => {
        return (
          <div key={project.projectID} className="project">
            <span className="project-name">{project.projectName}</span>
            <span className="project-collaborators">
              {project.collaborators.join(", ")}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
