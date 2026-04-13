import "./styles.css";
import { animalData } from "./data";


function AnimalCard() {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalData.name}</h3>
      <p>{animalData.species}</p>
      <img src={animalData.img_src} />
    </div>
  );
}

export default AnimalCard;