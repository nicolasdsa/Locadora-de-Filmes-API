const MoviesController = require("../../controllers/movies");

const listMovies = async (req, res) => {
 const list = await MoviesController.listMovies();
 res.status(200).send(list);
}

module.exports = listMovies;
