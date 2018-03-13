const Router = require('express-promise-router');
const router = new Router();

router.use('/users', require('./users'));

module.exports = router;