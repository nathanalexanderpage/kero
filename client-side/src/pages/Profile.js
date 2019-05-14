import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Col } from 'reactstrap';
import '../App.css';

class Profile extends Component {
  render() {
    if(this.props.user){
      return (
      <Container>
        <Col>
          <img  id="userprofile" src={this.props.user.image}  />
          <ListGroup>
            <ListGroupItem color="success" className="profile-info">
              <h2>Hello again, {this.props.user.firstname}!</h2>
            </ListGroupItem>
            <ListGroupItem color="info" className="profile-info">
              <h4>Your email is : {this.props.user.email}</h4>
            </ListGroupItem>
            <ListGroupItem color="warning" className="profile-info">
              <h4>Your role is : {this.props.user.role}</h4>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroupItem color="success" className="profile-info">
              <h4>Your are working in Project: {this.props.user.project}</h4>
            </ListGroupItem>
            <ListGroupItem color="info" className="profile-info">
              <h4>Your are working in Sprint: {this.props.user.sprint}</h4>
            </ListGroupItem>
            <ListGroupItem color="warning" className="profile-info">
              <h4>Your are working in Task: {this.props.user.task}</h4>
            </ListGroupItem>
          </ListGroup>
        </Col>
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




