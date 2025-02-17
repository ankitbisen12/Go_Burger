import images from "@/constants/images";
import React from "react";
import { FlatList, Image } from "react-native";

const promoimages = [
  { id: "1", src: images.promo1 },
  { id: "2", src: images.promo2 },
  { id: "3", src: images.promo3 },
  { id: "4", src: images.promo4 },
  { id: "5", src: images.promo5 },
];

const Promo = () => {
  return (
    <FlatList
      data={promoimages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Image source={item.src} className="size-72 mb-4 rounded-xl " resizeMode="cover"/>
      )}
      contentContainerClassName="flex gap-5"
      showsHorizontalScrollIndicator={false}
      bounces={false}
      horizontal
    />
  );
};

export default Promo;
