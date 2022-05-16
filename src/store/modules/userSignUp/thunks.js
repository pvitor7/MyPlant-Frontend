import api from "../../../services/api";
import { signUp } from "./actions";

import { toast } from "react-toastify";


export const signUpThunk = (registerData) => (dispatch) => {

  api
    .post("/signup/", registerData)
    .then((response) => {
      dispatch(signUp(response.data));
      toast.success("Conta criada com sucesso!");
    })
    .catch((err) => toast.error("Ops! Ocorreu um erro."));
};
