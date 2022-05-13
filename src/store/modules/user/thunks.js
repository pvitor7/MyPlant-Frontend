import api from "../../../services/api";
import { signUp } from "./actions";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const signUpThunk = (registerData) => (dispatch) => {
  const history = useHistory();

  api
    .post("/signup/", registerData)
    .then((response) => {
      dispatch(signUp(response.data));
      toast.success("Conta criada com sucesso!");
      return history.push("/login");
    })
    .catch((err) => toast.error("Ops! Ocorreu um erro."));
};

// export const signInThunk = (userData) => (dispatch) => {
//   const history = useHistory();
//   api
//     .post("/login/", userData)
//     .then((response) => {
//       const { token, user } = response.data;

//       localStorage.setItem("@MyPlant:token", JSON.stringify(token));
//       localStorage.setItem("@MyPlant:user", JSON.stringify(user));
//       return history.push("/home");
//     })
//     .catch((err) => toast.error("Email ou senha inválidos"));

//      dispatch(signIn)
// };
