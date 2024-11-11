import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View className="flex-1 items-center justify-center bg-[#FCE4EC] p-4">
      <Text className="text-3xl font-semibold text-[#FF6F91] mb-10">Sign Up Account</Text>

      {/* Name Input */}
      <TextInput
        placeholder="Enter your name"
        className="border w-full max-w-xs p-3 mb-4 rounded-lg bg-white shadow-md"
        placeholderTextColor="gray"
      />
      
      {/* Email Input */}
      <TextInput
        placeholder="Enter your email"
        className="border w-full max-w-xs p-3 mb-4 rounded-lg bg-white shadow-md"
        placeholderTextColor="gray"
      />
      
      {/* Password Input */}
      <TextInput
        placeholder="Enter your password"
        className="border w-full max-w-xs p-3 mb-8 rounded-lg bg-white shadow-md"
        placeholderTextColor="gray"
        secureTextEntry
      />

      {/* Register Button */}
      <Link href="login" asChild>
        <TouchableOpacity className="bg-[#FF6F91] w-full max-w-xs p-4 rounded-lg items-center shadow-lg">
          <Text className="text-white text-lg font-semibold">Register</Text>
        </TouchableOpacity>
      </Link>

      {/* Login Link */}
      <View className="w-full max-w-xs mt-4 flex-row justify-center">
        <Link href="login" asChild>
          <Text className="text-gray-600">
            Already have an account? <Text className="text-[#FF6F91]">Log in here</Text>
          </Text>
        </Link>
      </View>

      {/* Social Media Signup */}
      <Text className="mt-6 mb-2 text-gray-500">Or sign up with</Text>
      <View className="flex-row">
        <TouchableOpacity className="bg-[#3b5998] p-3 rounded-full mx-2 shadow-md">
          <Image source={require('../assets/fb.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#db4437] p-3 rounded-full mx-2 shadow-md">
          <Image source={require('../assets/google.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
