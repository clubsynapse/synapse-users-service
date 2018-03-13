const Sequelize = require('sequelize');

const sequelize = require('../providers/sequelize');

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  admin: {
    type: Sequelize.BOOLEAN,
  },
  banni: {
    type: Sequelize.BOOLEAN,
  },
  actif: {
    type: Sequelize.BOOLEAN,
  },
  pictureURL: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.ENUM,
    values: ['student', 'teacher', 'enterprise'],
  },
});

User.sync()
  .then(() => console.log('User model synced'))
  .catch((e) => console.error('Could not sync User model', e));

module.exports = User;
