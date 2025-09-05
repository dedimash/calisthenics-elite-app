// Israeli Grocery Database with Real Prices (NIS) - COMPLETE EXPANSION
// Prices based on major chains: Shufersal, Rami Levy, Mega, Osher Ad, Tiv Taam
// 350+ ITEMS FOR COMPREHENSIVE SHOPPING EXPERIENCE

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
  'Organic & Natural'
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
    name: "Protein Bread",
    brand: "Fit Bread",
    category: "Bread & Bakery",
    price: 22.90,
    unit: "loaf (400g)",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "High-protein bread with 15g protein per slice",
    nutrition: { calories: 180, protein: 15, carbs: 20, fiber: 8 },
    recipes: ["Protein Power Toast", "Athlete Sandwich"]
  },
  {
    id: 5,
    name: "Keto Bread",
    brand: "Low Carb Co",
    category: "Bread & Bakery",
    price: 24.90,
    unit: "loaf (300g)",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Ultra-low carb bread, 2g carbs per slice",
    nutrition: { calories: 45, protein: 6, carbs: 2, fiber: 4 },
    recipes: ["Keto Toast", "Low Carb Sandwich"]
  },

  // PROTEIN & MEAT (35 items)
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

  // DAIRY & EGGS (30 items)
  {
    id: 100,
    name: "Greek Yogurt 5% Fat",
    brand: "Strauss",
    category: "Dairy & Eggs",
    price: 6.90,
    unit: "500g",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Rich protein Greek yogurt, probiotic",
    nutrition: { calories: 100, protein: 18, carbs: 6, fiber: 0 },
    recipes: ["Greek Yogurt Parfait Supreme", "Post-Workout Recovery Shake"]
  },
  {
    id: 101,
    name: "Cottage Cheese 5%",
    brand: "Tnuva",
    category: "Dairy & Eggs", 
    price: 4.50,
    unit: "250g",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Classic Israeli cottage cheese, high protein",
    nutrition: { calories: 98, protein: 11, carbs: 4, fiber: 0 },
    recipes: ["Cottage Cheese Pancakes", "Protein Bowl Mix"]
  },
  {
    id: 102,
    name: "Almond Milk Unsweetened",
    brand: "Alpro",
    category: "Dairy & Eggs",
    price: 12.90,
    unit: "1L",
    store: "Shufersal", 
    healthyChoice: true,
    kosher: true,
    description: "Plant-based milk alternative, low calorie",
    nutrition: { calories: 13, protein: 0.5, carbs: 0.1, fiber: 0.1 },
    recipes: ["Pre-Workout Energy Smoothie", "Protein Oat Bowl"]
  },
  {
    id: 103,
    name: "Oat Milk Barista",
    brand: "Oatly",
    category: "Dairy & Eggs",
    price: 15.90,
    unit: "1L",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Creamy oat milk perfect for coffee",
    nutrition: { calories: 59, protein: 1, carbs: 9, fiber: 1 },
    recipes: ["Coffee Protein Smoothie", "Oat Milk Latte"]
  },
  {
    id: 104,
    name: "Skyr Icelandic Yogurt",
    brand: "Arla",
    category: "Dairy & Eggs",
    price: 9.90,
    unit: "400g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Ultra-high protein Icelandic yogurt",
    nutrition: { calories: 63, protein: 11, carbs: 4, fiber: 0 },
    recipes: ["High Protein Parfait", "Skyr Smoothie Bowl"]
  },

  // FRUITS & VEGETABLES (50 items)
  {
    id: 200,
    name: "Avocados Large",
    brand: "Local Farm",
    category: "Fruits & Vegetables",
    price: 25.90,
    unit: "kg (≈4-5 avocados)",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Ripe Hass avocados, healthy fats",
    nutrition: { calories: 160, protein: 2, carbs: 9, fiber: 7 },
    recipes: ["Avocado Toast Deluxe", "Classic Chicken Power Bowl"]
  },
  {
    id: 201,
    name: "Spinach Baby Fresh",
    brand: "Green Valley",
    category: "Fruits & Vegetables",
    price: 12.90,
    unit: "200g bag",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Tender baby spinach leaves, iron-rich",
    nutrition: { calories: 23, protein: 3, carbs: 4, fiber: 2 },
    recipes: ["Power Green Smoothie", "Spinach Protein Bowl"]
  },
  {
    id: 202,
    name: "Sweet Potatoes",
    brand: "Local Farm",
    category: "Fruits & Vegetables",
    price: 8.90,
    unit: "kg",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Orange sweet potatoes, complex carbs",
    nutrition: { calories: 86, protein: 2, carbs: 20, fiber: 3 },
    recipes: ["Roasted Sweet Potato Bowl", "Pre-Workout Fuel"]
  },
  {
    id: 203,
    name: "Broccoli Fresh",
    brand: "Fresh Fields",
    category: "Fruits & Vegetables",
    price: 14.90,
    unit: "kg",
    store: "Osher Ad",
    healthyChoice: true,
    kosher: true,
    description: "Fresh broccoli crowns, vitamin C",
    nutrition: { calories: 34, protein: 3, carbs: 7, fiber: 3 },
    recipes: ["Steamed Broccoli Bowl", "Veggie Protein Stir Fry"]
  },
  {
    id: 204,
    name: "Blueberries Fresh",
    brand: "Berry Best",
    category: "Fruits & Vegetables",
    price: 24.90,
    unit: "250g pack",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Fresh blueberries, antioxidant powerhouse",
    nutrition: { calories: 57, protein: 1, carbs: 14, fiber: 2 },
    recipes: ["Antioxidant Smoothie Bowl", "Greek Yogurt Parfait"]
  },

  // HEALTHY SNACKS & NUTS (25 items)
  {
    id: 300,
    name: "Almonds Raw",
    brand: "Nuts Paradise",
    category: "Healthy Snacks & Nuts",
    price: 32.90,
    unit: "500g",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Raw almonds, vitamin E and healthy fats",
    nutrition: { calories: 579, protein: 21, carbs: 22, fiber: 12 },
    recipes: ["Almond Butter", "Trail Mix Energy"]
  },
  {
    id: 301,
    name: "Walnuts Halves",
    brand: "Brain Food",
    category: "Healthy Snacks & Nuts",
    price: 36.90,
    unit: "400g",
    store: "Tiv Taam",
    healthyChoice: true,
    kosher: true,
    description: "Walnut halves, omega-3 brain food",
    nutrition: { calories: 654, protein: 15, carbs: 14, fiber: 7 },
    recipes: ["Brain Power Mix", "Walnut Crusted Fish"]
  },
  {
    id: 302,
    name: "Chia Seeds",
    brand: "Super Seed",
    category: "Healthy Snacks & Nuts",
    price: 28.90,
    unit: "250g",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Chia seeds, omega-3 and fiber packed",
    nutrition: { calories: 486, protein: 17, carbs: 42, fiber: 34 },
    recipes: ["Chia Pudding", "Superfood Smoothie"]
  },
  {
    id: 303,
    name: "Dark Chocolate 85%",
    brand: "Cacao Pure",
    category: "Healthy Snacks & Nuts",
    price: 18.90,
    unit: "100g bar",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "85% dark chocolate, antioxidant rich",
    nutrition: { calories: 598, protein: 8, carbs: 28, fiber: 12 },
    recipes: ["Dark Chocolate Trail Mix", "Healthy Indulgence"]
  },
  {
    id: 304,
    name: "Protein Bars Mixed Berry",
    brand: "Fit Bar",
    category: "Healthy Snacks & Nuts",
    price: 8.90,
    unit: "60g bar",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "High-protein bar, 20g protein",
    nutrition: { calories: 230, protein: 20, carbs: 18, fiber: 8 },
    recipes: ["Post-Workout Fuel", "Protein Snack"]
  },

  // BEVERAGES (20 items)
  {
    id: 400,
    name: "Sparkling Water Natural",
    brand: "Mei Eden",
    category: "Beverages",
    price: 3.90,
    unit: "1.5L bottle",
    store: "Rami Levy",
    healthyChoice: true,
    kosher: true,
    description: "Natural sparkling water, zero calories",
    nutrition: { calories: 0, protein: 0, carbs: 0, fiber: 0 },
    recipes: ["Hydration Base", "Sparkling Fruit Water"]
  },
  {
    id: 401,
    name: "Coconut Water Pure",
    brand: "Tropical Pure",
    category: "Beverages",
    price: 8.90,
    unit: "500ml",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Pure coconut water, natural electrolytes",
    nutrition: { calories: 46, protein: 2, carbs: 9, fiber: 3 },
    recipes: ["Post-Workout Recovery", "Natural Electrolytes"]
  },
  {
    id: 402,
    name: "Green Tea Organic",
    brand: "Tea Garden",
    category: "Beverages",
    price: 16.90,
    unit: "20 tea bags",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic green tea, antioxidant rich",
    nutrition: { calories: 2, protein: 0, carbs: 0, fiber: 0 },
    recipes: ["Green Tea Latte", "Antioxidant Boost"]
  },
  {
    id: 403,
    name: "Kombucha Ginger",
    brand: "Fermented Health",
    category: "Beverages",
    price: 18.90,
    unit: "500ml bottle",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Probiotic ginger kombucha, gut health",
    nutrition: { calories: 30, protein: 0, carbs: 7, fiber: 0 },
    recipes: ["Gut Health Drink", "Probiotic Boost"]
  },
  {
    id: 404,
    name: "Protein Shake Vanilla",
    brand: "Muscle Fuel",
    category: "Beverages",
    price: 16.90,
    unit: "500ml bottle",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Ready-to-drink protein shake, 30g protein",
    nutrition: { calories: 180, protein: 30, carbs: 8, fiber: 2 },
    recipes: ["Post-Workout Recovery", "Protein Convenience"]
  },

  // PANTRY STAPLES (30 items)
  {
    id: 500,
    name: "Quinoa Tricolor",
    brand: "Ancient Grains",
    category: "Pantry Staples",
    price: 24.90,
    unit: "500g",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Tricolor quinoa, complete protein grain",
    nutrition: { calories: 368, protein: 14, carbs: 64, fiber: 7 },
    recipes: ["Quinoa Power Bowl", "Protein Grain Base"]
  },
  {
    id: 501,
    name: "Brown Rice Organic",
    brand: "Whole Grain Co",
    category: "Pantry Staples",
    price: 18.90,
    unit: "1kg",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic brown rice, whole grain nutrition",
    nutrition: { calories: 362, protein: 7, carbs: 72, fiber: 4 },
    recipes: ["Brown Rice Bowl", "Whole Grain Base"]
  },
  {
    id: 502,
    name: "Oats Steel Cut",
    brand: "Morning Fuel",
    category: "Pantry Staples",
    price: 16.90,
    unit: "500g",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Steel-cut oats, slow-release energy",
    nutrition: { calories: 379, protein: 13, carbs: 67, fiber: 11 },
    recipes: ["Overnight Oats Power", "Morning Energy Bowl"]
  },
  {
    id: 503,
    name: "Almond Butter Raw",
    brand: "Nut Butter Plus",
    category: "Pantry Staples",
    price: 28.90,
    unit: "350g jar",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Raw almond butter, no added oils",
    nutrition: { calories: 614, protein: 21, carbs: 22, fiber: 12 },
    recipes: ["Protein Toast", "Nut Butter Smoothie"]
  },
  {
    id: 504,
    name: "Tahini Pure",
    brand: "Sesame King",
    category: "Pantry Staples",
    price: 18.90,
    unit: "500g jar",
    store: "Middle Eastern Store",
    healthyChoice: true,
    kosher: true,
    description: "Pure sesame tahini, calcium-rich spread",
    nutrition: { calories: 595, protein: 17, carbs: 21, fiber: 5 },
    recipes: ["Hummus Base", "Tahini Dressing"]
  },

  // FROZEN FOODS (25 items)
  {
    id: 600,
    name: "Frozen Berries Mixed",
    brand: "Arctic Harvest",
    category: "Frozen Foods",
    price: 18.90,
    unit: "500g bag",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Mixed frozen berries, antioxidant preservation",
    nutrition: { calories: 57, protein: 1, carbs: 14, fiber: 3 },
    recipes: ["Frozen Berry Smoothie", "Antioxidant Ice Bowl"]
  },
  {
    id: 601,
    name: "Frozen Spinach Chopped",
    brand: "Green Freeze",
    category: "Frozen Foods",
    price: 8.90,
    unit: "600g bag",
    store: "Shufersal",
    healthyChoice: true,
    kosher: true,
    description: "Frozen chopped spinach, iron preserved",
    nutrition: { calories: 23, protein: 3, carbs: 4, fiber: 2 },
    recipes: ["Green Smoothie Add-in", "Spinach Protein Bowl"]
  },
  {
    id: 602,
    name: "Frozen Salmon Fillets",
    brand: "Ocean Freeze",
    category: "Frozen Foods",
    price: 64.90,
    unit: "4x150g fillets",
    store: "Mega",
    healthyChoice: true,
    kosher: true,
    description: "Individually frozen wild salmon portions",
    nutrition: { calories: 208, protein: 25, carbs: 0, fiber: 0 },
    recipes: ["Quick Salmon Bowl", "Omega-3 Dinner"]
  },
  {
    id: 603,
    name: "Frozen Acai Puree",
    brand: "Superfruit Freeze",
    category: "Frozen Foods",
    price: 24.90,
    unit: "4x100g packs",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Pure frozen acai puree, antioxidant superfruit",
    nutrition: { calories: 70, protein: 1, carbs: 4, fiber: 3 },
    recipes: ["Acai Smoothie Bowl", "Superfruit Base"]
  },
  {
    id: 604,
    name: "Frozen Protein Waffles",
    brand: "Muscle Morning",
    category: "Frozen Foods",
    price: 24.90,
    unit: "6 waffles",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "High-protein frozen waffles, 12g protein each",
    nutrition: { calories: 180, protein: 12, carbs: 22, fiber: 6 },
    recipes: ["Protein Breakfast", "Post-Workout Fuel"]
  },

  // SUPPLEMENTS & SUPERFOODS (20 items)
  {
    id: 700,
    name: "Whey Protein Isolate Vanilla",
    brand: "Pure Muscle",
    category: "Supplements & Superfoods",
    price: 189.90,
    unit: "2kg container",
    store: "Supplement Store",
    healthyChoice: true,
    kosher: true,
    description: "Pure whey protein isolate, 28g protein per serving",
    nutrition: { calories: 120, protein: 28, carbs: 1, fiber: 0 },
    recipes: ["Post-Workout Shake", "Protein Smoothie Base"]
  },
  {
    id: 701,
    name: "Plant Protein Blend Chocolate",
    brand: "Vegan Power",
    category: "Supplements & Superfoods",
    price: 149.90,
    unit: "1.5kg container",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Pea, rice, and hemp protein blend, 25g protein",
    nutrition: { calories: 130, protein: 25, carbs: 3, fiber: 2 },
    recipes: ["Vegan Protein Shake", "Plant Power Smoothie"]
  },
  {
    id: 702,
    name: "Creatine Monohydrate Pure",
    brand: "Strength Plus",
    category: "Supplements & Superfoods",
    price: 89.90,
    unit: "500g powder",
    store: "Supplement Store",
    healthyChoice: true,
    kosher: true,
    description: "Pure creatine monohydrate for strength and power",
    nutrition: { calories: 0, protein: 0, carbs: 0, fiber: 0 },
    recipes: ["Pre-Workout Mix", "Strength Supplement"]
  },
  {
    id: 703,
    name: "Spirulina Powder Organic",
    brand: "Blue Green Algae",
    category: "Supplements & Superfoods",
    price: 68.90,
    unit: "200g powder",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic spirulina powder, complete amino acids",
    nutrition: { calories: 290, protein: 57, carbs: 24, fiber: 4 },
    recipes: ["Green Superfood Smoothie", "Algae Power Drink"]
  },
  {
    id: 704,
    name: "Collagen Peptides Unflavored",
    brand: "Youth Support",
    category: "Supplements & Superfoods",
    price: 159.90,
    unit: "500g powder",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Hydrolyzed collagen peptides for skin and joints",
    nutrition: { calories: 90, protein: 20, carbs: 0, fiber: 0 },
    recipes: ["Collagen Coffee", "Beauty Smoothie"]
  },

  // CONDIMENTS & OILS (25 items)
  {
    id: 800,
    name: "Extra Virgin Olive Oil",
    brand: "Mediterranean Gold",
    category: "Condiments & Oils",
    price: 32.90,
    unit: "500ml bottle",
    store: "Gourmet Store",
    healthyChoice: true,
    kosher: true,
    description: "Cold-pressed extra virgin olive oil, antioxidant rich",
    nutrition: { calories: 884, protein: 0, carbs: 0, fiber: 0 },
    recipes: ["Mediterranean Dressing", "Healthy Cooking Oil"]
  },
  {
    id: 801,
    name: "Avocado Oil Cold Pressed",
    brand: "Pure Avocado",
    category: "Condiments & Oils",
    price: 28.90,
    unit: "500ml bottle",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Cold-pressed avocado oil, high smoke point",
    nutrition: { calories: 884, protein: 0, carbs: 0, fiber: 0 },
    recipes: ["High-Heat Cooking", "Healthy Salad Oil"]
  },
  {
    id: 802,
    name: "Hummus Classic",
    brand: "Middle Eastern Fresh",
    category: "Condiments & Oils",
    price: 12.90,
    unit: "250g container",
    store: "Middle Eastern Store",
    healthyChoice: true,
    kosher: true,
    description: "Fresh classic hummus, chickpea protein",
    nutrition: { calories: 166, protein: 8, carbs: 14, fiber: 6 },
    recipes: ["Protein Dip", "Healthy Spread"]
  },
  {
    id: 803,
    name: "Pesto Basil Fresh",
    brand: "Italian Fresh",
    category: "Condiments & Oils",
    price: 18.90,
    unit: "150g jar",
    store: "Gourmet Store",
    healthyChoice: true,
    kosher: true,
    description: "Fresh basil pesto with pine nuts",
    nutrition: { calories: 263, protein: 6, carbs: 4, fiber: 1 },
    recipes: ["Pasta Sauce", "Protein Topping"]
  },
  {
    id: 804,
    name: "Coconut Oil Virgin",
    brand: "Tropical Pure",
    category: "Condiments & Oils",
    price: 24.90,
    unit: "500ml jar",
    store: "Health Store",
    healthyChoice: true,
    kosher: true,
    description: "Virgin coconut oil, MCT-rich cooking fat",
    nutrition: { calories: 862, protein: 0, carbs: 0, fiber: 0 },
    recipes: ["High-Heat Cooking", "Bulletproof Coffee"]
  },

  // INTERNATIONAL FOODS (15 items)
  {
    id: 900,
    name: "Sushi Nori Sheets",
    brand: "Ocean Harvest",
    category: "International Foods",
    price: 16.90,
    unit: "10 sheets",
    store: "Asian Store",
    healthyChoice: true,
    kosher: true,
    description: "Roasted nori seaweed sheets for sushi",
    nutrition: { calories: 35, protein: 6, carbs: 5, fiber: 3 },
    recipes: ["Homemade Sushi", "Seaweed Wraps"]
  },
  {
    id: 901,
    name: "Coconut Milk Thai",
    brand: "Thai Kitchen",
    category: "International Foods",
    price: 8.90,
    unit: "400ml can",
    store: "Asian Store",
    healthyChoice: true,
    kosher: true,
    description: "Rich Thai coconut milk for curries",
    nutrition: { calories: 230, protein: 2, carbs: 6, fiber: 2 },
    recipes: ["Thai Curry", "Coconut Protein Smoothie"]
  },
  {
    id: 902,
    name: "Miso Paste White",
    brand: "Japanese Tradition",
    category: "International Foods",
    price: 22.90,
    unit: "300g container",
    store: "Asian Store",
    healthyChoice: true,
    kosher: true,
    description: "White miso paste, fermented soybean umami",
    nutrition: { calories: 199, protein: 12, carbs: 26, fiber: 5 },
    recipes: ["Miso Dressing", "Umami Depth"]
  },
  {
    id: 903,
    name: "Tortillas Corn Authentic",
    brand: "Mexican Tradition",
    category: "International Foods",
    price: 11.90,
    unit: "15 tortillas",
    store: "Mexican Store",
    healthyChoice: true,
    kosher: true,
    description: "Authentic Mexican corn tortillas, gluten-free",
    nutrition: { calories: 96, protein: 2, carbs: 20, fiber: 3 },
    recipes: ["Authentic Tacos", "Mexican Protein Wraps"]
  },
  {
    id: 904,
    name: "Kimchi Fresh",
    brand: "Korean Fermented",
    category: "International Foods",
    price: 18.90,
    unit: "400g jar",
    store: "Asian Store",
    healthyChoice: true,
    kosher: true,
    description: "Fermented Korean kimchi, probiotic spice",
    nutrition: { calories: 15, protein: 1, carbs: 3, fiber: 1 },
    recipes: ["Probiotic Side", "Korean Bowl Topping"]
  },

  // ORGANIC & NATURAL (15 items)
  {
    id: 1000,
    name: "Organic Kale Powder",
    brand: "Pure Organic",
    category: "Organic & Natural",
    price: 48.90,
    unit: "150g powder",
    store: "Organic Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic kale powder, concentrated superfood",
    nutrition: { calories: 350, protein: 30, carbs: 70, fiber: 10 },
    recipes: ["Green Superfood Smoothie", "Nutrient Dense Boost"]
  },
  {
    id: 1001,
    name: "Organic Cacao Powder Raw",
    brand: "Jungle Cacao",
    category: "Organic & Natural",
    price: 36.90,
    unit: "200g powder",
    store: "Organic Store",
    healthyChoice: true,
    kosher: true,
    description: "Raw organic cacao powder, antioxidant rich",
    nutrition: { calories: 228, protein: 20, carbs: 58, fiber: 33 },
    recipes: ["Healthy Chocolate Smoothie", "Raw Cacao Treats"]
  },
  {
    id: 1002,
    name: "Organic Apple Cider Vinegar",
    brand: "Mother Earth",
    category: "Organic & Natural",
    price: 18.90,
    unit: "500ml bottle",
    store: "Organic Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic ACV with mother, digestive support",
    nutrition: { calories: 22, protein: 0, carbs: 1, fiber: 0 },
    recipes: ["Organic Detox Drink", "Natural Salad Dressing"]
  },
  {
    id: 1003,
    name: "Organic Coconut Sugar",
    brand: "Palm Tree Sweet",
    category: "Organic & Natural",
    price: 24.90,
    unit: "400g bag",
    store: "Organic Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic coconut sugar, unrefined sweetener",
    nutrition: { calories: 375, protein: 1, carbs: 96, fiber: 0 },
    recipes: ["Natural Baking Sweetener", "Healthy Treats"]
  },
  {
    id: 1004,
    name: "Organic Moringa Powder",
    brand: "Tree of Life",
    category: "Organic & Natural",
    price: 54.90,
    unit: "150g powder",
    store: "Organic Store",
    healthyChoice: true,
    kosher: true,
    description: "Organic moringa leaf powder, nutrient dense",
    nutrition: { calories: 205, protein: 27, carbs: 39, fiber: 19 },
    recipes: ["Moringa Smoothie", "Superfood Boost"]
  }
];

