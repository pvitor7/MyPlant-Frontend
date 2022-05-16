/*eslint-disable*/
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  padding-bottom: 65px;
  
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 90%;
  }

  div {
    display: flex;
    gap: 50px;
    align-items: center;
    
  }

  div > h2 {
    width: 370px;
  }

  div > img {
    min-width: 100px;
    max-width: 200px;
    object-fit: contain;
    align-self: center;
  }

  .lightGreen {
    color: #98B13A;
    font-family: 'Nunito';
    font-weight: bold;
    font-size: 32px;
    align-self: left;
  }

  .darkGreen {
    color: #56B297;
    font-family: 'Nunito';
    font-weight: bold;
    font-size: 32px;
    align-self: right;
  }

  @media screen and (min-width: 768px) {
    height: 80vh;

    div {
      justify-content: center;

    }
  }

  @media screen and (min-width: 1024px){
  
    height: 80vh;

    div{
      justify-content: space-between;
    }

    .revert {
      flex-direction: row-reverse;
    }

    section {
      width: 50%;
    }
  }
  
`;

export const Footer = styled.div`
  position: fixed;
  top: 91%;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  width: 100%;
  height: 10vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  

  div {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 90%;
    height: 40%;
    gap: 15px;
  }

  input {
    color: #B2B2B5;
    width: 70%;
    border-radius: 4px;
    border: none;
    background-color: #E6E6E8;
    font-family: 'Nunito';
    padding: 10px;
  }

  button {
    background-color: #56B297;
    border: none;
    border-radius: 4px;
    color: #FFFFFF;
    cursor: pointer;
  }


  @media screen and (min-width: 768px){

    input {
        width: 20%;
      }
  }
  
`

export const ContainerPlants = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120vh;
  padding-top: 10px;

  .divButtons {
    display: none;
  }

  .divButtons > button {
    background-color: #56B297;
    border: 1px solid #56B297;
    border-radius: 4px;
    color: #FFFFFF;
    filter:drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));

    font-family: 'Inter';
    font-size: 24px;
    font-weight: 400;

    height: 47px;
    width: 138px;
    cursor: pointer;
  }

  ul {
    width: 85%;
    background-color: #56B297;
    border-radius: 4px;
    height: 120vh;
    padding: 0;
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 39px;
    
  }
  
  li {
    list-style: none;
    position: relative;

    width: 70%;
    height: 222px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    gap: 20px;
    
  }

  img {
    height: 40%;
    width: 100%;
    background-color: #E6E6E8;
  }

  .buttonInfo {
    position: absolute;
    top: 6px;
    right: 7px;
    border-radius: 100px;
    border: 1px solid #FFFFFF;
    width: 31px;
    height: 31px;

    color: #56B297;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  h4 {
    color: #98B13A;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter ';
  }

  .buttonComment {
    color: #56B297;
    border-radius: 100px;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 80vh;

    .divCards {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    li {
      width: 177px;

    }

    .divButtons {
      display: flex;
      justify-content: center;
      gap: 15px;
      width: 80%;
    }

  }

  @media screen and (min-width: 1024px){
  
    height: 80vh;

  }
`


