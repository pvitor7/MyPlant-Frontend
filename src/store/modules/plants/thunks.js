/* eslint-disable */
import axios from "axios";
import api from "../../../services/api";
import personalPlants from "./actions";

//Pegar plantas do usuário da API
function getPrivatePlants(dispatch) {
  const id = JSON.parse(localStorage.getItem("myPlantId"));
  const token = JSON.parse(localStorage.getItem("token"));

  axios
    .get(`https://my-plants-app.herokuapp.com/users/${id}?_embed=plants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(personalPlants(res.data.plants));
    })
    .catch((error) => console.log(error));
}

//Adicionar Plantas a Personal plants
export function addPrivatePlants(dispatch, plant) {
  const token = JSON.parse(localStorage.getItem("token"));

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

//Editar planta do usuário pelo modal
export function editMyPlant(plant, dispatch) {

  const token = JSON.parse(localStorage.getItem("token"));

  api
    .patch(`/plants/${plant.id}`, plant)
    .then((res) => {
      console.log('deu certo a requisição');
      console.log(res);
      getPrivatePlants(dispatch);
    })
    .catch((err) => console.log(err));
}

//Deletar planta do usuário da API
export function deletePrivatePlants(id, dispatch) {
  const token = JSON.parse(localStorage.getItem("token"));

  axios
    .delete(`https://my-plants-app.herokuapp.com/plants/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      getPrivatePlants(dispatch);
    })
    .catch((error) => console.log(error));
  console.log(`apaguei ela ${id}`);
}

export default getPrivatePlants;
