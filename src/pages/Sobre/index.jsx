/* eslint-disable */
import React, { useState } from "react";
import Container from "./styled";
import Header from "../../components/Header";

function Detalhes() {
  return (
    <>
      <Header />
      <Container>
        <h1>My plant</h1>

        <div className="topico-1">
          <h2>Quem somos:</h2>
          <p>
            Uma equipe de desenvolvedores em formação da Kenzie Academy Brasil.
          </p>
          <h2>Nosso objetivo:</h2>
          <p>
            O My Plant é uma ideia pensada para aquelas pessoas mais próximas de
            nós, que trazem tanta simplicidade para cuidar de algo que demanda
            muito mais atenção do que imaginamos. Aqui você irá encontrar uma
            área personalizada para adicionar suas plantas, uma lista de desejos
            e um espaço informativo, contendo comentários de outros usuários e
            informações exclusivas daquela espécie.
          </p>
          <h2>Criação do projeto:</h2>
          <p>
            No dia 09 de maio de 2022, foi dado início ao My Plant, aplicação
            voltada para informação e interação de pessoas que não vêem problema
            em ficar com terra debaixo das unhas e acompanhar o crescimento e
            desenvolvimento de suas plantas.
          </p>
          <h2>Apoios:</h2>
          <p>
            O projeto recebeu suporte e orientação de profissionais, bem como o
            apoio da instituição Kenzie Academy Brasil.
          </p>

        </div>
      </Container>
    </>
  );
}

export default Detalhes;
