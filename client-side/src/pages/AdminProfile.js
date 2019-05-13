import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class AdminProfile extends Component {
  render() {
    if(this.props.user){
      return (

             <Container >
               <Row>
                 <Col>
                   <img  id="userprofile" src={this.props.user.image}  />
                 </Col>
                 <Col>
                   <h2>Hello again, {this.props.user.name} You are an admin!</h2>
                   <h4>Your email is : {this.props.user.email}</h4>
                   <h4>Your role is : {this.props.user.role}</h4>
                   <h4>Your are working in :  {this.props.user.project}</h4>
                 </Col>
               </Row>
             </Container>
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default AdminProfile;
