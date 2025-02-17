import React from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { addOns, sauces, veggies } from "@/constants/data";
import AddOn from "../AddOns";

interface CustomiseModalProps {
  visible?: boolean;
  onClose: () => void;
}

const CustomiseModal = ({ visible, onClose }: CustomiseModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-[#ffffff] h-[80%] w-full rounded-t-2xl pb-6">
          {/* Header */}
          <View className="flex flex-row py-4 items-center bg-white rounded-t-2xl shadow-lg">
            <TouchableOpacity onPress={onClose} className="px-2">
              <Feather name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <View className="ml-2">
              <Text className="text-xl font-rubik-medium text-black">
                Customise Your Mackinsey Burger
              </Text>
            </View>
          </View>

          {/* Scrollable Content */}
          <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
            {/* Add-Ons Section */}
            <View className="p-2">
              <Text className="px-4 py-2 text-2xl font-rubik-semibold">
                Add Ons
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="border-b border-gray-200"
              >
                {addOns.map((item, index) => (
                  <AddOn item={item} key={index} />
                ))}
              </ScrollView>
            </View>

            {/* Sauces Section */}
            <View className="p-2">
              <Text className="px-4 py-2 text-2xl font-rubik-semibold">Sauces</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {sauces.map((item, index) => (
                  <AddOn item={item} key={index} />
                ))}
              </ScrollView>
            </View>

            {/* Veggies Section */}
            <View className="p-2 pb-6">
              <Text className="px-4 py-2 text-2xl font-rubik-semibold">
                Veggies
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {veggies.map((item, index) => (
                  <AddOn item={item} key={index} />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CustomiseModal;
