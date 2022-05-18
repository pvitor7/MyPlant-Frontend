/* eslint-disable */

import styled from "styled-components";

export const ModalInfo = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 102vh;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info--page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      max-width: 400px;
      height: 80%;
      border-radius: 15px;
      background-color: white;
      font-family: "Nunito", sans-serif;
    }

    .div--image {
      height: 30%;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }

    .button--CloseModal {
      position: absolute;
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
      font-size: 30px;
      font-weight: bold;
      margin: 5px;
    }

    .info--image {
      width: 100%;
      border-radius: 15px 15px 0 0;
      object-fit: cover;
    }

    .div--descriptions {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      border: solid 2px #56b297;
      margin: 4px 2px;
      height: 67%;
      width: 90%;
      align-items: center;
      justify-content: space-between;
    }

    label {
      display: flex;
      background-color: #56b297;
      width: 70%;
      height: 22px;
      border-radius: 3px;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 120%;
    }

    .div--name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 15%;
      color: #b7d251;
      margin-top: 10px;
    }


    .input--editName{
    
      bottom: auto;
      width: 90%;
      border: none;
      border-radius: 10px;
      background-color: #F2F2F4;
      color: gray;
      padding: 3px;
      margin-top: 15px;
      min-height: 40px;
    }

    p {
      display: flex;
      justify-content: center;
      font-size: 18px;
      margin: 10px;
      width: 90%;
    }

    .p--info {
      height: 80%;
      overflow: auto;
      /* overflow: hidden;
      text-overflow: ellipsis; */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .p--info::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .p--info {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }



    .div--scientificName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 15%;
      width: 100%;
      color: #b7d251;
    }

    

    .div--information {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-height: 55%;
      text-align: center;
      color: #b7d251;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .input--editInfo{
      bottom: auto;
      width: 90%;
      border: none;
      border-radius: 10px;
      background-color: #F2F2F4;
      color: gray;
      padding: 3px;
      margin-top: 10px;
      min-height: 100px;
    }

  
    .div--basicCare {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      color: #b7d251;
      margin-bottom: 10px;
      height: 15%;
    }

    .div--editDeleteButton{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    .button--SalvarAlteracoes{
      width: 90%;
      max-width: 250px;
      height: 60px;
      font-size: 22px;
      color: #ffffff;
      background-color: #56b297;
      border: none;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0em 0.1em 0.4em gray;
      margin: 10px;
    }

    .button--RemoverPlanta{
      width: 90%;
      max-width: 250px;
      height: 60px;
      font-size: 22px;
      color: #ffffff;
      background-color: #b7d251;
      border: none;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0em 0.1em 0.4em gray;
      margin: 10px;
    }
  }
`;
