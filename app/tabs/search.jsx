import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View className="flex-1 bg-[#F3D9E9] p-4">
      {/* Search Bar */}
      <View className="flex-row items-center mb-6 bg-white p-3 rounded-lg shadow-md">
        <TextInput
          placeholder="What do you want to listen to today?"
          className="flex-1 text-gray-700"
          style={{ paddingLeft: 10 }}
        />
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Recent Searches Section */}
        <Text className="text-2xl font-bold text-gray-800 mb-4">Recent Searches</Text>

        {/* Recent Search 1 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/week.jpg')} style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">The Weekend</Text>
            <Text className="text-sm text-gray-500">Starboy</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recent Search 2 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/sza.jpg')} style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">SZA</Text>
            <Text className="text-sm text-gray-500">SOS</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recent Search 3 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/artist3.jpg')} style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">Taylor Swift</Text>
            <Text className="text-sm text-gray-500">Enchanted</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recommended Songs Section */}
        <Text className="text-2xl font-bold text-gray-800 mb-4">Recommended Songs</Text>

        {/* Recommended Song 1 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/sza.jpg')} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">SZA</Text>
            <Text className="text-sm text-gray-500">Nobody gets me</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recommended Song 2 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/taylor.jpg')} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">Taylor Swift</Text>
            <Text className="text-sm text-gray-500">Love Story</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recommended Song 3 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/week.jpg')} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">The Weekend</Text>
            <Text className="text-sm text-gray-500">Blinding Lights</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recommended Song 4 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/katy.jpg')} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">Katy Perry</Text>
            <Text className="text-sm text-gray-500">Dark Horse</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        {/* Recommended Song 5 */}
        <View className="flex-row items-center mb-4 p-3 bg-white rounded-lg shadow-lg">
          <Image source={require('../../assets/images/chris.jpg')} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text className="text-lg font-semibold text-gray-800">Chris Brown</Text>
            <Text className="text-sm text-gray-500">Wet the Bed</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/pay.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
