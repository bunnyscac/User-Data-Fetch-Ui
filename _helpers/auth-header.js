export function authHeader() {
    // return authorization header with jwt token which saves the token in a sessions form so that when the logged in user comes back to the application, he does not have to login again.
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}