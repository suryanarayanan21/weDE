import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (isSentByCurrentUser) {
    return (
      <div className="messageContainer justifyEnd">
        <p className="sentText">{trimmedName}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    );
  } else if ((user === "admin") | "Admin") {
    return (
      <div className="messageContainer justifyMiddle light-box">
        <div className="messageBox ad">
          <p className="messageText ad1">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText">{user}</p>
      </div>
    );
  }
};

export default Message;
