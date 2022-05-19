/*eslint-disable*/
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105vh;
  padding-top: 30px;
  padding-bottom: 85px;
  
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 90%;
  }

  div {
    display: flex;
    justify-content: space-between;
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
    color: var(--green);
    font-family: 'nunito';
    font-weight: bold;
    font-size: 32px;
    align-self: left;
  }

  .darkGreen {
    color: var(--blue);
    font-family: 'nunito';
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
  background-color: var(--white);
  width: 100%;
  height: 10vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  

  div {
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: var(--grey);
    font-family: 'nunito';
    padding: 10px;
  }

  button {
    background-color: var(--blue);
    border: none;
    border-radius: 4px;
    width: 35px;
    height: 35px;
    color: var(--white);
    cursor: pointer;
  }


  @media screen and (min-width: 768px){

    input {
        width: 20%;
      }
  }
  
`;

export const ContainerPlants = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:10px;
  align-items: center;
  height: auto;
  padding-top: 20px;


  .divButtons {
    display: none;
  }

  .divButtons button {
    background-color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 4px;
    color: var(--white);
    filter:drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));

    font-family: 'Inter';
    font-size: 24px;
    font-weight: 400;

    height: 47px;
    width: 138px;
    cursor: pointer;
  }

  ul {
    width: 90%;
    background-color: var(--blue);
    border-radius: 4px;
    padding: 0;
    padding-top: 35px;
    margin-bottom: 100px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  li {
    list-style: none;
    position: relative;

    width: 70%;
    height: 222px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--white);
    border-radius: 4px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    gap: 20px;
    
  }

  img {
    height: 55%;
    width: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0px 0px; 
    background-color: var(--grey);
  }

  /* .buttonInfo {
    position: absolute;
    top: 6px;
    right: 7px;
    border-radius: 100px;
    border: 1px solid var(--white);
    width: 31px;
    height: 31px;

    color: var(--blue);
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  } */

  h4 {
    color: var(--green);
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter';
  }

  /* .buttonComment {
    color: var(--blue);
    width: 20px;
    height: 20px;
    border-radius: 100px;
    border: 1px solid var(--white);
    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  } */

  @media screen and (min-width: 768px) {
    height: 80vh;
    margin-top: 40px;
    

    .divCards {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
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
