import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  * {
    box-sizing: border-box;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    color: #56b297;
    border-radius: 4px;
  }
  .politicas{
      display: flex;
      flex-direction: column;
      margin: 15px 30px;
  }
  .politicas h3{
    color: #98b13a;
  }
  .politicas h2{
    text-align: center;
    margin-bottom: 15px;
  }
  .politicas li{
    list-style: none;
  }
  
`;
export default Container;
