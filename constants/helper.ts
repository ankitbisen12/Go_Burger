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
  image: any;
}

export interface MenuItems {
  id: string; // The unique identifier for the menu item
  name: string; // The name of the menu item
  description: string; // A short description of the menu item
  price: string; // The price of the menu item (formatted as a string, e.g., "₹45/-")
  image: any; // The image of the menu item (type `any` since it's imported via `require`)
  foodlabel: string; // Whether the item is vegetarian (true/false)
}

export interface MenuCardProps {
  item: MenuItems;
  onPress: () => void;
}

export interface MenuProps {
  item: MenuItem;
  onPress?: () => void;
}

export interface FAQSupportProps {
  id: string;
  question: string;
  answer: string;
}

export interface ModalProps {
  showModal: boolean;
  onCancel: () => void;
  handleSubmit: () => void;
}

export interface Addressprops {
  house: string;
  floor: string;
  apartment: string;
  city: string;
  zip: string;
  state: string;
}

export interface AddressModalProps {
  showModal: boolean;
  onCancel: () => void;
  handleSubmit: () => void;
  addresse: Addressprops | null;
}
