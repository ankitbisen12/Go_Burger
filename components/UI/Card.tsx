import React from "react";
import { View, Text } from "react-native";

import { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View className="shadow-xl border border-gray-200 rounded-2xl p-2">
      {children}
    </View>
  );
};

export default Card;
