/* eslint-disable */
import styled from 'styled-components';

const ModalComments = styled.div`
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

    .comment--page {
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

    .div--image--comment {
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

    .comment--image {
      width: 100%;
      height: 100%;
      border-radius: 15px 15px 0 0;
      object-fit: cover;
    }

    .div--descriptions {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      border: solid 2px #56b297;
      background-color: #ffffff;
      margin: 4px 2px;
      height: 67%;
      width: 90%;
      align-items: center;
      /* justify-content: space-between; */
    }

    ul{
      display: flex;
      align-items: flex-start;
      justify-content: c;
      width: 100%;
      height: 90%;
      margin: 0px;
      padding: 10px 5%;
      overflow: scroll;
      background-color: var(--white);
      box-shadow: none;

    }


    .li--comment{
      flex-direction: column;
      display: flex;
      width: 100%;
      align-items: center;
      padding: 5px;
      justify-content: space-around;
      border: solid 1px lightgray;
      min-height: 100px;
      height: auto;
    }

    .comment-user{
      padding: 15px;
      border-radius: 50px;
      margin: 0px 5px;
    }

    .label--comment{
      display: flex;
      flex-wrap: wrap;
      color: #b7d251;
      font-family: "Inter", sans-serif;
      align-items: center;
      font-weight: 500;
      width: 90%;
      font-size: 17px;
      text-align: center;
      margin: 5px;
    }

    p{
      display: flex;
      color: black;
      min-height: 40%;
      font-size: 15px;
      font-family: "Nunito";
      font-style: italic;
      text-align: center;
      width: 90%;
      flex-wrap: wrap;
      margin: 0px;
    }

    .div--comment--send{
      display: flex;
      width: 100%;
      min-height: 50px;
      justify-content: space-around;
      align-items: center;
    }

    .comment--send{
      width: 60%;
    }

     }
`;

export default ModalComments;
