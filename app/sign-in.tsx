import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Link } from "expo-router";
import SignWith from "@/components/utils/SignWith";

const SignIn = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="h-full">
        <ImageBackground
          source={images.GoBurger}
          resizeMode="cover"
          className="flex justify-center h-full"
        />
        <View
          className="flex flex-col justify-between py-8 px-8"
          style={styles.overlay}
        >
          <Image
            source={images.Go_burger1}
            className="w-full h-3/6 opacity-70"
            resizeMode="contain"
          />
          <View>
            <View>
              <Text className="text-6xl font-archivo text-white">
                Welcome to <Text className="text-accent-100">GoBurger</Text>
              </Text>
              <Text className="text-lg font-rubik text-gray-200 mt-1">
                Get your favourite meals delivered quickly right to your
                doorstep.
              </Text>
            </View>
            <SignWith textStyle="text-accent-200" bgStyle="bg-accent-200"/>
            <TouchableOpacity className="bg-black shadow-xl shadow-zinc-600 rounded-full w-full py-4 mt-3">
              <View className="flex flex-row items-center justify-center">
                <Text className="text-lg font-rubik-semibold text-white">
                  Start with PhoneNo
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={handleLogin}
              className="bg-white rounded-full w-full py-4 mt-3"
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  source={icons.google}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-lg font-rubik-semibold text-black-200 ml-2 ">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
            <View className="flex flex-row justify-center p-2">
              <Text className="text-white text-lg text-center font-rubik-semibold">
                Already have an account?{" "}
              </Text>
              <Text className="text-accent-200 text-lg font-rubik-semibold text-center">
                <Link href="/login">SignIn</Link>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    paddingHorizontal: 10,
    ...StyleSheet.absoluteFillObject, // Makes the overlay cover the entire background
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
  },
});
export default SignIn;
