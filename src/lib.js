export const APIURL = "https://jsonplaceholder.typicode.com/users";

export function callApi(reqMethod, url, data, responseHandler) {
  let options;

  if (reqMethod === "GET" || reqMethod === "DELETE") {
    options = {
      method: reqMethod,
      headers: { 'Content-Type': 'application/json' }
    };
  } else {
    options = {
      method: reqMethod,
      headers: { 'Content-Type': 'application/json' },
      body: data
    };
  }

  fetch(url, options)
    // send request in async
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + '-' + response.statusText);
      return response.json();
    })
    // receive response
    .then((res) => responseHandler(res))
    .catch((err) => alert(err)); // handle error
}
