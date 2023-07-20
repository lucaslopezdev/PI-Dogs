const { DataTypes } = require('sequelize');


module.exports = (sequelize) => sequelize.define('Dog', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  height_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    }
  },
  height_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 110
    }
  },
  weight_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0.1,
    }
  },
  weight_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 100
    }
  },
  breed_group: {
    type: DataTypes.STRING,
  },
  life_span_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0.1,
    }
  },
  life_span_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 20
    }
  },
  created: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
}, {timestamps: false})