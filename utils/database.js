const { MongoClient } = require("mongodb");

class Database {
  constructor() {
    this.url = "mongodb://localhost:27017";
    this.client = new MongoClient(this.url);
  }

  async init() {
    await this.client.connect();
    this.db = this.client.db("locadora");
  }

  getCollection(collection) {
    return this.db.collection(collection);
  }
}

module.exports = new Database();
