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
      dispatch(setCurrentProjectID(response.data[0].projectID));
      dispatch(setSharedEditorValue(response.data[0].code));
    })
    .catch((error) => {
      alert(error);
    });
}

const Room = ({ location }) => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjectsByUser(name, dispatch);
  });

  return (
    <React.StrictMode>
      <div className="cont">
        <div className="code-holder">
          <SharedEditor />
        </div>
        <div className="chat">
          <Chat location={location} />
        </div>
      </div>
      <ProjectList />
    </React.StrictMode>
  );
};

export default Room;
