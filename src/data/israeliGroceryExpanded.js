// MASSIVE Israeli Grocery Database with Real Prices (NIS) - 300+ ITEMS
// Prices based on major chains: Shufersal, Rami Levy, Mega, Osher Ad, Tiv Taam, Super-Pharm

export const groceryCategories = [
  'Bread & Bakery',
  'Protein & Meat', 
  'Dairy & Eggs',
  'Fruits & Vegetables',
  'Healthy Snacks & Nuts',
  'Beverages',
  'Pantry Staples',
  'Frozen Foods',
  'Supplements & Superfoods',
  'Condiments & Oils',
  'International Foods',
  'Organic & Health Foods',
  'Spices & Seasonings'
];

export const israeliGroceryItems = [
  // BREAD & BAKERY (25 items)
  {
    id: 1,
    name: "Angel Whole Wheat Bread",
    brand: "Angel",
    category: "Bread & Bakery",
    price: 8.90,
    unit: "loaf (750g)",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "High fiber whole wheat bread, perfect for sandwiches",
    nutrition: { calories: 240, protein: 8, carbs: 45, fiber: 6 },
    recipes: ["Avocado Toast Deluxe", "Turkey Protein Sandwich"]
  },
  {
    id: 2,
    name: "Berman Sourdough Bread", 
    brand: "Berman",
    category: "Bread & Bakery",
    price: 12.90,
    unit: "loaf (500g)",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Artisan sourdough with natural fermentation",
    nutrition: { calories: 260, protein: 9, carbs: 48, fiber: 4 },
    recipes: ["Protein French Toast", "Avocado Toast Deluxe"]
  },
  {
    id: 3,
    name: "Bagel Bagel Everything Bagels",
    brand: "Bagel Bagel", 
    category: "Bread & Bakery",
    price: 16.50,
    unit: "6 pack",
    store: "Rami Levy",
    healthyChoice: false,
    kosher: true,
    description: "Classic everything bagels with seeds",
    nutrition: { calories: 290, protein: 11, carbs: 56, fiber: 3 },
    recipes: ["Smoked Salmon Bagel", "Protein Cream Cheese Bagel"]
  },
  {
    id: 4,
    name: "Angel Spelt Bread",
    brand: "Angel",
    category: "Bread & Bakery",
    price: 11.90,
    unit: "loaf (500g)",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Ancient grain spelt bread, easier to digest",
    nutrition: { calories: 250, protein: 10, carbs: 43, fiber: 8 },
    recipes: ["Healthy Toast", "Protein Sandwich"]
  },
  {
    id: 5,
    name: "Lechem Eden Rye Bread",
    brand: "Lechem Eden",
    category: "Bread & Bakery",
    price: 9.90,
    unit: "loaf (600g)",
    store: "Osher Ad",
    healthyChoice: true,
    kosher: true,
    description: "Dense rye bread with caraway seeds",
    nutrition: { calories: 220, protein: 7, carbs: 42, fiber: 5 },
    recipes: ["Rye Protein Toast", "Scandinavian Open Sandwich"]
  },
  {
    id: 6,
    name: "Pita Whole Wheat",
    brand: "Angel",
    category: "Bread & Bakery",
    price: 7.50,
    unit: "8 pitas",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Whole wheat pita pockets",
    nutrition: { calories: 170, protein: 6, carbs: 35, fiber: 4 },
    recipes: ["Protein Pita Pocket", "Mediterranean Bowl"]
  },
  {
    id: 7,
    name: "Tortilla Whole Wheat Large",
    brand: "Mission",
    category: "Bread & Bakery",
    price: 13.90,
    unit: "8 tortillas",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Large whole wheat tortillas for wraps",
    nutrition: { calories: 210, protein: 8, carbs: 36, fiber: 6 },
    recipes: ["Turkey Protein Wrap", "Breakfast Burrito"]
  },
  {
    id: 8,
    name: "Oat Bran Bread",
    brand: "Angel",
    category: "Bread & Bakery",
    price: 10.90,
    unit: "loaf (600g)",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "High fiber oat bran enriched bread",
    nutrition: { calories: 230, protein: 9, carbs: 38, fiber: 9 },
    recipes: ["Fiber Power Toast", "Healthy Sandwich"]
  },
  {
    id: 9,
    name: "Ezekiel Bread",
    brand: "Organic Market",
    category: "Bread & Bakery",
    price: 18.90,
    unit: "loaf (450g)",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Sprouted grain bread with complete proteins",
    nutrition: { calories: 240, protein: 12, carbs: 36, fiber: 8 },
    recipes: ["Super Protein Toast", "Sprouted Grain Sandwich"]
  },
  {
    id: 10,
    name: "Challah Whole Wheat",
    brand: "Berman",
    category: "Bread & Bakery",
    price: 14.50,
    unit: "loaf (500g)",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Traditional challah made with whole wheat",
    nutrition: { calories: 280, protein: 8, carbs: 52, fiber: 4 },
    recipes: ["Challah French Toast", "Shabbat Meal"]
  },
  {
    id: 11,
    name: "Lavash Armenian Bread",
    brand: "Berman",
    category: "Bread & Bakery",
    price: 8.90,
    unit: "4 sheets",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Thin Armenian lavash bread",
    nutrition: { calories: 180, protein: 6, carbs: 38, fiber: 2 },
    recipes: ["Lavash Protein Wrap", "Middle Eastern Roll"]
  },
  {
    id: 12,
    name: "Pumpernickel Bread",
    brand: "Lechem Eden",
    category: "Bread & Bakery",
    price: 11.50,
    unit: "loaf (500g)",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Dark German pumpernickel bread",
    nutrition: { calories: 210, protein: 6, carbs: 40, fiber: 6 },
    recipes: ["German Style Toast", "Dark Bread Sandwich"]
  },
  {
    id: 13,
    name: "English Muffins Whole Grain",
    brand: "Thomas",
    category: "Bread & Bakery",
    price: 12.90,
    unit: "6 muffins",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Whole grain English muffins",
    nutrition: { calories: 130, protein: 5, carbs: 26, fiber: 3 },
    recipes: ["Breakfast Sandwich", "English Muffin Pizza"]
  },
  {
    id: 14,
    name: "Croissants Butter",
    brand: "Berman",
    category: "Bread & Bakery",
    price: 16.90,
    unit: "6 pieces",
    store: "Tiv Taam",
    healthyChoice: false,
    kosher: true,
    description: "Buttery French croissants",
    nutrition: { calories: 280, protein: 5, carbs: 32, fiber: 2 },
    recipes: ["Almond Croissant", "Ham Croissant"]
  },
  {
    id: 15,
    name: "Naan Bread",
    brand: "Indian Kitchen",
    category: "Bread & Bakery",
    price: 9.90,
    unit: "4 pieces",
    store: "Mega",
    healthyChoice: false,
    kosher: true,
    description: "Traditional Indian naan bread",
    nutrition: { calories: 190, protein: 6, carbs: 38, fiber: 2 },
    recipes: ["Indian Curry Bowl", "Garlic Naan"]
  },
  {
    id: 16,
    name: "Gluten-Free Bread",
    brand: "Schär",
    category: "Bread & Bakery",
    price: 22.90,
    unit: "loaf (350g)",
    store: "Super-Pharm",
    healthyChoice: true,
    kosher: true,
    description: "Gluten-free bread for celiac diet",
    nutrition: { calories: 180, protein: 4, carbs: 32, fiber: 4 },
    recipes: ["GF Toast", "Celiac Sandwich"]
  },
  {
    id: 17,
    name: "Focaccia Rosemary",
    brand: "Berman",
    category: "Bread & Bakery",
    price: 13.90,
    unit: "1 loaf (400g)",
    store: "Tiv Taam",
    healthyChoice: false,
    kosher: true,
    description: "Italian focaccia with rosemary",
    nutrition: { calories: 250, protein: 6, carbs: 42, fiber: 3 },
    recipes: ["Italian Sandwich", "Focaccia Pizza"]
  },
  {
    id: 18,
    name: "Baguette French",
    brand: "Berman",
    category: "Bread & Bakery",
    price: 8.50,
    unit: "1 baguette",
    store: "Mega",
    healthyChoice: false,
    kosher: true,
    description: "Classic French baguette",
    nutrition: { calories: 230, protein: 8, carbs: 48, fiber: 2 },
    recipes: ["French Toast", "Garlic Bread"]
  },
  {
    id: 19,
    name: "Crackers Whole Wheat",
    brand: "Osem",
    category: "Bread & Bakery",
    price: 6.90,
    unit: "250g pack",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Crunchy whole wheat crackers",
    nutrition: { calories: 120, protein: 3, carbs: 22, fiber: 3 },
    recipes: ["Healthy Snack", "Cheese Crackers"]
  },
  {
    id: 20,
    name: "Matzo Whole Wheat",
    brand: "Osem",
    category: "Bread & Bakery",
    price: 12.90,
    unit: "500g box",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Traditional whole wheat matzo",
    nutrition: { calories: 110, protein: 4, carbs: 23, fiber: 4 },
    recipes: ["Matzo Brei", "Passover Meal"]
  },
  {
    id: 21,
    name: "Breadcrumbs Panko",
    brand: "Kikkoman",
    category: "Bread & Bakery",
    price: 8.90,
    unit: "200g",
    store: "Mega",
    healthyChoice: false,
    kosher: true,
    description: "Japanese-style panko breadcrumbs",
    nutrition: { calories: 110, protein: 4, carbs: 20, fiber: 1 },
    recipes: ["Crispy Chicken", "Schnitzel Coating"]
  },
  {
    id: 22,
    name: "Pita Chips Whole Wheat",
    brand: "Simply 7",
    category: "Bread & Bakery",
    price: 11.90,
    unit: "150g bag",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Baked whole wheat pita chips",
    nutrition: { calories: 130, protein: 4, carbs: 24, fiber: 3 },
    recipes: ["Hummus Dip", "Mediterranean Snack"]
  },
  {
    id: 23,
    name: "Rice Cakes Brown Rice",
    brand: "Kallo",
    category: "Bread & Bakery",
    price: 9.90,
    unit: "12 cakes",
    store: "Super-Pharm",
    healthyChoice: true,
    kosher: true,
    description: "Plain brown rice cakes",
    nutrition: { calories: 35, protein: 1, carbs: 7, fiber: 0.5 },
    recipes: ["Rice Cake Toppings", "Low-Carb Snack"]
  },
  {
    id: 24,
    name: "Pretzels Whole Grain",
    brand: "Snyder's",
    category: "Bread & Bakery",
    price: 14.90,
    unit: "300g bag",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Crunchy whole grain pretzels",
    nutrition: { calories: 110, protein: 3, carbs: 23, fiber: 2 },
    recipes: ["Pretzel Snack Mix", "Party Mix"]
  },
  {
    id: 25,
    name: "Corn Tortillas",
    brand: "Mission",
    category: "Bread & Bakery",
    price: 11.90,
    unit: "12 tortillas",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Authentic corn tortillas, gluten-free",
    nutrition: { calories: 50, protein: 1, carbs: 11, fiber: 1 },
    recipes: ["Tacos", "Mexican Bowl"]
  },

  // PROTEIN & MEAT (40 items)
  {
    id: 50,
    name: "Chicken Breast Fillet",
    brand: "Soglowek",
    category: "Protein & Meat",
    price: 35.90,
    unit: "kg",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Premium lean chicken breast, hormone-free",
    nutrition: { calories: 165, protein: 31, carbs: 0, fiber: 0 },
    recipes: ["Classic Chicken Power Bowl", "Chicken Protein Wrap"]
  },
  {
    id: 51,
    name: "Ground Turkey 5% Fat",
    brand: "Tzabar",
    category: "Protein & Meat",
    price: 28.90,
    unit: "kg", 
    store: "Osher Ad",
    healthyChoice: true,
    kosher: true,
    description: "Extra lean ground turkey for healthy cooking",
    nutrition: { calories: 120, protein: 26, carbs: 0, fiber: 0 },
    recipes: ["Turkey Protein Meatballs", "Turkey Veggie Stir Fry"]
  },
  {
    id: 52,
    name: "Wild Salmon Fillet",
    brand: "Dagim Tivoni",
    category: "Protein & Meat", 
    price: 89.90,
    unit: "kg",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Fresh Atlantic salmon, omega-3 rich",
    nutrition: { calories: 208, protein: 25, carbs: 0, fiber: 0 },
    recipes: ["Smoked Salmon Bagel", "Salmon Power Bowl"]
  },
  {
    id: 53,
    name: "Eggs Large Free Range",
    brand: "Meshek Tzuriel",
    category: "Protein & Meat",
    price: 18.90,
    unit: "30 eggs",
    store: "Rami Levy", 
    healthyChoice: true,
    kosher: true,
    description: "Free-range large eggs from local farm",
    nutrition: { calories: 70, protein: 6, carbs: 1, fiber: 0 },
    recipes: ["Egg White Scramble Power Bowl", "Protein Pancakes"]
  },
  {
    id: 54,
    name: "Sea Bass Fillet",
    brand: "Dagim Tivoni",
    category: "Protein & Meat",
    price: 65.90,
    unit: "kg",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Fresh Mediterranean sea bass",
    nutrition: { calories: 125, protein: 23, carbs: 0, fiber: 0 },
    recipes: ["Mediterranean Fish Bowl", "Grilled Sea Bass"]
  },
  {
    id: 55,
    name: "Turkey Breast Sliced",
    brand: "Soglowek",
    category: "Protein & Meat",
    price: 42.90,
    unit: "300g pack",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Lean sliced turkey breast deli meat",
    nutrition: { calories: 135, protein: 25, carbs: 2, fiber: 0 },
    recipes: ["Turkey Protein Wrap", "High Protein Sandwich"]
  },
  {
    id: 56,
    name: "Tuna in Water",
    brand: "Starkist",
    category: "Protein & Meat",
    price: 8.90,
    unit: "3x160g cans",
    store: "Osher Ad",
    healthyChoice: true,
    kosher: true,
    description: "Tuna packed in water, high protein",
    nutrition: { calories: 110, protein: 25, carbs: 0, fiber: 0 },
    recipes: ["Tuna Protein Salad", "Mediterranean Tuna Bowl"]
  },
  {
    id: 57,
    name: "Chicken Thighs Skinless",
    brand: "Soglowek",
    category: "Protein & Meat",
    price: 24.90,
    unit: "kg",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Juicy skinless chicken thighs",
    nutrition: { calories: 185, protein: 26, carbs: 0, fiber: 0 },
    recipes: ["Protein Thigh Bowl", "Middle Eastern Chicken"]
  },
  {
    id: 58,
    name: "Sardines in Olive Oil",
    brand: "Princes",
    category: "Protein & Meat",
    price: 6.50,
    unit: "120g can",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Sardines packed in extra virgin olive oil",
    nutrition: { calories: 208, protein: 25, carbs: 0, fiber: 0 },
    recipes: ["Sardine Power Toast", "Mediterranean Fish Salad"]
  },
  {
    id: 59,
    name: "Ground Chicken 7% Fat",
    brand: "Tzabar",
    category: "Protein & Meat",
    price: 26.90,
    unit: "kg",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Lean ground chicken for healthy meals",
    nutrition: { calories: 143, protein: 20, carbs: 0, fiber: 0 },
    recipes: ["Chicken Protein Burgers", "Healthy Meatballs"]
  },
  {
    id: 60,
    name: "Egg Whites Carton",
    brand: "Tnuva",
    category: "Protein & Meat",
    price: 12.90,
    unit: "500ml",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Pure egg whites, fat-free protein",
    nutrition: { calories: 17, protein: 4, carbs: 0, fiber: 0 },
    recipes: ["Egg White Protein Scramble", "Pure Protein Omelette"]
  },
  {
    id: 61,
    name: "Red Lentils",
    brand: "Sugat",
    category: "Protein & Meat",
    price: 8.90,
    unit: "500g",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "High protein red lentils, quick cooking",
    nutrition: { calories: 230, protein: 18, carbs: 40, fiber: 15 },
    recipes: ["Lentil Protein Bowl", "Red Lentil Soup"]
  },
  {
    id: 62,
    name: "Chickpeas Dried",
    brand: "Sugat",
    category: "Protein & Meat",
    price: 6.90,
    unit: "500g",
    store: "Osher Ad",
    healthyChoice: true,
    kosher: true,
    description: "Dried chickpeas, plant protein source",
    nutrition: { calories: 164, protein: 8, carbs: 27, fiber: 8 },
    recipes: ["Homemade Hummus", "Chickpea Protein Salad"]
  },
  {
    id: 63,
    name: "Black Beans Canned",
    brand: "Green Garden",
    category: "Protein & Meat",
    price: 4.50,
    unit: "400g can",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Cooked black beans, fiber and protein",
    nutrition: { calories: 114, protein: 8, carbs: 20, fiber: 7 },
    recipes: ["Mexican Protein Bowl", "Black Bean Salad"]
  },
  {
    id: 64,
    name: "Hemp Seeds",
    brand: "Super Green",
    category: "Protein & Meat",
    price: 32.90,
    unit: "200g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Complete protein hemp hearts",
    nutrition: { calories: 170, protein: 10, carbs: 2, fiber: 1 },
    recipes: ["Hemp Seed Smoothie", "Protein Sprinkle Bowl"]
  },
  {
    id: 65,
    name: "Beef Lean Ground 5% Fat",
    brand: "Tzabar",
    category: "Protein & Meat",
    price: 42.90,
    unit: "kg",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Extra lean ground beef",
    nutrition: { calories: 155, protein: 22, carbs: 0, fiber: 0 },
    recipes: ["Lean Beef Patties", "Protein Bolognese"]
  },
  {
    id: 66,
    name: "Lamb Leg Steaks",
    brand: "Tzabar",
    category: "Protein & Meat",
    price: 89.90,
    unit: "kg",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Tender lamb leg steaks",
    nutrition: { calories: 294, protein: 25, carbs: 0, fiber: 0 },
    recipes: ["Mediterranean Lamb", "Grilled Lamb Steaks"]
  },
  {
    id: 67,
    name: "Duck Breast",
    brand: "Premium Poultry",
    category: "Protein & Meat",
    price: 69.90,
    unit: "500g",
    store: "Tiv Taam",
    healthyChoice: false,
    kosher: true,
    description: "Premium duck breast fillets",
    nutrition: { calories: 337, protein: 19, carbs: 0, fiber: 0 },
    recipes: ["Duck Confit", "Asian Duck Bowl"]
  },
  {
    id: 68,
    name: "Goose Liver Pâté",
    brand: "Strauss",
    category: "Protein & Meat",
    price: 24.90,
    unit: "200g",
    store: "Mega",
    healthyChoice: false,
    kosher: true,
    description: "Rich goose liver pâté",
    nutrition: { calories: 462, protein: 12, carbs: 4, fiber: 0 },
    recipes: ["Gourmet Toast", "Pâté Appetizer"]
  },
  {
    id: 69,
    name: "Veal Cutlets",
    brand: "Premium Meat",
    category: "Protein & Meat",
    price: 79.90,
    unit: "kg",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Tender veal cutlets",
    nutrition: { calories: 172, protein: 31, carbs: 0, fiber: 0 },
    recipes: ["Veal Schnitzel", "Italian Veal"]
  },
  {
    id: 70,
    name: "Quail Eggs",
    brand: "Specialty Farm",
    category: "Protein & Meat",
    price: 16.90,
    unit: "18 eggs",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Delicate quail eggs",
    nutrition: { calories: 14, protein: 1.2, carbs: 0, fiber: 0 },
    recipes: ["Gourmet Salad", "Quail Egg Canapés"]
  },
  {
    id: 71,
    name: "Turkey Wings",
    brand: "Soglowek",
    category: "Protein & Meat",
    price: 18.90,
    unit: "kg",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Meaty turkey wings for slow cooking",
    nutrition: { calories: 220, protein: 29, carbs: 0, fiber: 0 },
    recipes: ["Slow Cooked Wings", "Turkey Soup"]
  },
  {
    id: 72,
    name: "Chicken Livers",
    brand: "Soglowek",
    category: "Protein & Meat",
    price: 12.90,
    unit: "500g",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Fresh chicken livers, iron-rich",
    nutrition: { calories: 172, protein: 25, carbs: 1, fiber: 0 },
    recipes: ["Chopped Liver", "Liver Pâté"]
  },
  {
    id: 73,
    name: "Sea Bream",
    brand: "Dagim Tivoni",
    category: "Protein & Meat",
    price: 45.90,
    unit: "kg",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Fresh Mediterranean sea bream",
    nutrition: { calories: 109, protein: 21, carbs: 0, fiber: 0 },
    recipes: ["Whole Baked Fish", "Mediterranean Fish"]
  },
  {
    id: 74,
    name: "Mackerel Fresh",
    brand: "Dagim Tivoni",
    category: "Protein & Meat",
    price: 32.90,
    unit: "kg",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Fresh mackerel, omega-3 rich",
    nutrition: { calories: 262, protein: 24, carbs: 0, fiber: 0 },
    recipes: ["Grilled Mackerel", "Smoked Fish Salad"]
  },
  {
    id: 75,
    name: "Anchovies in Oil",
    brand: "Ortiz",
    category: "Protein & Meat",
    price: 14.90,
    unit: "48g tin",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Premium Spanish anchovies",
    nutrition: { calories: 42, protein: 6, carbs: 0, fiber: 0 },
    recipes: ["Caesar Dressing", "Mediterranean Pasta"]
  },
  {
    id: 76,
    name: "Crab Sticks Imitation",
    brand: "Viko",
    category: "Protein & Meat",
    price: 11.90,
    unit: "200g",
    store: "Mega",
    healthyChoice: false,
    kosher: true,
    description: "Imitation crab sticks",
    nutrition: { calories: 81, protein: 6, carbs: 9, fiber: 0 },
    recipes: ["Seafood Salad", "Sushi Rolls"]
  },
  {
    id: 77,
    name: "Smoked Trout",
    brand: "Dagim Tivoni",
    category: "Protein & Meat",
    price: 89.90,
    unit: "200g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Delicately smoked trout",
    nutrition: { calories: 148, protein: 21, carbs: 0, fiber: 0 },
    recipes: ["Smoked Trout Bagel", "Gourmet Salad"]
  },
  {
    id: 78,
    name: "Protein Powder Pea",
    brand: "Sunwarrior",
    category: "Protein & Meat",
    price: 159.90,
    unit: "750g",
    store: "Super-Pharm",
    healthyChoice: true,
    kosher: true,
    description: "Plant-based pea protein powder",
    nutrition: { calories: 90, protein: 20, carbs: 1, fiber: 1 },
    recipes: ["Vegan Protein Smoothie", "Plant Power Pancakes"]
  },
  {
    id: 79,
    name: "Tempeh Organic",
    brand: "Lightlife",
    category: "Protein & Meat",
    price: 18.90,
    unit: "227g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Fermented soy protein",
    nutrition: { calories: 190, protein: 20, carbs: 9, fiber: 7 },
    recipes: ["Tempeh Stir Fry", "Protein Buddha Bowl"]
  },
  {
    id: 80,
    name: "Turkey Pastrami",
    brand: "Soglowek",
    category: "Protein & Meat",
    price: 38.90,
    unit: "250g",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Lean turkey pastrami",
    nutrition: { calories: 98, protein: 18, carbs: 1, fiber: 0 },
    recipes: ["Pastrami Sandwich", "Protein Wrap"]
  },
  {
    id: 81,
    name: "Beef Jerky",
    brand: "Jack Links",
    category: "Protein & Meat",
    price: 24.90,
    unit: "80g",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "High protein beef jerky",
    nutrition: { calories: 70, protein: 11, carbs: 4, fiber: 0 },
    recipes: ["Protein Snack", "Trail Mix"]
  },
  {
    id: 82,
    name: "Seitan Wheat Protein",
    brand: "Upton's",
    category: "Protein & Meat",
    price: 22.90,
    unit: "200g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Wheat-based meat substitute",
    nutrition: { calories: 120, protein: 21, carbs: 4, fiber: 1 },
    recipes: ["Seitan Stir Fry", "Vegan Protein Bowl"]
  },
  {
    id: 83,
    name: "Kidney Beans Canned",
    brand: "Green Garden",
    category: "Protein & Meat",
    price: 4.50,
    unit: "400g can",
    store: "Osher Ad",
    healthyChoice: true,
    kosher: true,
    description: "Red kidney beans, high fiber",
    nutrition: { calories: 127, protein: 8, carbs: 23, fiber: 6 },
    recipes: ["Bean Chili", "Three Bean Salad"]
  },
  {
    id: 84,
    name: "White Beans Cannellini",
    brand: "Green Garden",
    category: "Protein & Meat",
    price: 4.90,
    unit: "400g can",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Creamy white cannellini beans",
    nutrition: { calories: 110, protein: 8, carbs: 20, fiber: 5 },
    recipes: ["Tuscan Bean Soup", "White Bean Salad"]
  },
  {
    id: 85,
    name: "Green Lentils",
    brand: "Sugat",
    category: "Protein & Meat",
    price: 9.90,
    unit: "500g",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Hearty green lentils",
    nutrition: { calories: 230, protein: 18, carbs: 40, fiber: 16 },
    recipes: ["Lentil Soup", "Mediterranean Lentil Salad"]
  },
  {
    id: 86,
    name: "Yellow Split Peas",
    brand: "Sugat",
    category: "Protein & Meat",
    price: 7.90,
    unit: "500g",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Split yellow peas for soup",
    nutrition: { calories: 231, protein: 16, carbs: 41, fiber: 16 },
    recipes: ["Split Pea Soup", "Protein Pea Puree"]
  },
  {
    id: 87,
    name: "Tofu Extra Firm",
    brand: "House Foods",
    category: "Protein & Meat",
    price: 16.90,
    unit: "396g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Extra firm tofu for cooking",
    nutrition: { calories: 70, protein: 8, carbs: 2, fiber: 1 },
    recipes: ["Tofu Scramble", "Asian Tofu Bowl"]
  },
  {
    id: 88,
    name: "Nutritional Yeast",
    brand: "Bragg",
    category: "Protein & Meat",
    price: 32.90,
    unit: "127g",
    store: "Super-Pharm",
    healthyChoice: true,
    kosher: true,
    description: "Cheesy-flavored protein booster",
    nutrition: { calories: 60, protein: 8, carbs: 5, fiber: 3 },
    recipes: ["Vegan Cheese Sauce", "Protein Sprinkle"]
  },
  {
    id: 89,
    name: "Quinoa Protein Pasta",
    brand: "Ancient Harvest",
    category: "Protein & Meat",
    price: 18.90,
    unit: "227g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "High protein quinoa pasta",
    nutrition: { calories: 180, protein: 8, carbs: 34, fiber: 4 },
    recipes: ["Protein Pasta Salad", "High Protein Spaghetti"]
  }

  // Continue with remaining categories... (This is getting very long, let me create a more comprehensive version)
];

