/* eslint-disable */
import PERSONAL_PLANTS, { ADD_PLANT } from './actionTypes';

function dataPlantsReducer(state = {}, action) {
  switch (action.type) {
    case PERSONAL_PLANTS:
      // console.log(action.myPlants)
      return action.myPlants;

    case ADD_PLANT:
      return action.myPlant;

    default:
      return state;
  }
}

export default dataPlantsReducer;
