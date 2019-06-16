import React, { Component } from 'react';
import { getProduct } from '../services/products';
import { findDOMNode } from 'react-dom';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      list: [],
    };
  }
  componentDidMount() {
    this.changePage();
  }
  async changePage() {
    console.log(this.refs);
    //通过refs可以获取页面中设置了ref属性的标签
    this.refs.MyBtn.style.color = 'red';
    //findDOMNode可以返回指定节点的html对象，通过ref属性对应的关键字进行处理
    console.log(findDOMNode(this.refs.MyBtn));
    // getProduct(this.state.currentPage).then(res => {
    //   this.setState({
    //     list: res.data.products,
    //     currentPage: this.state.currentPage + 1,
    //   });
    // });

    const result = await getProduct(this.state.currentPage);
    this.setState({
      list: result.data.products,
      currentPage: this.state.currentPage + 1,
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
        <button ref='MyBtn' onClick={this.changePage.bind(this)}>
          加载更多
        </button>
      </div>
    );
  }
}
