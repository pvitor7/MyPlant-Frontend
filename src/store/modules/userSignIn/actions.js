import { USER_SIGNIN } from "./actionTypes";

export const signIn = (token, user) => ({ type: USER_SIGNIN, info: {token, user} });

