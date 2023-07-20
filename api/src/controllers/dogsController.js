const { Dog, Temperament } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');
const { API_KEY } = process.env;

const getRaceById = async (idRaza) => {
  const allDogs = await getAllDogs();
  const dogById = allDogs.find(dog => String(dog.id) === idRaza)

  return dogById
};

const getDogByName = async (name) => {
  const DBDogsByName = await Dog.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const APIDogsByName = data.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...DBDogsByName, ...APIDogsByName];
};

const getAllDogs = async () => {
  let dBDogs = await Dog.findAll({
    include: {
      model: Temperament,
      through: { attributes: [] },
      attributes: ['name'],
    },
  });

  dBDogs = dBDogs.map((dog) => {
    const { id, name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, image, breed_group, Temperaments } =
      dog.toJSON();
    return {
      id,
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span_min,
      life_span_max,
      image,
      breed_group,
      temperament: [...Temperaments.map((t) => t.name)], // Crear una nueva propiedad "temperament" y asignarle los temperamentos unidos en una cadena
    };
  });

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const APIDogs = data.map((dog) => {
    const [minHeight, maxHeight] = dog.height.metric.split('-')
    const [minWeight, maxWeight] = dog.weight.metric.split('-')
    const [minLifeSpan, maxLifeSpan] = dog.life_span.includes('–') ? dog.life_span.split('–') : dog.life_span.split('-'); 

    return {
      id: dog.id,
      name: dog.name,
      image: dog.image?.url,
      height_min: +minHeight,
      height_max: +maxHeight,
      weight_min: +minWeight,
      weight_max: +maxWeight,
      life_span_min: parseInt(minLifeSpan),
      life_span_max: parseInt(maxLifeSpan),
      temperament: dog.temperament?.split(', '),
      breed_group: dog.breed_group,
    };
  });
  return [...dBDogs, ...APIDogs];
};

const createDog = async (
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
) => {
  const [newDog, created] = await Dog.findOrCreate({
    where: { name },
    defaults: {
      name,
      image,
      height_min,
      height_max,
      weight_min,
      weight_max,
      life_span_min,
      life_span_max,
      breed_group,
    },
  });
  console.log(temperament);
  temperament.forEach(async (temp) => await newDog.addTemperament(temp));
  if (created) return newDog;
  throw Error('This dog already exists..');
};

module.exports = { getDogByName, getAllDogs, createDog, getRaceById };
