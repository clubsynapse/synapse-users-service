const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./utils/errorHandlerMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', require('./endpoints'));
app.use(errorHandler);

module.exports = {
  start() {
    app.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  },
};

exports.app = app;
