import { movieApi } from "@/core/api/movie-api";

import { CreditsResponse } from "@/infraestructure/interfaces/moviedb-cast.response";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";

export const getMovieCastAction = async (id: number | string) => {
  try {

    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);


    return data.cast.map(CastMapper.fromMovieDBCastToEntity);

  } catch (error) {
    console.log(error);
    throw 'Cannot load cast from movie';
  }
}