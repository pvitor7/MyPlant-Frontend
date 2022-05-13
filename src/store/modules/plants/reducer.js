import PERSONAL_PLANTS from './actionTypes';

function dataPlantsReducer(action, state = []) {
  switch (action.type) {
    case PERSONAL_PLANTS:
      return action.myPlants;

    default:
      return state;
  }
}

export default dataPlantsReducer;
