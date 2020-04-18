import React from "react";
import { useState } from "react";
import axios from "axios";
import { setSharedEditorValue } from "../../store/actions/actionCreators";
import { useDispatch } from "react-redux";

const AddProject = (props) => {
  const [count, setCount] = useState(1);
  const [projectName, setProjectName] = useState();
  const [collaborators, setCollaborators] = useState([]);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Project Name"
        onChange={(event) => {
          setProjectName(event.target.value);
        }}
      />
      {[...Array(count).keys()].map((value) => {
        return (
          <input
            type="text"
            placeholder="collaborator"
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
      >
        Add Collaborator
      </button>

      <button
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
            })
            .catch((error) => {
              alert(error);
            });
        }}
      >
        Create
      </button>
    </div>
  );
};

export default AddProject;
