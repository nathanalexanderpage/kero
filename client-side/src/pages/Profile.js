import React, { Component } from 'react';
import { Container, Col, Card, CardTitle, CardText, Row, Button } from 'reactstrap';
import '../App.css';

class Profile extends Component {
  state = {

  }


  render() {
    if(this.props.user){
      
      return (
      <Container className="profile">
        <Row>
          <Col md="6">
            <img  id="userprofile" src={this.props.user.image}  />
              <h5 id="username">{this.props.user.firstName + ' ' + this.props.user.lastName}</h5>
                <h5>Email : {this.props.user.email}</h5>
                <h5>Your role is : {this.props.user.role}</h5>
                <h5>You are working in Project: {this.props.user.project}</h5>
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
