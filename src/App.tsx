import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import catData  from "./data/cat-data";
import CatCard from "./components/cat-card";
import Dog from "./data/dog";
import dogData from "./data/dog-data";
import DogCard from "./components/dog-card";
import AddCatDog from "./components/add-form";


function App(): JSX.Element {

  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
	const catCount = cats.length; 
  const dogCount = dogs.length; 

  const addNewCatDog = (animal: Cat | Dog, isCat : boolean) => {
    console.log(animal);
    animal.id = uuidv4();
    if (isCat === true) {
      setCats([...cats, animal]);
    } else {
      setDogs([...dogs, animal]);
    }
  };

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div>
          <AddCatDog addNewCatDog={(animal : Cat | Dog, isCat : boolean) => addNewCatDog(animal, isCat)}/>
        </div>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
							key={cat.id}
							catObject={cat}
							catIndex={index}
            />
          ))}
        </div>
        <div className="cards__wrapper">
          {dogs.map((dog) => (
            <DogCard
							key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
            />
          ))}
        </div>        
      </main>

      <Footer />
    </>
  );
}

export default App;
