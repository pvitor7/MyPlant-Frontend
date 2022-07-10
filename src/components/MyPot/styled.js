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

    .div--cardImage {
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

    .buttonInfo {
      top: 6px;
      right: 7px;
      border-radius: 100px;
      border: 1px solid var(--white);
      width: 30px;
      height: 30px;
      color: var(--blue);
      background-color: var(--white);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      :active {
        box-shadow: inset 0 0 1em var(--lightGrey);
      }
    }

    .h3--PlantTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      color: #b7d251;
      font-family: "Inter", sans-serif;
      width: 60%;
      font-weight: 500;
      font-size: 17px;
      height: 13%;
      text-align: center;
    }

    .p--scientificName {
      color: black;
      height: 1%;
      font-size: 15px;
      font-family: "Nunito";
      font-style: italic;
      color: #56b297;
      text-align: center;
    }

    .div--CardButtons {
      display: flex;
      width: 95%;
      height: 25%;
      justify-content: space-around;
      align-items: center;
    }

    .buttonComment {
      color: var(--blue);
      width: 30px;
      height: 30px;
      border-radius: 100px;
      border: 1px solid var(--white);
      background-color: var(--white);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      :active {
        box-shadow: inset 0 0 1em var(--lightGrey);
      }
    }

    .button--BiPencil {
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
      
      :active {
        box-shadow: inset 0 0 1em var(--lightGrey);
      }
    }

  }
`;

export default PlantCard;
