const Model = require("../utils/model");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

class Movies_UnitsModel extends Model {
  constructor() {
    super("movie_units");
  }

  async rentMovie(id, userId){
    const date = new Date();
    const time = date.setDate(date.getDate() + 3);

    const now = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const update = await this.collection.updateOne({_id: ObjectId(id)}, {$set: {userId: `${userId}`, return_date: `${now}`}});
    return update
  }

  async returnMovie(id){
    const update = await this.collection.updateOne({_id: ObjectId(id)}, {$set: {return_date: null, userId: null}});
    return update
  }

  async verifyMovie(id){
    const movie = await this.collection.findOne({_id: ObjectId(id)});
    return movie
  }

  async groupIdMovies(available){
    const group = available ? await this.collection.find({userId: {$eq:null}}).toArray() : await this.collection.find({}).toArray();
    return group;
  }

}

module.exports = new Movies_UnitsModel();