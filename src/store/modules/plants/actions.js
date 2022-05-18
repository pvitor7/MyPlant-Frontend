/* eslint-disable */
import PERSONAL_PLANTS, { ADD_PLANT } from './actionTypes';

function personalPlants(plants) {
  return { type: PERSONAL_PLANTS, myPlants: plants };
}

export default personalPlants;

export function addMyGarden(plant) {
  return { type: ADD_PLANT, myPlant: plant };
}
