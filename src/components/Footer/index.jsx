/*eslint-disable*/
import { Container } from "./styled";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function PageFooter() {
  
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]); 

  function searchInput(valueInput) {
    // const plantsFilter = allPlants.filter(({ name }) => {
    //   return name.toLowerCase().includes() === valueInput.toLowerCase();
    // });

    // setFilteredPlants(plantsFilter);
    valueInput.preventDefault()
    console.log(valueInput.data)
  }

  
  return (
    <Container>
      <form onSubmit={(data) => searchInput(data)}>
        <input name="buscar" value={search} placeholder="Busque por nome" onChange={(e) => setSearch(e.target.value)} />
        <button type ='submit'>
          <FaSearch />
        </button> 
      </form>
    </Container>
  );
}

export default PageFooter;
