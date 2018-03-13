const Sequelize = require('sequelize');

const sequelize = require('../providers/sequelize');
const User = require('./User');

const Student = sequelize.define('student', {
  formation: {
    type: Sequelize.STRING,
  },
  option: {
    type: Sequelize.STRING,
  },
  level: {
    type: Sequelize.INTEGER,
  },
  firstName: {
    type: Sequelize.String,
  },
  lastName: {
    type: Sequelize.String,
  },
});

Student.belongsTo(User);

Student.sync()
  .then(() => console.log('Student model synced'))
  .catch((e) => console.error('Could not sync Student model', e));

module.exports = Student;
