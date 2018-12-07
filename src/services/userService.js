import http from "./httpService";

const apiEndPoint = "http://localhost:3001/users";

export function register(user) {
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}

export function getUsers() {
  return http.get(apiEndPoint);
}

export function saveUser(user) {
  // return http.post(apiEndPoint, user);
  http.request.open("POST", apiEndPoint, true);
  http.request.setRequestHeader("Content-Type", "application/json");
  return http.request.send(user);
}
