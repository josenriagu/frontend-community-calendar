import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';

export const Auth = {
  isAuthenticated() {
    const eventAuthToken = Cookie.get('event-auth-token');
    if (!eventAuthToken) return false;

    const decodedToken = jwtDecode(eventAuthToken);

    if (!decodedToken
      || !decodedToken.expiresIn
    ) return false;

    return decodedToken.expiresIn > Date.now() / 1000;
  },
};
