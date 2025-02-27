import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("Get the token", token);
    return token != null ? JSON.parse(token) : null;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.log("Error", error);
  }
};

const filteredArr = (menu_items: any, tag: string) => {
  return menu_items.filter((el: any) => el.foodlabel === tag);
};

export const filterMenu = (
  isVeg: boolean,
  isNonVeg: boolean,
  menu_items: any
) => {
  if (isVeg) {
    return filteredArr(menu_items, "Veg");
  } else if (isNonVeg) {
    return filteredArr(menu_items, "NonVeg");
  } else {
    return menu_items;
  }
};
