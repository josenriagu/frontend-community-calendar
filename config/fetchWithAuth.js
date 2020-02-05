import fetch from 'isomorphic-fetch';
import Cookie from 'js-cookie';

export default function fetchWithAuth(url, config) {
  if (!config) return new Error('config is required as second argument');

  const token = Cookie.get('comcal-event-token');
  // eslint-disable-next-line quote-props
  const headers = { 'Content-Type': 'application/json', 'authorization': token };


  const requestConfig = { ...config };

  requestConfig.headers = { ...config.headers, ...headers };

  return fetch(url, requestConfig);
}
