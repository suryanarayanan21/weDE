import React from "react";
import { useSelector, useDispatch } from "react-redux";
import selectCurrentProjectID from "../../store/selectors/projectID";
import selectUserName from "../../store/selectors/userName";
import selectProjects from "../../store/selectors/projects";
import {
  setProjects,
  setCurrentProjectID,
} from "../../store/actions/actionCreators";
import { useHistory } from "react-router-dom";
import axios from "axios";

const DeleteProject = (props) => {
  const currentProjectID = useSelector(selectCurrentProjectID);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <button
      className="delete-project-button"
      onClick={() => {
        axios
          .post("http://localhost:5000/project/deleteuser", {
            projectID: currentProjectID,
            email: userName,
          })
          .then((response) => {
            alert("You have removed this project successfully");
            history.push("/empty");
            history.replace("/room");
          })
          .catch((error) => {
            alert(error);
          });
      }}
    >
      Leave this project
    </button>
  );
};

export default DeleteProject;
