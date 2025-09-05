export const mealCategories = ["Breakfast", "Lunch", "Dinner", "Low Calorie", "Dessert", "Vegan"];

export const mealPlans = [
  // Breakfast (12 plans) - 300-600 kcal
  {
    id: 1,
    name: "Protein Oats with Berries",
    category: "Breakfast",
    kosherStatus: "Milchig",
    calories: 420, protein: 28, carbs: 55, fat: 12,
    servings: 1, prepTime: "8 mins", difficulty: "Easy",
    description: "Creamy oats with whey and mixed berries for muscle recovery.",
    ingredients: ["rolled oats", "milk", "vanilla protein powder", "mixed berries", "honey", "chia seeds", "almonds"],
    steps: [
      "Cook 1/2 cup oats with 1 cup milk until creamy (5 minutes)",
      "Remove from heat and stir in 1 scoop protein powder",
      "Top with 1/2 cup berries, 1 tbsp chia seeds, and chopped almonds",
      "Drizzle with honey to taste"
    ],
    tags: ["high-protein", "quick", "muscle-building"]
  },
  {
    id: 2,
    name: "Egg White Scramble Power Bowl",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 380, protein: 32, carbs: 25, fat: 18,
    servings: 1, prepTime: "12 mins", difficulty: "Easy",
    description: "High-protein scramble with vegetables and avocado.",
    ingredients: ["egg whites", "whole eggs", "spinach", "bell peppers", "onion", "avocado", "olive oil", "salt", "pepper"],
    steps: [
      "Heat 1 tbsp olive oil in non-stick pan",
      "Sauté diced peppers and onions for 3 minutes",
      "Add spinach and cook until wilted",
      "Pour in 4 egg whites + 1 whole egg, scramble until set",
      "Season with salt and pepper, serve with sliced avocado"
    ],
    tags: ["high-protein", "low-carb", "vegetarian"]
  },
  {
    id: 3,
    name: "Greek Yogurt Parfait Supreme",
    category: "Breakfast",
    kosherStatus: "Milchig",
    calories: 450, protein: 35, carbs: 45, fat: 15,
    servings: 1, prepTime: "5 mins", difficulty: "Easy",
    description: "Layered parfait with protein powder boost and nuts.",
    ingredients: ["Greek yogurt", "protein powder", "granola", "mixed berries", "walnuts", "honey", "cinnamon"],
    steps: [
      "Mix 1 cup Greek yogurt with 1/2 scoop vanilla protein powder",
      "Layer half the yogurt in a glass",
      "Add berries and granola layer",
      "Top with remaining yogurt, nuts, and honey drizzle",
      "Sprinkle with cinnamon"
    ],
    tags: ["high-protein", "quick", "probiotics"]
  },
  {
    id: 4,
    name: "Smoked Salmon Bagel",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 520, protein: 30, carbs: 50, fat: 22,
    servings: 1, prepTime: "10 mins", difficulty: "Easy",
    description: "Everything bagel with smoked salmon and dairy-free cream cheese.",
    ingredients: ["everything bagel", "smoked salmon", "dairy-free cream cheese", "capers", "red onion", "tomato", "dill"],
    steps: [
      "Toast everything bagel until golden",
      "Spread dairy-free cream cheese on both halves",
      "Layer smoked salmon on bottom half",
      "Add thin tomato slices and red onion",
      "Top with capers and fresh dill, close sandwich"
    ],
    tags: ["omega-3", "high-protein", "gourmet"]
  },
  {
    id: 5,
    name: "Breakfast Quinoa Bowl",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 400, protein: 16, carbs: 60, fat: 14,
    servings: 1, prepTime: "15 mins", difficulty: "Medium",
    description: "Warm quinoa breakfast bowl with fruits and nuts.",
    ingredients: ["quinoa", "almond milk", "banana", "blueberries", "almonds", "maple syrup", "cinnamon", "vanilla"],
    steps: [
      "Cook 1/2 cup quinoa in almond milk with cinnamon and vanilla",
      "Simmer until creamy and tender (12 minutes)",
      "Top with sliced banana and blueberries",
      "Add chopped almonds and maple syrup drizzle"
    ],
    tags: ["gluten-free", "complete-protein", "warming"]
  },
  {
    id: 6,
    name: "Power Smoothie Bowl",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 380, protein: 25, carbs: 48, fat: 12,
    servings: 1, prepTime: "8 mins", difficulty: "Easy",
    description: "Thick smoothie bowl topped with superfoods.",
    ingredients: ["frozen banana", "protein powder", "spinach", "almond milk", "chia seeds", "coconut flakes", "berries"],
    steps: [
      "Blend frozen banana, spinach, and protein powder with minimal almond milk",
      "Blend until thick smoothie consistency",
      "Pour into bowl and top with chia seeds",
      "Add fresh berries and coconut flakes"
    ],
    tags: ["antioxidants", "high-protein", "energy-boost"]
  },
  {
    id: 7,
    name: "Overnight Chia Pudding",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 350, protein: 15, carbs: 35, fat: 18,
    servings: 1, prepTime: "5 mins prep", difficulty: "Easy",
    description: "Make-ahead chia pudding with fruit layers.",
    ingredients: ["chia seeds", "coconut milk", "maple syrup", "vanilla", "mango", "kiwi", "coconut flakes"],
    steps: [
      "Mix 3 tbsp chia seeds with 1 cup coconut milk",
      "Add maple syrup and vanilla, stir well",
      "Refrigerate overnight until thick",
      "Layer with diced mango and kiwi, top with coconut"
    ],
    tags: ["make-ahead", "omega-3", "fiber-rich"]
  },
  {
    id: 8,
    name: "Cottage Cheese Pancakes",
    category: "Breakfast",
    kosherStatus: "Milchig",
    calories: 480, protein: 35, carbs: 40, fat: 20,
    servings: 2, prepTime: "15 mins", difficulty: "Medium",
    description: "Fluffy protein-packed pancakes with cottage cheese.",
    ingredients: ["cottage cheese", "eggs", "oat flour", "baking powder", "vanilla", "berries", "honey"],
    steps: [
      "Blend cottage cheese, eggs, oat flour, and baking powder",
      "Add vanilla and mix until smooth batter forms",
      "Cook pancakes in non-stick pan until golden",
      "Serve with fresh berries and honey drizzle"
    ],
    tags: ["high-protein", "fluffy", "weekend-treat"]
  },
  {
    id: 9,
    name: "Avocado Toast Deluxe",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 420, protein: 18, carbs: 35, fat: 28,
    servings: 1, prepTime: "10 mins", difficulty: "Easy",
    description: "Elevated avocado toast with seeds and microgreens.",
    ingredients: ["sourdough bread", "avocado", "hemp seeds", "pumpkin seeds", "microgreens", "lemon", "sea salt", "red pepper flakes"],
    steps: [
      "Toast sourdough bread until crispy",
      "Mash avocado with lemon juice and sea salt",
      "Spread on toast and top with seeds",
      "Garnish with microgreens and red pepper flakes"
    ],
    tags: ["healthy-fats", "fiber-rich", "trendy"]
  },
  {
    id: 10,
    name: "Breakfast Burrito Bowl",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 510, protein: 28, carbs: 45, fat: 25,
    servings: 1, prepTime: "18 mins", difficulty: "Medium",
    description: "Hearty breakfast bowl with scrambled eggs and beans.",
    ingredients: ["eggs", "black beans", "bell peppers", "onion", "avocado", "salsa", "cilantro", "lime", "cumin"],
    steps: [
      "Sauté peppers and onions until soft",
      "Add warmed black beans with cumin",
      "Scramble eggs and add to pan",
      "Serve in bowl topped with avocado, salsa, and cilantro"
    ],
    tags: ["filling", "mexican-inspired", "complete-meal"]
  },
  {
    id: 11,
    name: "Steel Cut Oats with Nuts",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 390, protein: 14, carbs: 55, fat: 16,
    servings: 1, prepTime: "25 mins", difficulty: "Medium",
    description: "Hearty steel cut oats with mixed nuts and dried fruit.",
    ingredients: ["steel cut oats", "almond milk", "walnuts", "pecans", "dried cranberries", "cinnamon", "maple syrup"],
    steps: [
      "Toast steel cut oats in dry pan for 2 minutes",
      "Add almond milk and simmer 20 minutes, stirring occasionally",
      "Stir in cinnamon and maple syrup",
      "Top with chopped nuts and cranberries"
    ],
    tags: ["slow-cooked", "hearty", "warming"]
  },
  {
    id: 12,
    name: "Breakfast Quinoa Salad",
    category: "Breakfast",
    kosherStatus: "Pareve",
    calories: 440, protein: 18, carbs: 58, fat: 16,
    servings: 1, prepTime: "20 mins", difficulty: "Medium",
    description: "Cold quinoa salad with fresh herbs and vegetables.",
    ingredients: ["quinoa", "cucumber", "tomatoes", "parsley", "mint", "lemon", "olive oil", "pomegranate seeds"],
    steps: [
      "Cook quinoa and let cool completely",
      "Dice cucumber and tomatoes finely",
      "Chop fresh herbs and mix with quinoa",
      "Dress with lemon juice and olive oil, top with pomegranate"
    ],
    tags: ["refreshing", "mediterranean", "make-ahead"]
  },

  // Lunch (12 plans) - 450-750 kcal
  {
    id: 13,
    name: "Grilled Chicken Power Salad",
    category: "Lunch",
    kosherStatus: "Fleishig",
    calories: 520, protein: 45, carbs: 25, fat: 28,
    servings: 1, prepTime: "20 mins", difficulty: "Medium",
    description: "Protein-packed salad with grilled chicken and mixed vegetables.",
    ingredients: ["chicken breast", "mixed greens", "quinoa", "cherry tomatoes", "cucumber", "avocado", "olive oil", "lemon", "herbs"],
    steps: [
      "Season and grill chicken breast until cooked through",
      "Cook quinoa according to package directions",
      "Chop vegetables and prepare mixed greens",
      "Slice chicken and arrange over salad with quinoa",
      "Drizzle with olive oil and lemon dressing"
    ],
    tags: ["high-protein", "balanced", "filling"]
  },
  {
    id: 14,
    name: "Mediterranean Chickpea Bowl",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 480, protein: 18, carbs: 65, fat: 18,
    servings: 1, prepTime: "15 mins", difficulty: "Easy",
    description: "Fresh Mediterranean bowl with chickpeas and vegetables.",
    ingredients: ["chickpeas", "cucumber", "tomatoes", "red onion", "olives", "tahini", "olive oil", "lemon", "oregano"],
    steps: [
      "Drain and rinse chickpeas",
      "Dice cucumber, tomatoes, and red onion",
      "Combine vegetables with chickpeas and olives",
      "Make tahini dressing with lemon and olive oil",
      "Season with oregano and black pepper"
    ],
    tags: ["mediterranean", "fiber-rich", "fresh"]
  },
  {
    id: 15,
    name: "Tuna Nicoise Bowl",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 450, protein: 35, carbs: 30, fat: 22,
    servings: 1, prepTime: "18 mins", difficulty: "Medium",
    description: "French-inspired tuna bowl with vegetables and eggs.",
    ingredients: ["tuna", "hard-boiled eggs", "green beans", "potatoes", "tomatoes", "olives", "capers", "olive oil", "vinegar"],
    steps: [
      "Boil small potatoes until tender, then halve",
      "Steam green beans until crisp-tender",
      "Arrange tuna, eggs, vegetables in bowl",
      "Add olives and capers",
      "Drizzle with olive oil and vinegar dressing"
    ],
    tags: ["french-classic", "omega-3", "elegant"]
  },
  {
    id: 16,
    name: "Turkey and Avocado Wrap",
    category: "Lunch",
    kosherStatus: "Fleishig",
    calories: 510, protein: 32, carbs: 45, fat: 24,
    servings: 1, prepTime: "10 mins", difficulty: "Easy",
    description: "Lean turkey wrap with fresh vegetables and avocado.",
    ingredients: ["whole wheat tortilla", "sliced turkey", "avocado", "lettuce", "tomato", "cucumber", "sprouts", "mustard"],
    steps: [
      "Lay tortilla flat and spread with mustard",
      "Layer turkey slices in center",
      "Add lettuce, tomato, cucumber, and sprouts",
      "Top with sliced avocado",
      "Roll tightly and slice in half"
    ],
    tags: ["portable", "lean-protein", "fresh"]
  },
  {
    id: 17,
    name: "Quinoa Stuffed Bell Peppers",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 420, protein: 16, carbs: 68, fat: 12,
    servings: 2, prepTime: "35 mins", difficulty: "Medium",
    description: "Colorful bell peppers stuffed with quinoa and vegetables.",
    ingredients: ["bell peppers", "quinoa", "onion", "zucchini", "tomatoes", "herbs", "vegetable broth", "nutritional yeast"],
    steps: [
      "Hollow out bell peppers and set aside",
      "Cook quinoa in vegetable broth",
      "Sauté onion and zucchini until soft",
      "Mix quinoa with vegetables and herbs",
      "Stuff peppers and bake at 375°F for 25 minutes"
    ],
    tags: ["vegetarian", "colorful", "complete-protein"]
  },
  {
    id: 18,
    name: "Asian Lettuce Wraps",
    category: "Lunch",
    kosherStatus: "Fleishig",
    calories: 380, protein: 28, carbs: 18, fat: 22,
    servings: 1, prepTime: "15 mins", difficulty: "Easy",
    description: "Light and fresh chicken lettuce wraps with Asian flavors.",
    ingredients: ["ground chicken", "butter lettuce", "water chestnuts", "green onions", "ginger", "garlic", "soy sauce", "sesame oil"],
    steps: [
      "Cook ground chicken with ginger and garlic",
      "Add diced water chestnuts and green onions",
      "Season with soy sauce and sesame oil",
      "Serve mixture in lettuce cups",
      "Garnish with additional green onions"
    ],
    tags: ["low-carb", "asian-fusion", "light"]
  },
  {
    id: 19,
    name: "Lentil Power Bowl",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 460, protein: 22, carbs: 72, fat: 12,
    servings: 1, prepTime: "25 mins", difficulty: "Medium",
    description: "Nutrient-dense bowl with lentils and roasted vegetables.",
    ingredients: ["red lentils", "sweet potato", "broccoli", "tahini", "lemon", "cumin", "paprika", "olive oil"],
    steps: [
      "Cook red lentils until tender",
      "Roast cubed sweet potato and broccoli with spices",
      "Make tahini dressing with lemon and water",
      "Layer lentils and vegetables in bowl",
      "Drizzle with tahini dressing"
    ],
    tags: ["plant-protein", "fiber-rich", "colorful"]
  },
  {
    id: 20,
    name: "Salmon Poke Bowl",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 540, protein: 38, carbs: 45, fat: 24,
    servings: 1, prepTime: "20 mins", difficulty: "Medium",
    description: "Fresh salmon poke bowl with vegetables and brown rice.",
    ingredients: ["salmon fillet", "brown rice", "cucumber", "edamame", "avocado", "seaweed", "sesame seeds", "soy sauce"],
    steps: [
      "Cook brown rice according to package directions",
      "Cube fresh salmon and marinate in soy sauce",
      "Prepare cucumber, edamame, and avocado",
      "Arrange all ingredients over rice",
      "Sprinkle with sesame seeds and seaweed"
    ],
    tags: ["omega-3", "fresh", "japanese-inspired"]
  },
  {
    id: 21,
    name: "Black Bean and Sweet Potato Bowl",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 450, protein: 18, carbs: 78, fat: 12,
    servings: 1, prepTime: "30 mins", difficulty: "Medium",
    description: "Hearty bowl with roasted sweet potatoes and black beans.",
    ingredients: ["sweet potato", "black beans", "corn", "bell pepper", "cilantro", "lime", "cumin", "chili powder"],
    steps: [
      "Roast cubed sweet potato with spices until tender",
      "Warm black beans with cumin",
      "Char corn and dice bell pepper",
      "Combine all ingredients in bowl",
      "Finish with cilantro and lime juice"
    ],
    tags: ["fiber-rich", "southwest", "plant-based"]
  },
  {
    id: 22,
    name: "Greek Chicken Gyros",
    category: "Lunch",
    kosherStatus: "Fleishig",
    calories: 520, protein: 42, carbs: 48, fat: 20,
    servings: 1, prepTime: "25 mins", difficulty: "Medium",
    description: "Greek-style chicken with vegetables in pita bread.",
    ingredients: ["chicken thigh", "pita bread", "cucumber", "tomato", "red onion", "tzatziki", "oregano", "lemon"],
    steps: [
      "Marinate chicken in lemon, oregano, and olive oil",
      "Grill chicken until cooked through, then slice",
      "Warm pita bread lightly",
      "Fill pita with chicken and vegetables",
      "Top with tzatziki sauce"
    ],
    tags: ["mediterranean", "flavorful", "traditional"]
  },
  {
    id: 23,
    name: "Cauliflower Rice Stir-Fry",
    category: "Lunch",
    kosherStatus: "Pareve",
    calories: 320, protein: 12, carbs: 25, fat: 18,
    servings: 1, prepTime: "15 mins", difficulty: "Easy",
    description: "Low-carb stir-fry with cauliflower rice and vegetables.",
    ingredients: ["cauliflower", "mixed vegetables", "eggs", "soy sauce", "sesame oil", "ginger", "garlic", "green onions"],
    steps: [
      "Rice cauliflower in food processor",
      "Scramble eggs and set aside",
      "Stir-fry vegetables with ginger and garlic",
      "Add cauliflower rice and cook until tender",
      "Mix in eggs and season with soy sauce"
    ],
    tags: ["low-carb", "quick", "vegetable-forward"]
  },
  {
    id: 24,
    name: "Moroccan Chicken Tagine",
    category: "Lunch",
    kosherStatus: "Fleishig",
    calories: 580, protein: 40, carbs: 55, fat: 22,
    servings: 2, prepTime: "45 mins", difficulty: "Hard",
    description: "Aromatic Moroccan-style chicken with apricots and spices.",
    ingredients: ["chicken thighs", "onion", "dried apricots", "chickpeas", "cinnamon", "ginger", "turmeric", "almonds"],
    steps: [
      "Brown chicken thighs in heavy pot",
      "Add onions and spices, cook until fragrant",
      "Add apricots, chickpeas, and broth",
      "Simmer covered for 30 minutes until tender",
      "Garnish with toasted almonds"
    ],
    tags: ["exotic", "warming", "aromatic"]
  },

  // Dinner (12 plans) - 500-850 kcal
  {
    id: 25,
    name: "Herb-Crusted Salmon",
    category: "Dinner",
    kosherStatus: "Pareve",
    calories: 520, protein: 42, carbs: 28, fat: 26,
    servings: 1, prepTime: "25 mins", difficulty: "Medium",
    description: "Perfectly baked salmon with herb crust and roasted vegetables.",
    ingredients: ["salmon fillet", "herbs", "panko breadcrumbs", "asparagus", "sweet potato", "olive oil", "lemon", "garlic"],
    steps: [
      "Mix herbs with panko and olive oil for crust",
      "Top salmon with herb mixture",
      "Roast salmon and vegetables at 400°F for 18 minutes",
      "Finish with lemon juice and serve immediately"
    ],
    tags: ["omega-3", "elegant", "healthy"]
  },
  {
    id: 26,
    name: "Grass-Fed Beef Stir-Fry",
    category: "Dinner",
    kosherStatus: "Fleishig",
    calories: 580, protein: 45, carbs: 35, fat: 28,
    servings: 1, prepTime: "20 mins", difficulty: "Medium",
    description: "Quick beef stir-fry with fresh vegetables and brown rice.",
    ingredients: ["beef sirloin", "brown rice", "broccoli", "bell peppers", "snap peas", "ginger", "garlic", "soy sauce"],
    steps: [
      "Cook brown rice according to package directions",
      "Slice beef thinly against the grain",
      "Stir-fry beef until browned, remove from pan",
      "Cook vegetables until crisp-tender",
      "Return beef to pan, add sauce, and serve over rice"
    ],
    tags: ["high-protein", "quick", "balanced"]
  },
  {
    id: 27,
    name: "Stuffed Portobello Mushrooms",
    category: "Dinner",
    kosherStatus: "Milchig",
    calories: 420, protein: 22, carbs: 35, fat: 24,
    servings: 2, prepTime: "30 mins", difficulty: "Medium",
    description: "Meaty portobello caps stuffed with quinoa and cheese.",
    ingredients: ["portobello mushrooms", "quinoa", "spinach", "sun-dried tomatoes", "goat cheese", "pine nuts", "herbs"],
    steps: [
      "Remove mushroom stems and scrape out gills",
      "Cook quinoa and mix with spinach and tomatoes",
      "Stuff mushrooms with quinoa mixture",
      "Top with goat cheese and pine nuts",
      "Bake at 375°F for 20 minutes until tender"
    ],
    tags: ["vegetarian", "umami-rich", "satisfying"]
  },
  {
    id: 28,
    name: "Mediterranean Cod with Olives",
    category: "Dinner",
    kosherStatus: "Pareve",
    calories: 450, protein: 38, carbs: 25, fat: 22,
    servings: 1, prepTime: "25 mins", difficulty: "Medium",
    description: "Flaky cod with Mediterranean vegetables and olives.",
    ingredients: ["cod fillet", "cherry tomatoes", "olives", "zucchini", "onion", "olive oil", "oregano", "lemon"],
    steps: [
      "Sauté onion and zucchini until soft",
      "Add tomatoes and olives, cook briefly",
      "Nestle cod in vegetables and season",
      "Cover and simmer until fish flakes easily",
      "Finish with lemon and fresh oregano"
    ],
    tags: ["mediterranean", "light", "flavorful"]
  },
  {
    id: 29,
    name: "Turkey Meatball Marinara",
    category: "Dinner",
    kosherStatus: "Fleishig",
    calories: 520, protein: 40, carbs: 45, fat: 20,
    servings: 2, prepTime: "35 mins", difficulty: "Medium",
    description: "Lean turkey meatballs in rich marinara sauce with pasta.",
    ingredients: ["ground turkey", "whole wheat pasta", "marinara sauce", "onion", "garlic", "herbs", "parmesan", "egg"],
    steps: [
      "Mix ground turkey with herbs, egg, and minced garlic",
      "Form into meatballs and brown in pan",
      "Simmer meatballs in marinara sauce",
      "Cook pasta according to package directions",
      "Serve meatballs over pasta with cheese"
    ],
    tags: ["comfort-food", "lean-protein", "family-friendly"]
  },
  {
    id: 30,
    name: "Roasted Vegetable Buddha Bowl",
    category: "Dinner",
    kosherStatus: "Pareve",
    calories: 480, protein: 18, carbs: 68, fat: 18,
    servings: 1, prepTime: "40 mins", difficulty: "Easy",
    description: "Colorful roasted vegetables with tahini dressing over grains.",
    ingredients: ["Brussels sprouts", "carrots", "chickpeas", "quinoa", "tahini", "lemon", "maple syrup", "sesame seeds"],
    steps: [
      "Roast halved Brussels sprouts and carrots at 425°F",
      "Add chickpeas to vegetables for last 15 minutes",
      "Cook quinoa separately",
      "Make tahini dressing with lemon and maple syrup",
      "Arrange everything in bowl and drizzle with dressing"
    ],
    tags: ["plant-based", "colorful", "nutrient-dense"]
  },
  {
    id: 31,
    name: "Chicken Shawarma Bowl",
    category: "Dinner",
    kosherStatus: "Fleishig",
    calories: 540, protein: 42, carbs: 38, fat: 24,
    servings: 1, prepTime: "30 mins", difficulty: "Medium",
    description: "Middle Eastern spiced chicken with vegetables and rice.",
    ingredients: ["chicken thighs", "basmati rice", "cucumber", "tomato", "red onion", "tahini", "sumac", "cumin"],
    steps: [
      "Marinate chicken in Middle Eastern spices",
      "Grill chicken until charred and cooked through",
      "Cook basmati rice with aromatics",
      "Prepare fresh vegetable salad",
      "Slice chicken and serve over rice with vegetables"
    ],
    tags: ["middle-eastern", "spiced", "authentic"]
  },
  {
    id: 32,
    name: "Lemon Herb Chicken Thighs",
    category: "Dinner",
    kosherStatus: "Fleishig",
    calories: 560, protein: 45, carbs: 25, fat: 32,
    servings: 2, prepTime: "45 mins", difficulty: "Medium",
    description: "Juicy chicken thighs with lemon, herbs, and roasted potatoes.",
    ingredients: ["chicken thighs", "baby potatoes", "rosemary", "thyme", "lemon", "garlic", "olive oil", "white wine"],
    steps: [
      "Season chicken thighs with herbs and garlic",
      "Sear skin-side down until crispy",
      "Add potatoes and lemon to pan",
      "Deglaze with white wine and roast at 375°F",
      "Cook until chicken reaches 165°F internal temp"
    ],
    tags: ["crispy-skin", "one-pan", "herbaceous"]
  },
  {
    id: 33,
    name: "Eggplant Parmesan Stack",
    category: "Dinner",
    kosherStatus: "Milchig",
    calories: 490, protein: 25, carbs: 45, fat: 26,
    servings: 2, prepTime: "50 mins", difficulty: "Hard",
    description: "Layered eggplant with marinara and melted cheese.",
    ingredients: ["eggplant", "marinara sauce", "mozzarella", "parmesan", "basil", "breadcrumbs", "eggs", "flour"],
    steps: [
      "Slice eggplant and salt to remove bitterness",
      "Bread eggplant slices with flour, egg, and breadcrumbs",
      "Fry until golden and drain on paper towels",
      "Layer with sauce and cheese in baking dish",
      "Bake until bubbly and golden on top"
    ],
    tags: ["italian-classic", "cheesy", "comfort-food"]
  },
  {
    id: 34,
    name: "Asian Glazed Tofu Steaks",
    category: "Dinner",
    kosherStatus: "Pareve",
    calories: 420, protein: 22, carbs: 48, fat: 16,
    servings: 1, prepTime: "25 mins", difficulty: "Medium",
    description: "Thick-cut tofu with sweet and savory Asian glaze.",
    ingredients: ["extra-firm tofu", "soy sauce", "maple syrup", "rice vinegar", "ginger", "garlic", "sesame oil", "bok choy"],
    steps: [
      "Press tofu and cut into thick steaks",
      "Make glaze with soy sauce, maple syrup, and aromatics",
      "Pan-fry tofu until golden on both sides",
      "Brush with glaze and cook until caramelized",
      "Serve with sautéed bok choy"
    ],
    tags: ["vegan", "protein-rich", "asian-fusion"]
  },
  {
    id: 35,
    name: "Moroccan Lamb Tagine",
    category: "Dinner",
    kosherStatus: "Fleishig",
    calories: 620, protein: 38, carbs: 42, fat: 32,
    servings: 3, prepTime: "2 hours", difficulty: "Hard",
    description: "Slow-cooked lamb with apricots, almonds, and warming spices.",
    ingredients: ["lamb shoulder", "onions", "dried apricots", "almonds", "cinnamon", "ginger", "saffron", "couscous"],
    steps: [
      "Brown lamb pieces in heavy pot",
      "Add onions and spices, cook until fragrant",
      "Add liquid and simmer covered for 1.5 hours",
      "Add apricots in last 30 minutes",
      "Serve over couscous with toasted almonds"
    ],
    tags: ["exotic", "slow-cooked", "aromatic"]
  },
  {
    id: 36,
    name: "Stuffed Bell Pepper Boats",
    category: "Dinner",
    kosherStatus: "Fleishig",
    calories: 460, protein: 32, carbs: 35, fat: 22,
    servings: 2, prepTime: "45 mins", difficulty: "Medium",
    description: "Bell peppers stuffed with seasoned ground beef and rice.",
    ingredients: ["bell peppers", "ground beef", "brown rice", "onion", "tomato sauce", "herbs", "cheese", "garlic"],
    steps: [
      "Hollow out bell peppers and blanch briefly",
      "Brown ground beef with onions and garlic",
      "Mix meat with cooked rice and tomato sauce",
      "Stuff peppers with mixture and top with cheese",
      "Bake covered at 350°F for 35 minutes"
    ],
    tags: ["stuffed", "complete-meal", "comfort-food"]
  },

  // Low Calorie (10 plans) - 250-450 kcal
  {
    id: 37,
    name: "Zucchini Noodle Primavera",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 280, protein: 12, carbs: 20, fat: 18,
    servings: 1, prepTime: "15 mins", difficulty: "Easy",
    description: "Light zucchini noodles with fresh vegetables and herbs.",
    ingredients: ["zucchini", "cherry tomatoes", "bell pepper", "onion", "garlic", "olive oil", "basil", "pine nuts"],
    steps: [
      "Spiralize zucchini into noodle shapes",
      "Sauté garlic and onion until fragrant",
      "Add bell pepper and tomatoes, cook briefly",
      "Toss with zucchini noodles and fresh basil",
      "Top with toasted pine nuts"
    ],
    tags: ["low-carb", "vegetable-forward", "light"]
  },
  {
    id: 38,
    name: "Cucumber Gazpacho",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 120, protein: 4, carbs: 18, fat: 8,
    servings: 2, prepTime: "20 mins", difficulty: "Easy",
    description: "Refreshing cold soup perfect for hot days.",
    ingredients: ["cucumber", "celery", "green bell pepper", "herbs", "vegetable broth", "lemon", "olive oil"],
    steps: [
      "Roughly chop cucumber, celery, and pepper",
      "Blend with herbs and broth until smooth",
      "Chill in refrigerator for at least 2 hours",
      "Adjust seasoning with lemon and salt",
      "Serve cold with herb garnish"
    ],
    tags: ["refreshing", "cold-soup", "hydrating"]
  },
  {
    id: 39,
    name: "Cauliflower Steaks",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 180, protein: 8, carbs: 15, fat: 12,
    servings: 2, prepTime: "25 mins", difficulty: "Easy",
    description: "Thick-cut roasted cauliflower with herbs and spices.",
    ingredients: ["cauliflower", "olive oil", "turmeric", "cumin", "paprika", "garlic powder", "lemon", "parsley"],
    steps: [
      "Cut cauliflower into thick slices from center",
      "Brush with olive oil and season with spices",
      "Roast at 425°F for 20 minutes until golden",
      "Flip once during cooking for even browning",
      "Finish with lemon juice and fresh parsley"
    ],
    tags: ["vegetarian", "roasted", "spiced"]
  },
  {
    id: 40,
    name: "Asian Lettuce Cups",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 160, protein: 8, carbs: 12, fat: 10,
    servings: 1, prepTime: "12 mins", difficulty: "Easy",
    description: "Light and crunchy lettuce cups with seasoned vegetables.",
    ingredients: ["butter lettuce", "mushrooms", "water chestnuts", "carrots", "ginger", "soy sauce", "sesame oil"],
    steps: [
      "Separate lettuce leaves and wash gently",
      "Dice mushrooms, water chestnuts, and carrots",
      "Sauté vegetables with ginger until tender",
      "Season with soy sauce and sesame oil",
      "Serve mixture in lettuce cups"
    ],
    tags: ["asian-inspired", "crunchy", "light"]
  },
  {
    id: 41,
    name: "Tomato Basil Caprese",
    category: "Low Calorie",
    kosherStatus: "Milchig",
    calories: 220, protein: 12, carbs: 18, fat: 14,
    servings: 1, prepTime: "10 mins", difficulty: "Easy",
    description: "Simple tomato salad with fresh mozzarella and basil.",
    ingredients: ["tomatoes", "fresh mozzarella", "basil", "balsamic vinegar", "olive oil", "salt", "pepper"],
    steps: [
      "Slice tomatoes and mozzarella into rounds",
      "Arrange alternating on plate with basil",
      "Drizzle with olive oil and balsamic vinegar",
      "Season with salt and freshly ground pepper",
      "Let sit 10 minutes for flavors to meld"
    ],
    tags: ["caprese-style", "fresh", "simple"]
  },
  {
    id: 42,
    name: "Shiitake Mushroom Soup",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 140, protein: 6, carbs: 12, fat: 8,
    servings: 2, prepTime: "20 mins", difficulty: "Easy",
    description: "Savory mushroom soup with Asian aromatics.",
    ingredients: ["shiitake mushrooms", "vegetable broth", "ginger", "garlic", "soy sauce", "green onions", "sesame oil"],
    steps: [
      "Slice shiitake mushrooms and remove stems",
      "Sauté ginger and garlic until fragrant",
      "Add mushrooms and cook until tender",
      "Pour in broth and simmer 10 minutes",
      "Finish with soy sauce, sesame oil, and green onions"
    ],
    tags: ["umami-rich", "warming", "asian-inspired"]
  },
  {
    id: 43,
    name: "Cucumber Mint Water",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 25, protein: 1, carbs: 6, fat: 0,
    servings: 4, prepTime: "5 mins", difficulty: "Easy",
    description: "Refreshing infused water with cucumber and mint.",
    ingredients: ["cucumber", "fresh mint", "water", "lime", "ice"],
    steps: [
      "Slice cucumber into thin rounds",
      "Muddle mint leaves gently to release oils",
      "Add cucumber and mint to water pitcher",
      "Add lime slices and ice",
      "Refrigerate for at least 1 hour before serving"
    ],
    tags: ["hydrating", "refreshing", "detox"]
  },
  {
    id: 44,
    name: "Roasted Beet and Arugula Salad",
    category: "Low Calorie",
    kosherStatus: "Milchig",
    calories: 190, protein: 8, carbs: 22, fat: 9,
    servings: 1, prepTime: "45 mins", difficulty: "Medium",
    description: "Earthy roasted beets with peppery arugula and goat cheese.",
    ingredients: ["baby beets", "arugula", "walnuts", "goat cheese", "balsamic vinegar", "olive oil", "honey"],
    steps: [
      "Wrap beets in foil and roast at 400°F for 40 minutes",
      "Let cool, then peel and slice beets",
      "Toast walnuts lightly in dry pan",
      "Arrange arugula with beets and cheese",
      "Drizzle with honey-balsamic dressing"
    ],
    tags: ["earthy", "colorful", "nutrient-dense"]
  },
  {
    id: 45,
    name: "Kelp Noodle Salad",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 150, protein: 8, carbs: 18, fat: 6,
    servings: 1, prepTime: "15 mins", difficulty: "Easy",
    description: "Asian-style salad with kelp noodles and vegetables.",
    ingredients: ["kelp noodles", "cucumber", "carrots", "edamame", "sesame seeds", "rice vinegar", "soy sauce"],
    steps: [
      "Rinse kelp noodles and drain well",
      "Julienne cucumber and carrots",
      "Mix vegetables with noodles and edamame",
      "Dress with rice vinegar and soy sauce",
      "Garnish with sesame seeds"
    ],
    tags: ["asian-style", "crunchy", "mineral-rich"]
  },
  {
    id: 46,
    name: "Stuffed Zucchini Boats",
    category: "Low Calorie",
    kosherStatus: "Pareve",
    calories: 160, protein: 8, carbs: 15, fat: 8,
    servings: 2, prepTime: "25 mins", difficulty: "Medium",
    description: "Hollowed zucchini filled with herbs and vegetables.",
    ingredients: ["zucchini", "tomatoes", "onion", "herbs", "nutritional yeast", "olive oil", "garlic"],
    steps: [
      "Halve zucchini lengthwise and scoop out center",
      "Dice zucchini flesh with tomatoes and onion",
      "Sauté mixture with garlic and herbs",
      "Fill zucchini shells with mixture",
      "Bake at 375°F for 15 minutes until tender"
    ],
    tags: ["stuffed", "vegetable-forward", "light"]
  },

  // Dessert (10 plans) - 150-350 kcal
  {
    id: 47,
    name: "Chocolate Avocado Mousse",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 180, protein: 4, carbs: 22, fat: 12,
    servings: 2, prepTime: "15 mins", difficulty: "Easy",
    description: "Rich and creamy chocolate mousse made with avocado.",
    ingredients: ["avocado", "cocoa powder", "maple syrup", "vanilla", "coconut milk", "dark chocolate chips"],
    steps: [
      "Blend ripe avocado until completely smooth",
      "Add cocoa powder, maple syrup, and vanilla",
      "Slowly add coconut milk until creamy",
      "Fold in melted dark chocolate chips",
      "Chill for at least 2 hours before serving"
    ],
    tags: ["healthy-fats", "dairy-free", "decadent"]
  },
  {
    id: 48,
    name: "Chia Seed Pudding Parfait",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 220, protein: 8, carbs: 25, fat: 12,
    servings: 1, prepTime: "10 mins", difficulty: "Easy",
    description: "Layered chia pudding with fruits and nuts.",
    ingredients: ["chia seeds", "coconut milk", "honey", "vanilla", "berries", "coconut flakes", "almonds"],
    steps: [
      "Mix chia seeds with coconut milk and honey",
      "Add vanilla and let sit 5 minutes, stir again",
      "Refrigerate overnight until thick",
      "Layer in glass with berries and coconut",
      "Top with toasted almonds"
    ],
    tags: ["make-ahead", "omega-3", "textural"]
  },
  {
    id: 49,
    name: "Baked Cinnamon Apples",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 160, protein: 2, carbs: 35, fat: 4,
    servings: 2, prepTime: "30 mins", difficulty: "Easy",
    description: "Warm baked apples with cinnamon and walnuts.",
    ingredients: ["apples", "cinnamon", "walnuts", "honey", "coconut oil", "vanilla", "raisins"],
    steps: [
      "Core apples and score skin around middle",
      "Mix chopped walnuts with honey and cinnamon",
      "Stuff apple centers with nut mixture",
      "Drizzle with coconut oil and vanilla",
      "Bake at 350°F for 25 minutes until tender"
    ],
    tags: ["warming", "naturally-sweet", "comforting"]
  },
  {
    id: 50,
    name: "Coconut Macaroons",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 120, protein: 2, carbs: 12, fat: 8,
    servings: 12, prepTime: "20 mins", difficulty: "Medium",
    description: "Chewy coconut cookies with dark chocolate drizzle.",
    ingredients: ["shredded coconut", "egg whites", "honey", "vanilla", "almond extract", "dark chocolate"],
    steps: [
      "Whip egg whites to soft peaks",
      "Fold in coconut, honey, and extracts",
      "Form into mounds on parchment paper",
      "Bake at 325°F for 15 minutes until golden",
      "Drizzle with melted dark chocolate when cool"
    ],
    tags: ["gluten-free", "coconut", "bite-sized"]
  },
  {
    id: 51,
    name: "Frozen Banana Nice Cream",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 140, protein: 3, carbs: 32, fat: 2,
    servings: 2, prepTime: "10 mins", difficulty: "Easy",
    description: "Creamy banana-based ice cream with natural sweetness.",
    ingredients: ["frozen bananas", "almond milk", "vanilla", "cinnamon", "cocoa powder", "berries"],
    steps: [
      "Blend frozen bananas until creamy",
      "Add small amount of almond milk if needed",
      "Mix in vanilla and cinnamon",
      "Swirl in cocoa powder for chocolate version",
      "Serve immediately or freeze for firmer texture"
    ],
    tags: ["dairy-free", "naturally-sweet", "cooling"]
  },
  {
    id: 52,
    name: "Date and Nut Energy Balls",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 95, protein: 3, carbs: 12, fat: 5,
    servings: 12, prepTime: "15 mins", difficulty: "Easy",
    description: "No-bake energy balls with dates, nuts, and seeds.",
    ingredients: ["dates", "almonds", "walnuts", "chia seeds", "coconut flakes", "vanilla", "sea salt"],
    steps: [
      "Soak dates in warm water until soft",
      "Process nuts until roughly chopped",
      "Add dates and pulse until sticky paste forms",
      "Mix in chia seeds, coconut, and vanilla",
      "Roll into balls and chill until firm"
    ],
    tags: ["no-bake", "energy-boosting", "portable"]
  },
  {
    id: 53,
    name: "Greek Yogurt Berry Bark",
    category: "Dessert",
    kosherStatus: "Milchig",
    calories: 85, protein: 6, carbs: 12, fat: 2,
    servings: 8, prepTime: "15 mins", difficulty: "Easy",
    description: "Frozen yogurt bark with berries and honey.",
    ingredients: ["Greek yogurt", "honey", "mixed berries", "granola", "coconut flakes", "vanilla"],
    steps: [
      "Mix Greek yogurt with honey and vanilla",
      "Spread on parchment-lined baking sheet",
      "Top with berries, granola, and coconut",
      "Freeze for at least 3 hours until solid",
      "Break into pieces and serve immediately"
    ],
    tags: ["frozen-treat", "protein-rich", "refreshing"]
  },
  {
    id: 54,
    name: "Almond Flour Cookies",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 110, protein: 4, carbs: 8, fat: 8,
    servings: 18, prepTime: "25 mins", difficulty: "Medium",
    description: "Gluten-free cookies made with almond flour.",
    ingredients: ["almond flour", "coconut oil", "maple syrup", "vanilla", "baking soda", "salt", "dark chocolate chips"],
    steps: [
      "Mix dry ingredients in large bowl",
      "Combine wet ingredients separately",
      "Fold wet into dry until dough forms",
      "Stir in chocolate chips",
      "Bake at 350°F for 10-12 minutes until golden"
    ],
    tags: ["gluten-free", "nutty", "crispy"]
  },
  {
    id: 55,
    name: "Poached Pears in Red Wine",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 180, protein: 1, carbs: 35, fat: 0,
    servings: 4, prepTime: "45 mins", difficulty: "Medium",
    description: "Elegant poached pears in spiced red wine.",
    ingredients: ["pears", "red wine", "honey", "cinnamon stick", "star anise", "orange peel", "vanilla bean"],
    steps: [
      "Peel pears leaving stems intact",
      "Combine wine with honey and spices in pot",
      "Simmer pears in wine mixture for 30 minutes",
      "Turn pears occasionally for even color",
      "Reduce poaching liquid to syrup and serve over pears"
    ],
    tags: ["elegant", "wine-poached", "aromatic"]
  },
  {
    id: 56,
    name: "Raw Chocolate Truffles",
    category: "Dessert",
    kosherStatus: "Pareve",
    calories: 75, protein: 2, carbs: 8, fat: 5,
    servings: 16, prepTime: "20 mins", difficulty: "Medium",
    description: "Rich raw chocolate truffles with coconut coating.",
    ingredients: ["cashews", "dates", "cocoa powder", "coconut oil", "vanilla", "sea salt", "coconut flakes"],
    steps: [
      "Soak cashews until soft, then drain",
      "Process cashews with dates until smooth paste",
      "Add cocoa, coconut oil, vanilla, and salt",
      "Roll mixture into small balls",
      "Roll in coconut flakes and chill until firm"
    ],
    tags: ["raw", "rich", "no-bake"]
  },

  // Vegan (10 plans) - 300-700 kcal
  {
    id: 57,
    name: "Quinoa Buddha Bowl",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 520, protein: 18, carbs: 78, fat: 18,
    servings: 1, prepTime: "30 mins", difficulty: "Medium",
    description: "Colorful bowl with quinoa, roasted vegetables, and tahini.",
    ingredients: ["quinoa", "sweet potato", "kale", "chickpeas", "avocado", "tahini", "lemon", "maple syrup"],
    steps: [
      "Cook quinoa in vegetable broth",
      "Roast cubed sweet potato until caramelized",
      "Massage kale with lemon juice until tender",
      "Warm chickpeas with spices",
      "Arrange all in bowl with tahini dressing"
    ],
    tags: ["complete-protein", "colorful", "nutrient-dense"]
  },
  {
    id: 58,
    name: "Lentil Walnut Bolognese",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 480, protein: 22, carbs: 65, fat: 16,
    servings: 2, prepTime: "35 mins", difficulty: "Medium",
    description: "Hearty plant-based bolognese with lentils and walnuts.",
    ingredients: ["green lentils", "walnuts", "carrots", "celery", "onion", "garlic", "tomatoes", "herbs", "pasta"],
    steps: [
      "Cook lentils until tender but firm",
      "Finely chop walnuts in food processor",
      "Sauté vegetables until soft",
      "Add lentils, walnuts, and tomatoes",
      "Simmer 20 minutes and serve over pasta"
    ],
    tags: ["protein-rich", "hearty", "italian-inspired"]
  },
  {
    id: 59,
    name: "Chickpea Curry",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 420, protein: 16, carbs: 58, fat: 14,
    servings: 2, prepTime: "25 mins", difficulty: "Medium",
    description: "Creamy coconut chickpea curry with aromatic spices.",
    ingredients: ["chickpeas", "coconut milk", "onion", "ginger", "garlic", "curry powder", "turmeric", "spinach"],
    steps: [
      "Sauté onion, ginger, and garlic until fragrant",
      "Add spices and cook until aromatic",
      "Add chickpeas and coconut milk",
      "Simmer until thickened",
      "Stir in spinach just before serving"
    ],
    tags: ["curry", "creamy", "warming"]
  },
  {
    id: 60,
    name: "Raw Zucchini Lasagna",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 320, protein: 14, carbs: 25, fat: 20,
    servings: 4, prepTime: "45 mins", difficulty: "Hard",
    description: "Raw lasagna with zucchini noodles and cashew cheese.",
    ingredients: ["zucchini", "cashews", "nutritional yeast", "lemon", "basil", "tomatoes", "pine nuts", "garlic"],
    steps: [
      "Slice zucchini into thin lengthwise strips",
      "Blend cashews with water, lemon, and nutritional yeast",
      "Make marinara with fresh tomatoes and basil",
      "Layer zucchini with cashew cheese and sauce",
      "Top with pine nuts and fresh herbs"
    ],
    tags: ["raw", "layered", "cashew-cheese"]
  },
  {
    id: 61,
    name: "Black Bean Quinoa Burgers",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 380, protein: 16, carbs: 55, fat: 12,
    servings: 4, prepTime: "30 mins", difficulty: "Medium",
    description: "Hearty plant-based burgers with black beans and quinoa.",
    ingredients: ["black beans", "quinoa", "onion", "garlic", "cumin", "chili powder", "oats", "flax eggs"],
    steps: [
      "Cook quinoa and let cool",
      "Mash black beans leaving some texture",
      "Sauté onion and garlic until soft",
      "Mix all ingredients and form patties",
      "Pan-fry until crispy on both sides"
    ],
    tags: ["burger", "protein-packed", "satisfying"]
  },
  {
    id: 62,
    name: "Coconut Rice with Mango",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 340, protein: 6, carbs: 68, fat: 8,
    servings: 2, prepTime: "25 mins", difficulty: "Easy",
    description: "Sweet coconut rice topped with fresh mango.",
    ingredients: ["jasmine rice", "coconut milk", "maple syrup", "vanilla", "mango", "coconut flakes", "lime"],
    steps: [
      "Cook rice in coconut milk until tender",
      "Stir in maple syrup and vanilla",
      "Let cool to room temperature",
      "Top with diced mango and coconut flakes",
      "Finish with lime zest"
    ],
    tags: ["tropical", "sweet", "cooling"]
  },
  {
    id: 63,
    name: "Stuffed Acorn Squash",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 420, protein: 12, carbs: 78, fat: 14,
    servings: 2, prepTime: "60 mins", difficulty: "Medium",
    description: "Roasted acorn squash filled with wild rice and cranberries.",
    ingredients: ["acorn squash", "wild rice", "cranberries", "pecans", "onion", "celery", "sage", "maple syrup"],
    steps: [
      "Halve acorn squash and roast cut-side down",
      "Cook wild rice until tender",
      "Sauté onion and celery until soft",
      "Mix rice with vegetables, cranberries, and pecans",
      "Stuff squash halves and bake until heated through"
    ],
    tags: ["autumn", "stuffed", "festive"]
  },
  {
    id: 64,
    name: "Green Smoothie Bowl",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 280, protein: 8, carbs: 52, fat: 8,
    servings: 1, prepTime: "10 mins", difficulty: "Easy",
    description: "Nutrient-packed green smoothie bowl with toppings.",
    ingredients: ["spinach", "banana", "mango", "coconut water", "chia seeds", "hemp hearts", "coconut flakes"],
    steps: [
      "Blend spinach, banana, and mango until smooth",
      "Add coconut water for desired consistency",
      "Pour into bowl and arrange toppings",
      "Sprinkle with chia seeds and hemp hearts",
      "Add coconut flakes for texture"
    ],
    tags: ["green", "nutrient-dense", "energizing"]
  },
  {
    id: 65,
    name: "Mediterranean Hummus Bowl",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 450, protein: 18, carbs: 58, fat: 18,
    servings: 1, prepTime: "15 mins", difficulty: "Easy",
    description: "Fresh Mediterranean bowl with homemade hummus.",
    ingredients: ["chickpeas", "tahini", "lemon", "garlic", "cucumber", "tomatoes", "olives", "pita bread"],
    steps: [
      "Blend chickpeas with tahini, lemon, and garlic",
      "Adjust consistency with water or aquafaba",
      "Dice cucumber and tomatoes",
      "Spread hummus in bowl and top with vegetables",
      "Serve with warm pita bread"
    ],
    tags: ["mediterranean", "fresh", "protein-rich"]
  },
  {
    id: 66,
    name: "Mushroom and Barley Risotto",
    category: "Vegan",
    kosherStatus: "Pareve",
    calories: 380, protein: 12, carbs: 68, fat: 10,
    servings: 2, prepTime: "40 mins", difficulty: "Medium",
    description: "Creamy barley risotto with mixed mushrooms.",
    ingredients: ["pearl barley", "mixed mushrooms", "onion", "garlic", "vegetable broth", "nutritional yeast", "herbs"],
    steps: [
      "Sauté onion and garlic until translucent",
      "Add barley and toast briefly",
      "Gradually add warm broth, stirring frequently",
      "Cook mushrooms separately until golden",
      "Fold mushrooms into barley with nutritional yeast"
    ],
    tags: ["creamy", "umami", "comforting"]
  }
];