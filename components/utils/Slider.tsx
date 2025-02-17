import React, { useState, useEffect } from "react";
import { View, Image, Pressable } from "react-native";
import { images } from "@/constants/images";

const Slider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => handleNextClick(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [handleNextClick]);

  return (
    <View className="relative w-full">
      {images.map((url, i) => (
        <Image
          source={url}
          key={`${url}+ ${i}`}
          className={`w-full ${activeImageIndex === i ? "block" : "hidden"}`}
        />
      ))}
      <View className="relative bottom-6 left-1/2 transform -translate-x-1/2 flex flex-row  items-center mx-2 shadow-md">
        {images.map((_, i) => (
          <Pressable
            key={`${i}+ ${Math.random()}`}
            onPress={() => setActiveImageIndex(i)}
            className={` mx-2  shadow-md ${
              activeImageIndex === i
                ? "bg-accent-100 w-6 h-1 rounded-sm"
                : "bg-gray-200 w-2 h-2 rounded-full"
            }`}
          ></Pressable>
        ))}
      </View>
    </View>
  );
};

export default Slider;
