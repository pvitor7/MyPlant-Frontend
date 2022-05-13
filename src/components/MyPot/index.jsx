/* eslint-disable */
import "./styled";
import { BiFile } from 'react-icons/bi'
import PlantCard from "./styled";

function MyPot({ plant, myChild = false }) {

 
  return (
    <PlantCard>
      <img className="img--PlantImage" src={plant.image} />
      <h3 className="h3--PlantTitle">{plant.name}</h3>
      <p className="p--scientificName">({plant.scientificName})</p>
      <div className="div--CardButtons">
        {
        myChild && (<button onClick={() => console.log('folhinha')} className="button--Pot"><BiFile /></button>)}
        <button onClick={() => console.log('fechou')} className="button--Pot">x</button>
      </div>
    </PlantCard>
  );
}

export default MyPot;
