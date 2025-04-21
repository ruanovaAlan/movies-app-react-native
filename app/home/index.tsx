import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideShow from '@/presentation/components/movies/MainSlideShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topQuery, upcomingQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={40} />
      </View>
    )
  }


  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

        {/* Carousel de imagenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList movies={popularQuery.data ?? []} title='Populares' className='mb-5' />

        {/* Top rated */}
        <MovieHorizontalList
          movies={topQuery.data?.pages.flat() ?? []}
          title='Mejores Calificadas'
          className='mb-5'
          loadNextPage={topQuery.fetchNextPage}
        />

        {/* Proximamente */}
        <MovieHorizontalList movies={upcomingQuery.data ?? []} title='Próximamente' className='mb-5' />


      </View>
    </ScrollView>
  )
}

export default HomeScreen