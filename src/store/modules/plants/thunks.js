/* eslint-disable */
import axios from 'axios';

function getPrivatePlants() {
  
    axios
    .get(`https://my-plants-app.herokuapp.com/users/:${id}?_embed=plants`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

export default getPrivatePlants;
