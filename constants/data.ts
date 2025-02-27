import icons from "./icons";
import images from "./images";

export const menu = [
  {
    title: "My Orders",
    icon: icons.shield,
    color: "#FEA123",
    link: "/login",
  },
  {
    title: "Saved Addresses",
    icon: icons.location,
    color: "#FEA123",
    link: "/Addresses",
  },
  {
    title: "Payment Methods",
    icon: icons.wallet,
    color: "#FEA123",
    link: "/",
  },
];

export const settings = [
  {
    title: "Contact Us",
    icon: icons.msg,
    color: "#FEA123",
    link: "/Contact",
  },
  {
    title: "FAQs & Support",
    icon: icons.faq,
    color: "#FEA123",
    link: "/FAQSupport",
  },
  {
    title: "Legal Terms",
    icon: icons.info,
    color: "#FEA123",
    link: "/",
  },
];

export const FAQData = [
  {
    question: "How do I contact Customer Care?",
    answer: "You can contact by writing to us at customercare@Goburger.in",
  },
  {
    question: "Do I need to register to place an order?",
    answer: "No, registration is not mandatory to place an order.",
  },
  {
    question: "Where can I place the order online?",
    answer: "You can place your order via our official app or website.",
  },
  {
    question: "I did not get OTP code on my mobile?",
    answer: "Please wait for a few minutes or try again.",
  },
  {
    question: "What are your operating hours?",
    answer: "Our operating hours are 10:00 AM to 11:00 PM.",
  },
  {
    question: "Is there a minimum order value?",
    answer: "Yes, the minimum order value is $10.",
  },
  {
    question: "Why are there no tomatoes in my burgers?",
    answer: "This could be due to stock issues or your custom preferences.",
  },
  {
    question: "Do you charge for delivery?",
    answer: "Yes, delivery charges may apply based on location.",
  },
  {
    question: "How much time do you take to deliver?",
    answer: "Delivery time is typically between 30-45 minutes.",
  },
  {
    question: "Can I order in advance?",
    answer: "Yes, you can schedule your order in advance.",
  },
  {
    question: "How can I add special instructions to my Order?",
    answer: "You can add special instructions during checkout.",
  },
];

export const MENUItems = [
  { id: "1", title: "Burger Meal", image: images.meal },
  { id: "2", title: "Combo Meal", image: images.combo_burger },
  { id: "3", title: "Burgers", image: images.burger },
  { id: "4", title: "Cold Coffee", image: images.cold_coffee },
  { id: "7", title: "Ice Cream", image: images.ice_cream },
  { id: "5", title: "Brownies & Cakes", image: images.brownie },
  { id: "6", title: "Burger & Wraps", image: images.burger_wraps },
  { id: "8", title: "Burger & Wraps", image: images.burger_wraps },
];

export const TOPWeekData = [
  {
    image: images.burger,
    description: "whjhfejkehfuh rjjhgiuh gjhuidgin iuryiuryej",
    name: "Burger Meal",
    price: 10.99,
  },
  {
    image: images.burger,
    description: "whjhfejkehfuh rjjhgiuh gjhuidgin iuryiuryej",
    name: "Burger Meal",
    price: 12.99,
  },
  {
    image: images.burger,
    description: "whjhfejkehfuh rjjhgiuh gjhuidgin iuryiuryej",
    name: "Burger Meal",
    price: 13.99,
  },
];

export const addOns = [
  { id: 1, name: "Aloo patty", price: 56, image: images.aloo_tikki },
  { id: 2, name: "Ketchup", price: 56, image: images.ketchup },
  { id: 3, name: "Onion", price: 56, image: images.onion },
];

export const sauces = [
  { id: 1, name: "White Sauce", price: 56, image: images.whiteSauce },
];

export const veggies = [
  { id: 1, name: "Lettuce", price: 10, image: images.lettuce },
  { id: 4, name: "Jalapeno", price: 10, image: images.jalapeno },
  { id: 3, name: "Onion", price: 10, image: images.onion },
  { id: 2, name: "Tomato", price: 10, image: images.tomato },
];

