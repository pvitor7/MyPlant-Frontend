/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { MdOutlineComment } from 'react-icons/md';
import { Container, Footer, ContainerPlants } from './styled';
import Lupa from '../../assets/images/imagesHome/lupaHome.png';
import ImgAddGarden from '../../assets/images/imagesHome/imgAddGarden.png';
import ImgBuildGarden from '../../assets/images/imagesHome/imgBuildGarden.png';
import ImgSeeComment from '../../assets/images/imagesHome/imgSeeComents.png';
import Header from '../../components/Header';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicPlants());
  }, []);

  const allPlants = useSelector((state) => state.userPublic);

  const colors = [
    { value: "red", label: "Vermelho" },
    { value: "yellow", label: "Amarelo" },
    { value: "blue", label: "Azul" },
    { value: "pink", label: "Rosa" },
  ];

  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [color, setColor] = useState(null);
  const [filteredPlants, setFilteredPlants] = useState(null);
  const [showResults, setShowResults] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (filteredPlants) {
      if (color) {
        const plantsColor = filteredPlants.filter(
          (plant) => plant.color === color
        );
        console.log(plantsColor);
        setShowResults(plantsColor);
      } else {
        setShowResults(filteredPlants);
      }
    }
  }, [filteredPlants, color]);

  function hasColor(color) {
    const plantsColor = filteredPlants.find((plant) => plant.color === color);
    if (plantsColor) {
      return true;
    } else {
      return false;
    }
  }

  function searchInput() {
    setInput(search);
    setColor(null);
    const plantsFilter = allPlants.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredPlants(plantsFilter);
  }

  return (
    <>
      <Header />
      {search !== '' ? (
        <ContainerPlants>
          <div className="divButtons">
            {showResults.length > 0 && (
              <button onClick={() => setColor(null)}>Todas</button>
            )}
            {colors.map(({ value, label }) => {
              return (
                <span key={value}>
                  {hasColor(value) && (
                    <button onClick={() => setColor(value)}>{label}</button>
                  )}
                </span>
              );
            })}
          </div>

          <ul className="divCards">
            {showResults?.length === 0 ? (
              <p>Não existe "{input}" no banco de dados.</p>
            ) : (
              showResults?.map((a, index) => {
                return (                  
                  <li key={index}>
                    <button className="buttonInfo">
                      <FaInfo />
                    </button>
                    <img src={a.imgUrl} alt="imgPlant" />
                    <h4>{a.name}</h4>
                    <button className="buttonComment">
                      <MdOutlineComment />
                    </button>
                  </li>
                );
              })
            )}
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
            name="buscar"
            value={search}
            placeholder="Busque por nome"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => searchInput()}>
            <FaSearch />
          </button>
        </div>
      </Footer>
    </>
  );
}

export default HomePage;
