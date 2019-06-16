import React, { Component } from 'react';
import { isLogin } from '../utils/auth';
import { withRouter } from 'react-router-dom';

/**
 * 高阶组件
 * 在react中使用一个组件当作参数传递到另一个组件中
 * 这种操作方式叫做高阶组件
 * @param {*} Page
 */
export default function HocRouter(Page) {
  //在没有用Route对象管理的组件中无法使用history属性，可以通过widthRouter方法为组件添加此属性
  return withRouter(
    class WrapComponent extends Component {
      constructor(props) {
        super(props);
        console.log(props);
      }
      //挂载之前登陆
      componentWillMount() {
        if (!isLogin()) {
          this.props.history.replace('/login');
        }
      }
      render() {
        return <Page {...this.props} />;
      }
    }
  );
}
