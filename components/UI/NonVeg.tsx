import { View } from "react-native";

interface NonVegProps {
  extraStyle?: string;
}

const NonVeg = ({ extraStyle }: NonVegProps) => {
  return (
    <View
      className={`${extraStyle} flex w-4 h-4 border border-red-600 items-center`}
    >
      <View className="w-2 h-2 bg-red-500 rounded-full m-auto" />
    </View>
  );
};

export default NonVeg;
