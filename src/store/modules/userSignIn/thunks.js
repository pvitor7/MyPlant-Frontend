import api from '../../../services/api';
import { signIn } from './actions';

import { toast } from 'react-toastify';

export const signInThunk = (userData) => (dispatch) => {
  api
    .post('/login/', userData)
    .then((response) => {
      localStorage.setItem('token', JSON.stringify(response.data.accessToken));
      localStorage.setItem('user', JSON.stringify(response.data.user));

      dispatch(signIn(response.data.accessToken, response.data.user));
    })
    .catch((err) => toast.error('Email ou senha inválidos'));
};
