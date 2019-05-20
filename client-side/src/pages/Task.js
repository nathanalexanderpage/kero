import React, { Component } from 'react';
import { Container, Row, Card, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form  } from 'reactstrap';
import {  Link } from 'react-router-dom';
import { FaCity , FaEnvelopeSquare, FaSuitcase , FaTrash, FaWrench} from "react-icons/fa";
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        assignedTo: '',
        title: '',
        manHourBudget: 0,
        status: '',
        dateAssigned: '',
        dateCompleted: '',
        description: '',
        sprint: this.props.sprintId
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount = () => {
    console.log(this.props.users);
    this.setState({
      assignedTo: this.props.task.assignedTo,
      title: this.props.task.title,
      manHourBudget: this.props.task.manHourBudget,
      status: this.props.task.status,
      description: this.props.task.desc,
      sprint: this.props.task.sprint
    })
    if (this.props.task.dateAssigned) {
      this.setState({
        dateAssigned: this.props.task.dateAssigned.slice(0,10)
      })
    }
    if (this.props.task.dateCompleted) {
      dateCompleted: this.props.task.dateCompleted.slice(0,10)
    }
  }

  handleAssignedToChange = (e) => { this.setState({ assignedTo: e.target.value }); }
  handleTitleChange = (e) => { this.setState({ title: e.target.value }); }
  handleManHourBudgetChange = (e) => { this.setState({ manHourBudget: e.target.value }); }
  handleStatusChange = (e) => { this.setState({ status: e.target.value }); }
  handleDateAssignedChange = (e) => { this.setState({ dateAssigned: e.target.value }); }
  handleDateCompletedChange = (e) => { this.setState({ dateCompleted: e.target.value }); }
  handlePrerequisiteTasksChange = (e) => { this.setState({ prerequisiteTasks: e.target.value }); }
  handleDescriptionChange = (e) => { this.setState({ description: e.target.value }); }


  handleDeleteTask = (task) =>{
    let token = localStorage.getItem('serverToken');
    axios.delete(`${SERVER_URL}/tasks/${task._id}`,
      {
        headers: {
         'Authorization' : `Bearer ${token}`
       }
     })
    .then(response=> {
     console.log("deleted", response);
     this.props.rerender()
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })

  }


  render() {
    let userSelects;
    if(!this.props.task){
      return (
        <div>
          <p>This page is for viewing information on a task. You must be logged in to see it.</p>
          <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
        </div>
      );
    }
    if (this.props.users[0]) {
      console.log('inside YES users');
      let userSelects = this.props.users.map((user, i) => {
        return (
          <option
            value={user.id}
          >
            {`${user.firstName} ${user.lastName}`}
          </option>
        )
      })
    } else {
      console.log('inside NO users');
      let userSelects = () => {
        return (<option>TBD</option>)
      }
    }
    return(
      <div className="tasks">
        <div>
          <Link
            onClick={ () => this.handleDeleteTask()} >
            <FaTrash id="deleteicon"/>
          </Link>
          <Link
          onClick={ () => this.toggle()} >
            <FaWrench id="modifyicon"/>
          </Link>
        </div>
        <div>
          {this.props.task.title}
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Edit Task</ModalHeader>
            <ModalBody>
              <Label for="assignedTo">Assigned To</Label>
              <Input
                type="select"
                name="assignedTo"
                onChange={this.handleAssignedToChange}
              >
                {userSelects}
              </Input>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Give it a name"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
              <Label>Man hours</Label>
              <Input
                type="number"
                name="manHourBudget"
                placeholder="How many hours?"
                value={this.state.manHourBudget}
                onChange={this.handleManHourBudgetChange}
              />
              <Label for="Select Role">Status</Label>
              <Input
                type="select"
                name="status"
                value={this.state.status}
                onChange={this.handleStatusChange}
              >
                <option defaultValue="todo">To Do</option>
                <option value="inprogress">In progress</option>
                <option value="codereview">Code review</option>
                <option value="done">Done</option>
              </Input>
              <Label>Assigned Date</Label>
              <Input
                type="date"
                name="dateAssigned"
                placeholder="date placeholder"
                value={this.state.dateAssigned}
                onChange={this.handleDateAssignedChange}
              />
              <Label>Completed Date</Label>
              <Input
                type="date"
                name="dateCompleted"
                placeholder="date placeholder"
                value={this.state.dateCompleted}
                onChange={this.handleDateCompletedChange}
              />
                {/*/   <Label>Prerequisite Tasks</Label>
              // <Input
              //   type="text"
              //   name="prerequisiteTasks"
              //   placeholder="related tasks"
              //   value={this.state.prerequisiteTasks}
              //   onChange={this.handlePrerequisiteTasksChange}
              //     >*/}
              <Label>Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder="Write something"
                rows={5}
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" onClick={this.toggle}>Create</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
        {/*/ <div>
        //   {8}
        // </div>
        // <div>
        //   <div className="task-name">
        //     <h2>Task X</h2>
        //   </div>
        //   <div className="task-details-imp" onClick={this.props.getUserProfInfo}>
        //     Owner: This Person
        //   </div>
        //   <div className="task-priority">
        //     Priority Level: 8
        //   </div>
        //   <div className="task-man-hour-budget">
        //     Man Hours Required Estimate: 10
        //   </div>
        //   <div className="task-date-completed">
        //     Completed on: 05/10
        //   </div>
        //   <div className="task-status">
        //     In progress
        //   </div>
        //   // <div className="task-depends-on">
        //   //   Prerequisite tasks: <a href="#">Task B</a>, <a href="#">Task C</a>
        //   // </div>
        //   <div className="task-desc">
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //   </div>
        //   <div className="task-tags">
        //     Tags: HTML, CSS, Javascript
        //   </div>
        //   <div className="task-date-assigned">
        //     Assigned on: 05/01
        //   </div>
        // </div> */}
      </div>




    );
  }
};

export default Task;
