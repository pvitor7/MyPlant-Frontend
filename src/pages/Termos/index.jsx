/* eslint-disable */
import React, { useState } from "react";
import Container from "./styled";
import Header from "../../components/Header";

function Termos() {
  return (
    <>
      <Header />
      <Container>
          <h1>Política Privacidade</h1>
        <div className="politicas">
          <p>
            A sua privacidade é importante para nós. É política do My Plant
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar no site My Plant, e outros sites que possuímos e
            operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.{" "}
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>
          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </p>
          <h3>Compromisso do Usuário:</h3>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o My Plant oferece no site e com caráter enunciativo,
            mas não limitativo:
          </p>
          <ul>
            <li>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </li>
            <li>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, de apologia ao terrorismo ou contra os direitos
              humanos;
            </li>
            <li>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do My Plant, de seus fornecedores ou terceiros, para
              introduzir ou disseminar vírus informáticos ou quaisquer outros
              sistemas de hardware ou software que sejam capazes de causar danos
              anteriormente mencionados.
            </li>
          </ul>
          <h3>Mais informações:</h3>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>
          <p>
            Esta política é efetiva a partir de May/2022.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Termos;
