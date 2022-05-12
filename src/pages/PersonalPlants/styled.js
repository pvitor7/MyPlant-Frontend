/* eslint-disable */

import styled from "styled-components";

export const PersonalGarden = styled.div`
  @media (min-width: 320px) {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    

    h2 {
      display: flex;
      align-items: center;
      justify-items: center;
      font-family: "Inter", sans;
      font-weight: 1;
      font-size: 20px;
      color: #b7d251;
      margin: 10px;
      height: 10%;
    }

    .div--MyGardens--area {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90%;
      align-items: center;
      margin: 0;
      justify-content: space-between;
    }
  }
`;

export const MyGarden = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    width: 75%;
    height: 80%;
    min-height: 365px;
    background-color: #56b297;

    .div--MyGardens--area {
      display: flex;
      width: 100vw;
      flex-direction: column;
      align-items: center;
    }

    .div--MyGarden--list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      overflow: scroll;
    }

    .h4--MyGarden {
      color: #ffffff;
      font-size: 25px;
      font-family: "Inter", sans-serif;
      width: 75%;
      display: flex;
      justify-content: space-between;
      margin: 15px 5px;
      text-shadow: darkgray 1rem;
      text-shadow: 0.1em 0.1em 0.4em black;
    }
  }
`;

export const MyWish = styled.div`
  @media (min-width: 320px) {
    display: flex;
    min-width: 80vw;
    background-color: #56b297;
    border-radius: 15px 15px 0 0;
    height: 12%;
    justify-content: center;
    align-items: center;

    .MyWish--h4 {
      color: #ffffff;
      font-size: 20px;
      font-family: "Inter", sans;
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0;
      text-shadow: 0.1em 0.1em 0.4em black;
    }
  }
`;
