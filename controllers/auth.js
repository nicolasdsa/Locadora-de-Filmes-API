const bcrypt = require("bcryptjs");
const UsersController = require("./users");
const jwt = require("jsonwebtoken");

const secret = "t3st4nd0";

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

  static async signin({ email, password }) {
    const user = await UsersController.getUser(email);

    if (!user) {
      throw new Error("Bad Request");
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      throw new Error("Bad Request");
    }

    const token = jwt.sign({ id: user.id, email: user.email }, secret);

    return token;
  }
}

module.exports = AuthController;
