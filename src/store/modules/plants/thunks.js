/* eslint-disable */
import axios from "axios";
import personalPlants from "./actions";

//Pegar plantas do usuário da API
function getPrivatePlants(dispatch) {
  const id = JSON.parse(localStorage.getItem("myPlantId"));
  const token = JSON.parse(localStorage.getItem("myPlantToken"));

  axios
    .get(`https://my-plants-app.herokuapp.com/users/${id}?_embed=plants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // console.log(res.data.plants)
      dispatch(personalPlants(res.data.plants));
    })
    .catch((error) => console.log(error));
}

//Adicionar Plantas a Personal plants

export function addPrivatePlants(dispatch, plant) {
  const token = JSON.parse(localStorage.getItem("myPlantToken"));

  axios
    .post(`https://my-plants-app.herokuapp.com/plants`, plant, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(addMyGarden(plant));
    })
    .catch((err) => console.log(err));
    getPrivatePlants(dispatch);
}

//Deletar planta do usuário da API
export function deletePrivatePlants(id, dispatch) {
  const token = JSON.parse(localStorage.getItem("myPlantToken"));

  axios
    .delete(`https://my-plants-app.herokuapp.com/plants/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      getPrivatePlants(dispatch);
      // console.log(res)
    })
    .catch((error) => console.log(error));
  console.log(`apaguei ela ${id}`);
}

export default getPrivatePlants;
