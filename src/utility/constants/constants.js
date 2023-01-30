import {SERVER} from "../../../config";

export const constants = {
    avatarUrl : (avatarName) => {
        return `http://${SERVER}/public/avatars/${avatarName}`
    }
}