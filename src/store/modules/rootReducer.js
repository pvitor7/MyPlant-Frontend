import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import dataPlantsReducer from './plants/reducer';
import wishListReducer from './wishList/reducer';
import dataPublicPlantsReducer from './publicPlants/reducer';

export default combineReducers({
  user: userReducer,
  userPlants: dataPlantsReducer,
  userWishList: wishListReducer,
  userPublic: dataPublicPlantsReducer,
});
