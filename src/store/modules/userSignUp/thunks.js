import api from "../../../services/api";
import { signUp } from "./actions";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const signUpThunk = (registerData) => (dispatch) => {
  const history = useHistory();

  api
    .post("/signup/", registerData)
    .then((response) => {
      dispatch(signUp(response.registerData));
      toast.success("Conta criada com sucesso!");
      return history.push("/login");
    })
    .catch((err) => toast.error("Ops! Ocorreu um erro."));
};
