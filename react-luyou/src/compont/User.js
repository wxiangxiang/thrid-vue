import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Password from './user/Password';
import Info from './user/Info';
import { logOut } from '../utils/auth';

export default class User extends Component {
  render() {
    const outLogin = () => {
      logOut();
      this.props.history.replace('/');
    };
    return (
      <div>
        <h5>用户中心</h5>
        <button onClick={outLogin}>退出登录</button>
        <div>
          <Link to={{ pathname: '/user/pwd' }}>【修改密码】</Link>
          <Link to={{ pathname: '/user/info' }}>【修改昵称】</Link>
        </div>
        <div>
          <Route path='/user/pwd' component={Password} />
          <Route path='/user/info' component={Info} />
        </div>
      </div>
    );
  }
}
