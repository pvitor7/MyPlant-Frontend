/* eslint-disable */
import { toast } from 'react-toastify';
import api from '../../../services/api';
import signIn from './actions';

const signInThunk = (userData) => (dispatch) => {
  api
    .post('/login', userData)
    .then((response) => {
      localStorage.setItem('token', JSON.stringify(response.data.accessToken));
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast.success('Login realizado com sucesso!');
      setTimeout(()=>{
        dispatch(signIn(response.data.accessToken, response.data.user));
      }, 2000)
    })
    .catch((err) => toast.error('Email ou senha inválidos'));
};

export default signInThunk;
