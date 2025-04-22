import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {

  const { height: screenHight } = useWindowDimensions();

  return (
    <>

      <View style={{
        position: 'absolute',
        zIndex: 99,
        elevation: 9,
        top: 43,
        left: 10,
      }}>
        <Pressable
          onPress={() => router.dismiss()}
        >
          <Ionicons name='arrow-back'
            size={30}
            color='white'
            className='shadow'
          />
        </Pressable>
      </View>

      <View
        style={{ height: screenHight * 0.7 }}
        className='shadow-xl shadow-black/20 '
      >
        <View className='flex-1 rounded-b-[250x] overflow-hidden'>
          <Image source={{ uri: poster }} resizeMode='cover' className='flex-1' />
        </View>
      </View>

      <View className='px-5 mt-5'>
        <Text className='font-normal'>{originalTitle}</Text>
        <Text className='font-semibold text-2xl'>{title}</Text>
      </View>

    </>
  )
}

export default MovieHeader