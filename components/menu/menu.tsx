import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MenuCardProps, MenuProps } from "@/constants/helper";
import Veg from "../UI/Veg";
import NonVeg from "../UI/NonVeg";

export const Card = ({
  item,
  onPress,
  isSelected,
}: MenuProps & { isSelected: boolean }) => {
  return (
    <TouchableOpacity
      className={`flex flex-col items-center ${
        isSelected ? "bg-amber-800" : "bg-white"
      } shadow-md py-4 rounded-lg`}
      onPress={onPress}
    >
      <Image
        source={{ uri: `data:image/png;base64,${item.image}` }}
        className="size-16"
        resizeMode="cover"
      />
      <Text
        className={`text-xs text-center font-rubik-semibold mt-2 px-1 ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export const MenuCard = ({ item, onPress }: MenuCardProps) => {
  return (
    <View className="bg-white rounded-lg shadow-sm flex-row py-4 px-2 mb-4">
      {/* Image Section */}
      <Image
        source={{ uri: `data:image/png;base64,${item.image}` }}
        className="w-20 h-20 rounded-lg"
        resizeMode="contain"
      />
      {/* Text Section */}
      <View className="flex-1 ml-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-rubik-semibold text-black">
            {item.name}
          </Text>
          {item.foodlabel === "Veg" ? <Veg /> : <NonVeg />}
        </View>
        <Text className="text-sm text-gray-600 font-rubik mt-1 truncate">
          {item.description}
        </Text>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-lg font-rubik-bold text-accent-200">
            ₹{item.price}
          </Text>
          <TouchableOpacity
            className="bg-accent-200 px-3 py-1 rounded-md"
            onPress={onPress}
          >
            <Text className="text-white font-rubik-bold">Add +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const FeaturedMenu = ({ item, onPress }: MenuProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-2 rounded-xl border border-gray-100 bg-white shadow-lg shadow-black-100/70 relative"
    >
      <Image
        source={{ uri: `data:image/png;base64,${item.image}` }}
        className="w-full h-40 rounded-lg"
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
      {/* <Image
        source={item.image}
        className="w-full h-40 rounded-lg"
        resizeMode="contain"
      /> */}
      <Image
        source={{ uri: `data:image/png;base64,${item.image}` }}
        className="w-full h-40 rounded-lg"
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
