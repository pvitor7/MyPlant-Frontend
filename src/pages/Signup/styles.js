/* eslint-disable */
import styled, { keyframes } from "styled-components";
import imgMobile from "../../assets/images/imgMobile.png";
import imgRegister from "../../assets/images/imgRegister.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0; 
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Background = styled.div`
  @media (min-width: 1000px) {
    flex: 1;
    background: url(${imgRegister}) no-repeat center, var(--blue);
    background-size: contain;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h3 {
    font-size: 18px;
    color: var(--green);
  }

  h1 {
    font-size: 18px;
    color: var(--green);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content:center;
    margin-top: 5px;
  }

  input {
    margin-right: 10px;
  }

  p {

    a {
      font-weight: bold;
      color: var(--green);
    }
  }

  span {
    color: var(--negative);
    font-size: 12px;
  }
`;

export {
  Container, Background, Content, AnimationContainer,
};
