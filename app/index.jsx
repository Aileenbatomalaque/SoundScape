import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#FCE4EC] relative p-4">
      {/* Soft Background Circle */}
      <View
        style={{
          position: 'absolute',
          width: 350,
          height: 350,
          borderRadius: 175,
          backgroundColor: '#FFB2C1',
          opacity: 0.3,
          top: -100,
          left: -150,
          zIndex: 0,
        }}
      />
      
      {/* Logo at the top */}
      <Image
        source={require('../assets/logms.png')}
        style={{
          resizeMode: 'contain',
          marginBottom: 40,
          width: '70%',
          height: '30%',
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}
      />

      {/* Tagline */}
      <Text className="text-2xl text-[#FF6F91] font-semibold mb-5">Your Musical Escape</Text>

      {/* Button for Start Listening */}
      <View className="flex-row w-full justify-center mb-20">
        <Link href="login" asChild>
          <TouchableOpacity
            className="bg-[#FF6F91] items-center justify-center py-4 px-10 rounded-full shadow-lg flex-row"
            style={{
              elevation: 5,
              borderWidth: 2,
              borderColor: '#FF4B6A',
            }}
          >
            <Image
              source={require('../assets/note.png')}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                tintColor: 'white',
              }}
            />
            <Text className="text-lg text-white font-semibold">Start Listening</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Index;
