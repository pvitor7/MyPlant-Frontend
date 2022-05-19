/* eslint-disable */
import { USER_LOGIN, USER_SIGNUP } from './actionTypes';

let token = JSON.parse(localStorage.getItem('token')) || '';
let user = JSON.parse(localStorage.getItem('user')) || '';

const defaultState = {
  token,
  user,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      ({ token, user } = action.info);
      return { token, user };

    case USER_SIGNUP:
      ({ user } = action.info);
      ({ token } = state);

      return { token, user };

    default:
      return state;
  }
};

export default userReducer;
