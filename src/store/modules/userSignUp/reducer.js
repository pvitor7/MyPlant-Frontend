import { USER_SIGNUP } from "./actionTypes";

const defaultState = {
  user: {},
};

const signUpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      const { user } = action;

      return { ...state, user };

    default:
      return state;
  }
};

export default signUpReducer;
