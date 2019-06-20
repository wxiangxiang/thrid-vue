import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, TabBar } from 'antd-mobile';
import { withRouter, Route, Switch } from 'react-router-dom';
import Life from './pages/Life';
import List from './pages/List';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selIndex: 0,
      list: [],
    };
    console.log(props);
  }

  componentDidMount() {
    //this.refs.main.style.height = window.innerHeight - 45 + 'px';
  }
  render() {
    return (
      <div className='App'>
        <NavBar
          mode='dark'
          icon={<Icon type='left' />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key='0' type='search' style={{ marginRight: '16px' }} />,
            <Icon key='1' type='ellipsis' />,
          ]}
        >
          NavBar主页
        </NavBar>
        <div className='main' ref='main'>
          <Switch>
            <Route exact path='/' component={Life} />
            <Route path='/list' component={List} />
          </Switch>
        </div>
        <div className='tabBar'>
          <TabBar>
            <TabBar.Item
              title='Life'
              key='Life'
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selected={this.state.selIndex === 1}
              onPress={() => {
                this.setState({
                  selIndex: 0,
                });
                this.props.history.push('/');
              }}
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selected={this.state.selIndex === 0}
              onPress={() => {
                this.setState({
                  selIndex: 1,
                });
                this.props.history.push('/list');
              }}
              title='Koubei'
              key='Koubei'
            />
          </TabBar>
        </div>
      </div>
    );
  }
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
export default connect(mapStateProps)(withRouter(App));
