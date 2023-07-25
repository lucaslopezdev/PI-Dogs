import Card from '../Card/Card';

function CardsContainer({ currentDogs }) {
  return (
    <div>
      {currentDogs?.map(
        ({
          id,
          image,
          name,
          breed_group,
          height_min,
          height_max,
          weight_min,
          weight_max,
          life_span_min,
          life_span_max,
          temperament
        }) => {
          return(
            <Card
              key={id}
              id={id}
              image={image}
              name={name}
              breed_group={breed_group}
              height_min={height_min}
              height_max={height_max}
              weight_min={weight_min}
              weight_max={weight_max}
              life_span_min={life_span_min}
              life_span_max={life_span_max}
              temperament={temperament}
            />
          )
        }
      )}
    </div>
  );
}

export default CardsContainer;