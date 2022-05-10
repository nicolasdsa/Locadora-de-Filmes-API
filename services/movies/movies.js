const MoviesController = require("../../controllers/movies");

const movies = async (req, res) => {
 const list = await MoviesController.listMovies(req.query);
 res.status(200).send(list);
}

module.exports = movies;
