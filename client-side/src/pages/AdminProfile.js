import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import '../App.css';


class AdminProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }


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
	               <Row>
	                 <Col>
	                   <Form inline onSubmit={(e) => e.preventDefault()}>
	                       <Button color="danger" onClick={this.toggle}>New Project</Button>
	                   </Form>
	                   <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
	                       <ModalHeader toggleProjectCard={this.toggle.projectCard}>Create a New Project</ModalHeader>
	                       <ModalBody>
	                         <Label>Title</Label>
	                           <Input
	                             type="text"
	                             name="title"
	                             placeholder="date placeholder"
	                           />
	                        <Label>Start Date</Label>
	                          <Input
	                            type="date"
	                            name="startdate"
	                            placeholder="date placeholder"
	                          />
	                        <Label>End Date</Label>
	                          <Input
	                            type="date"
	                            name="finishdate"
	                            placeholder="date placeholder"
	                          />
	                        <Label>Purpose</Label>
	                          <Input
	                            type="textarea"
	                            name="purpose"
	                            placeholder="Write something"
	                            rows={5}
	                             />
	                           <Label > Author </Label>
	                          <Input
	                            plaintext value={this.props.user.name}
	                            />
	                       </ModalBody>
	                       <ModalFooter>
	                           <Button color="primary" onClick={this.toggle}>Create</Button>{' '}
	                           <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	                       </ModalFooter>
	                   </Modal>
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