export const snacks = [
  {
    id: 1,
    name: "Fries(Regular)",
    price: 70,
    category: "snacks",
    description: "Crispy golden fries, perfect for a quick snack.",
    foodlabel: "Veg",
    discountPercentage: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Fries(Medium)",
    price: 120,
    category: "snacks",
    description: "A medium-sized portion of crispy, delicious fries.",
    foodlabel: "Veg",
    discountPercentage: 20,
    rating: 4,
  },
  {
    id: 3,
    name: "Fries(Large)",
    price: 150,
    category: "snacks",
    description: "Large crispy fries, great for sharing or solo indulgence.",
    foodlabel: "Veg",
    discountPercentage: 20,
    rating: 4,
  },
  {
    id: 4,
    name: "Veg Pizza Puff",
    price: 40,
    category: "snacks",
    description: "A crispy puff pastry filled with cheesy veggie goodness.",
    foodlabel: "Veg",
    discountPercentage: 20,
    rating: 4,
  },
  {
    id: 6,
    name: "Chicken Nuggets (10 Pc)",
    price: 150,
    category: "snacks",
    description:
      "Crunchy and juicy chicken nuggets, served in a 10-piece pack.",
    foodlabel: "NonVeg",
    discountPercentage: 10,
    rating: 4,
  },
  {
    id: 7,
    name: "Chicken Nuggets (20 Pc)",
    price: 220,
    category: "snacks",
    description: "A 20-piece pack of crispy and flavorful chicken nuggets.",
    foodlabel: "NonVeg",
    discountPercentage: 10,
    rating: 4,
  },
  {
    id: 8,
    name: "Chicken Pizza Puff",
    price: 79,
    category: "snacks",
    description: "A flaky puff pastry loaded with spiced chicken filling.",
    foodlabel: "NonVeg",
    discountPercentage: 10,
    rating: 4,
  },
  {
    id: 9,
    name: "Veggie Strips",
    price: 39,
    category: "snacks",
    description: "Crispy and tasty vegetable-based snack strips.",
    foodlabel: "Veg",
    discountPercentage: 5,
    rating: 4,
  },
  {
    id: 10,
    name: "Hashbrown",
    price: 29,
    category: "snacks",
    description: "Golden-fried, crispy hashbrown for a crunchy delight.",
    foodlabel: "Veg",
    discountPercentage: 0,
    rating: 4,
  },
  {
    id: 11,
    name: "Peri Peri Fries(Regular)",
    price: 83,
    category: "snacks",
    description: "Regular-sized crispy fries seasoned with spicy peri peri.",
    foodlabel: "Veg",
    discountPercentage: 8,
    rating: 4,
  },
  {
    id: 12,
    name: "Peri Peri Fries(Medium)",
    price: 133,
    category: "snacks",
    description:
      "Medium portion of fries coated with bold peri peri seasoning.",
    foodlabel: "Veg",
    discountPercentage: 8,
    rating: 4,
  },
]; //total 11 snacks in database.

export const addon = [
  {
    title: "Aloo patty",
    category: "addon",
    price: 15,
    discountPercentage: 0,
    images: {
      data: images.aloo_tikki,
      contentType: "image/png",
    },
  },
];

export const Burgers = [
  {
    title: "Crispy Veg",
    category: "burgers",
    price: 89,
    description:
      "A crunchy veg patty with fresh veggies and creamy mayo in a soft bun.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "Veg",
    packagingCharge: 0,
  },
  {
    title: "Veg Whooper",
    category: "burgers",
    price: 79,
    description:
      "A flame-grilled veg patty with fresh lettuce, tomatoes, and special sauce.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "Veg",
    packagingCharge: 0,
  },
  {
    title: "Chicken Whooper",
    category: "burgers",
    price: 107,
    description:
      "Juicy flame-grilled chicken patty topped with lettuce, onions, and mayo.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "NonVeg",
    packagingCharge: 0,
  },
  {
    title: "Veg Double Patty",
    category: "burgers",
    price: 99,
    description:
      "A delicious double-layered veg patty burger packed with flavors.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "Veg",
    packagingCharge: 0,
  },
  {
    title: "Fiery Chicken Burger",
    category: "burgers",
    price: 89,
    description:
      "Spicy and crispy chicken patty with zesty sauces for a fiery kick.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "NonVeg",
    packagingCharge: 0,
  },
  {
    title: "Paneer Burger",
    category: "burgers",
    price: 85,
    description:
      "Soft paneer patty with flavorful spices and a creamy dressing.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "Veg",
    packagingCharge: 0,
  },
  {
    title: "Chicken Makhani Burst Burger",
    category: "burgers",
    price: 99,
    description:
      "A rich butter chicken-flavored burger with a juicy chicken patty.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "NonVeg",
    packagingCharge: 0,
  },
  {
    title: "Veg Makhani Burst Burger",
    category: "burgers",
    price: 56,
    description: "A creamy and flavorful veg burger with a rich makhani sauce.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "Veg",
    packagingCharge: 0,
  },
  {
    title: "Chicken Tacos",
    category: "burgers",
    price: 89,
    description:
      "Soft taco shells filled with spicy grilled chicken, veggies, and sauce.",
    discountPercentage: 5,
    rating: 4,
    image: "",
    foodlabel: "NonVeg",
    packagingCharge: 0,
  },
];

