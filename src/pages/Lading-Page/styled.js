/* eslint-disable */
import styled from "styled-components";

const Container = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    color: #56b297;
    border-radius: 4px;
  }
  max-height: 100%;
  main {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    height: 100%;
  }
  .bloco-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    text-align: center;
  }
  .bloco-1 h2 {
    color: #98b13a;
  }

  .bloco-1 button {
    background-color: #56b297;
    max-width: 100%;
    width: 50%;
    max-height: 100%;
    height: 50px;
    border: none;
    color: white;
    font-size: 20px;
    margin-top: 40px;
  }
  .bloco-1 img {
    max-width: 150px;
  }
  .bloco-2 {
    max-width: 70%;
  }

  @media (max-width: 815px) {
    .bloco-2 {
      display: none;
    }

    .bloco-1 {
      margin: 10px 5px;
      border-radius: 8px;
    }
  }
`;
export default Container;
