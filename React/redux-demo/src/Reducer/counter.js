/**
 * 定义一个reducers
 * @param {*} state 默认值
 * @param {*} action 用来确定数据的改变形式
 */
export function counterReducer(state = { count: 1, user: 'admin' }, action) {
  console.log(action);
  switch (action.type) {
    case 'add':
      return { ...state, ...{ count: state.count + action.payload.step } };
    default:
      return state;
  }
}
