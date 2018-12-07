import http from "./httpService";

const apiEndPoint = "http://localhost:3001/cities";

// function citiesUrl(id) {
//   return `${apiEndPoint}/${id}`;
// }

export function getCities() {
  return http.get(apiEndPoint);
}
