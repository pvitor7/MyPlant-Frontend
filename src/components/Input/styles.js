import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  div {
    span {
      color: var(--negative);
      font-size:12px;
      margin: 0;
    }
  }
`;

const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--blue);
  color: var(--blue);
  padding: 1rem;
  width: 100%;
  height: 70px;
  display: flex;
  transition: 0.4s;

      :hover {
        border: 2px solid var(--green);
      }

  ${(props) => props.isErrored
    && css`
      border-color: var(--negative);
    `}

  input {
    background: transparent;
    justify-content: center;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--blue);
  }

  svg {
    align-self:center;
    margin-top:5px;
    margin-right: 16px;
    color: var(--green);
  }
`;

export { Container, InputContainer };
