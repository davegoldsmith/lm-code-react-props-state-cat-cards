import { useState } from "react";
import Cat from "../data/cat";
import Dog from "../data/dog";
interface AddCatDogProps {
  addNewCatDog: (animal: Dog | Cat, isCat: boolean) => void;
}

const AddCatDog: React.FC<AddCatDogProps> = (props) => {
  const defaultAnimal = {
    name: "",
    species: "",
    favFoods: Array<string>(),
    birthYear: 0,
  }
  const [newAnimal, setNewAnimal] = useState(defaultAnimal);

  const [isCat, setIsCat] = useState(true);

  return (
    <div className="add-animal__container">
      <div className="radio">
        <label>
          <input
            value="cat"
            type="radio"
            checked={isCat === true}
            onChange={() => setIsCat(true)}
          />
          Add new Cat
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="dog"
            checked={isCat === false}
            onChange={() => setIsCat(false)}
          />
          Add new Dog
        </label>
      </div>

      <label>
        Name:
        <input
          value={newAnimal.name}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              name: e.target.value,
            });
          }}
        />
      </label>

      <label>
        Species:
        <input
          value={newAnimal.species}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              species: e.target.value,
            });
          }}
        />
      </label>

      <label>
        Favourite Foods:
        <input
          value={newAnimal.favFoods}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              favFoods: e.target.value.split(","),
            });
          }}
        />
      </label>

      <label>
        Birth Year:
        <input
          value={newAnimal.birthYear}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              birthYear: parseInt(e.target.value),
            });
          }}
        />
      </label>

      <button
        onClick={() => {
          props.addNewCatDog(newAnimal, isCat);
          setNewAnimal(defaultAnimal);
        }}
      >
        Submit
      </button>
      </div>
  );
};

export default AddCatDog;
