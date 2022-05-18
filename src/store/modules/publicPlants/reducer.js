/*eslint-disable*/
import PUBLIC_PLANTS from "./actionTypes";

function dataPublicPlantsReducer(state = [], action) {
    switch (action.type) {
        case PUBLIC_PLANTS:
            return action.plants

            default:
                return state
    }
}

export default dataPublicPlantsReducer