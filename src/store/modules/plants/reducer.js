/* eslint-disable */
import PERSONAL_PLANTS from './actionTypes';

function dataPlantsReducer(state = {},action) {
  switch (action.type) {
    case PERSONAL_PLANTS:
      console.log(action.myPlants)
      return action.myPlants;

    default:
      return state;
  }
}

export default dataPlantsReducer;
