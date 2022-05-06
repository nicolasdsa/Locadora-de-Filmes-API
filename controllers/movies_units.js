const Movies_UnitsModel = require("../models/movies_units");
const UsersController = require("./users");

class Movies_UnitsController {
  async rentMovie(id, userEmail){
    const user = await  UsersController.getUser(userEmail);
    const rent = await Movies_UnitsModel.rentMovie(id, user);
    return rent
  }

  async returnMovie(id){
    const devolution = await Movies_UnitsModel.returnMovie(id);
    return devolution;
  }
}

module.exports = new Movies_UnitsController();