import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';

export const Auth = {
  isAuthenticated(value) {
    const token = Cookie.get('comcal-event-token');
    if (!token) return false;
    const decodedToken = jwtDecode(token);
    if (!decodedToken || !decodedToken.id || !decodedToken.exp) return false;
    if (value === 'exp') return decodedToken.exp > Date.now() / 1000;
    if (value === 'id') return decodedToken.id;
    return null;
  },
};
