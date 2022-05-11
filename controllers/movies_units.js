const Movies_UnitsModel = require("../models/movies_units");

class Movies_UnitsController {
  async rentMovie(id, userId){
    const rent = await Movies_UnitsModel.rentMovie(id, userId);
    return rent
  }

  async returnMovie(id){
    const devolution = await Movies_UnitsModel.returnMovie(id);
    return devolution;
  }

  async verifyMovie(id){
    const verify = await Movies_UnitsModel.verifyMovie(id);
    return verify
  }

  async groupIdMovies(available){
    const group = await Movies_UnitsModel.groupIdMovies(available);
    return group
  }
}

module.exports = new Movies_UnitsController();