export const BurgersMeal = [
  {
    title: "Crispy Veg Meal(M)",
    category: "",
    price: 223,
    description:
      "A delicious crispy veg patty served with fries and a refreshing drink.",
    discountPercentage: 18,
    rating: 4,
    foodlabel: "Veg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Crispy Chicken Meal(M)",
    category: "",
    price: 270,
    description: "Crispy fried chicken patty with a side of fries and a drink.",
    discountPercentage: 18,
    rating: 4,
    foodlabel: "NonVeg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Veg Makhani Burst Meal",
    category: "",
    price: 210,
    description:
      "A rich and creamy makhani-flavored veg burger with fries and a drink.",
    discountPercentage: 25,
    rating: 4,
    foodlabel: "Veg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Chicken Makhani Burst Meal",
    category: "",
    price: 230,
    description:
      "Juicy chicken patty infused with makhani flavors, served with fries and a drink.",
    discountPercentage: 20,
    rating: 4,
    foodlabel: "NonVeg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Crispy Veg Double Patty Meal",
    category: "",
    price: 233,
    description:
      "A double-layered crispy veg patty burger for extra crunch, served with fries and a drink.",
    discountPercentage: 18,
    rating: 4,
    foodlabel: "Veg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Veg Whooper Meal",
    category: "",
    price: 233,
    description:
      "A massive veg whooper packed with fresh veggies, cheese, and signature sauces.",
    discountPercentage: 18,
    rating: 4,
    foodlabel: "Veg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Chicken Whooper Meal",
    category: "",
    price: 233,
    description:
      "A juicy chicken whooper loaded with flavors, fresh lettuce, and sauces.",
    discountPercentage: 18,
    rating: 4,
    foodlabel: "NonVeg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Paneer Burger Meal",
    category: "",
    price: 256,
    description:
      "A soft and delicious paneer patty burger with a rich blend of spices and sauces.",
    discountPercentage: 18,
    rating: 4,
    foodlabel: "Veg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
  {
    title: "Chicken Tandoori Meal",
    category: "",
    price: 299,
    description:
      "Smoky tandoori-flavored chicken burger with a perfect blend of spices, served with fries and a drink.",
    discountPercentage: 25,
    rating: 4,
    foodlabel: "NonVeg",
    packagingCharge: 0,
    addons: [],
    veggies: [],
    sauces: [],
    drinks: [],
  },
];

export const beverages = [
  { title: "Pepsi", category: "beverages", description: "", price: 56 },
];

export const burgerWraps = [
  {
    title: "Crunchy Veg Taco",
    price: 180,
    description:
      "A crispy taco filled with fresh veggies, cheese, and zesty sauces.",
    rating: 4,
    foodlabel: "Veg",
    discountPercentage: 10,
    packagingCharge: 0,
  },
  {
    title: "Crunchy Chicken Taco",
    price: 200,
    description:
      "A crunchy taco packed with juicy chicken, fresh lettuce, and creamy sauce.",
    rating: 4,
    foodlabel: "NonVeg",
    discountPercentage: 10,
    packagingCharge: 0,
  },
  {
    title: "Chicken Wrap",
    price: 220,
    description:
      "A soft tortilla wrap loaded with spiced grilled chicken, veggies, and sauces.",
    rating: 4,
    foodlabel: "NonVeg",
    discountPercentage: 10,
    packagingCharge: 0,
  },
  {
    title: "Paneer Wrap",
    price: 210,
    description:
      "A flavorful wrap stuffed with grilled paneer, veggies, and tangy sauces.",
    rating: 4,
    foodlabel: "Veg",
    discountPercentage: 10,
    packagingCharge: 0,
  },
];
