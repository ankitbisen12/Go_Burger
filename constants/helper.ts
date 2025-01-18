import { ImageSourcePropType } from "react-native";

export interface SettingsItemType {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  color: string;
  textStyle?: any;
}

export interface renderIconProps {
  iconName: string;
  color: string;
}
