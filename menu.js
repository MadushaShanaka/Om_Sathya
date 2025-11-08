/**
 * Restaurant Menu Data
 *
 * This data structure organizes the menu by category, with each item containing
 * its name and price details. Prices are stored as numbers for easy calculation.
 * Where 'full' and 'normal' sizes were listed, they are grouped under a 'sizes' object.
 */
export const MENU_DATA = [
  {
    category: "Basmathi Fried Rice",
    description: "Available in Full and Normal portion sizes.",
    items: [
      { name: "Vegetable Fried Rice", sizes: { full: 600.0, normal: 500.0 } },
      { name: "Egg Fried Rice", sizes: { full: 800.0, normal: 650.0 } },
      { name: "Chicken Fried Rice", sizes: { full: 1000.0, normal: 800.0 } },
      { name: "Mix Fried Rice", sizes: { full: 1400.0, normal: 1200.0 } },
      { name: "Seafood Fried Rice", sizes: { full: 1300.0, normal: 1100.0 } },
    ],
  },
  {
    category: "Special Rice Dishes",
    items: [
      { name: "Nasi Goreng Rice", price: 1600.0 },
      { name: "Biriyani Rice", price: 1700.0 },
      { name: "Mongolian Rice", price: 1600.0 },
    ],
  },
  {
    category: "Chopsuey Rice",
    items: [
      { name: "Chicken Chopsuey Rice", price: 2000.0 },
      { name: "Seafood Chopsuey Rice", price: 2500.0 },
      { name: "Mix Chopsuey Rice", price: 2800.0 },
      { name: "Vegetable Chopsuey Rice", price: 1600.0 },
    ],
  },
  {
    category: "Kottu",
    description: "Available in Full and Normal portion sizes.",
    items: [
      { name: "Vegetable Kottu", sizes: { full: 600.0, normal: 500.0 } },
      { name: "Egg Kottu", sizes: { full: 800.0, normal: 650.0 } },
      { name: "Chicken Kottu", sizes: { full: 1000.0, normal: 800.0 } },
      { name: "Mix Kottu", sizes: { full: 1400.0, normal: 1200.0 } },
      { name: "Seafood Kottu", sizes: { full: 1300.0, normal: 1100.0 } },
      // The snippet mentions add-ons which can be structured as options/specials
      //   { name: "Kottu Add-On: Omelette & Salad", price: 60.0, isAddOn: true },
      //   {
      //     name: "Kottu Special: Chicken, Omelette, Salad & Chips",
      //     price: 150.0,
      //     isAddOn: true,
      //   },
    ],
  },
  {
    category: "Noodles",
    description: "Available in Full and Normal portion sizes.",
    items: [
      { name: "Vegetable Noodles", sizes: { full: 600.0, normal: 500.0 } },
      { name: "Egg Noodles", sizes: { full: 800.0, normal: 650.0 } },
      { name: "Chicken Noodles", sizes: { full: 1000.0, normal: 800.0 } },
      { name: "Mix Noodles", sizes: { full: 1400.0, normal: 1200.0 } },
      { name: "Seafood Noodles", sizes: { full: 1300.0, normal: 1100.0 } },
    ],
  },
  {
    category: "Omelette",
    items: [
      { name: "Egg Omelette", price: 400.0 },
      { name: "Chicken Omelette", price: 700.0 },
      { name: "Cheese Omelette", price: 800.0 },
      { name: "Omelette Add-On: Vegetable Salad", price: 60.0, isAddOn: true },
      {
        name: "Omelette Add-On: Chicken Omlet Salad Chips",
        price: 150.0,
        isAddOn: true,
      },
    ],
  },
  {
    category: "String Hoppers Kottu",
    description: "Available in Full and Normal portion sizes.",
    items: [
      {
        name: "Vegetable String Hoppers Kottu",
        sizes: { full: 500.0, normal: 450.0 },
      },
      {
        name: "Egg String Hoppers Kottu",
        sizes: { full: 650.0, normal: 500.0 },
      },
      {
        name: "Chicken String Hoppers Kottu",
        sizes: { full: 800.0, normal: 600.0 },
      },
      {
        name: "Cheese String Hoppers Kottu",
        sizes: { full: 1000.0, normal: 900.0 },
      },
      {
        name: "Mix String Hoppers Kottu",
        sizes: { full: 1300.0, normal: 1200.0 },
      },
    ],
  },
  {
    category: "Chopsuey",
    items: [
      { name: "Vegetable Chopsuey", price: 700.0 },
      { name: "Chicken Chopsuey", price: 1300.0 },
      { name: "Seafood Chopsuey", price: 1600.0 },
      { name: "Mix Chopsuey", price: 1900.0 },
    ],
  },
  {
    category: "Speciate (Special Platter)",
    items: [
      {
        name: "Special Platter",
        description:
          "Includes Chips (100g), Chicken (200g), Mayonnaise sauce, Tomato sauce, and Kochchi Sambal.",
        price: 2500.0,
      },
    ],
  },
  {
    category: "Bite (Snacks)",
    items: [
      // Price was truncated in the snippet, assuming 1700.00 for the Chicken item
      {
        name: "Chicken (400g)",
        // description: "400g",
        flavors: { fride: 1700.0, devilled: 1700.0, curry: 1700.0 },
      },
      {
        name: "Prawns (400g)",
        flavors: {
          fride: 1700.0,
          devilled: 2000.0,
          curry: 2000.0,
          hotbutter: 2000.0,
          butterfridge: 2000.0,
        },
      },
      {
        name: "Gal Malu (400g)",
        price: 2000.0,
      },
      {
        name: "Cuttle Fish",
        flavors: {
          stew: 2000.0,
          butter: 2000.0,
          curry: 2000.0,
          hotbutter: 2000.0,
          butterfridge: 2000.0,
        },
      },
      {
        name: "Fish Thalapath",
        flavors: {
          fride: 1700.0,
          devilled: 2000.0,
          curry: 2000.0,
          stew: 2000.0,
        },
      },
      {
        name: "Hot Butter Mushroom",
        price: 700.0,
      },
      {
        name: "Sausage (10 pcs)",
        flavors: {
          fride: 700.0,
          devilled: 700.0,
        },
      },
    ],
  },
  {
    category: "Vegetable Platter",
    items: [
      { name: "Boiled Vegetables", price: 700.0 },
      { name: "Potato Chips", price: 600.0 },
      { name: "Cashew", price: 800.0 },
      { name: "Stir Fride Vegetables", price: 600.0 },
      { name: "Vegetable Salad", price: 700.0 },
      { name: "Onion Salad", price: 250.0 },
    ],
  },
];
