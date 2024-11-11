import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const Home = () => {
  const [showMoods, setShowMoods] = useState(false);

  return (
    <View className="flex-1 p-4 bg-[#F3D9E9]">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-3xl font-bold text-[#D81B60]">Home</Text>
        <TouchableOpacity
          onPress={() => setShowMoods(!showMoods)}
          className="bg-[#D81B60] p-2 rounded-full shadow-lg"
        >
          <Text className="text-white text-lg">Today's Mood</Text>
        </TouchableOpacity>
      </View>

      {/* Mood buttons */}
      {showMoods && (
        <View className="flex-row justify-around mb-6">
          <Link href="happy" asChild>
            <TouchableOpacity className="bg-[#FFEB3B] p-3 rounded-full shadow-lg">
              <Text className="font-semibold">Inspired</Text>
            </TouchableOpacity>
          </Link>
          <Link href="melan" asChild>
            <TouchableOpacity className="bg-[#2196F3] p-3 rounded-full shadow-lg">
              <Text className="font-semibold text-white">Melancholy</Text>
            </TouchableOpacity>
          </Link>
          <Link href="relax" asChild>
            <TouchableOpacity className="bg-[#4CAF50] p-3 rounded-full shadow-lg">
              <Text className="font-semibold">Relaxed</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      {/* Scrollable Playlist Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-lg text-gray-600 mb-1">Personal Playlists</Text>

        {/* Playlist 1 */}
        <View className="flex-row items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/1.jpg')} style={{ width: 70, height: 70, borderRadius: 10 }} />
          <Text className="text-lg font-medium flex-1 text-center">Playlist 1</Text>
          <View className="flex-row">
            <TouchableOpacity>
              <Image source={require('../../assets/del.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/share.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Playlist 2 */}
        <View className="flex-row items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/2.jpg')} style={{ width: 70, height: 70, borderRadius: 10 }} />
          <Text className="text-lg font-medium flex-1 text-center">Playlist 2</Text>
          <View className="flex-row">
            <TouchableOpacity>
              <Image source={require('../../assets/del.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/share.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Playlist 3 */}
        <View className="flex-row items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/3.jpg')} style={{ width: 70, height: 70, borderRadius: 10 }} />
          <Text className="text-lg font-medium flex-1 text-center">Playlist 3</Text>
          <View className="flex-row">
            <TouchableOpacity>
              <Image source={require('../../assets/del.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/share.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Playlist 4 */}
        <View className="flex-row items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/4.jpg')} style={{ width: 70, height: 70, borderRadius: 10 }} />
          <Text className="text-lg font-medium flex-1 text-center">Playlist 4</Text>
          <View className="flex-row">
            <TouchableOpacity>
              <Image source={require('../../assets/del.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/share.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Artists Section */}
        <View className="mt-6">
          <Text className="text-lg font-semibold text-[#D81B60]">SZA</Text>
          <Image source={require('../../assets/sos.gif')} style={{ width: 340, height: 340, marginVertical: 8, borderRadius: 10 }} />
          <Text className="text-gray-600">SOS is the second studio album by American singer-songwriter SZA. It was released on December 9, 2022, by Top Dawg Entertainment and RCA Records.</Text>
        </View>

        <View className="mt-6">
          <Text className="text-lg font-semibold text-[#D81B60]">Taylor Swift</Text>
          <Image source={require('../../assets/taylor.gif')} style={{ width: 340, height: 340, marginVertical: 8, borderRadius: 10 }} />
          <Text className="text-gray-600">Under Big Machine Records' imprint, Fearless was released in North America on November 11, 2008, and elsewhere on March 9, 2009. To promote the album, Swift embarked on the Fearless Tour from April 2009 to July 2010, and five songs were released as singles.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
