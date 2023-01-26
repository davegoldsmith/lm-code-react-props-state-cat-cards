import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import catData  from "./data/cat-data";
import CatCard from "./components/cat-card";


function App(): JSX.Element {

  const [cats, setCats] = useState<Array<Cat>>(catData);
	const catCount = cats.length;
	console.log("Cats tally = " + catCount);

  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

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
      </main>

      <Footer />
    </>
  );
}

export default App;
