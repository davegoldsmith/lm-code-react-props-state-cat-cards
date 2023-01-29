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
  };
  const [newAnimal, setNewAnimal] = useState(defaultAnimal);

  const [isCat, setIsCat] = useState(true);

  return (
    <div className="add-animal__container">
      <div className="add-animal__radiogroup">
        <label>
          <input
            value="cat"
            type="radio"
            checked={isCat === true}
            onChange={() => setIsCat(true)}
          />
          Add new Cat
        </label>
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

      <div className="add-animal__input">
        <label htmlFor="animal-name" className="add-animal__input-label">
          Name:
        </label>
        <input
          name="animal-name"
          className="add-animal__input-field"
          value={newAnimal.name}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              name: e.target.value,
            });
          }}
        />
      </div>

      <div className="add-animal__input">
        <label htmlFor="animal-species" className="add-animal__input-label">
          Species:
        </label>
        <input
          name="animal-species"
          className="add-animal__input-field"
          value={newAnimal.species}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              species: e.target.value,
            });
          }}
        />
      </div>

      <div className="add-animal__input">
        <label htmlFor="animal-favfoods" className="add-animal__input-label">
          Favourite Foods:
        </label>
        <textarea
          name="animal-favfoods"
          rows={4}
          cols={10}
          className="add-animal__input-field"
          value={newAnimal.favFoods}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              favFoods: e.target.value.split(","),
            });
          }}
        />
      </div>

      <div className="add-animal__input">
        <label htmlFor="animal-birthyear" className="add-animal__input-label">
          Birth Year:
        </label>
        <input
          name="animal-birthyear"
          className="add-animal__input-field"
          value={newAnimal.birthYear === 0 ? "" : newAnimal.birthYear}
          onChange={(e) => {
            setNewAnimal({
              ...newAnimal,
              birthYear: e.target.value ? parseInt(e.target.value) : 0,
            });
          }}
        />
      </div>

      <button
        className="add-animal__btn"
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
