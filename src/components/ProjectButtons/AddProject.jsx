import React from "react";
import { useState } from "react";
import axios from "axios";
import { setSharedEditorValue } from "../../store/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import "./AddProject.css";
import { useHistory } from "react-router";

const AddProject = (props) => {
  const [count, setCount] = useState(1);
  const [projectName, setProjectName] = useState();
  const [collaborators, setCollaborators] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={props.topClass}>
      <h2>Create New Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        className="project-name-input"
        onChange={(event) => {
          setProjectName(event.target.value);
        }}
      />
      {[...Array(count).keys()].map((value) => {
        return (
          <input
            type="text"
            placeholder="collaborator"
            className="collaborator-input"
            key={value}
            onChange={(event) => {
              let newArray = [...collaborators];
              newArray[value] = event.target.value;
              setCollaborators(newArray);
            }}
          />
        );
      })}

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
        className="add-collaborator-button"
      >
        Add Collaborator
      </button>

      <button
        className="back-button"
        onClick={() => {
          setCount(1);
          setCollaborators([]);
          props.backFunction();
        }}
      >
        Back
      </button>

      <button
        className="create-project-button"
        onClick={() => {
          axios
            .post("http://localhost:5000/project/", {
              projectID: "" + new Date().getTime(),
              projectName,
              collaborators,
              code: "//Start typing your code here",
            })
            .then((response) => {
              alert("Project created!");
              history.push("/temp");
              history.replace("/room");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Create
      </button>
    </div>
  );
};

export default AddProject;
