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


function App(): JSX.Element {

  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
	const catCount = cats.length; 
  const dogCount = dogs.length; 

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
							key={cat.id}
							catObject={cat}
							catIndex={index}
              // name={cat.name}
              // species={cat.species}
              // favFoods={cat.favFoods}
              // birthYear={cat.birthYear}
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
