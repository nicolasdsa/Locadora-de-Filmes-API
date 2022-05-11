const MoviesController = require("../../controllers/movies");
const ApiError = require("../../utils/apiError");
const Joi = require("joi");

const searchSchema = Joi.object({
  title: Joi.string().required(),
  available: Joi.string().min(4).required(),
  limit: Joi.string().min(1).required(),
  skip: Joi.string().min(1).required()
});

const route = async (req, res) => {

  const { error, value } = searchSchema.validate(req.query);

  if (error) {
    return res.status(400).send(error);
  }

  const {title, available, limit, skip } = req.query


 const list = await MoviesController.listMovies(title, available);

 if((parseInt(limit) + parseInt(skip)) > list.length){
  throw ApiError.badRequest("Invalid Limit", {});
 }


 const copyList = [...list];
 const listSkip = copyList.splice(0, parseInt(skip));
 const listLimit = copyList.splice(parseInt(limit), copyList.length);

 const pagination = {
   total: list.length,
    skip: parseInt(skip),
    limit: parseInt(limit),
    isFirstPage: parseInt(skip) > 0 ? false : true,
    isLastPage: (parseInt(skip) + parseInt(limit)) == list.length ? true : false
 }
 
 const Viewer = {movies:[...copyList], pagination:{...pagination}};
 res.status(200).send(Viewer);
}

module.exports = {route, searchSchema};
