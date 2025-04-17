import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infraestructure/interfaces/movie.interface'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'

interface Props {
  movies: Movie[],

}


const MainSlideShow = ({ movies }: Props) => {

  const ref = useRef<ICarouselInstance>(null)
  const width = useWindowDimensions().width;

  return (
    <View className='h-[250px] w-full'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode='parallax'
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideShow