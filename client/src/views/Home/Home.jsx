import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../Redux/actions';

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);
  console.log(dogs);

  return (
    <div>
      {/* {dogs.map((dog) => ({
        id: dog.id,
        name: dog.name,
        height_min: dog.height_min,
        height_max: dog.height_max,
        image: dog.image,
        temperament: dog.temperament,
      }))} */}
      <p>hola</p>
    </div>
  );
}

export default Home;
