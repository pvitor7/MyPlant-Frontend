/* eslint-disable */
import styled from "@emotion/styled";

const StyleHeader = styled.header`
  display: flex;
  width: 100vw;
  max-height: 15vh;
  min-height: 70px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px gray; /* blur de 10px e deslocamento à direita de 15px. */
  margin-top: 0;

  .header--menu {
    margin: 30px;
    }

  .header--logo {
    margin: 10px;
    width: 50px;
    align-items: center;
    justify-content: center;
  }

  .header--user {
    margin: 30px;
  }
`;
export default StyleHeader;
