import Login from "../Login/Login";
import React, { Component } from "react";
import "../../main.js"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment
} from "semantic-ui-react";
import Register from "../Register/Register";

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="We<DE/>"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "3em"
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class Home extends Component {
  state = { showLogin: false, showRegister: false };

  dispLogin = () => {
    this.setState({ showLogin: true, showRegister: false });
  };

  dispRegister = () => {
    this.setState({ showLogin: false, showRegister: true });
  };

  render() {
    const { fixed } = this.state;

    return (
      <Responsive>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">tab1</Menu.Item>
              <Menu.Item as="a">tab2</Menu.Item>
              <Menu.Item as="a">tab3</Menu.Item>

              <Menu.Item position="right">
                <Button as="a" inverted={!fixed} onClick={this.dispLogin}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                  onClick={this.dispRegister}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <HomepageHeading />
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                {this.state.showLogin ? <Login /> : null}
                {this.state.showRegister ? <Register /> : null}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Responsive>
    );
  }
}

export default Home;
