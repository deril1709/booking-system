// Save token in Local Storage
export function setTokenInLocalStorage(token) {
    localStorage.setItem('token', token);
}

// Get token from Local Storage
export function getTokenFromLocalStorage() {
    return localStorage.getItem('token');
}