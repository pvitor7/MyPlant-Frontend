/* eslint-disable */
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import userReducer from './modules/user/reducer';
import dataPlantsReducer from './modules/plants/reducer';
import dataPublicPlantsReducer from './modules/publicPlants/reducer';


const reducers = combineReducers({ userPlants: dataPlantsReducer, userRegister: userReducer, userPublic: dataPublicPlantsReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
const token = JSON.parse(localStorage.getItem('token'));