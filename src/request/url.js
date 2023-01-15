import {SERVER} from "../../config";

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
  method: 'POST',
  status: 201
}

const changeShockingContent = {
  endpoint: "API/changeShockingContent",
  method: 'POST',
  status: 201
}
export default {
  //PUT
  changeEmail,
  changePassword,
  changeAvatar,
  changeVerticalReading,
  changeShockingContent
};
