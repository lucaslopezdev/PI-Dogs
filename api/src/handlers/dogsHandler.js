const {
  getDogByName,
  getAllDogs,
  createDog,
  getRaceById,
} = require('../controllers/dogsController');

const getDogsByName = async (req, res) => {
  // Si existe una query busca por name, sino busca todos los perros
  const { name } = req.query;
  try {
    if (name) {
      const dogsByName = await getDogByName(name);
      return res.status(200).json(dogsByName);
    }
    const allDogs = await getAllDogs();
    return res.status(200).json(allDogs);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getDogsByRace = async (req, res) => {
  // Recibe la raza por params
  const { idRaza } = req.params;
  try {
    const raceDog = await getRaceById(idRaza);
    return res.status(200).json(raceDog);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const postDog = async (req, res) => {
  const {
    image,
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span_min,
    life_span_max,
    breed_group,
    temperament,
  } = req.body;
  if (
    !image ||
    !name ||
    !height_min ||
    !weight_min ||
    !life_span_min ||
    !temperament.length
  )
    return res.status(400).json('Faltan datos mi rey');
  try {
    const dogCreated = await createDog(
      name,
      image,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span_min,
      life_span_max,
      breed_group,
      temperament
    );
    return res.status(201).json(dogCreated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getDogsByName, getDogsByRace, postDog };
