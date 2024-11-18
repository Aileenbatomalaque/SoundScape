import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-[#FCE4EC] h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="px-6 flex-1 justify-center items-center">
        
          <Image
            source={images.logo}
            className="w-[200] h-[200] mb-8"
            resizeMode="contain"
          />
          <Text className="text-2xl  text-gray-500 text-center mb-4">
            An app where people can express their emotions by connecting to music.
          </Text>

          <Text className="text-lg text-gray-400 text-center mb-6">
          Play sound and escape harsh reality.
          </Text>

          
          <View className="flex-row w-full justify-center mb-20">
        <Link href="/auth/login" asChild>
          <TouchableOpacity
            className="bg-[#FF6F91] items-center justify-center py-4 px-10 rounded-full shadow-lg flex-row"
            style={{
              elevation: 5,
              borderWidth: 2,
              borderColor: '#FF4B6A',
            }}
          >
            <Image
              source={require('../assets/images/note.png')}
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
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
