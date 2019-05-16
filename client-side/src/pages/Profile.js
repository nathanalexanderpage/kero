import React, { Component } from 'react';
import { Container, ListGroupItem, Col, Card, CardTitle, CardText, Row } from 'reactstrap';
import '../App.css';

class Profile extends Component {
  render() {
    if(this.props.user){
      return (
      <Container>
        <Row>
          <Col md="6">
            <img  id="userprofile" src={this.props.user.image}  />
              <ListGroupItem className="profile-info">
                <h3>Hello again, {this.props.user.firstName}!</h3>
              </ListGroupItem>
              <ListGroupItem className="profile-info">
                <h5>Email : {this.props.user.email}</h5>
              </ListGroupItem>
              <ListGroupItem className="profile-info">
                <h5>Your role is : {this.props.user.role}</h5>
              </ListGroupItem>
              <ListGroupItem className="profile-info">
                <h5>Your are working in Project: {this.props.user.project}</h5>
              </ListGroupItem>
          </Col>
          <Col md="6">
            <h1>To Do</h1>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
            <Card body className="text-center" id="card-body">
              <CardTitle></CardTitle>
              <CardText></CardText>
            </Card>
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
