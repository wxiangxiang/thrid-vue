import { HashRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className='nav'>
          <li>
            <NavLink exact to={{ pathname: '/' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: '/about' }}>About</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: '/list' }}>List</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
