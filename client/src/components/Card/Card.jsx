import { Link } from 'react-router-dom';

function Card({
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
}) {

  const temps = temperament?.join(', ')
  console.log(temps);

  return(
    <div>
      <div>
        <Link to={`/detail/${id}`}><img src={image} alt={name} /></Link>
      </div>
      <div>
        <p>Temperaments: {temps}</p>
      </div>
      <div>
        <h3>{name}</h3>
        {/* <p>{height_max ? `Heigh ${height_min} - ${height_max} cm`: `Heigh ${height_min} cm`}</p> */}
        <p>{weight_max ? `Weight ${weight_min} - ${weight_max} kg`: `Weight ${height_min} kg`}</p>
        {/* <p>{life_span_max ? `Life span ${life_span_min} - ${life_span_max} years`: `Life span ${life_span_min} years`}</p> */}
      </div>
    </div>
  )
}

export default Card;
