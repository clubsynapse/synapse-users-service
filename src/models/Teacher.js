const Sequelize = require('sequelize');

const sequelize = require('../providers/sequelize');
const User = require('./User');

const Teacher = sequelize.define('teacher', {
  firstName: {
    type: Sequelize.String,
  },
  lastName: {
    type: Sequelize.String,
  },
});

Teacher.belongsTo(User);

Teacher.sync()
  .then(() => console.log('Teacher model synced'))
  .catch((e) => console.error('Could not sync Teacher model', e));

module.exports = Teacher;
