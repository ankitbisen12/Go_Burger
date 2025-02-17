import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface AddOnProps {
  item: {
    id: number;
    image: any;
    name: string;
    price: number;
  };
}

const AddOn: React.FC<AddOnProps> = ({ item }) => {
  return (
    <View className="bg-white rounded-lg shadow-lg border border-gray-200 px-8 py-4 items-center justify-center mx-2 ">
      {/* Add-On Image */}
      <Image source={item.image} className="w-20 h-20" resizeMode="contain" />

      {/* Name */}
      <Text className="mt-2 text-lg font-rubik-medium text-black text-center">
        {item.name}
      </Text>

      {/* Price */}
      <Text className="text-md font-rubik text-gray-500 mt-1">
        ₹{item.price}
      </Text>

      {/* Quantity Control */}
      <View className="flex flex-row items-center mt-2 space-x-2">
        <TouchableOpacity className="w-6 h-6 bg-gray-200 rounded-full items-center justify-center">
          <Feather name="minus" size={12} color="black" />
        </TouchableOpacity>
        <Text className="text-lg  text-black px-1">01</Text>
        <TouchableOpacity className="w-6 h-6 bg-yellow-400 rounded-full items-center justify-center">
          <Feather name="plus" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddOn;
