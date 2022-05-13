import { USER_SIGNUP, USER_SIGNIN } from "./actionTypes";

// const token = localStorage.getItem("token") || "";

const defaultState = {
  user: {},
  // token: "",
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      const { user } = action;

      return { ...state, user };

    // case USER_SIGNIN:
    //     const { token } = action;

    //     return { ...state, token };

    default:
      return state;
  }
};

export default userReducer;
