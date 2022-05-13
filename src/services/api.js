import axios from "axios"

const api = axios.create({
    baseURL: "https://my-plants-app.herokuapp.com",
});

export default api