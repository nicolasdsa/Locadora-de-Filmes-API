const errorMiddleware = async (res, err) => {
  const { status = 500, message = "Internal Server Error", data = {} } = err;

  return res.status(status).send({ message});
};

module.exports = errorMiddleware;
