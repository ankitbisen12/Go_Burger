import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SettingsItemType } from "@/constants/helper";
import { Link } from "expo-router";

const SettingsItem = ({
  icon,
  title,
  link,
  onPress,
  color,
  textStyle,
}: SettingsItemType) => {
  // console.log( icon, title, color);
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-4"
    >
      <Link href={link as any}>
        <View className="flex flex-row items-center gap-3">
          <Image source={icon} className="size-8" tintColor={color} />
          <Text
            className={`text-xl font-rubik-medium text-black-300 ${textStyle}`}
          >
            {title}
          </Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

export default SettingsItem;
