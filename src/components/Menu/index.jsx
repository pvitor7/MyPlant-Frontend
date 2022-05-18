/* eslint-disable */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from './styled';
import fechar from '../../imgs/fechar.png';

function Menu({ abrir, sair }) {
  const redirecionamento = useHistory();

  function pages(destino) {
    redirecionamento.push(destino);
  }

  return (
    <Container className={abrir ? 'active' : null}>
      <div className="menu-animation">
        <header>
          <p>Busque, conheça, cuide!</p>
        </header>
        <main>
          <ul>
            <li onClick={() => pages('/')}>
              <p>Plantas</p>
            </li>
            <li onClick={() => pages('/informacoes')}>
              <p>Sobre o My Plant</p>
            </li>
            <li onClick={() => pages('/sobre')}>
              <p>Equipe</p>
            </li>
            <li onClick={() => pages('/termos')}>
              <p>Termos de uso</p>
            </li>
          </ul>

          <div className="texto-2">
            <p>
              Acesse sua conta ou
              <button onClick={() => pages("/signup")}>Cadastre-se</button>
            </p>
          </div>

          <button className="buttonreturn" onClick={() => sair(false)}>
            <img src={fechar} alt="fechar" />
          </button>
        </main>
      </div>
    </Container>
  );
}

export default Menu;
