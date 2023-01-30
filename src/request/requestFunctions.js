import {SERVER} from "../../config";

const Request = (METHOD, endpoint, objectJson, token) => {
  const controller = new AbortController()

// 5 second timeout:

  setTimeout(() => controller.abort(), 5000)

  return fetch(`http://${SERVER}/${endpoint}`, {
    method: METHOD,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: objectJson,
    signal: controller.signal
  })
   .then(response => response.json().then(data => ({status: response.status, body: data})))
}

export {
  Request
}