const database = require("./database");

class Model {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  get collection() {
    return database.getCollection(this.collectionName);
  }
}

module.exports = Model;
