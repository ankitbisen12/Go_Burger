import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MENUItems } from "@/constants/data";
import { MenuItem } from "@/constants/helper";

interface MenuProps {
  item: MenuItem;
  onPress?: () => void;
}

export const FeaturedMenu = ({ item, onPress }: MenuProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-2 rounded-xl border border-gray-100 bg-white shadow-lg shadow-black-100/70 relative"
    >
      <Image
        source={item.image}
        className="w-full h-28 rounded-lg"
        resizeMode="contain"
      />
      <View className="flex flex-col mt-2">
        <Text className="text-lg text-center font-rubik-bold text-black-300">
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Menu = ({ item, onPress }: MenuProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-2 rounded-xl bg-white shadow-lg shadow-black-100/70 relative"
    >
      <Image
        source={item.image}
        className="w-full h-40 rounded-lg"
        resizeMode="contain"
      />
      <View className="flex flex-col mt-2">
        <Text className="text-xl text-center font-rubik-bold text-black-300">
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Menu;
