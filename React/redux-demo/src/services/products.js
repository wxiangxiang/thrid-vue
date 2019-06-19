import { get } from '../utils/request';
import { serverUrl } from '../utils/config';

export function getProducts(params) {
  return get(`${serverUrl}/api/v1/products`, {
    params,
  });
}
