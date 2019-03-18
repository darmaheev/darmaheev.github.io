import axios from "axios";

const init = (tokens, onErrorInterceptor) => {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";

  setOnErrorInterceptor(onErrorInterceptor);
  setToken(tokens);
};

const setOnErrorInterceptor = (onErrorInterceptor) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 403) {
        onErrorInterceptor();
      }
    }
  );
};

const setToken = (tokens) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + tokens.access_token;
};

export default {
  init,
  setOnErrorInterceptor,
  setToken
};
