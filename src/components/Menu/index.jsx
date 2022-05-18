/* eslint-disable */
import React from 'react';
import reactDom from 'react-dom';

import { useHistory } from 'react-router-dom';
import Container from './styled';
import fechar from '../../imgs/fechar.png';

function Menu({ sair }) {
  const redirecionamento = useHistory();

  function pages(destino) {
    redirecionamento.push(destino);
  }

  const portalRoot = document.getElementById('portal-root');

  return reactDom.createPortal(
    <Container>
      <div className="menu-animation">
        <header>
          <p>Busque, conheça, cuide!</p>
        </header>
        <main>
          <ul>
            <li onClick={() => pages('/')}><p>Plantas</p></li>
            <li onClick={() => pages('/Informações')}><p>Sobre o My Plant</p></li>
            <li onClick={() => pages('/Sobre')}><p>Equipe</p></li>
            <li onClick={() => pages('/Contrato')}><p>Termos de uso</p></li>
          </ul>

          <div>
            <img />
            <p>
              Acesse sua conta ou
              {' '}
              <button onClick={() => pages('/Cadastre-se')}>Cadastre-se</button>
              {' '}
            </p>
          </div>

          <button className="buttonreturn" onClick={() => sair(false)}><img src={fechar} /></button>

        </main>
      </div>
    </Container>,
    portalRoot,
  );
}

export default Menu;