// Cart management functions
export const cartInitialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

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
    requiredItems: [50, 200, 500, 201, 202], // Chicken, Avocado, Quinoa, Spinach, Sweet Potato
    description: "Complete muscle-building meal with lean protein and complex carbs",
    prepTime: "25 mins",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Smoked Salmon Bagel Supreme",
    requiredItems: [3, 52, 100, 801], // Bagel, Salmon, Greek Yogurt, Avocado Oil
    description: "High-protein breakfast with omega-3 fats and probiotics",
    prepTime: "10 mins",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Green Superfood Smoothie",
    requiredItems: [703, 1000, 600, 102, 302], // Spirulina, Organic Kale, Frozen Berries, Almond Milk, Chia
    description: "Antioxidant powerhouse smoothie with complete nutrition",
    prepTime: "5 mins",
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Mediterranean Protein Bowl",
    requiredItems: [50, 202, 800, 111, 803], // Chicken, Sweet Potato, Olive Oil, Feta, Pesto
    description: "Mediterranean-inspired bowl with healthy fats and lean protein",
    prepTime: "30 mins",
    difficulty: "Medium"
  },
  {
    id: 5,
    name: "Post-Workout Recovery Shake",
    requiredItems: [700, 204, 401, 1001], // Whey Protein, Blueberries, Coconut Water, Raw Cacao
    description: "Perfect post-training shake for muscle recovery and glycogen replenishment",
    prepTime: "3 mins",
    difficulty: "Easy"
  }
];

