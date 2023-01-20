import {SERVER} from "../../config";

const signIn = {
  endpoint: `API/signing`,
  method: 'POST',
  status: 200,
}

const signUp = {
  endpoint: `API/signup`,
  method: 'POST',
  status: 200,
}

const changeEmail = {
  endpoint: `API/changeEmail`,
  method: 'PUT',
  status: 201,
}
const changePassword = {
  endpoint: `API/changePassword`,
  method: 'PUT',
  status: 201,
}

const changeAvatar = {
  endpoint: "API/changeAvatar",
  method: 'PUT',
  status: 201
}


const changeVerticalReading = {
  endpoint: "API/changeVerticalReading",
  method: 'PUT',
  status: 200
}

const changeShockingContent = {
  endpoint: "API/changeShockingContent",
  method: 'PUT',
  status: 200
}
export default {
  //PUT
  changeEmail,
  changePassword,
  changeAvatar,
  changeVerticalReading,
  changeShockingContent,

  //POST
  signIn,
  signUp
};
