import {SERVER} from "../../config";

const Request = (VERB, endpoint, objectJson, token) => {
  return fetch(`http://${SERVER}/${endpoint}`, {
    method: 'PUT',
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