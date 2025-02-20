import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { MenuItem } from "@/constants/helper";
import { MENUItems } from "@/constants/data";
import CustomSwitch from "@/components/CustomSwitch";
import ItemModal from "@/components/modal/ItemModal";
import Veg from "@/components/UI/Veg";
import NonVeg from "@/components/UI/NonVeg";
import CustomiseModal from "@/components/modal/CustomiseModal";
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
  selectedMenuu
  
  ,
} from "@/features/selectedMenu/selectedMenu";

// const MENU_ITEMS = [
//   {
//     id: "1",
//     name: "Veg Whopper",
//     description: "Our signature Whopper with 7 layers between the buns...",
//     price: "₹179/-",
//     image: require("@/assets/images/burger.png"), // Replace with your image path
//     isVeg: true,
//   },
//   {
//     id: "2",
//     name: "Bk Chicken Pizza Puff",
//     description: "Crispy puff snack filled with juicy diced chicken...",
//     price: "₹69/-",
//     image: require("@/assets/images/burger.png"),
//     isVeg: false,
//   },
//   {
//     id: "3",
//     name: "Chicken Whopper",
//     description: "Our signature Whopper with 7 layers between the buns...",
//     price: "₹199/-",
//     image: require("@/assets/images/burger.png"),
//     isVeg: false,
//   },
//   {
//     id: "4",
//     name: "Bk Veg Pizza Puff",
//     description: "Crispy savoury pastry with a filling of tomato sauce...",
//     price: "₹45/-",
//     image: require("@/assets/images/burger.png"),
//     isVeg: true,
//   },
//   {
//     id: "7",
//     name: "Veg Whopper",
//     description: "Our signature Whopper with 7 layers between the buns...",
//     price: "₹179/-",
//     image: require("@/assets/images/burger.png"), // Replace with your image path
//     isVeg: true,
//   },
//   {
//     id: "8",
//     name: "Bk Chicken Pizza Puff",
//     description: "Crispy puff snack filled with juicy diced chicken...",
//     price: "₹69/-",
//     image: require("@/assets/images/burger.png"),
//     isVeg: false,
//   },
//   {
//     id: "9",
//     name: "Chicken Whopper",
//     description: "Our signature Whopper with 7 layers between the buns...",
//     price: "₹199/-",
//     image: require("@/assets/images/burger.png"),
//     isVeg: false,
//   },
//   {
//     id: "10",
//     name: "Bk Veg Pizza Puff",
//     description: "Crispy savoury pastry with a filling of tomato sauce...",
//     price: "₹45/-",
//     image: require("@/assets/images/burger.png"),
//     isVeg: true,
//   },
// ];

interface MenuItems {
  id: string; // The unique identifier for the menu item
  name: string; // The name of the menu item
  description: string; // A short description of the menu item
  price: string; // The price of the menu item (formatted as a string, e.g., "₹45/-")
  image: any; // The image of the menu item (type `any` since it's imported via `require`)
  isVeg: boolean; // Whether the item is vegetarian (true/false)
}

interface MenuCardProps {
  item: MenuItems;
  onPress: () => void;
}

interface MenuProps {
  item: MenuItem;
  onPress?: () => void;
}

const Card = ({
  item,
  onPress,
  isSelected,
}: MenuProps & { isSelected: boolean }) => {
  return (
    <TouchableOpacity
      className={`flex flex-col items-center ${
        isSelected ? "bg-amber-800" : "bg-white"
      } shadow-md py-4 rounded-lg`}
      onPress={onPress}
    >
      <Image
        source={{ uri: `data:image/png;base64,${item.image}` }}
        className="size-16"
        resizeMode="cover"
      />
      <Text
        className={`text-xs text-center font-rubik-semibold mt-2 px-1 ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const MenuCard = ({ item, onPress }: MenuCardProps) => {
  return (
    <View className="bg-white rounded-lg shadow-sm flex-row py-4 px-2 mb-4">
      {/* Image Section */}
      <Image
        source={{ uri: `data:image/png;base64,${item.image}` }}
        className="w-20 h-20 rounded-lg"
        resizeMode="contain"
      />
      {/* Text Section */}
      <View className="flex-1 ml-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-rubik-semibold text-black">
            {item.name}
          </Text>
          {item.isVeg ? <Veg /> : <NonVeg />}
        </View>
        <Text className="text-sm text-gray-600 font-rubik mt-1 truncate">
          {item.description}
        </Text>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-lg font-rubik-bold text-accent-200">
            ₹{item.price}
          </Text>
          <TouchableOpacity
            className="bg-accent-200 px-3 py-1 rounded-md"
            onPress={onPress}
          >
            <Text className="text-white font-rubik-bold">Add +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Menu = () => {
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [selectedMenuField, setSelectedMenuField] = useState<string | null>(
    null
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCustomiseModal, setShowCustomiseModal] = useState<boolean>(false);
  const selectedMenu = useSelector(selectedMenuu);
  const burgerMeal = useSelector(selectBurgerMeals);
  const snacks = useSelector(selectSnacks);
  const dessert = useSelector(selectDessert);
  const beverages = useSelector(selectBeverages);
  const burgerWraps = useSelector(selectBurgerWraps);
  const meals = useSelector(selectMeals);
  const menu = useSelector(selectMenu);
  const burgers = useSelector(selectBurger);
  const dispatch = useDispatch();

  const MenuPressHandler = (menu: string) => {
    // setSelectedMenu(itemId);
    // setSelectedMenuField(title);
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
        return meals;
      case "Burgers":
        return burgers;
      case "Brownies & Cakes":
        return meals;
        deafult: return [];
    }
  };

  const dynamic_meals = menuItems(selectedMenu);

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
            data={burgerMeal}
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
