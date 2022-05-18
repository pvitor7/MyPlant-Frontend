/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import MyPot from "../../components/MyPot";
import getPrivatePlants from "../../store/modules/plants/thunks";
import { wishList } from "../../store/modules/wishList/thunks";
import { plantas } from "./data";
import { MyGarden, PersonalGarden, MyWish } from "./styled";

function PersonalPlants() {

  const { token, user } = useSelector((state) => state.userSignIn);

  const dispatch = useDispatch();
  const plantsUser = useSelector((state) => state.userPlants);
  const wishUserList = useSelector((state) => state.userWish);
  
  const [GardenOpen, setGardenOpen] = useState(80);
  const [wishOpen, setWishOpen] = useState(12);
  
  const [displayGardenList, setDisplayGardenList] = useState("flex");
  const [displayWishList, setWishList] = useState("none");

  // function loginProvisorio() {
  //   const data = { email: "kenzinho@mail.com", password: "123456" };
    
  //   axios
  //   .post("https://my-plants-app.herokuapp.com/login", data)
  //   .then((resposta) => {
  //     console.log(resposta.data);
  //     localStorage.setItem(
  //       "token",
  //         JSON.stringify(resposta.data.accessToken)
  //       );
  //       localStorage.setItem(
  //         "myPlantId",
  //         JSON.stringify(resposta.data.user.id)
  //         );
  //     })
  // }

  // useEffect(() => {

    // const token = JSON.parse(localStorage.getItem("token"));
    // const minhasPlantas = [...plantas]
    
    //Função para cadastrar plantas na API, elas estão sumindo

    // minhasPlantas.forEach((element) => {
    //   console.log(element)
    //   axios
    //     .post(`https://my-plants-app.herokuapp.com/plants`, element, {
    //         headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
    // })

  //   loginProvisorio();
  // }, []);

  useEffect(() => {
    getPrivatePlants(dispatch);
    wishList(dispatch);
  }, []);
  
   
  return (
    <PersonalGarden>
      {!token && <Redirect to='/signup'/>}

      <h2>Boas vindas, {user.name}!</h2>
      <div className="div--MyGardens--area">
        <MyGarden
          open={GardenOpen}
          display={displayGardenList}
          onClick={() => {
            setGardenOpen(80);
            setWishOpen(12);
            setDisplayGardenList("flex");
            setWishList("none");
          }}
          >
          <h4 className="h4--MyGarden">
            Seu jardim
            {GardenOpen < wishOpen && (
              <button
                className="button--MyGarden"
              >
                +
              </button>
            )}
          </h4>

          <div className="div--MyGarden--list">
            {
              plantsUser.length  > 0 && (           
               plantsUser.map((plant, index) => {
              return <MyPot dispatch={dispatch} myChild key={index} plant={plant} />;
            })
            )
            }
          </div>
        </MyGarden>

        <MyWish
          open={wishOpen}
          display={displayWishList}
          onClick={() => {
            setGardenOpen(12);
            setWishOpen(80);
            setDisplayGardenList("none");
            setWishList("flex");
          }}
        >
          <h4 className="MyWish--h4">
            Favoritos
            {wishOpen < GardenOpen && (
              <button
                className="button--MyWish"
              >
                +
              </button>
            )}
          </h4>
          <div className="div--MyWish--list">
            {
            wishUserList?.length > 0 &&
            wishUserList?.map((plant, index) => {
              return <MyPot dispatch={dispatch} addMyWish plant={plant} key={index} />;
            })}
          </div>
        </MyWish>
      </div>
    </PersonalGarden>
  );

}

export default PersonalPlants;
