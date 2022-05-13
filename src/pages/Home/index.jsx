/*eslint-disable*/
import { Container, Footer, ContainerPlants } from "./styled";
import { useState, useEffect } from "react";
import Lupa from '../../assets/images/imagesHome/lupaHome.png'
import ImgAddGarden from '../../assets/images/imagesHome/imgAddGarden.png'
import ImgBuildGarden from '../../assets/images/imagesHome/imgBuildGarden.png'
import ImgSeeComment from '../../assets/images/imagesHome/imgSeeComents.png'

function HomePage() {
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("// https://my-plants-app.herokuapp.com/public_plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  },[]);

  function searchInput() {
    const plantsFilter = plants.filter(({ name }) => {
      name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredPlants(plantsFilter);
  }

  return (
    <>
      
        {search !== "" ? (
          <ContainerPlants>
            <div className="divButtons">
              <button>Todas</button>
              <button>Vermelhas</button>
              <button>Amarelas</button>
              <button>Azuis</button>
              <button>Rosas</button>
            </div>

            <ul className="divCards">
                <li>
                    <button className="buttonInfo">i</button>
                    <img src="" alt="imgPlant" />
                    <h4>Planta do Deserto</h4>
                    <button className="buttonComment">Comentários</button>
                </li>
                <li>
                    <button className="buttonInfo">i</button>
                    <img src="" alt="imgPlant" />
                    <h4>Planta do Deserto</h4>
                    <button className="buttonComment">Comentários</button>
                </li>
              {plants.map((a, index) => {
                return (
                  <li key={index}>
                    <button className="buttonInfo">i</button>
                    <img src={a.imgUrl} alt="imgPlant" />
                    <h4>{a.name}</h4>
                    <button className="buttonComment">Comentários</button>
                  </li>
                );
              })}
            </ul>
          </ContainerPlants>
        ) : (
        <Container>
          <section>
            <div>
              <h2 className="lightGreen">Encontre a planta que você procura</h2>
              <img src={Lupa} alt="icone" />
            </div>
            <div className="revert">
              <img src={ImgBuildGarden} alt="icone" />
              <h2 className="darkGreen">Crie seu Jardim Virtual</h2>
            </div>
            <div>
              <h2 className="lightGreen">Adicione à sua lista de desejos</h2>
              <img src={ImgAddGarden} alt="icone" />
            </div>
            <div className="revert">
              <img src={ImgSeeComment} alt="icone" />
              <h2 className="darkGreen">
                Veja dicas e comentários de amantes de plantas como você!
              </h2>
            </div>
          </section>
        </Container>
        )}
      
      <Footer>
        <div>
          <input
            value={search}
            placeholder="Busque por nome, tipo ou cor"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchInput}>Lupa</button>
        </div>
      </Footer>
    </>
  );
}

export default HomePage;
