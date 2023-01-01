import jwt_decode from 'jwt-decode';

export const decode_jwt = (jwt) => {
    return jwt_decode(jwt)
}