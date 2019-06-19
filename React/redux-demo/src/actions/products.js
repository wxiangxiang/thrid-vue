import { getProducts } from '../services/products';
export const loadData = payload => async dispatch => {
  const result = await getProducts({ page: payload });
  dispatch({
    type: 'load_products',
    payload: {
      list: result.data.products,
    },
  });
};
