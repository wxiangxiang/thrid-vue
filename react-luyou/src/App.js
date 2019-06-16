import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './compont/Home';
import List from './compont/List';
import About from './compont/About';
import NavBar from './compont/NavBar';
import Detail from './compont/Detail';
import User from './compont/User';
import PageNotFound from './compont/PageNotFount';
import Products from './compont/Products';
import HocRouter from './compont/HocRouter';
import Login from './compont/Login';
const NeedLogin = HocRouter(Route); //临时变量

//Router是路由的上层节点，所以使用路由跳转的组件都在其内
//每一个路由链接对应的组件使用Route进行跳转
//页面跳转的时候使用Link组件实现
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div>
          {/* Switch表示只匹配一个之后就不再继续查找 */}
          <Switch>
            {/* exact表示绝对匹配完全匹配 */}
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/list' component={List} />
            {/* 此处的:id表示的是一个占位符，表示路由传参 */}
            <Route path='/list/:id' component={Detail} />
            <Route path='/login' component={Login} />
            {/* 验证用户是否登陆 */}
            <NeedLogin path='/user' component={User} />
            {/* 加问号表示可选参数 */}
            <Route path='/products/:tag?' component={Products} />

            {/* 404页面未找到 */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
