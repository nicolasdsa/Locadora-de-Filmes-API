const MoviesController = require("../../controllers/movies");

const movies = async (req, res) => {
 const list = await MoviesController.listMovies(req.query);


 const copyList = [...list];
 const listSkip = copyList.splice(0, parseInt(req.query.skip));
 const listLimit = copyList.splice(parseInt(req.query.limit), copyList.length);

 const pagination = {
   total: list.length,
    skip: parseInt(req.query.skip),
    limit: parseInt(req.query.limit),
    isFirstPage: parseInt(req.query.skip) > 0 ? false : true,
    isLastPage: (parseInt(req.query.skip) + parseInt(req.query.limit)) == list.length ? true : false
 }
 
 res.status(200).send(copyList);
}

module.exports = movies;
