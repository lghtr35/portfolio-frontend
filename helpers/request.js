import { SERVER_URL } from "./conf";

export const putRequest = (url, data = {}, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    body: data,
    method: "PUT",
    mode: "cors",
  }).then((response) => {
    console.log("PUT ", response);
    if (!response.ok) {
      throw response.statusText;
    }
    return response.json;
  });
};

export const getRequest = (url, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    mode: "cors",
    cache: "no-cache",
  }).then((response) => {
    console.log("GET ", response);
    if (!response.ok) {
      throw response.statusText;
    }
    return response.json();
  });
};

export const postRequest = (url, headers = {}, data = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    body: data,
    method: "POST",
    mode: "cors",
  }).then((response) => {
    console.log("POST ", response);
    if (!response.ok) {
      throw response.statusText;
    }
    return response.json();
  });
};

export const deleteRequest = (url, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    method: "DELETE",
    mode: "cors",
  }).then((response) => {
    console.log("DELETE ", response);
    if (!response.ok) {
      throw response.statusText;
    }
    return response.json();
  });
};
