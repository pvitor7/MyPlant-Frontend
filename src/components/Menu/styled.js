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
  max-width: 350px;
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    margin: auto 0;
    font-size: 24px;
    line-height: 33px;
    height: 15vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  header p {
    height: 24px;
    font-weight: 700;
    margin: 0 auto;
    color: #98b13a;
  }

  main {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
  }

  main ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
  }
  main li {
    border-radius: 0%;
    border-bottom: 1px solid black;
    max-width: 50%;
    list-style: none;
    cursor: pointer;
    margin-bottom: 15px;
  }
  

  main div {
    margin: 0 auto;
    font-size: 18px;
    max-width: 44%;
  }

  main div button {
    border: none;
    background-color: transparent;
    font-weight: 400;
    height: 24px;
    cursor: pointer;
    color: #98b13a;
  }
  .buttonreturn {
    border: none;
    background-color: transparent;
    margin-left: 250px;
    margin-top: 70px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .buttonreturn img{
    width: 25px;
    height: 23px;
  }

  @media (max-width:500px){

    header p {
    font-size: 18px;
  }

  }
`;
export default Container;
