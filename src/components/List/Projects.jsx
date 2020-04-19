import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectProjects from "../../store/selectors/projects";
import { setCurrentProjectID } from "../../store/actions/actionCreators";
import "./Projects.css";

let ProjectList = (props) => {
  const projects = useSelector(selectProjects);
  const dispatch = useDispatch();

  let openProject = (projectID) => {
    dispatch(setCurrentProjectID(projectID));
  };

  return (
    <div className="project-list">
      {projects.map((project) => {
        return (
          <div
            key={project.projectID}
            className="project"
            onClick={() => {
              openProject(project.projectID);
            }}
          >
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
