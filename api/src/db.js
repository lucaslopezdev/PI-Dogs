// Importamos lo necesario para crear la conexión con la DB
const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Importamos las funciones que crean los modelos
const DogModel = require('./models/Dog');
const TemperamentModel = require('./models/Temperament');

// Creamos la conexión con la DB dogs
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  {
    logging: false,
    native: false,
  }
);

DogModel(sequelize);
TemperamentModel(sequelize);

const { Dog, Temperament } = sequelize.models;

Dog.belongsToMany(Temperament, { through: 'Dog_Temperaments', timestamps: false });
Temperament.belongsToMany(Dog, { through: 'Dog_Temperaments', timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
