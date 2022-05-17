/* eslint-disable */

import api from "../../../services/api"


//Postar favoritos na API

export const myWishAdd = (plant) => {
    console.log(plant);

    api.post('/wish_list', plant)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

