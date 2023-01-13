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


export default {
  //PUT
  changeEmail,
  changePassword
};
