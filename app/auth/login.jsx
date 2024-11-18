import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, Redirect, router } from 'expo-router';

const Login = () => {
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}

  return (
    <SafeAreaView className="bg-[#FCE4EC] h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-6">
              <Image source={images.logo}
                resizemode='contain'
                className="w-[190px] h-[159px] "
              />
              <Text className="text-3xl text-gray-600 mt-10 font-regular">Login</Text>
              <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-7"
                  keyboardType="email-address"
              />
              <FormField

                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
              />
              <CustomButton
                  title="Login"
                  handlePress={() => router.push('/tabs/home')}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />

        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-lg text-whitefont-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/auth/signup"
              className="text-lg font-u_bold text-gray-500 underline"
            >
              Signup
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default Login