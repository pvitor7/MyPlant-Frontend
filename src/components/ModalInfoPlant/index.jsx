/* eslint-disable */
import "./styled";
import { ModalInfo } from "./styled";

function ModalInfoPlant({ setModal, plant }) {
  console.log("cheguei2");

  console.log(plant);
  return (
    <ModalInfo>
      <div className="info--page">
        <div className="div--image">
          <button className="button--CloseModal" onClick={() => setModal(false)}>x</button>

          <img className="info--image" src={plant.imgUrl} />
        </div>
        <div className="div--descriptions">
          <div className="div--name">
            <label className="label--Name">Nome:</label>
          <p>{plant.name}</p>
          </div>


          <div className="div--scientificName">
            <label className="label--scientificName">Nome Científico:</label>
            <p>{plant.sci_name}</p>
          </div>

          <div className="div--information">
            <label className="label--info">Informações:</label>
            <p className="p--info">{plant.info}</p>
          </div>

          <div className="div--basicCare">
            <label className="label--basicCare">Cuidados básicos:</label>
            <p>{plant.basic_care}</p>
          </div>
        </div>
      </div>
    </ModalInfo>
  );
}

export default ModalInfoPlant;
