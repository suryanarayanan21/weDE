import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import TextContainer from "../TextContainer/TextContainer";
import { useSelector, useDispatch } from "react-redux";
import selectCurrentProjectID from "../../store/selectors/projectID";
import selectUserName from "../../store/selectors/userName";
import {
  setUserName,
  setCurrentProjectID,
} from "../../store/actions/actionCreators";

let socket;

const Chat = ({ location }) => {
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const room = useSelector(selectCurrentProjectID);

  useEffect(() => {
    socket = io(ENDPOINT);

    dispatch(setUserName(name));

    socket.emit("join", { name, room }, (error) => {});

    return () => {
      socket.emit("disconnect");
      socket.disconnect();
    };
  }, [ENDPOINT, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [room]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
