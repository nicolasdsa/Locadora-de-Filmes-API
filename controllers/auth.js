const bcrypt = require("bcryptjs");
const UsersController = require("./users");

class AuthController {
  static async signup({ name, email, password }) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    const id = await UsersController.create({
      name,
      email,
      password: hash,
    });
    return id;
  }

}

module.exports = AuthController;
