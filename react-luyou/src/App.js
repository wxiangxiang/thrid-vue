import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './compont/Home';
import List from './compont/List';
import About from './compont/About';
import NavBar from './compont/NavBar';

//Router是路由的上层节点，所以使用路由跳转的组件都在其内
//每一个路由链接对应的组件使用Route进行跳转
//页面跳转的时候使用Link组件实现
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div>
          <Switch>
            {/* exact表示绝对匹配完全匹配 */}
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/list' component={List} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
