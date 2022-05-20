/* eslint-disable */
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CgLogIn } from 'react-icons/cg';
import Container from './styled';
import logo from '../../imgs/logo.png';

import icon from '../../imgs/menuzinho.png';
import Menu from '../Menu/index';

function Header() {
  const redirecionamento = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPage = window.location.href
  function home() {
    redirecionamento.push('/');
  }
  function pages(destino) {
    
    redirecionamento.push(destino);
  }

  function menuAtivo() {
    setMenuOpen(true);
  }

  function logout(){
  localStorage.clear()
  redirecionamento.push("/login")
}

  return (
    <Container>
      <header>
        <div onClick={menuAtivo} className="icon-menu">
          <img src={icon} />
          <p>Menu</p>
        </div>
        <Menu abrir={menuOpen} sair={setMenuOpen} />
        <div className="figure-header">
          <img src={logo} onClick={home} />

        </div>
        <div className="button-login">
        { currentPage !== "http://localhost:3000/personalPlants" ? (
          <button onClick={() => pages('/login')}>
            <CgLogIn className="icone" />
            Entrar
          </button>
          ):(
          <button onClick={logout}>
            <CgLogIn className="icone" />
            Sair
          </button>)}
          

        </div>
      </header>
    </Container>
  );
}

export default Header;