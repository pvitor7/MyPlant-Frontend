/* eslint-disable */
import React from 'react';
import MyPot from '../../components/MyPot';
import { MyGarden, PersonalGarden, MyWish } from './styled';

function PersonalPlants() {
  const user = 'Maria';

  const plantas = [
    {image: 'https://i1.wp.com/blog.cicloorganico.com.br/wp-content/uploads/2020/01/agriacc83o-no-vaso.jpg?resize=702%2C527', name: 'Agrião', scientificName: 'Nasturtium officinale', utility: ['Bronquites cronicas', 'gengivites', 'aftas', 'acnes', 'má digestão'], description:'Anti-inflamatórioNatural das vias respiratórias, o agrião tem seu consumo bastante indicado para o tratamento das bronquites crônicas.'},
    {image: 'https://static.tuasaude.com/media/article/yw/hv/alecrim_15855.webp', name: 'Alecrim', scientificName: 'Salvia Rosmarinus', utility: ['Enxaquecas', 'baixa imunidade', 'hematomas', 'contusões', 'insônia'], description:'Uma erva rica em óleos essenciais, como a cânfora e o limoneno. O alecrim é muito utilizado no preparo de compressas, ajudando a aliviar hematomas e contusões, além de diminuir as dores provenientes das doenças reumáticas e articulares.'},
    {image: 'https://static3.tcdn.com.br/img/img_prod/350075/muda_de_canela_feita_de_semente_11731_1_20220412114314.jpg',name: 'Caneleira-verdadeira', scientificName: 'Cinnamomum verum', utility: ['Gases e mã digestão'], description:'Usada, principalmente, em tratamento de problemas gastrointestNais. O óleo essencial da canela é rico em cNamaldeído, agindo como combatente de diversos fungos e microrganismos.'},
    {image: 'https://images.tcdn.com.br/img/img_prod/799330/coentro_verdao_517_1_20200523134108.jpg',name: 'Coentro', scientificName: 'Coriandrum sativum', utility: ['Cólicas estomacais', 'ansiedade'], description:'Ajuda no melhor funcinamento digestivo e alívio das cólicas estomacais. Isso é possível pelo fato dele ser fonte de mucilagens, substâncias que ajudam a mucosa do intestino e do estômago a ficar protegida. Seu uso também é indicado para controlar a ansiedade.  '},
    {image: 'https://casa.hortacasa.blog.br/wp-content/uploads/2019/07/Lavanda-no-Vaso.jpg',name: 'Alfazema.', scientificName: 'Lavandula', utility: ['Falta de apetite', 'insônia'], description:'Combate a falta de apetite e até mesmo insônia. A alfazema também é benéfica para quem sofre de cistite e inflamaçãoNa bexiga. As folhas de alfazema são utilizadas no preparo de remédios que combatem a conjuntivite. Já as suas flores são utilizadas nos remédios para bronquite, tosse, queimaduras e enxaqueca.'},
    {image: 'https://casa.hortacasa.blog.br/wp-content/uploads/2019/07/Plantar-Alho-em-Vaso-1.jpg',name: 'Alho', scientificName: 'Allium sativum', utility: ['Colesterol alto','expectorante', 'tempero'], description:'Muito conhecido e apreciado, o alho reduz o colesterol alto, atuando como um antisséptico e expectoranteNatural. Além disso, o seu consumo aumenta a imunidade e alivia os problemas circulatórios. O alimento e rico em vitamNas A, C, B1 e B2, alem de ser fonte de minerais como o iodo e o enxofre. Segundo pesquisas recentes, o alho ainda é um anticancerígeno poderoso, quando consumido cru. Mas é importante estar atento. Há pessoas que podem ser alérgicas ao alho. Ele também não deve ser usado por quem sofre de gastrite, úlcera, hipoglicemia ou pressão baixa.'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carqueja2.jpg/800px-Carqueja2.jpg',name: 'Carqueja', scientificName: 'Baccharis trimera', utility: ['Má digestão', 'Diabetes'], description:'É uma ótima opção para quando a refeição pesada cai mal, contribuindo para o aumento da produção de bile. ContribuiNa redução da taxa de açúcar no nosso sangue, além dela ser fonte de propriedades anti-úlcera e anti-inflamatórias, contribuindo no tratamento de artrites.'},
    {image: 'https://i.pinimg.com/564x/73/94/c0/7394c0fa0bfaeeb3e0151b4eabe6e864.jpg', name: 'Erva-cidreira', scientificName: 'Melissa officinalis', utility: ['Gases', 'Cólicas', 'Analgésico'], description:'O chá de erva-cidreira é excelente no combate de gases e cólicas, além de ser um relaxante natural, pois a planta possui efeito calmante, graças aos seus óleos essenciais. Outros benefícios garantidos com o seu uso são o poder analgésico e antiespasmódico, além de ser um bom combatente da herpes labial.'},
    {image: 'https://http2.mlstatic.com/D_NQ_NP_2X_705511-MLB20565373395_012016-F.webp', name: 'Alcaçuz', scientificName: 'Glycyrrhiza glabra', utility: ['Tosses', 'Úlceras gástricas'], description:'Combate a coceira na garganta das crises de tosse e também úlceras gástricas. Anti-inflamatório e antisséptico, o alcaçuz é bastante utilizado no combate aos diversos problemas pulmonares, podendo ainda ser aplicado em casos de bronquite, artrite e reações alérgicas.'},
    {image: 'https://escolaeducacao.com.br/wp-content/uploads/2020/12/babosa-750x430.jpg',name: 'Babosa', scientificName: 'Aloe vera', utility: ['Queimaduras', 'Inflamações', 'Hidratação Capilar'], description:'A aloe vera desempenha uma função antisséptica e contribui para a multiplicação celular. A planta ainda ajuda a cicatrizar feridas. É uma ótima aliada no combate a caspa, piolhos e lêndeas. Constantemente são realizados diversos testes, a fim de constatar os efeitos benéficos da babosa no tratamento de queimaduras e inflamações.'},
    ]

  return (
    <PersonalGarden>
      <h2>
        Boas vindas, {user}!
      </h2>
      <div className='div--MyGardens--area'>
        <MyGarden>
        <h4 className='h4--MyGarden'>Seu jardim <button>+</button></h4>
        {/* <img>Ícone de mais</img> */}

        <div className='div--MyGarden--list'>
          {
              plantas.map((plant, index) => {
                return(
                <MyPot key={index} plant={plant} />
                )
              })
          }
        </div>
        </MyGarden>

        <MyWish>
          <h4 className='MyWish--h4'>Lista de Desejos</h4>
          <div>
            {/* {Favorite.map((plant) => {
                <MyPot plant={plant} />;
            })} */}
          </div>
        </MyWish>
      </div>
    </PersonalGarden>
  );
}

export default PersonalPlants;
