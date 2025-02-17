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
