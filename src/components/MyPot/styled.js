/* eslint-disable */

import styled from "styled-components";

const PlantCard = styled.div`
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 280px;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0px 5px 5px gray;

    .img--PlantImage {
      border-radius: 15px 15px 0 0;
      height: 50%;
      width: 100%;
      object-fit: cover;
      box-shadow: 0px 1px 5px gray;
      
    }

    .h3--PlantTitle {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      color: #56b297;
      font-family: "Inter", sans;
      width: 60%;
      font-weight: 1;
      font-size: 17px;
      height: 3%;
    }

    .p--scientificName{
      color: black;
      font-size: 16px;
      height: 1%;
    }

    .div--CardButtons {
      display: flex;
      width: 50%;
      height: 25%;
      justify-content: space-between;
      align-items: center;
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
