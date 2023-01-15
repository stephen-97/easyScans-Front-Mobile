import {SERVER} from "../../config";

const Request = (METHOD, endpoint, objectJson, token) => {
  console.log(METHOD)
  return fetch(`http://${SERVER}/${endpoint}`, {
    method: METHOD,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: objectJson
  })
   .then(response => response.json().then(data => ({status: response.status, body: data})))
}

export {
  Request
}