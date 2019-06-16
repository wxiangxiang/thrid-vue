import { get } from '../utils/request';

export function getProduct(page) {
  return get('https://api.cat-shop.penkuoer.com/api/v1/products', {
    params: {
      page,
    },
  });
}
