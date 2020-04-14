import React from "react";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import Invites from "../Invites/Invites";

let UserHome = (props) => {
  return (
    <div>
      <ProjectsContainer className="projects-container" />
      <Invites className="invites" />
    </div>
  );
};

export default UserHome;
