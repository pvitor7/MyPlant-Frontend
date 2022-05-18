/*eslint-disable*/
import styled from 'styled-components'

export const Footer = styled.div`
  position: fixed;
  top: 91%;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  width: 100%;
  height: 10vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  

  form {
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
  
`