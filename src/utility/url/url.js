import {SERVER} from "../../../config";

export const url = {
    avatarUrl : (avatarName) => {
        return `http://${SERVER}/public/avatars/${avatarName}`
    }
}