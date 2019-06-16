import React from 'react';

import PropTypes from 'prop-types';
import { login } from '../utils/auth';

function Login(props) {
  const loginHandle = () => {
    login();
    props.history.replace('/user');
  };
  return (
    <div>
      <ul>
        <li>
          <input type='text' placeholder='输入用户名' userName='xxx' />
        </li>
        <li>
          <input type='password' placeholder='请输入密码' />
        </li>
        <li>
          <button onClick={loginHandle}>登陆</button>
        </li>
      </ul>
    </div>
  );
}
//PropTypes设置参数类型，设置必填参数
Login.propTypes = {
  userName: PropTypes.string,
};

export default Login;
