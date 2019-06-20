import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import { loadData } from '../actions/products';
import 'antd-mobile/dist/antd-mobile.css';

function List(props) {
  console.log(props);
  const { dispatch, list } = props;
  console.log(list);
  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div>
      <h1>列表页</h1>
      <ul>
        <WingBlank size='lg'>
          <WhiteSpace size='lg' />
          {list.map(item => (
            <Card key={item._id}>
              <Card.Header
                title={item.name}
                thumb='https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                <div>{item.descriptions}</div>
              </Card.Body>
              <Card.Footer
                content='footer content'
                extra={<div>extra footer content</div>}
              />
            </Card>
          ))}
          <WhiteSpace size='lg' />
        </WingBlank>
      </ul>
    </div>
  );
}

const mapSateToProps = state => state.productReducer;

export default connect(mapSateToProps)(List);
