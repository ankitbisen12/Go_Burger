import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import Feather from "@expo/vector-icons/Feather";
import SettingsItem from "@/components/utils/SettingsItem";
import { menu, settings } from "@/constants/data";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "@/features/user/userSlice";
import { signOutAsync } from "@/features/auth/authSlice";
import type { AppDispatch } from "@/store/store";
import { removeToken } from "@/utils/util";
import Modal from "@/common/ModalConfirm";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(signOutAsync());
    removeToken();
    setShowModal(false);
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerClassName="pb-32 px-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row mt-10">
          <View className="relative">
            <Image
              // source={{ uri: user?.avatar }}
              source={images.avatar}
              className="w-16 h-16 rounded-full"
            />
          </View>
          <View className="flex flex-col justify-center ml-4">
            <View className="flex flex-row items-center">
              <Text className="text-2xl font-rubik-bold mt-1">
                {user?.name}
              </Text>
              <TouchableOpacity className="ml-2">
                <Feather name="edit-2" size={18} color="black" />
              </TouchableOpacity>
            </View>
            <Text className="text-lg font-rubik-medium text-gray-500">
              {user?.email}
            </Text>
          </View>
        </View>
        <View className="bg-amber-950 px-6 py-8 rounded-lg shadow-md mt-8">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row rounded-full items-center justify-center mr-3">
              <Image
                source={icons.star}
                className="size-12"
                tintColor="#F96234"
              />
              <View className="flex flex-col ml-4">
                <Text className="text-white font-rubik text-xl">237</Text>
                <Text className="text-white font-rubik text-xl">GB Coins</Text>
              </View>
            </View>
            <TouchableOpacity className="flex bg-red-500 px-8 py-2 rounded-full">
              <Text className="text-white font-rubik-semibold text-lg">
                Redeem
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-col mt-6">
          {menu.map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col ">
          {settings.map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col mt-6  pt-5">
          <Pressable
            className="py-3 px-4 border w-[40%] border-red-500 rounded-full"
            onPress={() => setShowModal(true)}
          >
            <View className="flex flex-row items-center gap-3">
              <Image
                source={icons.logOut}
                className="size-8"
                tintColor="#ef4444"
              />
              <Text className={`text-2xl font-rubik-medium text-red-600 `}>
                Log out
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <Modal
        showModal={showModal}
        onCancel={() => setShowModal(false)}
        handleSubmit={handleLogout}
      />
    </SafeAreaView>
  );
};

export default Profile;
