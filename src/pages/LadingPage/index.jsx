/* eslint-disable */

import { BiArrowToRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logoDesktop.png';
import {
  AnimationContainer, Background, Container, Content,
} from './styles';
import Button from '../../components/Button';

function Login() {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <section>
            <img src={Logo} alt={Logo} />
            <h2>MY PLANT</h2>
          </section>

          <h3>
            Busque por suas plantas,
            conheça mais sobre elas.
            Cuide do seu jardim virtual!

          </h3>

          <Link to="/home">
            <Button>Iniciar</Button>
          </Link>
          <Link to="/signup">
            <Button GreenSchema>Cadastrar</Button>
          </Link>
          <div>
            <p>Já possui uma conta? </p>
            {' '}
            <Link to="/login">
              <span>Entrar</span>
            </Link>
          </div>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
