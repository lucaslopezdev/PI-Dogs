const { Router } = require('express');

// Importamos los Handlers
const { getDogsByName, getDogsByRace, postDog} = require('../handlers/dogsHandler')

const dogsRouter = Router()

dogsRouter.get('/', getDogsByName) // --> /dogs y /dogs/name?='..' 
dogsRouter.get('/:idRaza', getDogsByRace)
dogsRouter.post('/', postDog)

/* Proximamente Put y Delete */

module.exports = dogsRouter;