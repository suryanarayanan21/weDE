import React, { Component } from "react";
import "./Projects.css";

class ProjectList extends Component {
  state = {
    projects: [
      {
        projectName: "Project 1",
        collaborators: ["Surya", "Shyam", "Suchit", "Abhishek"],
        projectID: "1353IRSNDK"
      },
      {
        projectName: "Project 2",
        collaborators: ["Surya", "Shyam", "Suchit", "Abhishek"],
        projectID: "1353I35NDK"
      }
    ]
  };

  render() {
    return (
      <div className="project-list">
        <h3>Active Projects</h3>
        {this.state.projects.map(project => {
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
  }
}

export default ProjectList;
