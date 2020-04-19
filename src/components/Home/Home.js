import Login from "../Login/Login";
import React, { Component } from "react";
import "./Home.css"
import "../../main.js"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Image
} from "semantic-ui-react";
import Register from "../Register/Register";
import myImage from './Group.png';
import { signout } from "../../main.js";
const HomepageHeading = () => (
  
  
  <Header 
    as='h2' 
    icon>
    <Icon name='We<DE/>'/>
    codepool
    <Header.Subheader>
      a collaborative coding effort.
    </Header.Subheader>
  </Header>

);
const ImageBack = () => (
  <Image src={myImage} />
);

const HeroPattern = ({ pttrn, children }) => (
<div className= {pttrn} id="big-cont">
  {children}
</div>
);
/* Heads up!
* Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
* It can be more complicated, but you can create really flexible markup.
*/
class Home extends Component {
state = { showLogin: true, showRegister: false };

dispLogin = () => {
  this.setState({ showLogin: true, showRegister: false });
  document.getElementById("sign").innerHTML="New here? Sign Up";
  document.getElementById("mes").innerHTML="Welcome Back, Please login to your account";
};

dispRegister = () => {
  this.setState({ showLogin: false, showRegister: true });
  document.getElementById("sign").innerHTML="Already have an account? Login";
  document.getElementById("mes").innerHTML="Get Collabing, Create your codepool account";
};

disp = () => {
  if(this.state.showLogin)
  {
    this.dispRegister()
  }
  else{
    this.dispLogin()
  }
};



render() {
  const { fixed } = this.state;

  return (
    <HeroPattern pttrn={'topography-pattern'} >
     
    <Responsive id="content">
      
      <Segment
        inverted
        textAlign="center"
        style={{  padding: "0em 0em" }}
        vertical
        id="bg"
      >
        
        <Grid container stackable verticalAlign="middle" id="cont" divided>
          <Grid.Row id="row" divided>
          <Grid.Column  id="coll" className="noPadding">
            <HomepageHeading position="left" id="heading"/>
            <Header id="mes">
              Welcome Back, Please login to your account
            </Header>
              {this.state.showLogin ? <Container id="contain"><Login /></Container> : null}
              {this.state.showRegister ? <Container id="contain"><Register /></Container> : null}
              <Button
                as="a"
                inverted={!fixed}
                primary={fixed}
                id="sign"
                
                onClick={this.disp}
              >
                New here? Sign Up
              </Button>
            </Grid.Column>
            <Grid.Column  id="colr" className="noPadding">
            
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
