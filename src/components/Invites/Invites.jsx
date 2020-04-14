import React from "react";
import { useSelector } from "react-redux";
import projectsSelector from "../../store/selectors/projects";
import Invite from "../Invite/Invite";

let Invites = (props) => {
  const projects = useSelector(projectsSelector);

  return (
    <div>
      {projects
        .filter((project) => {
          return !project.accepted;
        })
        .map((project) => {
          return (
            <Invite
              projectName={project.projectName}
              collaborators={project.collaborators}
              key={project.projectID}
              projectID={project.projectID}
            />
          );
        })}
    </div>
  );
};

export default Invites;
