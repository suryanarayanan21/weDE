import React, {useState} from "react";
import {performSignin} from "../../main.js"
import { Button, Form, Header, Message, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/actions/actionCreators";


const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  return(
  <div>
    <Header as="h2" color="teal" textAlign="center">
      Log-in
    </Header>

    <Form size="large">
      <Segment stacked>
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

        <Button color="teal" fluid size="large" onClick={(event) => {
            performSignin();
            if(sessionStorage.getItem('status') != null)
            {
              dispatch(setUserName(email));
              
            }
            //!name || !room ? event.preventDefault() : null;
          }}>
          Login
        </Button>
      </Segment>
    </Form>
    <Message id="message"></Message>
  </div>
);
        };

export default Login;
