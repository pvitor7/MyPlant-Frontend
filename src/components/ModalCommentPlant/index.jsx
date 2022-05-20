/* eslint-disable */
import React, { useEffect, useState } from "react";
import ModalComments from "./styled";
import { editMyPlant } from "../../store/modules/plants/thunks";
import { BiUserCircle } from "react-icons/bi";
import api from "../../services/api";

function ModalCommentPlant({ onComment, setModalComment, plant }) {
  const token =
    // JSON.parse(localStorage.getItem("token")) ||
    false;

  const [newEditPlant, setNewEditPlant] = useState({
    userId: plant.userId,
    sci_name: plant.sci_name,
    imgUrl: plant.imgUrl,
    basic_care: "precisa de muito sol",
    color: plant.color,
    id: plant.id,
  });

  const [commentsPlants, setCommentsPlants] = useState([]);

  function seiLa() {
    const id = plant.id;

    api
      .get(`/comments?public_plantId=${id}`)
      .then((res) => {
        console.log(res.data);
        setCommentsPlants(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    seiLa();
  }, []);

  return (
    <ModalComments>
      <div className="comment--page">
        <div className="div--image--comment">
          <button
            type="button"
            className="button--CloseModal"
            onClick={() => {
              setModalComment(false)
              onComment(false)
            }}
          >
            x
          </button>
          <img className="comment--image" src={plant.imgUrl} />
        </div>

        <div className="div--descriptions">
          <ul>
            {
              commentsPlants.map((comment) => {
                
                return(
            
              <li key={comment.id}  className="li--comment">
              <label className="label--comment"><BiUserCircle/>{
              // comment.owner.name
              "pessoa"
              }</label>
                <p>{comment.msg}</p>
                </li>
              
              )})
            }

          </ul>

          {/* <div className="div--comment--send">
          <input className="comment--send" />
          <button>Enviar</button>
          </div> */}
        </div>
      </div>
    </ModalComments>
  );
}

export default ModalCommentPlant;
