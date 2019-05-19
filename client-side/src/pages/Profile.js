import React, { Component } from 'react';
import { Container, Col, Card, CardTitle, CardText, Row, Button } from 'reactstrap';
import '../App.css';
import { FaCity , FaEnvelopeSquare, FaSuitcase} from "react-icons/fa";

class Profile extends Component {
  state = {

  }


  render() {
    if(this.props.user){

      return (
      <Container className="profile">
        <Row>
          <Col md="6">
            <Row>
              <Col>
                <img  id="userprofile" src={this.props.user.image}  />
              </Col>
            </Row>
            <Row id="userabout">
               <Col>
                 <h5 id="username">{this.props.user.firstName + ' ' + this.props.user.lastName}</h5>
                 <Col className="subinfo">
                   <h5><FaEnvelopeSquare />: {this.props.user.email}</h5>
                   <h5><FaSuitcase/> : {this.props.user.role}</h5>
                   <h5><FaCity/>: {this.props.user.company}</h5>
                 </Col>
               </Col>
            </Row>
          </Col>
          <Col md="6" >
            <Col><h1>Your Sprints</h1></Col>
            <Col id="displayProjects"></Col>
          </Col>
        </Row>
      </Container>
    );
  };
    return(
      <div>
      <p>This is a profile page. You must be logged in to see it.</p>
      <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
    );
  }
}

export default Profile;
