const Movies_UnitsModel = require("../models/movies_units");

class Movies_UnitsController {
  async rentMovie(){
    return console.log("rent");
  }

  async returnMovie(){
    return console.log("return");
  }
}

module.exports = new Movies_UnitsController();