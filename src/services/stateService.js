import http from "./httpService";

const apiEndPoint = "http://localhost:3001/states";

// function stateUrl(id) {
//   return `${apiEndPoint}/${id}`;
// }

export function getStates() {
  return http.get(apiEndPoint);
}