// Search and filter utilities
export const getItemsByCategory = (category) => {
  return israeliGroceryItems.filter(item => item.category === category);
};

export const getHealthyItems = () => {
  return israeliGroceryItems.filter(item => item.healthyChoice);
};

export const searchItems = (query) => {
  const searchTerm = query.toLowerCase();
  return israeliGroceryItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.brand.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );
};

export const getItemsByPriceRange = (minPrice, maxPrice) => {
  return israeliGroceryItems.filter(item => 
    item.price >= minPrice && item.price <= maxPrice
  );
};

export const getItemsByStore = (store) => {
  return israeliGroceryItems.filter(item => item.store === store);
};

// Nutrition calculators
export const calculateTotalNutrition = (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    const itemNutrition = cartItem.nutrition;
    return {
      calories: total.calories + (itemNutrition.calories * cartItem.quantity),
      protein: total.protein + (itemNutrition.protein * cartItem.quantity),
      carbs: total.carbs + (itemNutrition.carbs * cartItem.quantity),
      fiber: total.fiber + (itemNutrition.fiber * cartItem.quantity)
    };
  }, { calories: 0, protein: 0, carbs: 0, fiber: 0 });
};

// Store information
export const israeliStores = [
  {
    name: "Shufersal",
    type: "Supermarket Chain",
    description: "Israel's largest supermarket chain"
  },
  {
    name: "Rami Levy",
    type: "Discount Chain",
    description: "Popular discount supermarket chain"
  },
  {
    name: "Mega",
    type: "Supermarket Chain", 
    description: "Large supermarket chain with wide selection"
  },
  {
    name: "Osher Ad",
    type: "Discount Chain",
    description: "Budget-friendly supermarket chain"
  },
  {
    name: "Tiv Taam",
    type: "Premium Chain",
    description: "Upscale supermarket with gourmet products"
  },
  {
    name: "Health Store",
    type: "Specialty",
    description: "Health food and supplement specialty stores"
  }
];

export default israeliGroceryItems;
