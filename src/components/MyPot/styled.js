/* eslint-disable */

import styled from "styled-components";

const PlantCard = styled.div`
  @media (min-width: 320px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 230px;
    height: 290px;
    border-radius: 15px;
    background-color: #ffffff;
    margin-bottom: 15px;

    .img--PlantImage {
      border-radius: 15px 15px 0 0;
      height: 60%;
      width: 100%;
      object-fit: cover;
    }

    .h3--PlantTitle{
      color: #b7d251;
      font-family: "Inter", sans;
      font-weight: 1;
      font-size: 20px;
      height: 5%;
    }

    .div--CardButtons {
        display: flex;
        width: 100%;
        height: 35%;
        justify-content: space-around;
        align-items: center;
    }

    .button--Pot{
        width: 30px;
        height: 30px;
    }    


  }
`;
export default PlantCard;
