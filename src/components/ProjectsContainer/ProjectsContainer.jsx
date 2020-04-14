import React from "react";
import ProjectBox from "../ProjectBox/ProjectBox";
import { useSelector } from "react-redux";
import projectsSelector from "../../store/selectors/projects";

let ProjectsContainer = (props) => {
  const projects = useSelector(projectsSelector);

  return (
    <div>
      {projects
        .filter((project) => {
          return project.accepted;
        })
        .map((project) => {
          return (
            <ProjectBox
              projectName={project.projectName}
              collaborators={project.collaborators}
              language={project.language}
              key={project.projectID}
            />
          );
        })}
    </div>
  );
};

export default ProjectsContainer;
