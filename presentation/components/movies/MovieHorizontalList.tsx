import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      {
        title && (
          <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
        )
      }

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
      />

    </View>
  )
}

export default MovieHorizontalList