// Add the import for the necessary technology from jwt-decode to check that the token is no expired and assign then values in local storage.
import decode from 'jwt-decode';

// Add a new class called Auth service for decoding the jwt tokens, with different methods for various use cases.
class AuthService {
  getProfile() { // Add getProfile to return a profile based on the decoded token.
    return decode(this.getToken());
  }
  loggedIn() { // Add loggedIn to check if there is a non-expired token, indication the user is currently logged in.
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }
  isTokenExpired(token) { // Add isTokenExpired which finds out a tokens expiration time set by the server, checks it in seconds with Date.now against the expiration value, and if the expiration time is less than the current time the token is removed from local storage.
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // Add a return so that if the token has not passed its expiration time, false is removed and the token will not expire.
    return false;
  }
  getToken() { // Add a getToken method that will return a token from local storage based on the local storage key.
    return localStorage.getItem('id_token');
  }
  login(idToken) { // Add a login method that will set a user a token in local storage when they log in, as well as assign the window location back to the homepage.
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
  logout() { // Add a logout method which will remove a users token from local storage and then reload the page that they logged out from.
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

// Add the new AuthService as the default export for the auth.js file.
export default new AuthService();
