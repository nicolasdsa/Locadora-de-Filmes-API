const Model = require("../utils/model");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

class Movies_UnitsModel extends Model {
  constructor() {
    super("movie_units");
  }

  async rentMovie(id, user){
    
    const userId = user._id.toString();
    const update = await this.collection.updateOne({_id: ObjectId(id)}, {$set: {userId: `${userId}`, return_date: null}});
    return update
  }

  async returnMovie(id){
    const date = new Date();
    const now = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const update = await this.collection.updateOne({_id: ObjectId(id)}, {$set: {return_date: `${now}`, userId: null}});
    return update
  }
}

module.exports = new Movies_UnitsModel();