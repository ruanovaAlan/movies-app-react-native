import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideShow from '@/presentation/components/movies/MainSlideShow'

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={40} />
      </View>
    )
  }


  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

      {/* Carousel de imagenes */}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
    </View>
  )
}

export default HomeScreen