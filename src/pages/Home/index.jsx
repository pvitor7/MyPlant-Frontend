/*eslint-disable*/
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Container, ContainerPlants, Footer } from "./styled";
import getPublicPlants from "../../store/modules/publicPlants/thunks";
import Header from "../../components/Header";
import Lupa from "../../assets/images/imagesHome/lupaHome.png";
import ImgAddGarden from "../../assets/images/imagesHome/imgAddGarden.png";
import ImgBuildGarden from "../../assets/images/imagesHome/imgBuildGarden.png";
import ImgSeeComment from "../../assets/images/imagesHome/imgSeeComents.png";
import { MdOutlineComment } from "react-icons/md";
import { FaInfo, FaSearch } from "react-icons/fa";
import { Modal } from "@mui/material";
import MyPot from "../../components/MyPot";
import { postPublicComments } from "../../store/modules/coments/thunks";

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
  const [inputComment, setInputComment] = useState(false);
  const [idPlantComment, setIdPlantComment] = useState('');

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
    console.log(search);
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

      {showResults ? (
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
                   <MyPot setIdPlantComment={setIdPlantComment} onComment={setInputComment} homePage key={index} plant={a}/>

                  // <li key={index}>
                  //   <button className="buttonInfo">
                  //     <FaInfo />
                  //   </button>
                  //   <img src={a.imgUrl} alt="imgPlant" />
                  //   <h4>{a.name}</h4>
                  //   <button className="buttonComment">
                  //     <MdOutlineComment />
                  //   </button>
                  // </li>
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
      { inputComment === true ? (
            <div>
              <input
              name="buscar"
              value={search}
              placeholder="Busque por nome"
              onChange={(e) => {
                setInputComment(e.target.value);
              }
              }
              />
              <button 
              onClick={() => postPublicComments(idPlantComment, search)}
              >
                <MdOutlineComment />
              </button>
            </div>
        ) : (
            <div>
              <input
              name="buscar"
              value={search}
              placeholder="Busque por nome"
              onChange={(e) => setSearch(e.target.value)}
              />
              <button 
              onClick={() => searchInput()}
              >
                <FaSearch />
              </button>
            </div>
        )}
      </Footer>
    </>
  );
}

export default HomePage;