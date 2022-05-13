/* eslint-disable */
import React, { useState } from "react";
import MyPot from "../../components/MyPot";
import { favouritePlantas, plantas } from "./data";
import { MyGarden, PersonalGarden, MyWish } from "./styled";

function PersonalPlants() {

  const user = "Maria";

  const [GardenOpen, setGardenOpen] = useState(80);
  const [wishOpen, setWishOpen] = useState(12);
  const listaVazia = [];

  const[displayGardenList, setDisplayGardenList] = useState('flex');
  const[displayWishList, setWishList] = useState('none');


  return (
    <PersonalGarden>
      <h2>Boas vindas, {user}!</h2>
      <div className="div--MyGardens--area">
        <MyGarden open={GardenOpen} display={displayGardenList} onClick={() =>{
          setGardenOpen(80)
          setWishOpen(12)
          setDisplayGardenList('flex')
          setWishList('none')
        }}>
          <h4 className="h4--MyGarden">
            Seu jardim
            {
            GardenOpen === 12 && 
            <button
              onClick={() => console.log("Lista mais")}
              className="button--MyGarden"
            >
              +
            </button>
            }
          </h4>

          <div className="div--MyGarden--list" >
            {plantas.map((plant, index) => {
              return <MyPot key={index} plant={plant} />;
            })}
          </div>
        </MyGarden>

        <MyWish open={wishOpen} display={displayWishList}  onClick={() =>{
          setGardenOpen(12)
          setWishOpen(80)
          setDisplayGardenList('none')
          setWishList('flex')
        }}>
          <h4 className="MyWish--h4">Lista de Desejos
          {
            wishOpen === 12 && 
            <button
              onClick={() => {
                console.log("Lista mais")}}
              className="button--MyWish"
            >
              +
            </button>
            }
          </h4>
          <div className='div--MyWish--list' display={displayWishList}>
            {favouritePlantas.map((plant, index) => {
               return <MyPot plant={plant} key={index} />;
            })}
          </div>
        </MyWish>
      </div>
    </PersonalGarden>
  );
}

export default PersonalPlants;
