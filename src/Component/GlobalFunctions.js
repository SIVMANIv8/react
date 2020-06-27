import axios from 'axios';

export const login = user => {
  return axios.post('login',user)
  .then(response => {
    return response;
  })
  .catch(err => {
    return {error: err.message};
  })
}

export const verify = token => {
  return axios.get('identity/'+token.token)
  .then(response => {
    return response
  })
  .catch(err => {
    return {error: err.message}
  })
}