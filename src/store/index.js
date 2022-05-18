/* eslint-disable */

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import userReducer from "./modules/user/reducer";
import dataPlantsReducer from "./modules/plants/reducer";
import myWishList from "./modules/wishList/reducer";


const reducers = combineReducers({
  userRegister: userReducer,
  userPlants: dataPlantsReducer,
  userWish: myWishList
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
const token = JSON.parse(localStorage.getItem('token'));