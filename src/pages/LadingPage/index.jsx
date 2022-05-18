/* eslint-disable */

import Logo from "../../assets/images/logoDesktop.png";
import { AnimationContainer, Background, Container, Content } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

function Login() {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <section>
            <img src={Logo} alt={Logo} />
            <h2>MY PLANT</h2>
            <h3>Busque, conheça, cuide</h3>
          </section>

          <Link to="/home">
            <Button>Iniciar</Button>
          </Link>
          <Link to="/signup">
            <Button GreenSchema>Cadastre-se</Button>
          </Link>

          <p>Já possui conta?</p> 
          <Link to="/login"><span>Entrar</span></Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
