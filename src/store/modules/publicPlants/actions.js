/*eslint-disable*/
import PUBLIC_PLANTS from "./actionTypes";

function publicPlants(allPlants) {
    return { type: PUBLIC_PLANTS, plants:allPlants}
}

export default publicPlants