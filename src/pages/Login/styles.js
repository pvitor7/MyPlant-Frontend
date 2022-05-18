/* eslint-disable */
import styled, { keyframes } from 'styled-components';
import SignupImagePlants from '../../assets/images/plants.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SignupImagePlants}) no-repeat center right, var(--white);
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

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    margin-bottom: 70px;
  }

  h3 {
    font-size: 18px;
    color: var(--green);
  }

  h2 {
    font-size: 18px;
    color: var(--blue)
  }

  h4{
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: normal;
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
    margin-top: 30px;

  }

  a {
      font-weight: bold;
      text-decoration:none;
      color: var(--white)
    }

  span {
    color: var(--negative)
  }
`;
