import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/user/userSlice";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import AddressModal from "@/components/Address/AddressModal";
import { Addressprops } from "@/constants/helper";

const Addresses = () => {
  const { addresses } = useSelector(selectUserInfo);
  const [showAddAddress, setShowAddAdress] = useState<boolean>(false);
  const [showEditAddress, setEditAddress] = useState(false);
  const [addresse, setAddress] = useState<Addressprops | null>(null);

  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between px-6 py-8">
          <Text className="text-lg font-rubik-semibold ">Saved Adresses</Text>
          <Pressable
            className="bg-accent-100 px-6 py-2 rounded-full ml-2"
            onPress={() => {
              setShowAddAdress(true);
            }}
          >
            <Text className="text-md text-white font-rubik-bold">
              +Add Address
            </Text>
          </Pressable>
        </View>
        <View className="gap-3">
          {addresses.map((address: Addressprops) => (
            <View
              className="bg-white border border-gray-200 p-2"
              key={address.house}
            >
              <View className="p-2">
                <View className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center">
                    <Entypo name="location-pin" size={18} color="black" />
                    <Text className="text-lg font-rubik-semibold">Home</Text>
                  </View>
                  <View className="flex flex-row justify-between items-center gap-2">
                    <MaterialIcons
                      name="edit"
                      size={20}
                      color="black"
                      onPress={() => {
                        setEditAddress(true);
                        setAddress(address);
                      }}
                    />
                    <AntDesign name="delete" size={20} color="black" />
                  </View>
                </View>
                <View className="p-4">
                  <Text className="font-rubik-semibold">
                    {address.house},{address.floor},{address.apartment},
                    {address.city},{address.state},{address.zip}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <AddressModal
        showModal={showAddAddress}
        onCancel={() => setShowAddAdress(false)}
        handleSubmit={() => {}}
        addresse={addresse}
      />
      <AddressModal
        showModal={showEditAddress}
        onCancel={() => setEditAddress(false)}
        handleSubmit={() => {}}
        addresse={addresse}
      />
    </React.Fragment>
  );
};

export default Addresses;
