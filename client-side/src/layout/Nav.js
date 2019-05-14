import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
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
            <Link to="/examplesprint">Sprint</Link>
            <Link to="/exampletask">Task</Link>
          </span>
        );
    }else if (this.props.user && this.props.user.role === 'admin') {
      links = (
          <span>
            <a onClick={this.handleLogout}>Logout</a>
            <Link to="/adminprofile">Profile</Link>
            <Link to="/board">Board</Link>
            <Link to="/examplesprint">Sprint</Link>
            <Link to="/exampletask">Task</Link>
            <Link to="/exampleproject">Project</Link>
          </span>
        );

    }
    else {
      links = (
          <span>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </span>
        );
    }
    return(
        <div>
          <nav className="nav">
            <Link to="/">Home</Link>
            {links}
          </nav>
        </div>
      );
  }
}

export default Nav;
