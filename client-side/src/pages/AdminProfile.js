import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import '../App.css';
import SERVER_URL from '../constants/server';
import axios from 'axios';


class AdminProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        startdate: '',
        finishdate: '',
        purpose:'',
        modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  handleTitleChange = (e) => { this.setState({ title: e.target.value }); }
  handleStartDateChange = (e) => { this.setState({ startdate: e.target.value }); }
  handleFinishDateChange = (e) => { this.setState({ finishdate: e.target.value }); }
  handlePurposeChange = (e) => { this.setState({ purpose: e.target.value }); }

  componentDidMount = () => {
    // GET USER INFO

  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }

  handleSubmit = (e) => {

    e.preventDefault();
    let newState = {...this.state}
    delete newState.modal
    console.log(this.state,newState);
    let token = localStorage.getItem('serverToken');
    axios.post(`${SERVER_URL}/projects/post`, newState,
      {
        headers: {
         'Authorization' : `Bearer ${token}`
       }
     })
    .then(response=> {
      console.log('Success');
      console.log(response);
      this.setState({
          title: '',
          startdate: '',
          finishdate: '',
          purpose:''
      })
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
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
                   <h2>Hello again, {this.props.user.firstName+ ' ' + this.props.user.lastName} You are an admin!</h2>
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
                         <Form onSubmit={this.handleSubmit}>
	                       <ModalHeader toggle={this.toggle}>Create a New Project</ModalHeader>
	                       <ModalBody>

    	                         <Label>Title</Label>
    	                           <Input
    	                             type="text"
    	                             name="title"
    	                             placeholder="title placeholder"
                                   value={this.state.title}
                                   onChange={this.handleTitleChange}
    	                           />
    	                        <Label>Start Date</Label>
    	                          <Input
    	                            type="date"
    	                            name="startdate"
    	                            placeholder="start date placeholder"
                                  value={this.state.startdate}
                                  onChange={this.handleStartDateChange}
    	                          />
    	                        <Label>End Date</Label>
    	                          <Input
    	                            type="date"
    	                            name="finishdate"
    	                            placeholder="finish date placeholder"
                                  value={this.state.finishdate}
                                  onChange={this.handleFinishDateChange}
    	                          />
    	                        <Label>Purpose</Label>
    	                          <Input
    	                            type="textarea"
    	                            name="purpose"
    	                            placeholder="Write something"
    	                            rows={5}
                                  value={this.state.purpose}
                                  onChange={this.handlePurposeChange}
    	                             />
  	                           <Label > Author </Label>
  	                          <Input
  	                            name="author" plaintext value={this.props.user.firstName+ ' ' + this.props.user.lastName}
  	                            />
	                       </ModalBody>
	                       <ModalFooter>
	                           <Button color="primary" type="submit" onClick={this.toggle}>Create</Button>{' '}
	                          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	                      </ModalFooter>
                        </Form>
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
