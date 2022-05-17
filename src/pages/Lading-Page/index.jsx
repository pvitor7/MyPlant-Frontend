/* eslint-disable */
import React from "react";
import Container from "./styled";
import logo from "../../imgs/logo.png";
import background from "../../imgs/background-LandingPage.png"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LandingPage() {
  const redirecionamento = useHistory();
  
  function continuar() {
    redirecionamento.push("/Homepage");
  }

  return (
    <Container>
      
      <main>
          <div className="bloco-1">
        <img src={logo}/>
        <h1>MY PLANT</h1>
        <h2>Busque, conheça, cuide!</h2>
        <p>Bem vindo a My Plant, aqui você pode conhecer e se aprofundar muito mais naquilo que você e nós amamos.</p>
        <button onClick={continuar}>Continuar</button>
        </div>
        <img className="bloco-2" src={background}/>
      </main>
      
    </Container>
  );
}

export default LandingPage;
