/* eslint-disable */
import "./styled";
import PlantCard from "./styled";

function MyPot({ plant }) {
  return (
    <PlantCard>
      <img className="img--PlantImage" src={plant.image} />
      <h3 className="h3--PlantTitle">{plant.name}</h3>
      <div className="div--CardButtons">
        <button className="button--Pot">O</button>
        <button className="button--Pot">X</button>
      </div>
    </PlantCard>
  );
}

export default MyPot;
