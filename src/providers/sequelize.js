const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql'
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to the mysql database');
  })
  .catch(e => {
    console.error('Could not connect to the mysql database', e);
  });

module.exports = sequelize;
