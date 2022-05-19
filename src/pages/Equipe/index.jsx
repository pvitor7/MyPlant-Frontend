/* eslint-disable */
import React from 'react';
import Container from './styled';
import Header from '../../components/Header';
import Rick from '../../imgs/Henrique.jpg';
import PauloV from '../../imgs/PauloVitor.jpg';
import PauloD from '../../imgs/paulo.jpeg'
import Bruna from '../../imgs/Bruna.jpeg';

function Equipe() {
  const dadosDevs = [
    {
      foto: PauloV,
      nome: 'Paulo Vitor',
      cargo: 'Scrum Master',
    },
    {
      foto: PauloD,
      nome: 'Paulo David',
      cargo: 'Tech Leader',
    },
    {
      foto: Bruna,
      nome: 'Bruna Varela',
      cargo: 'Product Owner',
    },
    {
      foto: 'https://dinorma.com.br/wp-content/uploads/2017/06/Bolo-Brasileirinhos.png',
      nome: 'Gabriel Benjamin',
      cargo: 'QA',
    },
    {
      foto: Rick,
      nome: 'Henrique F. Mendes',
      cargo: 'QA',
    },
  ];

  const devs = dadosDevs.map((item) => (
    <li className="informacoes-devs" key={item.nome}>
      <img src={item.foto} />
      <h1>{item.nome}</h1>
      <p>{item.cargo}</p>
    </li>
  ));

  return (
    <>
      <Header />
      <Container>
        <h1>Membros do grupo</h1>
        <ul>{devs}</ul>
      </Container>
    </>
  );
}

export default Equipe;
