/* eslint-disable */
import { BiFile, BiHeart, BiPencil } from 'react-icons/bi';
import React, { useState } from 'react';
import { MdOutlineComment } from 'react-icons/md';
import { FaInfo } from 'react-icons/fa';
import PlantCard from './styled';
import {
  addPrivatePlants,
  deletePrivatePlants,
} from '../../store/modules/plants/thunks';
import ModalInfoPlant from '../ModalInfoPlant';
import { wishListDelete, wishListAdd } from '../../store/modules/wishList/thunks';
import { commentsThunk } from '../../store/modules/coments/thunks';
import ModalCommentPlant from '../ModalCommentPlant';

function MyPot({
  dispatch,
  plant,
  myChild = false,
  addMyWish = false,
  homePage = false,
  onComment,
  setIdPlantComment
}) {
  const [modal, setModal] = useState(false);
  const [infoPlant, setInfoPlant] = useState(true);
  const [comment, setComment] = useState(false);
  const [modalComment, setModalComment] = useState(false);

  return (
    <PlantCard idPlant={plant.id}>
      {modal && (
        <ModalInfoPlant
          setModal={setModal}
          plant={plant}
          infoPlant={infoPlant}
          comment={comment}
        />
      )}

      {modalComment && (<ModalCommentPlant onComment={onComment} setModalComment={setModalComment} plant={plant} />) }

      <div className="div--cardImage">
        {/* {homePage == true && (
            <button className="buttonInfo" onClick={() => {
              setModal(true)
              setInfoPlant(false);
              }}>
              <FaInfo />
            </button>
            )} */}
        <img className="img--PlantImage" src={plant.imgUrl} />
      </div>
      <h3 className="h3--PlantTitle">{plant.name}</h3>
      <p className="p--scientificName">
        (
        {plant.sci_name}
        )
      </p>
      <div className="div--CardButtons">
        {myChild && (
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
        )}

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

        {/* {homePage && (

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

        {addMyWish
          || (myChild && (
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
          ))}

        {homePage == true && (
          <>
            <button
              className="buttonInfo"
              onClick={() => {
                setModal(true);
                setInfoPlant(false);
              }}
            >
              <FaInfo />
            </button>

            {(
              <button
                onClick={() => {
                  console.log('informações do card');
                  
                  const sendPlant = {
                    "userId": JSON.parse(localStorage.getItem('user')).id,
                    "name": plant.name,
                    "sci_name": plant.sci_name,
                    "imgUrl": plant.imgUrl,
                    "info": plant.info,
                    "basic_care": plant.basic_care,
                    "color": plant.color
                  }
                  console.log(sendPlant)

                  wishListAdd(dispatch, sendPlant);
                  commentsThunk(plant.id);
                }}
                className="button--Pot"
              >
                <BiHeart />
              </button>
            )}

            <button
              className="buttonComment"
              onClick={() => {
                setModalComment(true)
                onComment(true)
                setIdPlantComment(plant.id)

              }}
            >
              <MdOutlineComment />
            </button>
          </>
        )}
      </div>
    </PlantCard>
  );
}

export default MyPot;
