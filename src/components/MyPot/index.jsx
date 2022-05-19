/* eslint-disable */
import { BiFile, BiPencil } from 'react-icons/bi';
import React, { useState } from 'react';
import PlantCard from './styled';
import {
  addPrivatePlants,
  deletePrivatePlants,
} from '../../store/modules/plants/thunks';
import ModalInfoPlant from '../ModalInfoPlant';
import { wishListDelete, wishListAdd } from '../../store/modules/wishList/thunks';

function MyPot({
  dispatch, plant, myChild = false, addMyWish = false,
}) {
  const [modal, setModal] = useState(false);
  const [infoPlant, setInfoPlant] = useState(true);
  const token = JSON.parse(localStorage.getItem('token'));

  return (
    <PlantCard idPlant={plant.id}>
      {modal && (
        <ModalInfoPlant
          setModal={setModal}
          plant={plant}
          infoPlant={infoPlant}
        />
      )}
      <div className="div--cardImage">
        <img className="img--PlantImage" src={plant.imgUrl} />
      </div>
      <h3 className="h3--PlantTitle">{plant.name}</h3>
      <p className="p--scientificName">
        (
        {plant.sci_name}
        )
      </p>
      <div className="div--CardButtons">
        {
        token && myChild && (
          <button
            type="button"
            className="button--BiPencil"
            onClick={() => {
              setInfoPlant(true);
              setModal(true);
            }}
          >
            <BiPencil />
          </button>
        )
}

        {myChild && (
          <button
            type="button"
            onClick={() => {
              setInfoPlant(false);
              setModal(true);
            }}
            className="button--Pot"
          >
            <BiFile />
          </button>
        )}

        {/* {myChild && (
          <button
            onClick={() => {
              console.log("informações do card");
              wishListAdd(dispatch, plant);

            }}
            className="button--Pot"
          >
            <BiHeart />
          </button>
        )} */}

        {addMyWish && (
          <button
            type="button"
            onClick={() => {
              addPrivatePlants(dispatch, plant);
            }}
            className="button--Pot"
          >
            +
          </button>
        )}

        <button
          type="button"
          className="button--Pot"
          onClick={() => {
            addMyWish
              ? wishListDelete(plant.id, dispatch)
              : deletePrivatePlants(plant.id, dispatch);
          }}
        >
          x
        </button>
      </div>
    </PlantCard>
  );
}

export default MyPot;
