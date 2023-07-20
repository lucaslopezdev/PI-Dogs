const {allTemperaments} = require('../controllers/tempController')

const getTemps = async (req, res) => {
  try {
    const allTempsDogs = await allTemperaments();
    return res.status(200).json(allTempsDogs)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
}

module.exports = getTemps;