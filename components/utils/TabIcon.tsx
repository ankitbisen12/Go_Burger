import { View, Text, Image } from "react-native";
import React from "react";

interface TabIconProps {
  focused: boolean;
  title: string;
  icon: any;
}

const TabIcon = ({ focused, title, icon }: TabIconProps) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      <Image
        source={icon}
        tintColor={focused ? "#591804" : "#FFFFFF"}
        resizeMode="contain"
        className="size-6"
      />
      <Text
        className={`${
          focused ? "#591804 " : "text-white"
        } text-sm w-full text-center font-bold mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;
