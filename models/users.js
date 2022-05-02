const Model = require("../utils/model");

class UsersModel extends Model {
  constructor() {
    super("users");
  }

  async create(){
    const id = await this.collection.insertOne(user);
    return id;
  }

}

module.exports = new UsersModel();