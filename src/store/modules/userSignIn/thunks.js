import api from "../../../services/api";
import { signIn } from "./actions";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const signInThunk = (userData) => (dispatch) => {
  
    api
      .post("/login/", userData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data.user)
        dispatch(signIn(response.data.accessToken, response.data.user));

      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  
};
