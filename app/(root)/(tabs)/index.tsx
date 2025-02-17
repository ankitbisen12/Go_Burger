import React from "react";
import { SafeAreaView, FlatList, View, Text, ScrollView } from "react-native";
import { MENUItems, TOPWeekData } from "@/constants/data";
import Menu, { FeaturedMenu } from "@/components/menu/menu";
import Slider from "@/components/utils/Slider";
import MealCard from "@/components/UI/MealCard";
import Promo from "@/components/Promo";

const Index = () => {
  return (
    <SafeAreaView className="h-full">
      <FlatList
        data={MENUItems.slice(2)}
        renderItem={({ item }) => <View></View>}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-2 px-4"
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent={
          <View>
            <Slider />
            <View className="mt-5 px-2">
              <View className="flex flex-col px-3">
                <Text className="text-3xl font-rubik-bold text-black-300">
                  Our Menu
                </Text>
                <View className="my-3 border-0 w-[80px] h-[3px] bg-accent-100" />
                <Text className="my-1 text-lg text-amber-950 font-rubik">
                  Choose from a wide variety
                </Text>
              </View>
              <FlatList
                data={MENUItems.slice(0, 2)}
                renderItem={({ item }) => <Menu item={item} />}
                keyExtractor={(item) => item.id.toString()}
                bounces={false}
                numColumns={2}
                columnWrapperClassName="flex gap-3 px-2"
              />
              <FlatList
                data={MENUItems.slice(2)}
                renderItem={({ item }) => <FeaturedMenu item={item} />}
                keyExtractor={(item) => item.id.toString()}
                bounces={false}
                numColumns={3}
                columnWrapperClassName="flex gap-3 px-2"
              />
            </View>
            <View className="px-4 mt-14">
              <Promo />
            </View>
            <View className="px-2 mt-14">
              <View className="flex flex-col px-3">
                <Text className="text-3xl font-rubik-bold text-black-300">
                  Top Of the week
                </Text>
                <View className="my-3 border-0 w-[80px] h-[3px] bg-accent-100" />
              </View>
              <View className="px-2 py-2">
                <FlatList
                  data={TOPWeekData}
                  renderItem={({ item }) => <MealCard {...item} />}
                  keyExtractor={(item) => item.price.toString()}
                  numColumns={1}
                  bounces={false}
                />
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Index;
