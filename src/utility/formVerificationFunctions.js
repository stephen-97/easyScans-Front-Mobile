
export const samesPasswords = (firstPassword, secondPassword) => {
    return firstPassword === secondPassword;
}

export const correctPassword = (password) => {
    return password.length >= 8 && /\d/.test(password) ;
}

export const correctEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}

export const correctUsername = (username) => {
    return username.length > 4 && username.length < 15
}