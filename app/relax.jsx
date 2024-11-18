import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Relax = () => {
  return (
    <View className="bg-[#d1faad] flex-1 items-center justify-start">
      <View className="flex-row w-full justify-between items-center h-10 mt-10">
        <Link href="/tabs/home">
          <Image 
            className="ml-2 opacity-50 -rotate-90" 
            source={require('../assets/images/back.png')} 
            style={{ width: 24, height: 24, resizeMode: 'contain' }} 
          />
        </Link>
        <Text className="text-lg font-light">Relaxing Music</Text>
        <Image 
          className="mr-2 opacity-50"  
          source={require('../assets/images/3.png')} 
          style={{ width: 24, height: 24 }} 
        />
      </View>
      <Text className="text-2xl mt-10 text-gray-700">Meditation</Text>
      <Text className="text-lg mt-5 text-gray-500">Monoman.</Text>
      <Image 
        className="mt-10" 
        source={require('../assets/images/mono.jpg')} 
        style={{ width: 300, height: 300, borderRadius: 155, borderWidth: 5, borderColor: 'white' }} 
      />
      
      <Image 
        className="opacity-90 mt-16" 
        source={require('../assets/images/liee.png')} 
        style={{ resizeMode: 'contain' }} 
      />
      
      <View className="flex-row justify-between items-center mt-5">
        <TouchableOpacity>
          <Image 
            className="mr-3 opacity-80" 
            source={require('../assets/images/minus.png')} 
            style={{ width: 30, height: 30 }} 
          />
        </TouchableOpacity>

        <Link href="happy" asChild>
          <TouchableOpacity>
            <Image 
              className="mr-3 opacity-80 rotate-180" 
              source={require('../assets/images/play.png')} 
              style={{ width: 60, height: 60 }} 
            />
          </TouchableOpacity>
        </Link>

        <TouchableOpacity>
          <Image 
            className="ml-3 mr-3 opacity-80" 
            source={require('../assets/images/pay.png')} 
            style={{ width: 50, height: 50 }} 
          />
        </TouchableOpacity>
        <Link href="melan" asChild>
          <TouchableOpacity>
            <Image 
              className="ml-3 opacity-80" 
              source={require('../assets/images/play.png')} 
              style={{ width: 60, height: 60 }} 
            />
          </TouchableOpacity>
        </Link>

        <TouchableOpacity>
          <Image 
            className="ml-3 opacity-80" 
            source={require('../assets/images/heart.png')} 
            style={{ width: 30, height: 30 }} 
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Relax
