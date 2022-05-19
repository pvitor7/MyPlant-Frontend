/* eslint-disable */

import WISH_LIST from './actionsTypes';

function wishListReducer(state = [], action) {

  switch (action.type) {
    case WISH_LIST:
      const newWishList = [...action.myWishList];
      return newWishList;

    default:
      return state;
  }
}

export default wishListReducer;
