import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/products';

function Products(props) {
  const { list, page, dispatch } = props;
  //   const loadData = payload => async dispatch => {
  //     const result = await getProducts({ page: payload });
  //     dispatch({
  //       type: 'load_products',
  //       payload: {
  //         list: result.data.products,
  //       },
  //     });
  //   };
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <h5>当前页为{page}</h5>
      <button onClick={() => dispatch(loadData(page))}>下一页</button>
    </div>
  );
}
const mapStateToProps = state => state.productReducer;

export default connect(mapStateToProps)(Products);
