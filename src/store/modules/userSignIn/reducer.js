import { USER_SIGNIN } from "./actionTypes";
const token = localStorage.getItem("token") || "";

const defaultState = {
  token,
  user: {},
};

const signInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      const { token, user } = action.info;

      return { token, user };

    default:
      return state;
  }
};

export default signInReducer;
