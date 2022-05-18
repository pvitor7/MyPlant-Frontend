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
  h1{
    margin: 20px 0;
    text-align: center;
  }
  .topico-1{
    
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    padding-right: 12.5%;
    
  }
  .topico-1 h2{
    color: #98b13a;
  }
  .topico-1 p{
    margin: 10px 0;
  }
`;
export default Container;
