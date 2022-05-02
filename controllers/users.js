const UsersModel = require("../models/users.js");

class UsersController {
  static async create(user) {
    const id = await UsersModel.create(user);
    return id;
  }

}

module.exports = UsersController;