import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store/store";
import { Link } from "expo-router";
import { loginUserAsync } from "../features/auth/authSlice";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import SignWith from "@/components/utils/SignWith";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { selectLoggedInUser } from "../features/auth/authSlice";

interface userDataProps {
  email: string;
  password: string | undefined;
}

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const loggedToken = useSelector(selectLoggedInUser);

  useEffect(() => {
    console.log("Token inside useEffect", typeof(loggedToken));
  }, [loggedToken]);

  const passwordToggleHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const emailChangeHandler = (inputText: string) => {
    setEmail(inputText);
  };

  const passwordChangeHandler = (pass: string) => {
    setPassword(pass);
  };

  const handleLogin = () => {
    const userData: userDataProps = {
      email: email,
      password: password,
    };
    console.log(userData);
    dispatch(loginUserAsync(userData));
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="bg-white h-full">
        <View className="p-6 flex ">
          <Image
            source={images.Go_Burger}
            resizeMode="contain"
            className="w-full h-2/6 opacity-90"
          />
          <View className="py-6">
            <Text className="text-5xl font-rubik-bold">Login</Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl  border border-gray-200 py-1 mt-4">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              {/* <Entypo name="email" size={20} color="#d4d4d8" /> */}
              <TextInput
                value={email}
                placeholder="Your Email"
                placeholderTextColor="#d4d4d8"
                onChangeText={emailChangeHandler}
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
              />
            </View>
          </View>

          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl  border border-gray-200 py-1 mt-5">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              {/* <Entypo name="key" size={24} color="black" /> */}
              <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor="#d4d4d8"
                onChangeText={passwordChangeHandler}
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
          <TouchableOpacity
            className="bg-accent-100 shadow-xl shadow-zinc-600 rounded-full w-full py-4 mt-3"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Text className="text-xl font-rubik-semibold text-white">
                Login
              </Text>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row justify-center py-6 items-center">
            <Text className="text-gray-600 text-lg font-rubik">
              Don't have an account?{" "}
            </Text>
            <Text className="text-accent-100 text-lg font-rubik">
              <Link href="/signup">Sign Up</Link>
            </Text>
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

export default Login;
