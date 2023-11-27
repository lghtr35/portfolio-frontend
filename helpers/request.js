import { SERVER_URL } from "./conf";

export const putRequest = (url, data = {}, config = {}, headers = {}) => {
  return putRequestBase(url, JSON.stringify(data), config, {
    "content-type": "application/json",
    ...headers,
  });
};

export const putRequestBase = (url, data = {}, config = {}, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    body: data,
    method: "PUT",
    mode: "cors",
    ...config,
  })
    .then((response) => {
      console.log("PUT ", response);
      if (!response.ok) {
        throw response;
      }
      return response.json;
    })
    .catch(async (err) => {
      console.log(await err);
    });
};

export const getRequest = (url, config = {}, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    mode: "cors",
    ...config,
  })
    .then((response) => {
      console.log("GET ", response);
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch(async (err) => {
      console.log(await err);
    });
};

export const postRequest = (url, data = {}, config = {}, headers = {}) => {
  return postRequestBase(url, JSON.stringify(data), config, {
    "content-type": "application/json",
    ...headers,
  });
};

export const postRequestBase = (url, data = {}, config = {}, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    body: data,
    method: "POST",
    mode: "cors",
    ...config,
  })
    .then((response) => {
      console.log("POST ", response);
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch(async (err) => {
      console.log(await err);
    });
};

export const deleteRequest = (url, config = {}, headers = {}) => {
  return fetch(SERVER_URL + url, {
    headers: headers,
    method: "DELETE",
    mode: "cors",
    ...config,
  })
    .then((response) => {
      console.log("DELETE ", response);
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch(async (err) => {
      console.log(await err);
    });
};
