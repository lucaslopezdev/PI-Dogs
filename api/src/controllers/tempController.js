const { Temperament } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

const allTemperaments = async () => {
  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const allTemps = data
    .map((dog) => dog.temperament)
    .reduce((acc, temp) => {
      if (temp) {
        const separatedTemps = temp.split(', ');
        return [...acc, ...separatedTemps];
      }
      return acc;
    }, []);

  const uniqueTemps = [...new Set(allTemps)];

  uniqueTemps.forEach(async (temp) => await Temperament.create({ name: temp }));

  return uniqueTemps;
};

module.exports = { allTemperaments };
