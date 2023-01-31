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
    // If I had more time, I would create new components
    // for all the UI (luckily we get to practise that in the next assignment!)
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
            // ensures that only numbers greater than 0
            // can be entered
            let value = 0;
            if (e.target.value) {
              value = parseInt(e.target.value);
              if (isNaN(value)) {
                value = 0;
              }
            }
            setNewAnimal({
              ...newAnimal,
              birthYear: value,
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
