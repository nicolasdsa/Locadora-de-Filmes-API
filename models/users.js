const Model = require("../utils/model");

class UsersModel extends Model {
  constructor() {
    super("users");
  }

  async create(user){
    const id = await this.collection.insertOne(user);
    return id;
  }

  async getUser(userEmail) {
    const usersData = await this.collection.find({email: userEmail}).toArray();
    const users = Object.values(usersData);

    for (const user of users) {
      if (user.email === userEmail) {
        return user;
      }
    }

    return null;
  }

}

module.exports = new UsersModel();