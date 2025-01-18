import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import SignWith from "@/components/utils/SignWith";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggleHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="bg-white h-full">
        <View className="p-6 flex">
          <View className="py-6 mt-20">
            <Text className="text-5xl font-rubik-bold">Sign Up</Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl  border border-gray-200 py-1 mt-4">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              {/* <Entypo name="email" size={20} color="#d4d4d8" /> */}
              <TextInput
                //   value={search}
                placeholder="Your Name"
                placeholderTextColor="#d4d4d8"
                //   onChangeText={handleSearch}
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
              />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl  border border-gray-200 py-1 mt-4">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              {/* <Entypo name="email" size={20} color="#d4d4d8" /> */}
              <TextInput
                //   value={search}
                placeholder="Your Email"
                placeholderTextColor="#d4d4d8"
                //   onChangeText={handleSearch}
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
              />
            </View>
          </View>

          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl  border border-gray-200 py-1 mt-5">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              {/* <Entypo name="key" size={24} color="black" /> */}
              <TextInput
                //   value={search}
                placeholder="Password"
                placeholderTextColor="#d4d4d8"
                //   onChangeText={handleSearch}
                secureTextEntry={!showPassword}
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
              />
              <TouchableOpacity onPress={passwordToggleHandler}>
                {showPassword ? (
                  <AntDesign name="eyeo" size={20} color="#a1a1aa" />
                ) : (
                  <Feather name="eye-off" size={20} color="#a1a1aa" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex  py-4 ">
            <Text className="text-accent-100 text-right text-lg self-end">
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity className="bg-accent-100 shadow-xl shadow-zinc-600 rounded-full w-full py-4 mt-3">
            <View className="flex flex-row items-center justify-center">
              <Text className="text-xl font-rubik-semibold text-white">
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row justify-center py-6 items-center">
            <Text className="text-gray-600 text-lg font-rubik">
              Already have an account?{" "}
            </Text>
            <Text className="text-accent-100 text-lg font-rubik">Login</Text>
          </View>
          <SignWith textStyle="text-basic-200" bgStyle="bg-basic-200" />
          <TouchableOpacity
            // onPress={handleLogin}
            className="bg-white rounded-full w-full py-4 mt-8 border border-slate-700"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-xl font-rubik-semibold text-black-200 ml-2 ">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
