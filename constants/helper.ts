import { ImageSourcePropType } from "react-native";

export interface SettingsItemType {
  icon: ImageSourcePropType;
  title: string;
  link: string;
  onPress?: () => void;
  color: string;
  textStyle?: any;
}

export interface renderIconProps {
  iconName: string;
  color: string;
}

export interface MenuItem {
  id: string;
  title: string;
  image: any
}
