/* eslint-disable */
import PERSONAL_PLANTS, { ADD_PLANT } from './actionTypes';

function personalPlants(plants) {
  return { type: PERSONAL_PLANTS, myPlants: plants };
}


function addMyGarden(plant) {
  return { type: ADD_PLANT, myPlant: plant };
}

export { personalPlants, addMyGarden}