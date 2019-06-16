import { HashRouter as Router } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';

/**
 * NavLink在选中之后会自动的添加一个样式名叫active
 * 我们可以手动的为其设置样式名，通过属性activeClassName
 */
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
          <li>
            <NavLink to={{ pathname: '/user' }}>User</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
