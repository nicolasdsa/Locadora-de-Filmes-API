const MoviesController = require("../../controllers/movies");
const ApiError = require("../../utils/apiError");
const Joi = require("joi");

const searchSchema = Joi.object({
  title: Joi.string().default('').lowercase(),
  available: Joi.boolean().default(false),
  limit: Joi.number().default(2),
  skip: Joi.number().default(0)
});

const route = async (req, res) => {

 const { error, value } = searchSchema.validate(req.query);

 if (error) {
    return res.status(400).send(error);
 }
 const {title, available, limit, skip } = value
 
 const list = await MoviesController.listMovies(title, available);

 if((limit + skip) > list.length){
  throw ApiError.badRequest("Invalid Limit", {});
 }


 const copyList = [...list];
 const listSkip = copyList.splice(0, skip);
 const listLimit = copyList.splice(limit, copyList.length);

 const pagination = {
   total: list.length,
    skip: skip,
    limit: limit,
    isFirstPage: skip > 0 ? false : true,
    isLastPage: (skip + limit) == list.length ? true : false
 }
 
 const Viewer = {movies:[...copyList], pagination:{...pagination}};
 res.status(200).send(Viewer);
}

module.exports = {route, searchSchema};
