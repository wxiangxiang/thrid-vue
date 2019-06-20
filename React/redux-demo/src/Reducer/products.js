export function productReducer(
  state = { page: 1, list: [], name: '' },
  action
) {
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
