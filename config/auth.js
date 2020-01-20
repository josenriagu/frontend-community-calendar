import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';

export const Auth = {
  isAuthenticated() {
    const eventAuthToken = Cookie.get('comcal-event-token');
    if (!eventAuthToken) return false;

    const decodedToken = jwtDecode(eventAuthToken);

    if (!decodedToken || !decodedToken.id || !decodedToken.exp) return false;

    return decodedToken.exp > Date.now() / 1000;
  },
  getId() {
    const token = Cookie.get('comcal-event-token');
    if (!token) return false;
    const decodedToken = jwtDecode(token);
    return decodedToken.id;
  },
};
