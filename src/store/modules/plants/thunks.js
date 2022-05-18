/* eslint-disable */
import api from "../../../services/api";
import personalPlants from "./actions";

//Pegar plantas do usuário da API
function getPrivatePlants(dispatch) {
  const {id} = JSON.parse(localStorage.getItem("user"));

  api
    .get(`/users/${id}?_embed=plants`)
    .then((res) => {
      dispatch(personalPlants(res.data.plants));
    })
    .catch((error) => console.log(error));
}

//Adicionar Plantas a Personal plants
export function addPrivatePlants(dispatch, plant) {

  api
    .post('/plants', plant)
    .then((res) => {
      console.log(res);
      dispatch(addMyGarden(plant));
    })
    .catch((err) => console.log(err));
  getPrivatePlants(dispatch);
}

//Editar planta do usuário pelo modal
export function editMyPlant(plant, dispatch) {


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

  api
    .delete(`/plants/${id}`)
    .then((res) => {
      getPrivatePlants(dispatch);
    })
    .catch((error) => console.log(error));
  console.log(`apaguei ela ${id}`);
}

export default getPrivatePlants;
