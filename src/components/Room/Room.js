import React from "react";

import './Room.css';
import ProjectList from "../List/Projects";
import SharedEditor from "../Editor/SharedEditor";
import Chat from "../Chat/Chat";


const Room= ({location}) => {

    return(
        <React.StrictMode>
            <div className="cont">
                <div className="code-holder">
                    <SharedEditor />
                </div>
                <div className="chat">
                    <Chat location={location}/>
                </div>
            </div>
            <ProjectList />
        </React.StrictMode>
    )
}

export default Room;