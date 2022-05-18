/* eslint-disable */

import styled from "styled-components";

const PlantCard = styled.div`
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 280px;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0px 5px 5px gray;

    .div--cardImage{ 
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }

    .img--PlantImage {
      border-radius: 15px 15px 0 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      box-shadow: 0px 1px 5px gray;
    }


    .h3--PlantTitle {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      color: #b7d251;
      font-family: "Inter", sans-serif;
      width: 60%;
      font-weight: 500;
      font-size: 17px;
      height: 3%;
    }

    .p--scientificName {
      color: black;
      height: 1%;
      font-size: 15px;
      font-family: "Nunito";
      font-style: italic;
      color: #56b297;
    }

    .div--CardButtons {
      display: flex;
      width: 95%;
      height: 25%;
      justify-content: space-around;
      align-items: center;
      
    }


    .button--BiPencil{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0px 3px 5px gray;
      color: #56b297;
      font-size: 30px;
      font-weight: bold;
    }

    .button--Pot {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0px 3px 5px gray;
      color: #56b297;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default PlantCard;

