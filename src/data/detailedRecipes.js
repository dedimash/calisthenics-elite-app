// Comprehensive Recipe Database with Detailed Instructions
// All recipes use ingredients from the Israeli grocery database

export const recipeCategories = [
  'High Protein Meals',
  'Pre-Workout Fuel', 
  'Post-Workout Recovery',
  'Healthy Snacks & Energy Balls',
  'Power Bowls & Salads',
  'Smoothies & Shakes',
  'Breakfast & Brunch',
  'Low-Carb Options',
  'Meal Prep Masters'
];

export const comprehensiveRecipeDatabase = [
  // HIGH PROTEIN MEALS
  {
    id: 1,
    name: "Ultimate Chicken Power Bowl",
    category: "High Protein Meals",
    servings: 2,
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    calories: 520,
    protein: 45,
    carbs: 35,
    fat: 18,
    fiber: 8,
    description: "Complete muscle-building meal with lean protein, complex carbs, and healthy fats",
    ingredients: [
      { item: "Chicken Breast Fillet (Soglowek)", amount: "300g", notes: "boneless, skinless" },
      { item: "Quinoa White Organic (Sugat)", amount: "100g dry", notes: "rinsed" },
      { item: "Sweet Potatoes", amount: "200g", notes: "cubed" },
      { item: "Spinach Fresh Baby (Galil)", amount: "100g", notes: "washed" },
      { item: "Avocados Large", amount: "1 medium", notes: "ripe" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "2 tbsp", notes: "divided" },
      { item: "Broccoli Fresh", amount: "150g", notes: "cut into florets" },
      { item: "Sea Salt Himalayan Pink", amount: "1 tsp", notes: "to taste" },
      { item: "Black pepper", amount: "1/2 tsp", notes: "freshly ground" },
      { item: "Garlic", amount: "3 cloves", notes: "minced" },
      { item: "Lemons", amount: "1/2 lemon", notes: "juiced" }
    ],
    instructions: [
      "Preheat oven to 200°C (400°F). Line a baking sheet with parchment paper.",
      "Rinse quinoa in cold water until water runs clear. In a medium saucepan, bring 250ml water to boil. Add quinoa, reduce heat to low, cover and simmer for 15 minutes.",
      "Season chicken breast with salt, pepper, and 1 minced garlic clove. Heat 1 tbsp olive oil in a large skillet over medium-high heat.",
      "Cook chicken 6-7 minutes per side until internal temperature reaches 75°C (165°F). Let rest 5 minutes, then slice.",
      "Toss cubed sweet potatoes with 1/2 tbsp olive oil, salt, and pepper. Roast for 20-25 minutes until tender.",
      "Steam broccoli florets for 4-5 minutes until bright green and tender-crisp.",
      "In a small bowl, whisk remaining olive oil, lemon juice, minced garlic, salt, and pepper for dressing.",
      "Fluff quinoa with a fork. Divide between 2 bowls.",
      "Top each bowl with sliced chicken, roasted sweet potatoes, steamed broccoli, and fresh spinach.",
      "Add half an avocado to each bowl and drizzle with dressing. Serve immediately."
    ],
    tips: [
      "Meal prep tip: Cook quinoa and chicken in batches for the week",
      "For extra flavor, marinate chicken 2-4 hours in advance",
      "Sweet potatoes can be roasted ahead and reheated",
      "Add hemp seeds or pumpkin seeds for extra crunch and nutrition"
    ],
    variations: [
      "Substitute salmon for chicken for omega-3 boost",
      "Use brown rice instead of quinoa for different texture", 
      "Add cherry tomatoes and cucumber for Mediterranean twist"
    ]
  },
  
  {
    id: 2,
    name: "Mediterranean Salmon Power Plate",
    category: "High Protein Meals", 
    servings: 2,
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Medium",
    calories: 485,
    protein: 38,
    carbs: 22,
    fat: 28,
    fiber: 6,
    description: "Omega-3 rich salmon with Mediterranean vegetables and tahini dressing",
    ingredients: [
      { item: "Wild Salmon Fillet (Dagim Tivoni)", amount: "300g", notes: "skin-on, pin bones removed" },
      { item: "Cucumber Lebanese", amount: "2 medium", notes: "diced" },
      { item: "Tomatoes Cherry", amount: "200g", notes: "halved" },
      { item: "Bell Peppers Mixed", amount: "1 large", notes: "sliced" },
      { item: "Hummus Classic (Tzabar)", amount: "4 tbsp", notes: "" },
      { item: "Tahini Pure (Al Arz)", amount: "2 tbsp", notes: "" },
      { item: "Labneh 8% Fat (Tnuva)", amount: "100g", notes: "" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "3 tbsp", notes: "divided" },
      { item: "Lemons", amount: "1 whole", notes: "juiced" },
      { item: "Arugula (Rocket)", amount: "50g", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "1 tsp", notes: "" },
      { item: "Garlic", amount: "2 cloves", notes: "minced" }
    ],
    instructions: [
      "Pat salmon fillets dry and season both sides with salt and pepper. Let come to room temperature for 10 minutes.",
      "Heat 1 tbsp olive oil in a large skillet over medium-high heat. When oil shimmers, place salmon skin-side up.",
      "Cook undisturbed for 4-5 minutes until golden crust forms. Flip and cook 3-4 minutes more for medium doneness.",
      "Remove salmon from heat and let rest while preparing vegetables.",
      "In a large bowl, combine diced cucumber, cherry tomatoes, sliced bell pepper, and arugula.",
      "For tahini dressing: whisk together tahini, lemon juice, minced garlic, 2 tbsp olive oil, and salt until smooth.",
      "If dressing is too thick, add 1-2 tbsp warm water to reach desired consistency.",
      "Toss vegetables with half the tahini dressing.",
      "Divide vegetable salad between 2 plates. Add a dollop of labneh and hummus to each plate.",
      "Flake salmon into large pieces and arrange over vegetables.",
      "Drizzle remaining tahini dressing over salmon and serve immediately."
    ],
    tips: [
      "Don't move salmon once in pan - let it develop a golden crust",
      "Skin will easily peel off after cooking if desired",
      "Make extra tahini dressing - it keeps in fridge for 5 days",
      "Serve with warm pita bread for extra carbs if needed"
    ],
    variations: [
      "Use sea bass instead of salmon for milder flavor",
      "Add kalamata olives for extra Mediterranean flair",
      "Substitute Greek yogurt for labneh if unavailable"
    ]
  },

  {
    id: 3,
    name: "Turkish Protein Lentil Bowl",
    category: "High Protein Meals",
    servings: 3,
    prepTime: "10 mins", 
    cookTime: "25 mins",
    difficulty: "Easy",
    calories: 395,
    protein: 22,
    carbs: 58,
    fat: 12,
    fiber: 18,
    description: "Plant-based protein powerhouse with Middle Eastern flavors",
    ingredients: [
      { item: "Red Lentils (Sugat)", amount: "200g", notes: "rinsed" },
      { item: "Carrots Baby", amount: "150g", notes: "sliced" },
      { item: "Bell Peppers Mixed", amount: "1 large", notes: "diced" },
      { item: "Spinach Fresh Baby (Galil)", amount: "100g", notes: "" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "3 tbsp", notes: "divided" },
      { item: "Turmeric Powder Organic", amount: "1 tsp", notes: "" },
      { item: "Cumin ground", amount: "1 tsp", notes: "" },
      { item: "Tahini Pure (Al Arz)", amount: "3 tbsp", notes: "" },
      { item: "Lemons", amount: "1 whole", notes: "juiced" },
      { item: "Garlic", amount: "3 cloves", notes: "minced" },
      { item: "Onion", amount: "1 medium", notes: "diced" },
      { item: "Sea Salt Himalayan Pink", amount: "1.5 tsp", notes: "" },
      { item: "Pomegranate Seeds", amount: "100g", notes: "for garnish" }
    ],
    instructions: [
      "Heat 1 tbsp olive oil in a large pot over medium heat. Add diced onion and cook 3-4 minutes until softened.",
      "Add minced garlic, turmeric, and cumin. Cook 1 minute until fragrant.",
      "Add rinsed red lentils and 600ml water. Bring to boil, then reduce heat and simmer 15 minutes.",
      "Add sliced carrots and diced bell pepper. Cook 8-10 minutes until lentils are tender and vegetables are cooked.",
      "Stir in fresh spinach during last 2 minutes of cooking until wilted.",
      "Season with salt and pepper to taste. The consistency should be thick but not dry.",
      "For tahini sauce: whisk together tahini, lemon juice, remaining olive oil, and 2-3 tbsp warm water until smooth.",
      "Divide lentil mixture between 3 bowls.",
      "Drizzle generously with tahini sauce and garnish with pomegranate seeds.",
      "Serve warm with additional lemon wedges if desired."
    ],
    tips: [
      "Red lentils cook much faster than green or brown lentils",
      "Add more water during cooking if mixture becomes too thick",
      "Make double batch - this reheats perfectly for meal prep",
      "Pomegranate seeds add beautiful color and antioxidants"
    ],
    variations: [
      "Add diced tomatoes for extra vegetables",
      "Substitute kale for spinach for more nutrients",
      "Top with crumbled feta cheese if not keeping vegan"
    ]
  },

  // PRE-WORKOUT FUEL
  {
    id: 10,
    name: "Power-Packed Energy Smoothie",
    category: "Pre-Workout Fuel",
    servings: 1,
    prepTime: "5 mins",
    cookTime: "0 mins", 
    difficulty: "Easy",
    calories: 285,
    protein: 15,
    carbs: 45,
    fat: 8,
    fiber: 7,
    description: "Quick-digesting carbs and caffeine for explosive workout energy",
    ingredients: [
      { item: "Bananas", amount: "1 large (120g)", notes: "frozen or fresh" },
      { item: "Steel Cut Oats", amount: "30g", notes: "rolled oats work too" },
      { item: "Natural Peanut Butter", amount: "1 tbsp", notes: "" },
      { item: "Almond Milk Unsweetened (Alpro)", amount: "250ml", notes: "cold" },
      { item: "Cold Brew Coffee (Elite)", amount: "100ml", notes: "strong" },
      { item: "Raw Honey Wildflower", amount: "1 tbsp", notes: "" },
      { item: "Cinnamon ground", amount: "1/2 tsp", notes: "" },
      { item: "Vanilla extract", amount: "1/2 tsp", notes: "optional" },
      { item: "Ice cubes", amount: "5-6 cubes", notes: "for thickness" }
    ],
    instructions: [
      "Add oats to blender first and pulse until finely ground (this prevents chunks).",
      "Add cold brew coffee, almond milk, and peanut butter. Blend 30 seconds.",
      "Add banana, honey, cinnamon, and vanilla. Blend until completely smooth.",
      "Add ice cubes one at a time while blending to reach desired thickness.",
      "Taste and adjust sweetness with more honey if needed.",
      "Pour into a large glass or shaker bottle.",
      "Drink 30-45 minutes before workout for optimal energy timing."
    ],
    tips: [
      "Use frozen banana for thicker, creamier texture",
      "Prep dry ingredients in blender the night before",
      "Adjust coffee amount based on caffeine tolerance",
      "Drink immediately after blending for best texture"
    ],
    variations: [
      "Add 1 tsp MCT oil for sustained energy",
      "Use coconut milk for tropical flavor",
      "Add pinch of sea salt to enhance flavors"
    ]
  },

  {
    id: 11,
    name: "Champion's Energy Balls",
    category: "Pre-Workout Fuel",
    servings: 12,
    prepTime: "15 mins",
    cookTime: "0 mins",
    difficulty: "Easy", 
    calories: 95,
    protein: 3,
    carbs: 16,
    fat: 3,
    fiber: 2,
    description: "No-bake energy bites perfect for pre-workout fuel",
    ingredients: [
      { item: "Dates Medjool (Jordan Valley)", amount: "150g", notes: "pitted, soaked 10 mins" },
      { item: "Steel Cut Oats", amount: "100g", notes: "" },
      { item: "Raw Almonds (Nuts Factory)", amount: "60g", notes: "" },
      { item: "Natural Peanut Butter", amount: "3 tbsp", notes: "" },
      { item: "Raw Honey Wildflower", amount: "2 tbsp", notes: "" },
      { item: "Raw Cacao Powder (Navitas)", amount: "2 tbsp", notes: "" },
      { item: "Chia Seeds (Super Seed)", amount: "1 tbsp", notes: "" },
      { item: "Coconut Oil Virgin (Nutiva)", amount: "1 tbsp", notes: "melted" },
      { item: "Vanilla extract", amount: "1 tsp", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "Pinch", notes: "" }
    ],
    instructions: [
      "Soak pitted dates in warm water for 10 minutes to soften.",
      "In a food processor, pulse almonds until roughly chopped. Remove and set aside.",
      "Add oats to food processor and pulse until coarsely ground.",
      "Drain dates and add to processor with oats. Process until paste forms.",
      "Add peanut butter, honey, cacao powder, melted coconut oil, vanilla, and salt.",
      "Process until mixture holds together when pressed.",
      "Add chopped almonds and chia seeds. Pulse briefly to combine.",
      "Scoop mixture into 12 equal portions using hands or small ice cream scoop.",
      "Roll each portion into a ball using slightly damp hands.",
      "Place on parchment-lined tray and refrigerate 30 minutes to firm up.",
      "Store in airtight container in fridge for up to 1 week."
    ],
    tips: [
      "Wet hands prevent sticking when rolling balls",
      "If mixture is too sticky, add more oats gradually", 
      "Make different sizes based on your energy needs",
      "Eat 1-2 balls 30 minutes before workout"
    ],
    variations: [
      "Roll in shredded coconut for coating",
      "Add espresso powder for extra caffeine kick",
      "Use different nuts like cashews or walnuts"
    ]
  },

  // POST-WORKOUT RECOVERY
  {
    id: 20,
    name: "Ultimate Recovery Protein Shake", 
    category: "Post-Workout Recovery",
    servings: 1,
    prepTime: "3 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    calories: 380,
    protein: 35,
    carbs: 28,
    fat: 12,
    fiber: 4,
    description: "Optimal 3:1 carb to protein ratio for muscle recovery and glycogen replenishment",
    ingredients: [
      { item: "Whey Protein Isolate Vanilla (Optimum Nutrition)", amount: "1 scoop (30g)", notes: "" },
      { item: "Bananas", amount: "1 medium (100g)", notes: "frozen works best" },
      { item: "Frozen Mixed Berries", amount: "80g", notes: "strawberries, blueberries" },
      { item: "Greek Yogurt 5% Fat (Strauss)", amount: "100g", notes: "" },
      { item: "Oat Milk Barista (Oatly)", amount: "200ml", notes: "cold" },
      { item: "Coconut Water Pure (Vita Coco)", amount: "100ml", notes: "" },
      { item: "Raw Honey Wildflower", amount: "1 tbsp", notes: "" },
      { item: "Creatine Monohydrate (Creapure)", amount: "1 tsp", notes: "optional" },
      { item: "Ice cubes", amount: "4-5", notes: "" }
    ],
    instructions: [
      "Add oat milk, coconut water, and Greek yogurt to blender first (liquids at bottom).",
      "Add protein powder and blend 15 seconds to prevent clumping.",
      "Add banana, frozen berries, and honey. Blend 45 seconds until smooth.",
      "Add creatine if using, and blend 10 more seconds.",
      "Add ice cubes and blend until desired consistency is reached.",
      "Taste and adjust sweetness with more honey if needed.",
      "Pour into large shaker bottle or glass.",
      "Drink within 30 minutes post-workout for optimal recovery window."
    ],
    tips: [
      "Drink immediately after blending for best texture",
      "Use frozen fruit for thicker, creamier shake without diluting",
      "Pre-portion ingredients in freezer bags for quick blending",
      "Add more liquid if too thick, more frozen fruit if too thin"
    ],
    variations: [
      "Use plant protein powder for vegan option",
      "Add spinach for extra nutrients (you won't taste it)",
      "Substitute chocolate protein and add cacao powder"
    ]
  },

  {
    id: 21,
    name: "Recovery Protein Pancakes",
    category: "Post-Workout Recovery",
    servings: 2,
    prepTime: "10 mins",
    cookTime: "15 mins", 
    difficulty: "Medium",
    calories: 320,
    protein: 25,
    carbs: 28,
    fat: 12,
    fiber: 6,
    description: "High-protein pancakes perfect for post-workout breakfast",
    ingredients: [
      { item: "Steel Cut Oats", amount: "60g", notes: "ground into flour" },
      { item: "Whey Protein Isolate Vanilla (Optimum Nutrition)", amount: "1 scoop (30g)", notes: "" },
      { item: "Eggs Large Free Range (Meshek Tzuriel)", amount: "2 whole", notes: "" },
      { item: "Greek Yogurt 5% Fat (Strauss)", amount: "100g", notes: "" },
      { item: "Bananas", amount: "1 medium (100g)", notes: "mashed" },
      { item: "Almond Milk Unsweetened (Alpro)", amount: "100ml", notes: "" },
      { item: "Raw Honey Wildflower", amount: "2 tbsp", notes: "divided" },
      { item: "Baking powder", amount: "1 tsp", notes: "" },
      { item: "Cinnamon ground", amount: "1/2 tsp", notes: "" },
      { item: "Vanilla extract", amount: "1 tsp", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "Pinch", notes: "" },
      { item: "Coconut Oil Virgin (Nutiva)", amount: "1 tbsp", notes: "for cooking" }
    ],
    instructions: [
      "Grind oats in food processor or high-speed blender until fine flour forms.",
      "In large bowl, whisk together oat flour, protein powder, baking powder, cinnamon, and salt.",
      "In separate bowl, beat eggs, then whisk in Greek yogurt, mashed banana, almond milk, 1 tbsp honey, and vanilla.",
      "Pour wet ingredients into dry ingredients. Stir gently until just combined (don't overmix).",
      "Let batter rest 5 minutes to thicken while heating pan.",
      "Heat non-stick pan over medium-low heat. Add small amount of coconut oil.",
      "Pour 1/4 cup batter per pancake. Cook 2-3 minutes until bubbles form on surface.",
      "Flip carefully and cook 1-2 minutes more until golden brown.",
      "Keep warm in 200°F oven while cooking remaining pancakes.",
      "Serve stacked with remaining honey, fresh berries, or Greek yogurt."
    ],
    tips: [
      "Don't overmix batter - lumps are okay and make fluffier pancakes",
      "Keep heat medium-low to prevent burning due to protein powder",
      "Make batter thinner with more almond milk if too thick",
      "Freeze extras for quick post-workout meals during the week"
    ],
    variations: [
      "Add blueberries to batter for antioxidant boost",
      "Use chocolate protein and add cacao powder",
      "Top with almond butter instead of honey for more protein"
    ]
  },

  // HEALTHY SNACKS & ENERGY BALLS
  {
    id: 30,
    name: "Superfood Energy Bombs",
    category: "Healthy Snacks & Energy Balls",
    servings: 15,
    prepTime: "20 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    calories: 85,
    protein: 3,
    carbs: 12,
    fat: 4,
    fiber: 3,
    description: "Nutrient-dense energy balls packed with superfoods and healthy fats",
    ingredients: [
      { item: "Dates Medjool (Jordan Valley)", amount: "120g", notes: "pitted" },
      { item: "Raw Cashews (Nuts Factory)", amount: "80g", notes: "soaked 2 hours" },
      { item: "Raw Cacao Powder (Navitas)", amount: "2 tbsp", notes: "" },
      { item: "Chia Seeds (Super Seed)", amount: "2 tbsp", notes: "" },
      { item: "Spirulina Powder (Now Foods)", amount: "1 tsp", notes: "" },
      { item: "Coconut Oil Virgin (Nutiva)", amount: "1 tbsp", notes: "melted" },
      { item: "Maca Powder Raw (Navitas)", amount: "1 tsp", notes: "" },
      { item: "Goji Berries Dried (Navitas)", amount: "30g", notes: "chopped" },
      { item: "Vanilla extract", amount: "1 tsp", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "Pinch", notes: "" },
      { item: "Unsweetened coconut flakes", amount: "30g", notes: "for rolling" }
    ],
    instructions: [
      "Soak cashews in warm water for 2 hours until softened. Drain well.",
      "If dates are hard, soak in warm water for 10 minutes to soften. Drain.",
      "In food processor, process dates until smooth paste forms.",
      "Add drained cashews and process until combined and creamy.",
      "Add cacao powder, spirulina, maca powder, vanilla, and salt. Process until well mixed.",
      "Add melted coconut oil and process briefly to combine.",
      "Fold in chia seeds and chopped goji berries by hand.",
      "Refrigerate mixture 15 minutes to firm up for easier handling.",
      "Using slightly damp hands, roll mixture into 15 equal balls.",
      "Roll each ball in coconut flakes until coated.",
      "Place on parchment-lined tray and refrigerate 30 minutes to set.",
      "Store in airtight container in fridge for up to 10 days."
    ],
    tips: [
      "Soak cashews overnight for creamiest texture",
      "Wet hands prevent mixture from sticking when rolling",
      "Make balls smaller or larger based on your snack needs",
      "Spirulina gives subtle earthy flavor and amazing nutrition"
    ],
    variations: [
      "Roll in hemp seeds instead of coconut",
      "Add orange zest for citrus flavor", 
      "Use almonds instead of cashews for different texture"
    ]
  },

  {
    id: 31,
    name: "Mediterranean Protein Hummus",
    category: "Healthy Snacks & Energy Balls", 
    servings: 6,
    prepTime: "15 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    calories: 145,
    protein: 8,
    carbs: 12,
    fat: 8,
    fiber: 5,
    description: "Protein-boosted hummus with Mediterranean flavors",
    ingredients: [
      { item: "Chickpeas Dried (Sugat)", amount: "200g", notes: "cooked (or 2 cans)" },
      { item: "Tahini Pure (Al Arz)", amount: "60g", notes: "" },
      { item: "Greek Yogurt 5% Fat (Strauss)", amount: "100g", notes: "" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "3 tbsp", notes: "divided" },
      { item: "Lemons", amount: "1 large", notes: "juiced" },
      { item: "Garlic", amount: "3 cloves", notes: "" },
      { item: "Cumin ground", amount: "1 tsp", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "1 tsp", notes: "or to taste" },
      { item: "Paprika", amount: "1/2 tsp", notes: "plus extra for garnish" },
      { item: "Pine nuts", amount: "30g", notes: "toasted, for garnish" },
      { item: "Fresh parsley", amount: "2 tbsp", notes: "chopped" }
    ],
    instructions: [
      "If using dried chickpeas, soak overnight then cook until very tender. Drain and cool.",
      "Reserve 1/4 cup cooking liquid or water for thinning.",
      "In food processor, process garlic until minced.",
      "Add chickpeas, tahini, Greek yogurt, lemon juice, cumin, salt, and paprika.",
      "Process 2-3 minutes until very smooth and creamy.",
      "With processor running, slowly drizzle in 2 tbsp olive oil.",
      "Add reserved liquid 1 tbsp at a time until desired consistency is reached.",
      "Taste and adjust seasoning with more lemon, salt, or garlic as needed.",
      "Transfer to serving bowl and create a shallow well in center.",
      "Drizzle remaining olive oil in well and sprinkle with paprika.",
      "Garnish with toasted pine nuts and fresh parsley.",
      "Serve with cut vegetables, whole grain pita, or crackers."
    ],
    tips: [
      "For ultra-smooth hummus, peel chickpeas after cooking",
      "Greek yogurt adds extra protein and creamy texture",
      "Make 2-3 days ahead - flavors improve with time",
      "Toast pine nuts in dry pan until golden for best flavor"
    ],
    variations: [
      "Add roasted red peppers for smoky flavor",
      "Mix in sun-dried tomatoes for Italian twist",
      "Add fresh herbs like basil or cilantro"
    ]
  },

  // POWER BOWLS & SALADS
  {
    id: 40,
    name: "Green Goddess Power Bowl",
    category: "Power Bowls & Salads",
    servings: 2,
    prepTime: "15 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    calories: 425,
    protein: 18,
    carbs: 45,
    fat: 22,
    fiber: 12,
    description: "Nutrient-dense bowl packed with greens, healthy fats, and plant protein",
    ingredients: [
      { item: "Quinoa White Organic (Sugat)", amount: "100g dry", notes: "" },
      { item: "Kale Fresh (Galil)", amount: "100g", notes: "massaged" },
      { item: "Spinach Fresh Baby (Galil)", amount: "50g", notes: "" },
      { item: "Arugula (Rocket)", amount: "50g", notes: "" },
      { item: "Avocados Large", amount: "1 whole", notes: "sliced" },
      { item: "Edamame Shelled (frozen)", amount: "100g", notes: "cooked" },
      { item: "Pumpkin Seeds Raw (Super Seed)", amount: "30g", notes: "toasted" },
      { item: "Hemp Seeds", amount: "2 tbsp", notes: "" },
      { item: "Cucumber Lebanese", amount: "1 medium", notes: "diced" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "3 tbsp", notes: "" },
      { item: "Lemons", amount: "1/2 lemon", notes: "juiced" },
      { item: "Tahini Pure (Al Arz)", amount: "2 tbsp", notes: "" },
      { item: "Garlic", amount: "1 clove", notes: "minced" },
      { item: "Sea Salt Himalayan Pink", amount: "1/2 tsp", notes: "" }
    ],
    instructions: [
      "Cook quinoa according to package directions. Fluff with fork and let cool.",
      "Cook frozen edamame according to package directions, drain and cool.",
      "Toast pumpkin seeds in dry pan over medium heat for 3-4 minutes until golden.",
      "Remove thick stems from kale and chop leaves. Massage with pinch of salt for 2 minutes until softened.",
      "For green goddess dressing: whisk together olive oil, lemon juice, tahini, minced garlic, and salt until smooth.",
      "Add 2-3 tbsp water if dressing is too thick.",
      "In large bowl, combine massaged kale, spinach, and arugula.",
      "Add half the dressing and toss to coat greens.",
      "Divide dressed greens between 2 bowls.",
      "Top each bowl with quinoa, edamame, diced cucumber, and sliced avocado.",
      "Sprinkle with toasted pumpkin seeds and hemp seeds.",
      "Drizzle remaining dressing over each bowl and serve immediately."
    ],
    tips: [
      "Massaging kale breaks down tough fibers and improves texture",
      "Make extra dressing - it's great on any salad",
      "Prep components ahead but assemble just before serving",
      "Add lemon juice to avocado to prevent browning"
    ],
    variations: [
      "Add chickpeas for extra protein and fiber",
      "Include roasted sweet potato for more carbs",
      "Top with nutritional yeast for cheesy flavor"
    ]
  },

  // SMOOTHIES & SHAKES
  {
    id: 50,
    name: "Tropical Mango Protein Paradise",
    category: "Smoothies & Shakes",
    servings: 1,
    prepTime: "5 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    calories: 295,
    protein: 22,
    carbs: 35,
    fat: 8,
    fiber: 6,
    description: "Transport yourself to the tropics with this mango-coconut protein smoothie",
    ingredients: [
      { item: "Frozen Mango Chunks", amount: "150g", notes: "" },
      { item: "Plant Protein Chocolate (Vega)", amount: "1 scoop (30g)", notes: "or vanilla" },
      { item: "Coconut Milk Full Fat (Chaokoh)", amount: "100ml", notes: "" },
      { item: "Coconut Water Pure (Vita Coco)", amount: "150ml", notes: "" },
      { item: "Spinach Fresh Baby (Galil)", amount: "30g", notes: "you won't taste it" },
      { item: "Chia Seeds (Super Seed)", amount: "1 tbsp", notes: "" },
      { item: "Raw Honey Wildflower", amount: "1 tbsp", notes: "optional" },
      { item: "Lime", amount: "1/2 lime", notes: "juiced" },
      { item: "Fresh ginger", amount: "1cm piece", notes: "peeled" },
      { item: "Ice cubes", amount: "6-8", notes: "" }
    ],
    instructions: [
      "Add coconut water and coconut milk to blender first.",
      "Add protein powder and blend 15 seconds to prevent clumps.",
      "Add frozen mango, spinach, ginger, and lime juice.",
      "Blend on high speed for 60 seconds until completely smooth.",
      "Add chia seeds and honey if using. Blend 10 more seconds.",
      "Add ice cubes and blend until desired thickness is reached.",
      "Taste and adjust sweetness with honey or more lime as needed.",
      "Pour into large glass and enjoy immediately.",
      "Garnish with coconut flakes or fresh mint if desired."
    ],
    tips: [
      "Frozen mango eliminates need for ice and creates creamier texture",
      "Spinach adds nutrients without affecting tropical flavor",
      "Let chia seeds sit 2 minutes before drinking for gel-like texture",
      "Use coconut protein powder for even more tropical flavor"
    ],
    variations: [
      "Add pineapple for extra tropical sweetness",
      "Use frozen banana instead of mango for different flavor",
      "Include collagen peptides for skin and joint benefits"
    ]
  },

  {
    id: 51,
    name: "Chocolate Peanut Butter Protein Heaven",
    category: "Smoothies & Shakes",
    servings: 1,
    prepTime: "5 mins", 
    cookTime: "0 mins",
    difficulty: "Easy",
    calories: 385,
    protein: 28,
    carbs: 32,
    fat: 18,
    fiber: 8,
    description: "Indulgent chocolate PB smoothie that tastes like dessert but fuels your goals",
    ingredients: [
      { item: "Whey Protein Isolate Vanilla (Optimum Nutrition)", amount: "1 scoop (30g)", notes: "or chocolate" },
      { item: "Natural Peanut Butter", amount: "2 tbsp", notes: "" },
      { item: "Raw Cacao Powder (Navitas)", amount: "1 tbsp", notes: "" },
      { item: "Bananas", amount: "1/2 medium (50g)", notes: "frozen" },
      { item: "Almond Milk Unsweetened (Alpro)", amount: "250ml", notes: "cold" },
      { item: "Greek Yogurt 5% Fat (Strauss)", amount: "100g", notes: "" },
      { item: "Flax Seeds Ground (Super Seed)", amount: "1 tbsp", notes: "" },
      { item: "Raw Honey Wildflower", amount: "1 tbsp", notes: "or maple syrup" },
      { item: "Vanilla extract", amount: "1/2 tsp", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "Pinch", notes: "enhances chocolate flavor" },
      { item: "Ice cubes", amount: "5-6", notes: "" }
    ],
    instructions: [
      "Add almond milk, Greek yogurt, and peanut butter to blender first.",
      "Add protein powder and blend 20 seconds to prevent lumps.",
      "Add frozen banana, cacao powder, ground flax, honey, vanilla, and salt.",
      "Blend on high speed for 45-60 seconds until completely smooth and creamy.",
      "Add ice cubes and blend until reaching desired thickness.",
      "Taste and adjust sweetness with more honey if needed.",
      "Pour into large glass or shaker bottle.",
      "Serve immediately for best texture and flavor.",
      "Optional: top with cacao nibs or crushed peanuts for crunch."
    ],
    tips: [
      "Use frozen banana for thickness without diluting flavor",
      "Natural peanut butter gives better flavor than processed versions", 
      "Add pinch of salt to enhance chocolate flavor",
      "Blend longer for ultra-smooth, creamy texture"
    ],
    variations: [
      "Add espresso powder for mocha flavor",
      "Use almond butter instead of peanut butter",
      "Include spinach for hidden vegetables (you won't taste it)"
    ]
  },

  // BREAKFAST & BRUNCH  
  {
    id: 60,
    name: "Champion's Overnight Oats",
    category: "Breakfast & Brunch",
    servings: 1,
    prepTime: "10 mins",
    cookTime: "0 mins (overnight)",
    difficulty: "Easy",
    calories: 385,
    protein: 18,
    carbs: 52,
    fat: 14,
    fiber: 12,
    description: "Make-ahead breakfast that's ready when you wake up",
    ingredients: [
      { item: "Steel Cut Oats", amount: "50g", notes: "rolled oats work too" },
      { item: "Greek Yogurt 5% Fat (Strauss)", amount: "100g", notes: "" },
      { item: "Almond Milk Unsweetened (Alpro)", amount: "150ml", notes: "" },
      { item: "Chia Seeds (Super Seed)", amount: "1 tbsp", notes: "" },
      { item: "Natural Peanut Butter", amount: "1 tbsp", notes: "" },
      { item: "Raw Honey Wildflower", amount: "1 tbsp", notes: "" },
      { item: "Vanilla extract", amount: "1/2 tsp", notes: "" },
      { item: "Cinnamon ground", amount: "1/2 tsp", notes: "" },
      { item: "Bananas", amount: "1/2 medium", notes: "sliced, for topping" },
      { item: "Frozen Mixed Berries", amount: "60g", notes: "thawed, for topping" },
      { item: "Walnuts Halves (Nuts Factory)", amount: "15g", notes: "chopped, for topping" }
    ],
    instructions: [
      "In a mason jar or container, combine oats, chia seeds, and cinnamon.",
      "In separate bowl, whisk together Greek yogurt, almond milk, peanut butter, honey, and vanilla until smooth.",
      "Pour wet mixture over oats and stir well to combine.",
      "Make sure all oats are submerged in liquid.",
      "Cover container and refrigerate overnight (minimum 4 hours).",
      "In the morning, stir oats and check consistency. Add more milk if too thick.",
      "Top with sliced banana, thawed berries, and chopped walnuts.",
      "Eat cold or warm in microwave for 30 seconds if preferred.",
      "Enjoy straight from jar or transfer to bowl."
    ],
    tips: [
      "Make 3-4 jars at once for meal prep",
      "Oats will keep in fridge for up to 5 days",
      "Add toppings just before eating to maintain texture", 
      "Experiment with different nut butter and fruit combinations"
    ],
    variations: [
      "Chocolate version: add cacao powder and use chocolate protein",
      "Tropical: use coconut milk, mango, and coconut flakes",
      "Apple pie: add grated apple, extra cinnamon, and chopped almonds"
    ]
  },

  // LOW-CARB OPTIONS
  {
    id: 70,
    name: "Keto Avocado Egg Boats",
    category: "Low-Carb Options",
    servings: 2,
    prepTime: "10 mins",
    cookTime: "15 mins",
    difficulty: "Easy", 
    calories: 285,
    protein: 14,
    carbs: 8,
    fat: 24,
    fiber: 7,
    description: "High-fat, low-carb breakfast that keeps you satisfied for hours",
    ingredients: [
      { item: "Avocados Large", amount: "1 whole", notes: "ripe but firm" },
      { item: "Eggs Large Free Range (Meshek Tzuriel)", amount: "2 small", notes: "" },
      { item: "Sea Salt Himalayan Pink", amount: "1/2 tsp", notes: "" },
      { item: "Black pepper", amount: "1/4 tsp", notes: "freshly ground" },
      { item: "Paprika", amount: "1/4 tsp", notes: "" },
      { item: "Garlic powder", amount: "1/4 tsp", notes: "" },
      { item: "Fresh chives", amount: "1 tbsp", notes: "chopped" },
      { item: "Cherry tomatoes", amount: "60g", notes: "diced, optional" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "1 tsp", notes: "for drizzling" }
    ],
    instructions: [
      "Preheat oven to 200°C (400°F).",
      "Cut avocado in half lengthwise and remove pit.",
      "Scoop out about 2 tbsp flesh from center of each half to create larger well.",
      "Place avocado halves cut-side up in baking dish. They should sit stable.",
      "Season wells with salt, pepper, paprika, and garlic powder.",
      "Crack one egg into each avocado well. Eggs may overflow slightly - this is normal.",
      "Bake 12-15 minutes until egg whites are set but yolks are still runny.",
      "For firmer yolks, bake 2-3 minutes longer.",
      "Remove from oven and let cool 2-3 minutes.",
      "Top with diced tomatoes, fresh chives, and drizzle with olive oil.",
      "Serve immediately with fork and spoon to scoop out avocado with egg."
    ],
    tips: [
      "Choose avocados that are ripe but still firm to hold shape",
      "Crack eggs into small bowl first, then pour into avocado",
      "If avocado won't sit stable, trim small slice from bottom",
      "Use leftover avocado flesh for smoothies or guacamole"
    ],
    variations: [
      "Add crumbled feta cheese before baking",
      "Top with hot sauce or sriracha for spice",
      "Include crispy bacon bits for extra fat and flavor"
    ]
  },

  // MEAL PREP MASTERS
  {
    id: 80,
    name: "Weekly Meal Prep Protein Bowls",
    category: "Meal Prep Masters",
    servings: 5,
    prepTime: "30 mins",
    cookTime: "45 mins",
    difficulty: "Medium",
    calories: 445,
    protein: 32,
    carbs: 38,
    fat: 18,
    fiber: 8,
    description: "Make 5 days worth of perfectly balanced meals in one prep session",
    ingredients: [
      { item: "Chicken Breast Fillet (Soglowek)", amount: "750g", notes: "cut into portions" },
      { item: "Brown Rice Organic (Sugat)", amount: "250g dry", notes: "" },
      { item: "Sweet Potatoes", amount: "500g", notes: "cubed" },
      { item: "Broccoli Fresh", amount: "400g", notes: "cut into florets" },
      { item: "Bell Peppers Mixed", amount: "2 large", notes: "sliced" },
      { item: "Carrots Baby", amount: "300g", notes: "whole or halved" },
      { item: "Extra Virgin Olive Oil (Partanna)", amount: "4 tbsp", notes: "divided" },
      { item: "Sea Salt Himalayan Pink", amount: "2 tsp", notes: "divided" },
      { item: "Black pepper", amount: "1 tsp", notes: "" },
      { item: "Garlic powder", amount: "1 tsp", notes: "" },
      { item: "Paprika", amount: "1 tsp", notes: "" },
      { item: "Dried oregano", amount: "1 tsp", notes: "" },
      { item: "Lemons", amount: "2 whole", notes: "juiced" }
    ],
    instructions: [
      "Preheat oven to 200°C (400°F). Line 2 large baking sheets with parchment.",
      "Cook brown rice according to package directions. Let cool and divide among 5 containers.",
      "Season chicken with salt, pepper, garlic powder, and paprika. Let marinate 15 minutes.",
      "Toss sweet potatoes with 1 tbsp olive oil and salt. Spread on one baking sheet.",
      "Toss carrots and bell peppers with 1 tbsp olive oil and salt. Add to second baking sheet.",
      "Roast vegetables 25-30 minutes until tender and lightly caramelized.",
      "Meanwhile, heat 1 tbsp olive oil in large skillet over medium-high heat.",
      "Cook chicken 6-7 minutes per side until internal temperature reaches 75°C (165°F).",
      "Let chicken rest 5 minutes, then slice into portions.",
      "Steam broccoli for 4-5 minutes until bright green and tender-crisp.",
      "For dressing: whisk remaining olive oil, lemon juice, oregano, salt, and pepper.",
      "Divide chicken, roasted vegetables, and steamed broccoli among 5 meal prep containers.",
      "Store dressing separately and add just before eating.",
      "Refrigerate for up to 5 days. Reheat as needed."
    ],
    tips: [
      "Let all components cool completely before assembling containers",
      "Store wet ingredients like dressing separately to prevent soggy food",
      "Reheat gently in microwave with splash of water to retain moisture",
      "Double recipe if you want to prep for multiple people"
    ],
    variations: [
      "Use salmon or turkey instead of chicken",
      "Substitute quinoa for brown rice for complete protein",
      "Add different vegetables based on seasonal availability"
    ]
  }
];

// Helper function to get recipes by category
export const getRecipesByCategory = (category) => {
  if (!category) return comprehensiveRecipeDatabase;
  return comprehensiveRecipeDatabase.filter(recipe => recipe.category === category);
};

// Helper function to get recipes by ingredient
export const getRecipesByIngredient = (ingredientName) => {
  return comprehensiveRecipeDatabase.filter(recipe => 
    recipe.ingredients.some(ingredient => 
      ingredient.item.toLowerCase().includes(ingredientName.toLowerCase())
    )
  );
};

// Helper function to search recipes
export const searchRecipes = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return comprehensiveRecipeDatabase.filter(recipe => 
    recipe.name.toLowerCase().includes(term) ||
    recipe.description.toLowerCase().includes(term) ||
    recipe.category.toLowerCase().includes(term) ||
    recipe.ingredients.some(ingredient => 
      ingredient.item.toLowerCase().includes(term)
    )
  );
};
