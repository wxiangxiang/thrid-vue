import React, { Component } from 'react';
//qs插件用来格式化url地址中的参数，此参数为使用？传递数据
import { parse, stringify } from 'qs';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    //通过props可以获取路由中传递的参数
    //console.log(props);
    // console.log(props.match.params.id);
    console.log(parse(props.match.url.split('?')[1]));
    var data = { name: 'Tom', age: 18, address: 'zehngzhou' };
    console.log(stringify(data));
  }
  render() {
    return (
      <div>
        <h5>详情页</h5>
      </div>
    );
  }
}
