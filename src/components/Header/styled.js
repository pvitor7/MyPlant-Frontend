import styled from 'styled-components';

const Container = styled.div`

  display: flex;
  align-items: center;

  * {
    box-sizing: border-box;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    color: #56b297;
  }
  
  .icon-menu{
    display: flex;
    align-items: center;
    max-height: 30px;
    cursor: pointer;
  }
  .icon-menu img{
    width: 40px;
    height: 23px;
  }
  .icon-menu p{
    margin: 0 0 7px 10px;
  }
  .button-login{
    display: flex;
    align-items: center;
    max-height: 60px;
    cursor: pointer;
  }
  .button-login img{
    width: 40px;
    height: 23px;
  }

  height: 15vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    margin: auto 0;
    font-size: 24px;
    line-height: 33px;
  }
  header p{
    height: 24px;
    font-weight: 700;
    
  }
  header img {
    max-width: 100px;
    max-height: 15vh;
    
    cursor: pointer;
  }
  header button {
      border: none;
      background-color: transparent;
      font-weight: 400;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-left: 20px;
  }

  .icone{
    font-size: 30px;
  }


  @media (max-width:700px){
    .icon-menu{
    font-size: 0px;
  }
  .icon-menu img{
    width: 60%;
    height: 60%;
  }
  .button-login button{
    margin-left: -10px;
    font-size: 0px;
  }
  .icone{
    font-size: 30px;
  }
  
  }
`;

export default Container;
