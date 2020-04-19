import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjects,
  setSharedEditorValue,
  setCurrentProjectID,
} from "../../store/actions/actionCreators";
import selectUserName from "../../store/selectors/userName";
import axios from "axios";
import "./Room.css";
import ProjectList from "../List/Projects";
import SharedEditor from "../Editor/SharedEditor";
import Chat from "../Chat/Chat";
import DeleteProject from "../ProjectButtons/DeleteProject";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSaveCode } from "../../main";
import AddProject from "../ProjectButtons/AddProject";

function getProjectsByUser(email, dispatch) {
  axios
    .post("http://localhost:5000/project/getprojects", {
      email: email,
    })
    .then((response) => {
      let projects = response.data.map((project) => {
        const { projectID, projectName, collaborators } = project;
        return {
          projectID,
          projectName,
          collaborators,
          language: "javascript",
          accepted: true,
        };
      });
      dispatch(setProjects(projects));
      if (projects.length === 0) return;
      dispatch(setCurrentProjectID(response.data[0].projectID));
      dispatch(setSharedEditorValue(response.data[0].code));
    })
    .catch((error) => {
      console.log(error);
    });
}

const Room = ({ location }) => {
  const [chatClass, setChatClass] = useState("chat disappear");
  const [projectsClass, setProjectsClass] = useState("projects-list-container");
  const name = useSelector(selectUserName);
  const [newProjectClass, setNewProjectClass] = useState(
    "add-project disappear"
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getProjectsByUser(name, dispatch);
  }, [name]);

  let hideNewProject = () => {
    setNewProjectClass("add-project disappear");
  };

  return (
    <React.StrictMode>
      <div className="cont">
        <div className="side-bar">
          <div className="options-bar">
            <button
              onClick={() => {
                setProjectsClass("projects-list-container disappear");
                setChatClass("chat");
              }}
            >
              Chat
            </button>
            <button
              onClick={() => {
                setProjectsClass("projects-list-container");
                setChatClass("chat disappear");
              }}
            >
              Projects
            </button>
          </div>
          <div className={projectsClass}>
            <ProjectList />
            <div className="project-tools">
              <button
                className="sign-out-button"
                onClick={() => {
                  setNewProjectClass("add-project");
                }}
              >
                New Project
              </button>
              <button
                className="sign-out-button"
                onClick={() => {
                  history.push("/");
                }}
              >
                Sign out
              </button>
              <DeleteProject />
            </div>
          </div>
          <div className={chatClass}>
            <Chat location={location} />
          </div>
        </div>
        <div className="code-holder">
          <SharedEditor />
        </div>
        <AddProject
          topClass={newProjectClass}
          backFunction={() => {
            hideNewProject();
          }}
        />
      </div>
    </React.StrictMode>
  );
};

export default Room;
