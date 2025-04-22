import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter';

interface Props {
  movie: CompleteMovie;

}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className='mx-5'>

      <View className='flex flex-row'>
        <Text className='font-semibold'>⭐️ {movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className='font-bold mt-5 text-2xl'>Historia</Text>
      <Text className='font-normal mt-2'>{movie.description}</Text>
      <Text className='font-bold mt-2 text-2xl'>Presupuesto</Text>
      <Text className='font-normal mt-1 text-xl'>{Formatter.currency(movie.budget)}</Text>

    </View>
  )
}

export default MovieDescription