import { toast } from 'react-toastify';
import api from '../../../services/api';

import { logIn, signUp } from './actions';

const logInThunk = (userData) => (dispatch) => {
  api
    .post('/login', userData)
    .then((response) => {
      localStorage.setItem('token', JSON.stringify(response.data.accessToken));
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast.success('Login realizado com sucesso!');
      setTimeout(() => {
        dispatch(logIn(response.data.accessToken, response.data.user));
      }, 2000);
    })
    .catch(() => toast.error('Email ou senha inválidos'));
};

const signUpThunk = (registerData) => (dispatch) => {
  console.log('dentro do thunk sign up');
  api
    .post('/signup', registerData)
    .then((response) => {
      toast.success('Conta criada com sucesso!');
      console.log(registerData);
      setTimeout(() => {
        dispatch(signUp(response.data));
      }, 2000);
    })
    .catch(() => toast.error('Ops! Esse email já existe.'));
};

export { logInThunk, signUpThunk };
