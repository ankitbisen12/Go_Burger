import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React from "react";
import { ModalProps } from "@/constants/helper";

const ModalConfirm = ({ showModal, onCancel, handleSubmit }: ModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white py-6 px-8 rounded-2xl shadow-lg items-center">
          <Text className="mb-4 text-lg text-center font-rubik-semibold text-amber-900">
            {` Are you sure want to logout \n from GoBurger?`}
          </Text>
          <View className="flex flex-row ">
            <Pressable
              className="border border-red-600 px-6 py-2 rounded-full"
              onPress={handleSubmit}
            >
              <Text className="text-md text-accent-100 font-rubik-bold">
                Yes
              </Text>
            </Pressable>
            <Pressable
              className="bg-accent-100 px-6 py-2 rounded-full ml-2"
              onPress={onCancel}
            >
              <Text className="text-md text-white font-rubik-bold">Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirm;
