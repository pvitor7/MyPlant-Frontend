/* eslint-disable */
import styled, { keyframes } from "styled-components";
import imgWoman from "../../assets/images/imgWoman.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content:center;
`;

export const Background = styled.div`
  @media (min-width: 1000px) {
    flex: 1;
    background: url(${imgWoman}) no-repeat center;
    background-size: contain;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0; 
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;
  }

  h3 {
    text-align:center;
    color: var(--green);
    width: 300px;
    font-size: 24px;
    margin-bottom: 30px;
    line-height:33px;
  }

  h2 {
    font-size: 18px;
    color: var(--blue);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }


  a {
    font-weight: normal;
    text-decoration: none;
    color: var(--white);
  }

  button {
    margin-top: 10px;
    width: 300px;
  }

  span {
    font-weight: normal;
    text-decoration: none;
    color: var(--green);
    margin-left: 5px;
  }
`;
