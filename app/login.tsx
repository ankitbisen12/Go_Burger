import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const Login = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView className="bg-white h-full">
        <View>
          <Text>Login</Text>
        </View>
        <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2 ">
          <View className="flex-1 flex flex-row items-center justify-start z-50 ">
            <Entypo name="email" size={24} color="black" />
            <TextInput
              //   value={search}
              placeholder="Search for anything"
              //   onChangeText={handleSearch}
              className="text-sm font-rubik text-black-300 ml-2 flex-1"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