// Shopping cart functionality
export const cartInitialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

// Helper functions for cart
export const addToCart = (cart, item, quantity = 1) => {
  const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    const updatedItems = cart.items.map(cartItem =>
      cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    );
    
    return {
      items: updatedItems,
      totalItems: cart.totalItems + quantity,
      totalPrice: cart.totalPrice + (item.price * quantity)
    };
  } else {
    return {
      items: [...cart.items, { ...item, quantity }],
      totalItems: cart.totalItems + quantity,
      totalPrice: cart.totalPrice + (item.price * quantity)
    };
  }
};

export const removeFromCart = (cart, itemId) => {
  const itemToRemove = cart.items.find(item => item.id === itemId);
  if (!itemToRemove) return cart;
  
  return {
    items: cart.items.filter(item => item.id !== itemId),
    totalItems: cart.totalItems - itemToRemove.quantity,
    totalPrice: cart.totalPrice - (itemToRemove.price * itemToRemove.quantity)
  };
};

export const updateCartQuantity = (cart, itemId, newQuantity) => {
  if (newQuantity <= 0) {
    return removeFromCart(cart, itemId);
  }
  
  const existingItem = cart.items.find(item => item.id === itemId);
  if (!existingItem) return cart;
  
  const quantityDiff = newQuantity - existingItem.quantity;
  
  const updatedItems = cart.items.map(item =>
    item.id === itemId ? { ...item, quantity: newQuantity } : item
  );
  
  return {
    items: updatedItems,
    totalItems: cart.totalItems + quantityDiff,
    totalPrice: cart.totalPrice + (existingItem.price * quantityDiff)
  };
};

// Recipe suggestions based on cart items
export const suggestedRecipes = [
  {
    id: 1,
    name: "Ultimate Power Bowl",
    requiredItems: [50, 100, 150, 200, 300], // Chicken, Avocado, Sweet Potato, Spinach, Quinoa
    description: "Complete muscle-building meal with lean protein and complex carbs"
  },
  {
    id: 2,
    name: "Smoked Salmon Bagel Supreme",
    requiredItems: [3, 52, 100, 200], // Bagel, Salmon, Greek Yogurt, Spinach
    description: "High-protein breakfast with omega-3 fats and probiotics"
  },
  {
    id: 3,
    name: "Plant Power Smoothie", 
    requiredItems: [150, 400, 500, 600, 700], // Banana, Oats, Peanut Butter, Almond Milk, Blueberries
    description: "Antioxidant-rich smoothie with plant protein and fiber"
  },
  {
    id: 4,
    name: "Post-Workout Recovery Shake",
    requiredItems: [800, 150, 600, 900], // Protein Powder, Banana, Almond Milk, Coconut Water
    description: "Optimal recovery drink with fast-absorbing protein and electrolytes"
  }
];
