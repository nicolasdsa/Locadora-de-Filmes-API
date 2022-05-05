const UsersModel = require("../models/users.js");

class UsersController {
  static async create(user) {
    const id = await UsersModel.create(user);
    return id;
  }

  static async getUser(email) {
    const user = await UsersModel.getUser(email);
    return user;
  }

}

module.exports = UsersController;