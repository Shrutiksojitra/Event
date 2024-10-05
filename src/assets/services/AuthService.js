import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/auth/';

const register = (email, password) => {
  return axios.post(API_URL + 'register', { email, password });
};

const login = (email, password) => {
  return axios.post(API_URL + 'login', { email, password }).then((response) => {
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
