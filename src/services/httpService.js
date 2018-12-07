import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Login is error", error);
    toast.error("unexpected error");
  }

  return Promise.reject(error);
});

let request = new XMLHttpRequest();

export default {
  get: axios.get,
  post: axios.post,
  request: request
};
