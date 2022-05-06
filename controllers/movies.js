const MoviesModel = require("../models/movies.js");

class MoviesController {
  static async listMovies() {
    const list = await MoviesModel.listMovies();
    return list
  }
}

module.exports = MoviesController;