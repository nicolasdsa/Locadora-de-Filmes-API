const Model = require("../utils/model");

class MoviesModel extends Model {
  constructor() {
    super("movies");
  }

  async listMovies(title, group) {
    const list = await this.collection.find({}).toArray();
    const filterTitle = list.filter(item => item.title.toLowerCase().replaceAll(" ", "").includes(title.toLowerCase().replaceAll(" ", "")));
    const groupMovies = await this.groupMoviesUnitsWithMovies(filterTitle,group);
    return groupMovies
  }

  async groupMoviesUnitsWithMovies(movies,group){
    const order = movies.map(movie => {
      const filter = group.filter(film => {
        if(movie._id.toString() == film.movie_id){
          return film.movie_id;
        }
      }) 
            
      const id = filter.map( item => {
        return item._id.toString();
      })

      return id
    })

   for(let i = 0; i < movies.length; i++){
      movies[i]["units"] = [...order[i]]
   }

    return movies
  }

}

module.exports = new MoviesModel();