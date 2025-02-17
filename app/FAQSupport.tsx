import { Text, ScrollView } from "react-native";
import React from "react";
import { FAQData } from "@/constants/data";
import FAQItem from "@/components/utils/FAQItem";

const FaqAndSupport = () => {
  return (
    <ScrollView className="p-4 mb-4" showsVerticalScrollIndicator={false}>
      <Text className="text-xl font-rubik-bold uppercase text-amber-950 p-2">
        How can we help?
      </Text>
      {FAQData.map((item, index) => (
        <FAQItem {...item} />
      ))}
    </ScrollView>
  );
};

export default FaqAndSupport;
