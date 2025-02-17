import React from "react";
import { Animated, TouchableOpacity, StyleSheet, View } from "react-native";

interface CustomSwitchProps {
  isEnabled: boolean;
  toggleSwitch: () => void;
  activeColor?: string;
  inActiveColor?: string;
  thumbColor?: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  isEnabled,
  toggleSwitch,
  activeColor,
  inActiveColor = "#767577",
  thumbColor = "#ffffff",
}) => {
  const translateX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(translateX, {
      toValue: isEnabled ? 36 : -2,
      useNativeDriver: true,
    }).start();
  }, [isEnabled]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      style={{ backgroundColor: isEnabled ? activeColor : inActiveColor }}
      className={`w-16 h-4 rounded-full justify-center`}
    >
      <Animated.View
        className="flex items-center w-6 h-6 border bg-white rounded-sm absolute"
        style={{
          transform: [{ translateX }],
          marginLeft: 2,
          borderColor: activeColor,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: activeColor,
          }}
          className={`m-auto flex items-center w-3 h-3 rounded-full`}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomSwitch;
