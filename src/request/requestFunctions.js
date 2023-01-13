import {SERVER} from "../../config";

const Request = (VERB, endpoint, bodyObject, authorization) => {
  return fetch(`http://${SERVER}/API/API_2`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
   .then(response => response.json().then(data => ({status: response.status, body: data})))
}

export {
  Request
}