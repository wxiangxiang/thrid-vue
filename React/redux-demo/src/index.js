import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { loadData } from './actions/products';

/**
 * 定义一个reducers
 * @param {*} state 默认值
 * @param {*} action 用来确定数据的改变形式
 */
function counterReducer(state = { count: 1, user: 'admin' }, action) {
  console.log(action);
  switch (action.type) {
    case 'add':
      return { ...state, ...{ count: state.count + action.payload.step } };
    default:
      return state;
  }
}

function productReducer(state = { page: 1, list: [], name: '' }, action) {
  switch (action.type) {
    case 'load_products':
      return {
        ...state,
        ...{ list: action.payload.list, page: state.page + 1 },
      };
    default:
      return state;
  }
}

//combineReducers可以合并多个reducers
const rootReducers = combineReducers({
  productReducer,
  counterReducer,
});

/**
 * 通过createStore创建一个store
 */
const store = createStore(
  rootReducers,
  //使用compose把多个插件进行合并
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
console.log(store);
console.log(store.getState());
//如果要改变数据只能使用dispatch做派发
//action包含两个参数
//   参数一 type  必须要有type属性，标志一下reducer做什么事情
//   参数二playload   表示参数，可选
store.dispatch({
  type: 'add',
  payload: {
    step: 3,
  },
});
console.log(store.getState());

//此处定义了一个action 这个action用来处理redux的异步操作
// 从action会返回一个function对象作为返回值
//在dispatch派发调用的时候会默认的把store中的dispatch属性传递过来
// const loadData = function(payload) {
//   console.log(payload);
//   return dispatch => {
//     setTimeout(function() {
//       dispatch({
//         type: 'load_products',
//         payload: {
//           list: [
//             {
//               name: 'ipone',
//               price: 6999,
//             },
//             {
//               name: 'red mi',
//               price: 2999,
//             },
//           ],
//         },
//       });
//     }, 2000);
//   };
// };

// const loadData = payload => dispatch => {
//   setTimeout(function() {
//     dispatch({
//       type: 'load_products',
//       payload: {
//         list: [{ name: '香蕉', price: 15 }, { name: '苹果', price: 19 }],
//       },
//     });
//   }, 2000);
// };

// const loadData = payload => async dispatch => {
//   const result = await getProducts();
//   dispatch({
//     type: 'load_products',
//     payload: {
//       list: result.data.products,
//     },
//   });
// };

store.dispatch(loadData({ name: '123', price: 18 }));
//通过Provider组件把store数据绑定在应用程序里面
//在组件中使用的时候使用connect把state中的数据映射到组建的props中
//组件会多出几个属性dispatch，通过他可以在此派发action用来改变数据
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
