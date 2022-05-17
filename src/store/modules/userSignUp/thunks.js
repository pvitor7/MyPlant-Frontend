/* eslint-disable */
import { toast } from 'react-toastify';
import api from '../../../services/api';
import signUp from './actions';

const signUpThunk = (registerData) => (dispatch) => {
  api
    .post('/signup/', registerData)
    .then((response) => {
      dispatch(signUp(response.data));
      toast.success('Conta criada com sucesso!');
    })
    .catch((err) => toast.error('Ops! Esse email já existe.'));
};

export default signUpThunk;
