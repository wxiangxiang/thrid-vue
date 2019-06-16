import React, { Component } from 'react';

export default class Products extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>商品页</h1>
      </div>
    );
  }
}
