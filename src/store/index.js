import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataPlantsReducer from './modules/plants/reducer';

const reducers = combineReducers({ myPlants: dataPlantsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
