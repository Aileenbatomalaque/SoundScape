import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Happy = () => {
  return (
    <View className="bg-[#FBDB65] flex-1 items-center justify-start">
      <View className="flex-row w-full justify-between items-center h-10 mt-10">
      <Link href="/home"><Image className="ml-2 opacity-50 -rotate-90" source={require('../assets/back.png')} style={{ width: 24, height: 24,resizeMode:'contain' }} /></Link>
      <Text className="text-lg font-light">Upbeat Music</Text>
      <Image className="mr-2 opacity-50"  source={require('../assets/3.png')} style={{ width: 24, height: 24 }} />
      </View>
      <Text className="text-2xl mt-10 text-gray-700">Shut up and Dance with Me</Text>
      <Text className="text-lg mt-5 text-gray-500">Walk the Moon.</Text>
      <Image className="mt-10" source={require('../assets/shut.jpg')} style={{ width: 300, height: 300,borderRadius:155, borderWidth:5, borderColor:'white' }} />
      
      <Image className="opacity-90 mt-16" source={require('../assets/liee.png')} style={{ resizeMode:'contain' }} />
      
      <View className="flex-row justify-between items-center mt-5">
      <TouchableOpacity>
        <Image className="mr-3 opacity-80" source={require('../assets/minus.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <Link href="melan" asChild>
      <TouchableOpacity>
        <Image className="mr-3 opacity-80 rotate-180" source={require('../assets/play.png')} style={{ width: 60, height: 60 }} />
      </TouchableOpacity></Link>
      <TouchableOpacity>
        <Image className="ml-3 mr-3 opacity-80" source={require('../assets/pay.png')} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
      <Link href="relax" asChild>
      <TouchableOpacity>
        <Image className="ml-3 opacity-80" source={require('../assets/play.png')} style={{ width: 60, height: 60 }} />
      </TouchableOpacity></Link>
    
      <TouchableOpacity>
        <Image className="ml-3 opacity-80" source={require('../assets/heart.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Happy