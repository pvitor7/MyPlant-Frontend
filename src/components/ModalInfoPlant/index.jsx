/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalInfo  from './styled';
import {
  // addPrivatePlants,
  // deletePrivatePlants,
  editMyPlant,
} from '../../store/modules/plants/thunks';

function ModalInfoPlant({ setModal, plant, infoPlant = false }) {
  const [newEditPlant, setNewEditPlant] = useState({
    userId: plant.userId,
    sci_name: plant.sci_name,
    imgUrl: plant.imgUrl,
    basic_care: 'precisa de muito sol',
    color: plant.color,
    id: plant.id,
  });

  const dispatch = useDispatch();

  return (
    <ModalInfo>
      <div className="info--page">
        <div className="div--image">
          <button
            type="button"
            className="button--CloseModal"
            onClick={() => setModal(false)}
          >
            x
          </button>

          <img className="info--image" src={plant.imgUrl} />
        </div>
        <div className="div--descriptions">
          <div className="div--name">
            <label className="label--Name">Nome:</label>
            {infoPlant === false && (
              <p>{plant.name}</p>
            )}
            {infoPlant && (
            <input className="input--editName" onChange={(event) => setNewEditPlant({ ...newEditPlant, name: event.target.value || plant.name })} />
            )}
          </div>

          {infoPlant === false && (
            <div className="div--scientificName">
              <label className="label--editScientificName">
                Nome Científico:
              </label>
              <p>
                {' '}
                {plant.sci_name}
                {' '}
              </p>
            </div>
          )}

          <div className="div--information">
            <label className="label--info">Informações:</label>
            {infoPlant === false ? (<p className="p--info">{plant.info}</p>)
              : (<input className="input--editInfo" onChange={(event) => setNewEditPlant({ ...newEditPlant, info: event.target.value || plant.info })} />)}
          </div>

          {infoPlant === false && (
            <div className="div--basicCare">
              <label className="label--basicCare">Cuidados básicos:</label>
              <p>{plant.basic_care}</p>
            </div>
          )}

          {infoPlant && (
          <div className="div--editDeleteButton">
            <button
              type="button"
              className="button--SalvarAlteracoes"
              onClick={() => {
                editMyPlant(newEditPlant, dispatch);
                setModal(false);
              }}
            >
              Salvar alterações
            </button>
            <button
              type="button"
              className="button--RemoverPlanta"
              onClick={() => setModal(false)}
            >
              Fechar
            </button>
          </div>
          )}
        </div>
      </div>
    </ModalInfo>
  );
}

export default ModalInfoPlant;
