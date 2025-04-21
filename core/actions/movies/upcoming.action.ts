import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";



export const upcomingMoviesAction = async () => {
  try {

    const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming')
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load upcoming movies';
  }
}