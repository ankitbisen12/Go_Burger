import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";
import { selectBurgerMeals } from "@/features/burgerMeal/burgerMealSlice";
import { selectMenu } from "@/features/menu/menuSlice";
import { selectSnacks } from "@/features/snacks/snacksSlice";
import { selectDessert } from "@/features/desserts/dessertSlice";
import { selectBeverages } from "@/features/Beverages/BeveragesSlice";
import { selectBurgerWraps } from "@/features/burgerWraps/burgerWrapsSlice";
import { selectMeals } from "@/features/meal/mealSlice";
import { selectBurger } from "@/features/burgers/burgerSlice";
import {
  setSelectedMenu,
  selectedMenuu,
} from "@/features/selectedMenu/selectedMenu";
import CustomiseModal from "@/components/modal/CustomiseModal";
import CustomSwitch from "@/components/CustomSwitch";
import ItemModal from "@/components/modal/ItemModal";
import { Card, MenuCard } from "@/components/menu/menu";
import { filterMenu } from "@/utils/util";

const Menu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  // const [selectedMenuField, setSelectedMenuField] = useState<string | null>(
  //   null
  // );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCustomiseModal, setShowCustomiseModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectedMenu = useSelector(selectedMenuu);
  const burgerMeal = useSelector(selectBurgerMeals);
  const snacks = useSelector(selectSnacks);
  const dessert = useSelector(selectDessert);
  const beverages = useSelector(selectBeverages);
  const burgerWraps = useSelector(selectBurgerWraps);
  const meals = useSelector(selectMeals);
  const menu = useSelector(selectMenu);
  const burgers = useSelector(selectBurger);
  const menuSelected = useSelector(selectedMenuu);
  // console.log("menuSelected", menuSelected);

  const MenuPressHandler = (menu: string) => {
    dispatch(setSelectedMenu(menu));
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const customiseModalCloseHandler = () => {
    setShowCustomiseModal(true);
    setShowModal(false);
  };

  const menuItems = (selectedMenu: string | null) => {
    switch (selectedMenu) {
      case "Burger Meal":
        return burgerMeal;
      case "Snacks":
        return snacks;
      case "Desserts":
        return dessert;
      case "Beverages":
        return beverages;
      case "Burger & Wraps":
        return burgerWraps;
      case "Combo Meal":
        return burgerMeal;
      case "Burgers":
        return burgers;
      case "Brownies & Cakes":
        return burgerMeal;
        deafult: return [];
    }
  };

  const dynamic_meals = menuItems(selectedMenu);
  const MENU_ITEMS = filterMenu(isVeg, isNonVeg, dynamic_meals);

  return (
    <View className="bg-[#f8f3eb]v h-full mt-4 px-2">
      {/* Sidebar Section */}
      <View className="flex flex-row">
        <View className="mr-2 mb-52 border-r border-gray-300">
          {/* Add Sidebar Items */}
          <FlatList
            data={menu}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={({ item }) => (
              <Card
                onPress={() => MenuPressHandler(item.title)}
                item={item}
                isSelected={selectedMenu == item.title}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="flex gap-5 pr-2 py-4"
          />
        </View>
        {/* Menu Section */}
        <View className="flex-1 mr-2 mb-52">
          <View className="p-2">
            <Text className="text-2xl font-bold text-black">Our Menu</Text>
          </View>
          {/* Veg & Non Veg container */}
          <View className="flex flex-row mb-4 gap-3">
            <View className="p-4 border border-amber-900 rounded-full">
              <CustomSwitch
                isEnabled={isVeg}
                toggleSwitch={() => {
                  !isNonVeg && setIsVeg((prev) => !prev);
                }}
                activeColor="#4CAF50"
              />
            </View>
            <View className="p-4 border border-amber-900 rounded-full">
              <CustomSwitch
                isEnabled={isNonVeg}
                toggleSwitch={() => {
                  !isVeg && setIsNonVeg((prev) => !prev);
                }}
                activeColor="#78150e"
              />
            </View>
          </View>
          <FlatList
            data={MENU_ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MenuCard item={item} onPress={() => setShowModal(true)} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="flex"
          />
        </View>
      </View>

      {showModal && (
        <ItemModal
          visible={showModal}
          onClose={modalCloseHandler}
          modalCloseHandler={customiseModalCloseHandler}
        />
      )}

      {showCustomiseModal && (
        <CustomiseModal
          visible={showCustomiseModal}
          onClose={() => {
            setShowModal(true);
            setShowCustomiseModal(false);
          }}
        />
      )}
    </View>
  );
};

export default Menu;
