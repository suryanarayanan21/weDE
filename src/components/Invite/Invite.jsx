import React from "react";
import "./Invite.css";
import { useDispatch } from "react-redux";
import {
  acceptProject,
  removeProject,
} from "../../store/actions/actionCreators";

let Invite = (props) => {
  const { projectName, collaborators, projectID } = props;
  const collaboratorsString = collaborators.join(", ");

  const dispatch = useDispatch();

  let acceptHandler = (event) => {
    dispatch(acceptProject(projectID));
  };

  let denyHandler = (event) => {
    dispatch(removeProject(projectID));
  };

  return (
    <div className="invite">
      <div>
        <span className="project-name">{projectName}</span>
        <span className="collaborators-string">{collaboratorsString}</span>
      </div>

      <div className="button-holder">
        <button className="accept-invite" onClick={acceptHandler}>
          Accept
        </button>
        <button className="deny-invite" onClick={denyHandler}>
          Deny
        </button>
      </div>
    </div>
  );
};

export default Invite;
