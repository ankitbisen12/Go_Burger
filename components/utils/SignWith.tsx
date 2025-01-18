import { View, Text } from "react-native";
import React from "react";

interface SignInWIthProp {
  bgStyle: string;
  textStyle: string;
}

const SignWith = ({ bgStyle, textStyle }: SignInWIthProp) => {
  return (
    <View className="flex-row items-center justify-center mt-4 px-6">
      {/* Left line */}
      <View className={`flex-1 h-0.5 ${bgStyle} w-4`} />
      {/* Text */}
      <Text className={`mx-4 ${textStyle} text-lg font-rubik-semibold`}>
        Sign in with
      </Text>
      {/* Right line */}
      <View className={`flex-1 h-0.5 ${bgStyle}`} />
    </View>
  );
};

export default SignWith;
