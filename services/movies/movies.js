const MoviesController = require("../../controllers/movies");

const movies = async (req, res) => {
  const {title, available, limit, skip} = req.query

 const list = await MoviesController.listMovies(title, available);

 if((parseInt(limit) + parseInt(skip)) > list.length){
  return res.status(400).send({message:"Invalid Limit"});
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

module.exports = movies;
