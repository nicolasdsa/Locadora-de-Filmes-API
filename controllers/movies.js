const MoviesModel = require("../models/movies.js");
const Movies_UnitsController = require("./movies_units");

class MoviesController {
  static async listMovies(title, available) {
    const group = await Movies_UnitsController.groupIdMovies(available);
    const list = await MoviesModel.listMovies(title,group);
    return list
  }
}

module.exports = MoviesController;