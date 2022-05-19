/* eslint-disable */

import WISH_LIST from './actionsTypes';

function personalWish(plants) {
  return { type: WISH_LIST, myWishList: plants };
}

export { 
  personalWish
};
