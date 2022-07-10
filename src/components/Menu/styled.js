/* eslint-disable */

import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    max-width: 0px;
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    bottom: 0;
    top: 0;
    left: 0;
    margin-left: 2px;
    z-index: 999;
    transition: max-width 0.75s;
    padding-right: 0px;
    padding-left: 0px;

    .menu-container {
      height: 90vh;
    }

    .m.ul {
      height: 60%;
    }

    * {
      box-sizing: border-box;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      color: #56b297;
      border-radius: 4px;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10%;
      margin: auto 0;
      font-size: 18px;
      line-height: 33px;
      height: 15vh;
      background-color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }
    header p {
      height: 24px;
      font-weight: 700;
      margin: 0 auto;
      color: #98b13a;
      opacity: 0;
    }

    main {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      overflow-y: auto;
      box-shadow: 0px 6px 8px 2px rgba(0, 0, 0, 0.47);
      background-color: white;
      margin-top: 5px;
    }
    main::-webkit-scrollbar {
      width: 0px;
    }
    .darkmode {
      width: 45px;
    }
    main ul {
      display: flex;
      flex-direction: column;
      width: 0%;
      margin: 30px 0px;
      transition: width 0.5s;
    }
    h4 {
      font-size: 12px;
    }
    main li {
      border-radius: 0%;
      border-bottom: 1px solid #98b13a;
      max-width: 70%;
      padding-bottom: 18px;
      list-style: none;
      cursor: pointer;
      margin-bottom: 20px;
      opacity: 0;
    }
    main li p {
      font-size: 20px;
      font-weight: 300;
    }

    .texto-2 {
      opacity: 0;
    }

    main div {
      text-align: center;
      margin: 0 60px;
      font-size: 16px;
      max-height: 30px;
      max-width: 45%;
    }

    main div button {
      border: none;
      background-color: transparent;
      font-weight: 400;
      height: 24px;
      cursor: pointer;
      color: #98b13a;
      margin-left: 5px;
    }
    .buttonreturn {
      border: none;
      background-color: transparent;
      margin-left: 250px;
      margin-top: 70px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .buttonreturn img {
      width: 25px;
      height: 23px;
    }

    @media (max-width: 1200px) {
      header p {
        font-size: 18px;
      }

      main {
        max-height: 400px;
        overflow-y: auto;
      }

      .buttonreturn {
        margin-left: 200px;
      }
    }
    &.active {
      max-width: 350px;
      padding-left: 1px;
      padding-right: 5px;
      ul {
        width: 100%;
      }
      li {
        opacity: 100;
        transition: opacity 2s;
      }
      header p {
        opacity: 100;
        transition: opacity 2s;
      }
      .texto-2 {
        opacity: 100;
        transition: opacity 2s;
      }
    }
  }
`;

export default Container;
