import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import Entypo from "@expo/vector-icons/Entypo";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View className="mb-4 mt-2">
      <TouchableOpacity
        className={`bg-gray-50 p-4 ${
          isCollapsed ? "rounded-md" : "rounded-t-md"
        } shadow-md `}
        onPress={() => setIsCollapsed(!isCollapsed)}
      >
        <View className="flex flex-row items-center justify-between px-2">
          <Text className="text-black text-lg font-rubik-medium ">
            {question}
          </Text>
          <Entypo name="chevron-down" size={20} color="black" />
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View className="bg-gray-200 p-4 rounded-b-md shadow-b-md">
          <Text className="text-md font-rubik text-gray-700">{answer}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default FAQItem;
