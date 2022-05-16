import PERSONAL_PLANTS from './actionTypes';

function personalPlants(plants) {
  return { type: PERSONAL_PLANTS, myPlants: plants };
}

export default personalPlants;
