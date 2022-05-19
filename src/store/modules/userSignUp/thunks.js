/* eslint-disable */
import { toast } from 'react-toastify';
import api from '../../../services/api';
import signUp from './actions';

const signUpThunk = (registerData) => (dispatch) => {
  api
    .post('/signup', registerData)
    .then((response) => {
      toast.success('Conta criada com sucesso!');
      setTimeout(()=>{
        dispatch(signUp(response.data));
      },2000)
    })
    .catch((err) => toast.error('Ops! Esse email já existe.'));
};

export default signUpThunk;
