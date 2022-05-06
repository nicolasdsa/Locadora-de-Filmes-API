const Model = require("../utils/model");

class MoviesModel extends Model {
  constructor() {
    super("movies");
  }

  async listMovies() {
    const list = await this.collection.find({}).toArray();
    return list
  }
}

module.exports = new MoviesModel();