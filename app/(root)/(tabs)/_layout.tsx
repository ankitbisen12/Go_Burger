import TabIcon from "@/components/utils/TabIcon";
import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store/store";
import { fetchAllMenusAsync } from "@/features/menu/menuSlice";
import { fetchAllBurgerMealsAsync } from "@/features/burgerMeal/burgerMealSlice";

export default function TabsLayout() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllMenusAsync());
    dispatch(fetchAllBurgerMealsAsync());
  }, [dispatch]);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F83B01",
          position: "absolute",
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "GoBurger",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} title="Home" />
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="cart-outline"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.menu} focused={focused} title="Menu" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
