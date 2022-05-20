/* eslint-disable */
import api from "../../../services/api"

const commentsThunk = (id) => {
    
    api.get(`/comments?public_plantId=${id}`)
    .then((res) => console.log(res))
    .catch(err => console.log(err))
}


const postPublicComments = (id, comment) => {

    console.log(id)
    console.log(comment)

    // api.
    // post(`/comments/${id}`, comment)
    // .then((res) => console.log(res))
    // .catch(err => console.log(err))
}

export { commentsThunk, postPublicComments };
