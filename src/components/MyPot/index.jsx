/* eslint-disable */
import "./styled";
import { BiFile } from "react-icons/bi";
import PlantCard from "./styled";
import { addPrivatePlants, deletePrivatePlants } from "../../store/modules/plants/thunks";
import ModalInfoPlant from "../ModalInfoPlant";
import { useState } from "react";

function MyPot({ dispatch, plant, myChild = false, addMyWish = false }) {

  const [modal, setModal] = useState(false);

  return (
    <PlantCard idPlant={plant.id}>

      {modal && (<ModalInfoPlant setModal={setModal} plant={plant}/>)}
      <img className="img--PlantImage" src={plant.imgUrl} />
      <h3 className="h3--PlantTitle">{plant.name}</h3>
      <p className="p--scientificName">({plant.sci_name})</p>
      <div className="div--CardButtons">
        {myChild && (
          <button
            onClick={() => {
              console.log('informações do card')
              setModal(true);
            }}
            className="button--Pot"
          >
            <BiFile />
          </button>
        )}

        {addMyWish && (<button onClick={() => {
          console.log(plant)
          addPrivatePlants(dispatch, plant);
          console.log('Adicionar as minhas')
          }}  
          className="button--Pot">+</button>)}
        
        <button  className="button--Pot" onClick={() => {
          deletePrivatePlants(plant.id, dispatch);
          }}>
          x
        </button>
      </div>
    </PlantCard>
  );
}

export default MyPot;
