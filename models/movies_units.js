const Model = require("../utils/model");

class Movies_UnitsModel extends Model {
  constructor() {
    super("movie_units");
  }

}

module.exports = new Movies_UnitsModel();