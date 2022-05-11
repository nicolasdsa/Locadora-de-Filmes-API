const Model = require("../utils/model");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

class Movies_UnitsModel extends Model {
  constructor() {
    super("movie_units");
  }

  async rentMovie(id, userId){
    const update = await this.collection.updateOne({_id: ObjectId(id)}, {$set: {userId: `${userId}`, return_date: null}});
    return update
  }

  async returnMovie(id){
    const date = new Date();
    const now = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const update = await this.collection.updateOne({_id: ObjectId(id)}, {$set: {return_date: `${now}`, userId: null}});
    return update
  }

  async verifyMovie(id){
    const movie = await this.collection.findOne({_id: ObjectId(id)});
    return movie
  }

  async groupIdMovies(available){
    const isTrueSet = (available === 'true');
    const group = (isTrueSet) ? await this.collection.find({userId: {$eq:null}}).toArray() : await this.collection.find({}).toArray();
    return group;
  }

}

module.exports = new Movies_UnitsModel();