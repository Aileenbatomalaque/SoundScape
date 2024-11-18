import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Library = () => {
  return (
    <View className="flex-1 bg-[#F3D9E9] p-4">
      <View className="flex-row items-center justify-between mb-4">
        <Image source={require('../../assets/images/pfp.png')} style={{ width: 60, height: 60, borderRadius: 30 }} />
        <Text className="text-2xl font-bold text-[#D81B60]">Aileen's Library</Text>
      </View>

      {/* Recent Section */}
      <Text className="text-xl font-bold text-[#D81B60] mb-4">Recent</Text>

      <View className="flex-row justify-between mb-4 p-2 bg-white rounded-lg shadow-lg">
        <Image source={require('../../assets/images/album1.jpg')} style={{ width: 100, height: 100, borderRadius: 8 }} />
        <View className="flex-1 ml-4">
          <Text className="text-lg font-semibold text-gray-800">Happier than Ever</Text>
          <Text className="text-gray-500">Billie Eilish</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../../assets/images/x.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mb-4 p-2 bg-white rounded-lg shadow-lg">
        <Image source={require('../../assets/images/album2.jpg')} style={{ width: 100, height: 100, borderRadius: 8 }} />
        <View className="flex-1 ml-4">
          <Text className="text-lg font-semibold text-gray-800">Rise and Fall</Text>
          <Text className="text-gray-500">Chapell Roan</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../../assets/images/x.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mb-4 p-2 bg-white rounded-lg shadow-lg">
        <Image source={require('../../assets/images/lover.jpg')} style={{ width: 100, height: 100, borderRadius: 8 }} />
        <View className="flex-1 ml-4">
          <Text className="text-lg font-semibold text-gray-800">Lover</Text>
          <Text className="text-gray-500">Taylor Swift</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../../assets/images/x.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      
      {/* Log Off Button */}
      <View className="flex-row justify-center mt-6">
        <Link href="/" asChild>
          <TouchableOpacity 
            className="bg-[#D81B60] p-3 rounded-lg shadow-md" 
            style={{ width: 200 }} 
            activeOpacity={0.7}>
            <Text className="text-white font-semibold text-center">Log Off</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Library;
