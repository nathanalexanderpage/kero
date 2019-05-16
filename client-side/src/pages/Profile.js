import React, { Component } from 'react';
import { Container, ListGroupItem, Col, Card, CardTitle, CardText, Row, Button } from 'reactstrap';
import '../App.css';

class Profile extends Component {
  render() {
    if(this.props.user){
      return (
      <Container>
        <Row>
          <Col md="6">
            <img  id="userprofile" src={this.props.user.image}  />
              <h5>{this.props.user.firstName+ ' ' + this.props.user.lastName}</h5>
              <Button outline color="secondary" size="lg" onClick={this.handleSubmit}>Manage your account</Button>
                <h5>Email : {this.props.user.email}</h5>
                <h5>Your role is : {this.props.user.role}</h5>
                <h5>Your are working in Project: {this.props.user.project}</h5>
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
