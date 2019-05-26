import axios from "axios";

export function get(url, config) {
  return axios.get(url, config);
}

export function post(url, data, config) {
  return axios.post(url, data, config);
}

export function put(url, data, config) {
  return axios.put(url, data, config);
}

export function del(url, data, config) {
  return axios.delete(url, data, config);
}
