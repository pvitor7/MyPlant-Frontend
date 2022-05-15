import styled, { keyframes } from "styled-components";
import SignupImageWomen from "../../assets/images/women.png";

export const Container = styled.div`
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

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SignupImageWomen}) no-repeat center left, var(--white);
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

export const AnimationContainer = styled.div`
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
    color: var(--green)
  }

  h1 {
    font-size: 18px;
    color: var(--green)
  }

  div {
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 5px;
  }

  input {
    margin-top: 8px;
    margin-right: 10px;
  }

  p {
    margin-top: 10px;

    a {
      font-weight: bold;
      color: var(--green);
    }

  }

  span {
    color: var(--negative)
  }
`;


