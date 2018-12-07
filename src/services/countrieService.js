import http from "./httpService";

const apiEndPoint = "http://localhost:3001/countries";

// function countyUrl(id) {
//   return `${apiEndPoint}/${id}`;
// }

export function getCountries() {
  return http.get(apiEndPoint);
}
