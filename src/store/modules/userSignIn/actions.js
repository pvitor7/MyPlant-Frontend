import { USER_SIGNIN } from './actionTypes';

const signIn = (token, user) => ({ type: USER_SIGNIN, info: { token, user } });

export default signIn;
