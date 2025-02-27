import React, { useState, useEffect } from "react";
import { View, Text, Modal, Pressable, TextInput } from "react-native";
import { AddressModalProps, ModalProps } from "@/constants/helper";
import Feather from "@expo/vector-icons/Feather";

const AddressModal = ({
  showModal,
  onCancel,
  handleSubmit,
  addresse,
}: AddressModalProps) => {
  const [saveMode, setSaveMode] = useState("");
  const [addressInfo, setAddressInfo] = useState({
    house: "",
    floor: "",
    locality: "",
    pincode: "",
    city: "",
    state: "",
    type: "",
  });

  useEffect(() => {
    if (addresse) {
      setAddressInfo({
        house: addresse.house || "",
        floor: addresse.floor || "",
        locality: addresse.apartment || "", // Assuming apartment is the locality
        pincode: addresse.zip || "",
        city: addresse.city || "",
        state: addresse.state || "",
        type: "",
      });
    }
  }, [addresse]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-slate-50 mt-auto rounded-t-2xl pb-6">
          <View className="flex flex-row py-4 items-center rounded-t-2xl bg-white shadow-b-md">
            <Pressable onPress={onCancel} className="px-2">
              <Feather name="arrow-left" size={20} color="black" />
            </Pressable>
            <View className="ml-2">
              <Text className="text-2xl font-rubik-medium text-black text-center">
                Add Address
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl border border-gray-200 bg-gray-100 py-1 mt-5">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              <TextInput
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
                placeholder="House/Flat No."
                value={addressInfo.house}
              />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl border border-gray-200 bg-gray-100 py-1 mt-5">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              <TextInput
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
                placeholder="Floor no/Building Name"
                //   value={email}
              />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl border border-gray-200 bg-gray-100 py-1 mt-5">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              <TextInput
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
                placeholder="Locality"
                //   value={email}
              />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl border border-gray-200 bg-gray-100 py-1 mt-5">
            <View className="flex-1 flex flex-row items-center justify-start z-50 ">
              <TextInput
                className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
                placeholder="PinCode,City,State"
                //   value={email}
              />
            </View>
          </View>
          <View className="p-2 mt-4">
            <Text className="text-md font-rubik-medium text-gray-900 ">
              Save this address as:
            </Text>
            <View className="flex flex-row  gap-2">
              <Pressable
                className={` px-4 py-2 rounded-full  items-center ${
                  saveMode === "home" ? "bg-red-600" : "border border-red-600"
                }`}
                onPress={() => setSaveMode("home")}
              >
                <Text className="text-md text-accent-100 font-rubik-bold">
                  Home
                </Text>
              </Pressable>
              <Pressable
                className={`border border-red-600 px-4 py-2 rounded-full  items-center ${
                  saveMode === "home" ? "bg-red-600" : "border border-red-600"
                }`}
                onPress={() => setSaveMode("Work")}
              >
                <Text className="text-md text-accent-100 font-rubik-bold">
                  Work
                </Text>
              </Pressable>
              <Pressable
                className={`border border-red-600 px-4 py-2 rounded-full  items-center ${
                  saveMode === "home" ? "bg-red-600" : "border border-red-600"
                }`}
                onPress={() => setSaveMode("Other")}
              >
                <Text className="text-md text-accent-100 font-rubik-bold">
                  Other
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="flex flex-row p-2 mt-4">
            <Pressable
              className="bg-accent-100 px-6 py-3 rounded-full flex-1 items-center"
              onPress={handleSubmit}
            >
              <Text className="text-md text-white font-rubik-bold">Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddressModal;
