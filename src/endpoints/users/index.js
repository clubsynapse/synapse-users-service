const Router = require('express-promise-router');
const router = new Router();

router.post('/subscribe', async (req, res) => {
  console.log('Fake subscribing');
  res.send({ coming: 'soon' });
});

module.exports = router;
