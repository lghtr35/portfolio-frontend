import axios from "axios";
import { SERVER_URL } from "./conf";

export const putRequest = (url, data = {}, headers = {}) => {
  return axios.put(SERVER_URL + url, data, { headers }).then((response) => {
    if (response.data.error) {
      throw response.data.error;
    } else {
      return response.data;
    }
  });
};

export const getRequest = (url, headers = {}) => {
  return axios.get(SERVER_URL + url, { headers }).then((response) => {
    if (response.data.error) {
      throw response.data.error;
    } else {
      return response.data;
    }
  });
};

export const postRequest = (url, headers = {}, params = {}, body = {}) => {
  return axios
    .post(SERVER_URL + url, body, { headers, params })
    .then((response) => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data;
      }
    });
};

export const deleteRequest = (url, headers = {}, params = {}, body = {}) => {
  return axios
    .delete(SERVER_URL + url, body, { headers, params })
    .then((response) => {
      if (response.data.error) {
        throw response.data.error;
      } else {
        return response.data;
      }
    });
};

function InterceptorsRequest(config) {
  config.headers["Content-Type"] = "application/json";
  console.log(
    "API_REQUEST:\n URL:",
    config.url,
    "\nType:",
    config.method,
    "\nAuthorization:",
    config.headers.Authorization,
    "\nBody:",
    JSON.stringify(config.data)
  );
  return config;
}

const _handleCommonError = (errorResponse) => {
  // TODO: Handle Error
  if (errorResponse.message) {
  }
};

const _interceptorsResponseError = (error) => {
  if (error && error.response && error.response.status)
    switch (error.response.status) {
      case 401:
        // removeToken();
        // will redirect to "login" when Unauthorised error will raise
        // navigateFromOutside.navigate('LoginScreen', 'Login');
        //  const dispatch = store.dispatch;
        //  dispatch({ type: "LOGOUT_WITH_JWT", payload: {} });
        break;
      default:
        _handleCommonError(error);
        break;
    }
  else {
    //  alert(error);
  }
};

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    return InterceptorsRequest(config);
  },
  (error) => {
    console.log("API_REQUEST_ERROR:", error);
    _interceptorsResponseError(error);
    return Promise.reject(error.response);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log(
      "\n\nAPI_RESPONSE:\nStatus:",
      // response.status,
      "\nData:",
      response.data,
      "\n\n"
    );
    return response;
  },
  (error) => {
    console.log("API_RESPONSE_ERROR", JSON.stringify(error.response));
    _interceptorsResponseError(error);
    return Promise.reject(error.response);
  }
);
