import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Product from './component/Products';

function App(props) {
  console.log(props);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Product />
        <h5>当前的计数值为{props.count}</h5>
        <button
          onClick={() => {
            props.dispatch({ type: 'add', payload: { step: 3 } });
          }}
        >
          加一
        </button>
        <Button txt='按钮' color='red' border='0' />
      </header>
    </div>
  );
}
/**
 * 将state数据映射到props属性中
 * @param {*} state
 * state表示当前状态树的所有数据
 */
const mapStateProps = state => {
  return state.counterReducer;
};

/**
 * 通过connect方法将redux中的数据映射到组件的属性中
 */
export default connect(mapStateProps)(App);
