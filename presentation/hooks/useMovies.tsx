import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topMoviesAction } from "@/core/actions/movies/top.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"


export const useMovies = () => {
  //Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 //24 horasas
  })

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 //24 horasas
  })

  const topQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top_rated'],
    queryFn: ({ pageParam }) => {
      return topMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, //24 horasas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  })

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 //24 horasas
  })



  return {
    nowPlayingQuery,
    popularQuery,
    topQuery,
    upcomingQuery,
  }
}