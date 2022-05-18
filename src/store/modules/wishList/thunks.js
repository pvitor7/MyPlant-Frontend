/* eslint-disable */

import api from "../../../services/api";
import personalWish, { deletelWish } from "./actions";

//Postar favoritos na API

export const wishList = (dispatch) => {
  console.log("get wishList");
  api
    .get("/wish_list")
    .then((res) => {
      console.log(res.data);
      dispatch(personalWish(res.data));
    })
    .catch((err) => console.log(err));
};

export const myWishAdd = (dispatch, plant) => {
  console.log(plant);

  api
    .post("/wish_list", plant)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  wishList(dispatch);
};

export const deleteWish = (id, dispatch) => {
    
    api.delete(`/wish_list/${id}`)
    .then((res) => {
        wishList(dispatch);
        console.log(res)
    })
    .catch((error) => console.log(error));
}