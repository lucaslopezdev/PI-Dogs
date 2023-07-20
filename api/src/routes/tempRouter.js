const {Router} = require('express');

// Importamos el handler de Temperaments
const getTemps = require('../handlers/tempHandler')

const tempRouter = Router();

tempRouter.get('/', getTemps)

module.exports = tempRouter;