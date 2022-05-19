import { USER_LOGIN, USER_SIGNUP } from './actionTypes';

const logIn = (token, user) => ({ type: USER_LOGIN, info: { user, token } });
const signUp = (user) => ({ type: USER_SIGNUP, info: { user } });

export { logIn, signUp };
