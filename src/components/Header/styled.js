/* eslint-disable */
import styled from "@emotion/styled";

const StyleHeader = styled.header`
  display: flex;
  width: 100%;
  max-height: 15vh;
  min-height: 70px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px gray; /* blur de 10px e deslocamento à direita de 15px. */

  .header--menu {
    margin: 10px;
  }

  .header--logo {
    margin: 10px;
    width: 50px;
    align-items: center;
    justify-content: center;
  }

  .header--user {
    margin: 10px;
  }
`;
export default StyleHeader;
