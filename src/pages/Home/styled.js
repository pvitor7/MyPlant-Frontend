/*eslint-disable*/
import styled from 'styled-components';

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
    overflow-x: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ::-webkit-scrollbar {
      background: var(--Grey-3);
      border-radius: 3px;
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--Grey-2);
      border-radius: 3px;
    }
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


  h4 {
    color: var(--green);
    font-size: 16px;
    font-weight: 500;
    font-family: 'Inter';
  }

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
`;
