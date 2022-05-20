/* eslint-disable */

import styled from 'styled-components';

export const PersonalGarden = styled.div`
  @media (min-width: 320px) {
    width: calc(100vw -30px);
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    h2 {
      display: flex;
      align-items: center;
      justify-items: center;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 25px;
      color: #b7d251;
      height: 50px;

      margin: 22px 0;
    }

    .div--MyGardens--area {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 640px;
      height: 80%;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (min-width: 940px) {
    .div--MyGardens--area {
      width: 95%;
      max-width: none;
      max-width: 1080px;
      flex-direction: row;
      gap: 50px;
      align-items: flex-start;
    }

    h2 {
      max-width: 1024px;
      width: 95%;
    }
  }
`;

export const MyGarden = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    width: calc(100% - 60px);
    height: ${(props) => `${props.open}%`};
    background-color: #56b297;
    box-shadow: 0px 5px 5px gray;
    padding: 10px;

    .div--MyGardens--area {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .div--MyGarden--list {
      /* display: flex; */
      display: ${(props) => `${props.display}`};
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      margin-top: ${(props) => `${props.marginG}px`};
      overflow: auto;
      gap: 20px;
      justify-content: center;
      padding-bottom: 30px;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .div--MyGarden--list::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .div--MyGarden--list {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    .h4--MyGarden {
      color: #ffffff;
      font-size: 25px;
      font-family: "Inter", sans-serif;
      width: 75%;
      max-width: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      text-shadow: darkgray 1rem;
      text-shadow: 0.1em 0.1em 0.4em black;
      gap: 10px;
    }

    .button--MyGarden {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0px 5px 5px gray;
      color: #56b297;
      font-size: 30px;
      font-weight: bold;
    }
  }

  @media (min-width: 940px) {
    max-width: 100%;
    height: 90%;
    padding-right: 15px;
    padding-left: 15px;

    .div--MyGarden--list {
      overflow: auto;
      display: flex;
    }

    .button--MyGarden {
      display: none;
    }
  }
`;

export const MyWish = styled.div`
  @media (min-width: 320px) {
    display: flex;
    width: 85%;
    max-width: 280px;
    width: calc(100% - 60px);
    background-color: #56b297;
    border-radius: 15px 15px 0 0;
    height: ${(props) => `${props.open}%`};
    align-items: center;
    box-shadow: 0px 5px 5px gray;
    margin-top: 10px;
    flex-direction: column;
    padding: 10px;

    .MyWish--h4 {
      color: #ffffff;
      font-size: 25px;
      font-family: "Inter", sans-serif;
      width: 90%;
      max-width: 250px;
      display: flex;
      justify-content: center;
      text-shadow: darkgray 1rem;
      text-shadow: 0.1em 0.1em 0.4em black;
      gap: 10px;
      margin: 10px;
    }

    .div--MyWish--list {
      /* display: flex; */
      display: ${(props) => `${props.display}`};
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      overflow: auto;
      gap: 20px;
      justify-content: center;
      padding-bottom: 20px;
      margin-top: ${(props) => `${props.marginW}px`};
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .div--MyWish--list::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .div--MyWish--list {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    .button--MyWish {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0px 5px 5px gray;
      color: #56b297;
      font-size: 30px;
      font-weight: bold;
    }
  }
  @media (min-width: 940px) {
    height: 90%;
    margin-top: 0px;
    border-radius: 15px;

    .div--MyWish--list{
      display: flex;
    }

    .button--MyWish {
      display: none;
    }
  }
`;
