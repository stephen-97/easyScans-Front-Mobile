import jwt_decode from 'jwt-decode';

export const userObjectStorage = (jwt) => {
    const decodedJwt = jwt_decode(jwt);
    decodedJwt['token'] = jwt;
    return decodedJwt;
}