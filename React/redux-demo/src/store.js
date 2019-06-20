import { productReducer } from './Reducer/products';
import { counterReducer } from './Reducer/counter';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//combineReducers可以合并多个reducers
const rootReducers = combineReducers({
  productReducer,
  counterReducer,
});

/**
 * 通过createStore创建一个store
 */
export default createStore(
  rootReducers,
  //使用compose把多个插件进行合并
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
