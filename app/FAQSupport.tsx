import React from "react";
import { FlatList, Text, View } from "react-native";
import FAQItem from "@/components/utils/FAQItem";
import { useSelector } from "react-redux";
import { selectFAQ } from "@/features/FAQSupport/FAQSupportSlice";

const FaqAndSupport = () => {
  const FAQData = useSelector(selectFAQ);

  return (
    <View className="p-4 mb-4">
      <Text className="text-xl font-rubik-bold uppercase text-amber-950 p-2 ">
        How can we help you?
      </Text>
      <FlatList
        data={FAQData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FAQItem {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex pr-2 py-2"
      />
    </View>
  );
};

export default FaqAndSupport;
