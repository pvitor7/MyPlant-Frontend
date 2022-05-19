/* eslint-disable */
import api from "../../../services/api"

const commentsThunk = (id) => {
    
    api.get(`/comments?public_plantId=${id}`)
    .then((res) => console.log(res))
    .catch(err => console.log(err))
}

export { commentsThunk };
