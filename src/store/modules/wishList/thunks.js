// /* eslint-disable */

import api from '../../../services/api';
import { personalWish } from './actions';

// Postar favoritos na API

const wishList = (dispatch) => {
  api
    .get('/wish_list')
    .then((res) => {
      dispatch(personalWish(res.data));
    })
    .catch((err) => console.log(err));
};

const wishListAdd = (dispatch, plant) => {
  api
    .post('/wish_list', plant)
    .then(() => wishList(dispatch));
  // .catch((err) => console.log(err));
};

const wishListDelete = (id, dispatch) => {
  api.delete(`/wish_list/${id}`)
    .then(() => wishList(dispatch));
  // .catch((error) => console.log(error));
};

export { wishList, wishListAdd, wishListDelete };
