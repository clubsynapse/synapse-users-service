/**
 * Handles uncaught errors, mounted as an error handler on the express server
 *
 * @param {Error} err - The thrown error
 * @param {Request} req - The http request
 * @param {Response} res - The http response
 * @param {Callback} next - The next handler in the middleware chain
 */
function handleError(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  if (process.env.NODE_ENV === 'production') {
    res.send({
      message: err.message,
    });
  } else {
    res.send({
      message: err.message,
      stack: err.stack,
      code: err.code,
    });
  }
}

module.exports = handleError;
