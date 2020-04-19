import React, { useState } from "react";
import { performSignup } from "../../main.js";
import { Button, Form, Header, Message, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/actions/actionCreators";
import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div id="regcont">
      <Header as="h2" id="head" textAlign="center">
        Register here!
      </Header>

      <Form size="large" id="form">
        <Segment stacked id="regstack">
          <Form.Input
            id="email"
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Input
            id="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button
            id="butt"
            fluid
            size="large"
            onClick={async (event) => {
              performSignup().then((didSignIn) => {
                if (sessionStorage.getItem("status") != null && didSignIn) {
                  dispatch(setUserName(email));
                  history.push("/room");
                }
              });
              //!name || !room ? event.preventDefault() : null;
            }}
          >
            Register
          </Button>
        </Segment>
      </Form>
      <Message id="message"></Message>
    </div>
  );
};

export default Register;
