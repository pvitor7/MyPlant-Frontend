import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import dataPlantsReducer from './plants/reducer';

export default combineReducers({
  user: userReducer,
  userPlants: dataPlantsReducer,
});
