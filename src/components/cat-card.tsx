import Cat from "../data/cat";
import CatImage from "./cat-image";
import catImages from "../data/cat-image-data";

interface CatCardProps {
  catObject: Cat;
  catIndex: number;
}

const CatCard: React.FC<CatCardProps> = (props) => {
  const { name, species, favFoods, birthYear } = props.catObject;
  const catImage = catImages[props.catIndex];

  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">{species}</p>
      <p className="card__text">
        {favFoods.reduce((prev, curr) => prev + ", " + curr)}
      </p>
      <p className="card__text">{birthYear}</p>
      {props.catIndex < catImages.length && (
        <CatImage
          image={catImage.image}
          altText={catImage.altText}
          licenceType={catImage.licenceType}
          licenceUrl={catImage.licenceUrl}
          attributionName={catImage.attributionName}
          attributionUrl={catImage.attributionUrl}
        />
      )}
    </div>
  );
};

export default CatCard;
