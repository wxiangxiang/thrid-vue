import { get, post } from "../utils/request";

export function getPeople(param) {
  return get("http://localhost:3000/people", {
    param
  });
}
export function savePeople(data) {
  return post("http://localhost:3000/people", data);
}
//....接着还可写更多操作
