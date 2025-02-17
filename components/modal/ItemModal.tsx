import React from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Veg from "../UI/Veg";

interface ItemModalProps {
  visible: boolean;
  onClose: () => void;
  modalCloseHandler: () => void;
}

const ItemModal = ({ visible, onClose, modalCloseHandler }: ItemModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50">
        <View className="bg-slate-50 mt-auto rounded-t-2xl pb-12">
          {/* Close Button */}

          <View className="flex flex-row py-4 items-center rounded-t-2xl bg-white shadow-b-md">
            <TouchableOpacity onPress={onClose} className="px-2">
              <Feather name="arrow-left" size={20} color="black" />
            </TouchableOpacity>

            {/* Header */}
            <View className="ml-2">
              <Text className="text-2xl font-rubik-medium text-black text-center">
                Customise Meal
              </Text>
            </View>
          </View>
          <View className="relative">
            <Veg extraStyle="absolute right-6 top-4" />
          </View>
          {/* Product Image */}
          <Image
            source={require("@/assets/images/burger.png")}
            className="w-full h-60"
            resizeMode="contain"
          />

          {/* Product Details */}
          <View className="px-4">
            <Text className="text-lg font-rubik-semibold text-black mt-4">
              Mc Crispy Chicken Burger + McChicken Burger + Fries (M)
            </Text>
            <View className="flex flex-row">
              <Text className="text-lg font-rubik-semibold  mt-2 line-through text-gray-500">
                ₹415
              </Text>
              <Text className="text-lg font-rubik-semibold text-black mt-2 ml-1">
                ₹216
              </Text>
              <Text className="text-lg font-rubik-medium text-green-600 mt-2 ml-2">
                (48% off)
              </Text>
            </View>
            <Text className="text-gray-600 mt-2 font-rubik-semibold">
              Feel the crunch with McCrispy Chicken Burger + McChicken + Fries
              (M).
            </Text>

            {/* Add Button */}

            <TouchableOpacity
              className="bg-yellow-400 py-3 mt-4 rounded-lg"
              onPress={modalCloseHandler}
            >
              <Text className="text-center text-black font-rubik-bold text-lg">
                Add+
              </Text>
            </TouchableOpacity>

            {/* Customizable Info */}
            <Text className="text-center text-gray-500 mt-2 font-rubik">
              Customisable
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ItemModal;
