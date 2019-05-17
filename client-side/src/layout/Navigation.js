import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogout = (e) => {
    e.preventDefault();
    // TODO: REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken');
    this.props.resetUser();
  }

  render() {
    let links = '';
    if(this.props.user && this.props.user.role === 'user'){
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
            <Link to="/profile">Profile</Link>
            <Link to="/board">Board</Link>
            <Link to="/sprint">Sprint</Link>
            <Link to="/task">Task</Link>
          </span>
        );
    }else if (this.props.user && this.props.user.role === 'admin') {
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
            <Link to="/adminprofile">Profile</Link>
            <Link to="/board">Board</Link>
            <Link to="/sprint">Sprint</Link>
            <Link to="/task">Task</Link>
          </span>
        );

    }
      return(

      <div>
       <Navbar color="light" light expand="md">
         <NavbarBrand href="/">KERO</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <Link to="/signup">Sign Up</Link>
             </NavItem>
             <NavItem>
               <Link to="/login">Log In</Link>
             </NavItem>
           <NavItem>
             {links}
          </NavItem>
           </Nav>
         </Collapse>
       </Navbar>
     </div>

    );
  }
}
