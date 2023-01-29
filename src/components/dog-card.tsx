interface DogCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}

const DogCard: React.FC<DogCardProps> = (props) => {

  const { name, species, favFoods, birthYear } = props;

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">{species}</p>
      <p className="card__text">
        {favFoods.reduce((prev, curr) => prev + ", " + curr)}
      </p>
      <p className="card__text">{birthYear}</p>
    </div>
  );
};

export default DogCard;