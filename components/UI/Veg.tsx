import { View } from "react-native";

interface VegProps {
  extraStyle?: string;
}

const Veg = ({ extraStyle }: VegProps) => {
  return (
    <View
      className={`${extraStyle} w-4 h-4 border border-green-600 `}
    >
      <View className="w-2 h-2 bg-green-500 rounded-full m-auto" />
    </View>
  );
};

export default Veg;
