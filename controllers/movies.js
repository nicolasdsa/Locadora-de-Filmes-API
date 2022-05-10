const MoviesModel = require("../models/movies.js");
const Movies_UnitsController = require("./movies_units");

class MoviesController {
  static async listMovies(search) {
    const group = await Movies_UnitsController.groupIdMovies();
    const list = await MoviesModel.listMovies(search,group);
    return list
  }
}

module.exports = MoviesController;