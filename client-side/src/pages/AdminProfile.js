import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody,
  ModalFooter, Input, Label, Form, FormGroup, Card, CardTitle, CardText } from 'reactstrap';
import '../App.css';
import SERVER_URL from '../constants/server';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


class AdminProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        startdate: '',
        finishdate: '',
        purpose: '',
        modal: false,
        redirect: false,
        newproject: ''
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
    let newState = {...this.state};
    delete newState.modal;
    delete newState.redirect;
    delete newState.newproject;
    console.log(newState);
    let token = localStorage.getItem('serverToken');
    axios.post(`${SERVER_URL}/projects/`, newState,
      {
        headers: {
         'Authorization' : `Bearer ${token}`
       }
     })
    .then(response=> {
      console.log('Success');
      console.log('esta respuesta',response);
      this.setState({
          title: '',
          startdate: '',
          finishdate: '',
          purpose:'',
          newproject:response.data._id,
          redirect: true
      })
      this.props.rerender()
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
  }


  render() {

    if(this.state.redirect === true){
    return <Redirect to={'/project/'+ this.state.newproject} />
    }

    if(this.props.user){
      let projectsList = this.props.projects.map((proj, i) => {
        return (
          <div key={`project-${proj._id}`}>
            <Link to={`/project/${proj._id}`}>
              <Card body className="text-center" id="card-body">
                <CardTitle>Title: {proj.title}</CardTitle>
                <CardText>
                  Description: {proj.purpose}
                </CardText>
              </Card>
            </Link>
          </div>
        );
      });

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
            <Col md="6" >
              <Col><h1>Your Projects</h1></Col>
              <Col id="displayProjects">{projectsList}</Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form
                inline
                onSubmit={(e) => e.preventDefault()}
              >
                <Button
                  color="danger"
                  onClick={this.toggle}
                >
                  New Project
                </Button>
              </Form>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
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
                    name="author"
                    plaintext
                    value={this.props.user.firstName+ ' ' + this.props.user.lastName}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    type="submit" onClick={this.toggle}
                  >
                    Create
                  </Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>
          </Col>
        </Row>
      <Row>
        <h1>Your Tasks</h1>
      </Row>
    </Container>
    );
    }
    return (
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
    );
  }
}


export default AdminProfile;
