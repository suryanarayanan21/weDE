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
  

);

const HeroPattern = ({ pttrn, children }) =>
<div className={pttrn}>
  {children}
</div>

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
    <HeroPattern pttrn={'topography-pattern'}>
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
                style={{ marginLeft: "8em" }}
                onClick={this.dispRegister}
              >
                Sign Up
              </Button>
            </Menu.Item>
          
        </Menu>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row color='black'>
            <Grid.Column width={8}>
              <HomepageHeading />
            </Grid.Column>
            <Grid.Column floated="right" width={4}>
              {this.state.showLogin ? <Container><Login /></Container> : null}
              {this.state.showRegister ? <Container><Register /></Container> : null}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Responsive>
    </HeroPattern>
  );
}
}



export default Home;
