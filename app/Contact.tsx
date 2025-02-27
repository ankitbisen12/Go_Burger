import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Card from "@/components/UI/Card";
import { useSelector } from "react-redux";
import { selectUserInfo } from "@/features/user/userSlice";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

const Contact = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const { phone, email } = useSelector(selectUserInfo);

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Query:", query);
    console.log("Category:", category);
    console.log("phone", phone.toString());
  };

  return (
    <Card>
      <View className="px-4 py-8 bg-white">
        <Text className="text-2xl font-rubik-bold ">Contact Us</Text>
        <View className="my-3 border-0 w-[80px] h-[3px] bg-accent-100" />
        <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl border border-gray-200 bg-gray-100 py-1 mt-5">
          <View className="flex-1 flex flex-row items-center justify-start z-50 ">
            <TextInput
              className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
              placeholder="Your Email"
              keyboardType="email-address"
              value={email}
              editable={false}
            />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl border border-gray-200 bg-gray-100 py-1 mt-5">
          <View className="flex-1 flex flex-row items-center justify-start z-50 ">
            <TextInput
              className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
              placeholder="Your phone"
              value={phone.toString()}
              editable={false}
            />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between w-full px-4 rounded-xl  border border-gray-200 py-1 mt-5">
          <View className="flex-1 flex flex-row items-center justify-start z-50 ">
            <TextInput
              placeholder="Enter your query"
              multiline
              numberOfLines={4}
              value={query}
              onChangeText={setQuery}
              className="text-lg font-rubik text-zinc-500 ml-1 flex-1 tracking-wide"
            />
          </View>
        </View>

        <View className="px-4 rounded-xl  border border-gray-200 py-1 mt-5">
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="General Inquiry" value="general" />
            <Picker.Item label="Order Issue" value="order" />
            <Picker.Item label="Payment Issue" value="payment" />
            <Picker.Item label="Technical Support" value="technical" />
          </Picker>
        </View>

        <TouchableOpacity
          className="bg-accent-100 shadow-xl shadow-zinc-600 rounded-xl w-full py-4 mt-5"
          onPress={handleSubmit}
        >
          <View className="flex flex-row items-center justify-center">
            <Text className="text-2xl font-rubik-semibold text-white">
              Post
            </Text>
            <Entypo
              name="arrow-with-circle-right"
              size={20}
              color="white"
              className="ml-2"
            />
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default Contact;
