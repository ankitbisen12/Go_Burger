import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface MealCardProps {
  image: any;
  name: string;
  description: string;
  price: number;
}

const MealCard = ({ image, name, description, price }: MealCardProps) => {
  return (
    <View className="flex flex-row items-center justify-between bg-white rounded-xl shadow-md p-4 mb-5">
      {/* Image Section */}
      <Image source={image} className="w-20 h-20" resizeMode="cover" />

      {/* Text Section */}
      <View className="flex-1 ml-4">
        <Text className="text-lg font-bold text-black">{name}</Text>
        <Text className="text-sm text-gray-600">{description}</Text>
        <Text className="text-lg font-bold text-orange-500 mt-2">${price}</Text>
      </View>

      {/* Button Section */}
      <TouchableOpacity className="bg-accent-200 px-4 py-1 rounded-tl-xl rounded-br-xl items-center justify-center top-10 left-4">
        <Text className="text-white text-xl font-bold">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MealCard;
