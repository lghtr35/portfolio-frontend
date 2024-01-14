import { SERVER_URL } from "./conf";

export const putRequest = (
  url,
  options = { data: {}, config: {}, headers: {}, serverUrl: "" }
) => {
  return putRequestBase(url, {
    data: JSON.stringify(options.data),
    config: options.config,
    headers: {
      "content-type": "application/json",
      ...options.headers,
    },
    serverUrl: options.serverUrl,
  });
};

export const putRequestBase = (
  url,
  options = { data: {}, config: {}, headers: {}, serverUrl }
) => {
  const endpoint =
    options.serverUrl !== undefined
      ? options.serverUrl + url
      : SERVER_URL + url;

  console.log(endpoint, options);
  return fetch(endpoint, {
    headers: options.headers,
    body: options.data,
    method: "PUT",
    mode: "cors",
    ...options.config,
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

export const getRequest = (
  url,
  options = { config: {}, headers: {}, serverUrl: "" }
) => {
  const endpoint =
    options.serverUrl !== undefined
      ? options.serverUrl + url
      : SERVER_URL + url;

  console.log(endpoint, options);
  return fetch(endpoint, {
    headers: options.headers,
    mode: "cors",
    ...options.config,
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

export const postRequest = (
  url,
  options = { data: {}, config: {}, headers: {}, serverUrl: "" }
) => {
  return postRequestBase(url, {
    data: JSON.stringify(options.data),
    config: options.config,
    headers: {
      "content-type": "application/json",
      ...options.headers,
    },
    serverUrl: options.serverUrl,
  });
};

export const postRequestBase = (
  url,
  options = { data: {}, config: {}, headers: {}, serverUrl: "" }
) => {
  const endpoint =
    options.serverUrl !== undefined
      ? options.serverUrl + url
      : SERVER_URL + url;

  console.log(endpoint, options);
  return fetch(endpoint, {
    headers: options.headers,
    body: options.data,
    method: "POST",
    mode: "cors",
    ...options.config,
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

export const deleteRequest = (
  url,
  options = { config: {}, headers: {}, serverUrl: "" }
) => {
  const endpoint =
    options.serverUrl !== undefined
      ? options.serverUrl + url
      : SERVER_URL + url;

  console.log(endpoint, options);
  return fetch(endpoint, {
    headers: options.headers,
    method: "DELETE",
    mode: "cors",
    ...options.config,
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
