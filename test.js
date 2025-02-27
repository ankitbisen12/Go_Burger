const MENU_ITEMS = [
  {
    id: "1",
    name: "Veg Whopper",
    description: "Our signature Whopper with 7 layers between the buns...",
    price: "₹179/-",
    // image: require("@/assets/images/burger.png"), // Replace with your image path
    foodlabel: "Veg",
  },
  {
    id: "2",
    name: "Bk Chicken Pizza Puff",
    description: "Crispy puff snack filled with juicy diced chicken...",
    price: "₹69/-",
    // image: require("@/assets/images/burger.png"),
    foodlabel: "NonVeg",
  },
  {
    id: "3",
    name: "Chicken Whopper",
    description: "Our signature Whopper with 7 layers between the buns...",
    price: "₹199/-",
    // image: require("@/assets/images/burger.png"),
    foodlabel: "NonVeg",
  },
  {
    id: "4",
    name: "Bk Veg Pizza Puff",
    description: "Crispy savoury pastry with a filling of tomato sauce...",
    price: "₹45/-",
    // image: require("@/assets/images/burger.png"),
    foodlabel: "Veg",
  },
  {
    id: "7",
    name: "Veg Whopper",
    description: "Our signature Whopper with 7 layers between the buns...",
    price: "₹179/-",
    // image: require("@/assets/images/burger.png"), // Replace with your image path
    foodlabel: "Veg",
  },
  {
    id: "8",
    name: "Bk Chicken Pizza Puff",
    description: "Crispy puff snack filled with juicy diced chicken...",
    price: "₹69/-",
    // image: require("@/assets/images/burger.png"),
    foodlabel: "NonVeg",
  },
  {
    id: "9",
    name: "Chicken Whopper",
    description: "Our signature Whopper with 7 layers between the buns...",
    price: "₹199/-",
    // image: require("@/assets/images/burger.png"),
    foodlabel: "NonVeg",
  },
  {
    id: "10",
    name: "Bk Veg Pizza Puff",
    description: "Crispy savoury pastry with a filling of tomato sauce...",
    price: "₹45/-",
    // image: require("@/assets/images/burger.png"),
    foodlabel: "Veg",
  },
];

let foodlabel = "NonVeg";

const filterArray = MENU_ITEMS.filter((el) => el.foodlabel === foodlabel);

console.log(filterArray);