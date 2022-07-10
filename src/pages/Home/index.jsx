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
import plants from "../../database/plants";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicPlants());
  }, []);

  // const allPlants = useSelector((state) => state.userPublic); Por problemas com a API o redux foi inutilizado e o projeto está baseado em states por hora

  const colors = [
    { id: 1, value: "red", label: "Vermelho" },
    { id: 2, value: "yellow", label: "Amarelo" },
    { id: 3, value: "blue", label: "Azul" },
    { id: 4, value: "pink", label: "Rosa" },
  ];

  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [color, setColor] = useState(null);
  const [filteredPlants, setFilteredPlants] = useState(null);
  const [showResults, setShowResults] = useState(null);
  const [modal, setModal] = useState(false);
  const [inputComment, setInputComment] = useState(false);
  const [idPlantComment, setIdPlantComment] = useState("");

  useEffect(() => {
    
      if (color) {
        const plantsColor = plants.filter(
          (plant) => plant.color === color
        );
        setShowResults(plantsColor);
      } 
      else {
        setShowResults(filteredPlants);
      }
  }, [filteredPlants, color]);

  function hasColor(color) {
    const plantsColor = filteredPlants?.find((plant) => plant.color === color);
    if (plantsColor) {
      return true;
    } else {
      return false;
    }
  }

  function searchInput() {
    setColor(null);
    setInput(search);

    const plantsFilter = plants.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredPlants(plantsFilter);
  }

  return (
    <>
      <Header />

        <ContainerPlants>
          <div className="divButtons">
              <button onClick={
                () => {setColor(null) 
                 setFilteredPlants(plants)}
                 }>Todas</button>

            {colors.map(({id, value, label }) => {
              return (
                <span key={id} >
                    <button onClick={() => {setColor(value)}}>{label}</button>
                </span>
              );
            })}
          </div>

          <ul className="divCards">
            {showResults == null
              ? plants.map((a, index) => (
                  <MyPot
                    setIdPlantComment={setIdPlantComment}
                    onComment={setInputComment}
                    homePage
                    key={index}
                    plant={a}
                  />
                ))
              : showResults.map((a, index) => {
                  return (
                    <MyPot
                      setIdPlantComment={setIdPlantComment}
                      onComment={setInputComment}
                      homePage
                      key={index}
                      plant={a}
                    />
                  );
                })}
          </ul>
        </ContainerPlants>

      <Footer>
        {inputComment === true ? (
          <div>
            <input
              name="buscar"
              value={search}
              placeholder="Busque por nome"
              onChange={(e) => {
                setInputComment(e.target.value);
              }}
            />
            <button onClick={() => postPublicComments(idPlantComment, search)}>
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
            <button onClick={() => searchInput()}>
              <FaSearch />
            </button>
          </div>
        )}
      </Footer>
    </>
  );
}

export default HomePage;
