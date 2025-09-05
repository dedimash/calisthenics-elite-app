import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { User, Lock, Trophy, Play, CheckCircle, Clock, Target, Star, Medal, Crown, X, ThumbsUp, ThumbsDown, Minus, Plus, ShoppingCart } from 'lucide-react';

// Component imports
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import WorkoutRatingModal from './components/WorkoutRatingModal';
import WorkoutDetailsModal from './components/WorkoutDetailsModal';
import SkillDetailsModal from './components/SkillDetailsModal';
import RecipeDetailsModal from './components/RecipeDetailsModal';
import MealPlanDetailsModal from './components/MealPlanDetailsModal';
import DetailedRecipeModal from './components/DetailedRecipeModal';

// NEW: Import the search components
import SearchBar from './components/grocery/SearchBar';
import RecipeSearchBar from './components/grocery/RecipeSearchBar';

// Data imports - UPDATED to use new comprehensive data
import { mealPlans, mealCategories } from './data/mealPlans';
import { dailyWorkoutsByLevel } from './data/workouts';
import { 
  israeliGroceryItems, 
  groceryCategories, 
  israeliStores,
  cartInitialState, 
  addToCart, 
  removeFromCart, 
  updateCartQuantity, 
  suggestedRecipes,
  searchItems,
  getItemsByCategory,
  getHealthyItems,
  getItemsByStore,
  calculateTotalNutrition
} from './data/israeliGroceryComplete';
import { 
  fitnessRecipes,
  recipeCategories, 
  searchRecipes,
  getRecipesByCategory,
  getRecipesByDifficulty,
  getRecipesByTag,
  getRecipesByPrepTime,
  getRecipesByNutritionGoal,
  getRecommendedRecipes
} from './data/fitnessRecipes';

// Comprehensive Skills Tree (24 skills with progression)
const skillsTree = [
  // Foundation Skills (0-50 points)
  {
    id: 1,
    name: "Frog Pose",
    category: "Foundation",
    difficulty: 1,
    requiredPoints: 0,
    pointValue: 10,
    requiredReps: 30,
    holdTime: "30 seconds",
    learningTime: "1-2 weeks",
    description: "Master the foundation of calisthenics balance",
    instructions: [
      "Start in a squat position with feet wide apart",
      "Place hands on the ground between your legs",
      "Lean forward and rest your knees on your upper arms",
      "Gradually shift weight forward until toes lift slightly",
      "Hold the position while maintaining balance"
    ],
    tips: "Focus on finding your balance point. Start with short holds and gradually increase time.",
    prerequisites: [],
    unlocks: [2, 3]
  },
  {
    id: 2,
    name: "Crow Pose",
    category: "Foundation",
    difficulty: 2,
    requiredPoints: 10,
    pointValue: 15,
    requiredReps: 20,
    holdTime: "20 seconds",
    learningTime: "2-6 weeks",
    description: "Advance from frog pose with elevated balance",
    instructions: [
      "Start in frog pose position",
      "Place hands firmly on ground, fingers spread wide",
      "Bend elbows slightly and rest shins on upper arms",
      "Shift weight forward and lift both feet off ground",
      "Hold with toes tucked, maintaining core engagement"
    ],
    tips: "Keep elbows close to body. Look forward, not down. Practice on a soft surface initially.",
    prerequisites: [1],
    unlocks: [4, 5]
  },
  {
    id: 3,
    name: "Wall Handstand",
    category: "Foundation",
    difficulty: 2,
    requiredPoints: 10,
    pointValue: 20,
    requiredReps: 15,
    holdTime: "60 seconds",
    learningTime: "2-4 weeks",
    description: "Build shoulder strength and handstand awareness",
    instructions: [
      "Stand arm's length from wall",
      "Place hands on ground, walk feet up wall",
      "Keep arms straight and core engaged",
      "Hold position with chest facing wall",
      "Exit by walking feet down carefully"
    ],
    tips: "Start with shorter holds. Keep fingers spread for better balance. Don't hold your breath.",
    prerequisites: [1],
    unlocks: [6, 7]
  },
  {
    id: 4,
    name: "L-Sit Progression",
    category: "Core Strength",
    difficulty: 3,
    requiredPoints: 25,
    pointValue: 25,
    requiredReps: 10,
    holdTime: "15 seconds",
    learningTime: "3-8 weeks",
    description: "Ultimate core and shoulder strength builder",
    instructions: [
      "Sit on ground with legs straight, hands beside hips",
      "Press hands down and lift your entire body up",
      "Keep legs straight and parallel to ground",
      "Hold position with shoulders down and back",
      "Start with knees bent if too difficult"
    ],
    tips: "Begin with foot-assisted version. Focus on shoulder depression. Pike flexibility helps a lot.",
    prerequisites: [2],
    unlocks: [8, 9]
  },
  {
    id: 5,
    name: "Pistol Squat Progression",
    category: "Single Leg Strength",
    difficulty: 3,
    requiredPoints: 25,
    pointValue: 30,
    requiredReps: 8,
    holdTime: "N/A",
    learningTime: "4-12 weeks",
    description: "Single leg squat requiring strength, balance, and flexibility",
    instructions: [
      "Stand on one leg, extend other leg forward",
      "Keep extended leg straight and off the ground",
      "Lower down into deep squat on standing leg",
      "Keep torso upright and arms forward for balance",
      "Push through heel to return to standing"
    ],
    tips: "Start with assisted version using TRX or holding something. Ankle mobility is crucial.",
    prerequisites: [2],
    unlocks: [10, 11]
  },

  // Intermediate Skills (50-150 points)
  {
    id: 6,
    name: "Freestanding Handstand",
    category: "Balance",
    difficulty: 4,
    requiredPoints: 50,
    pointValue: 40,
    requiredReps: 5,
    holdTime: "30 seconds",
    learningTime: "3-12 months",
    description: "The ultimate display of balance and strength",
    instructions: [
      "Start in downward dog position",
      "Walk feet closer to hands",
      "Kick up gently, finding balance point",
      "Keep arms straight, core tight",
      "Look at hands, not forward"
    ],
    tips: "Practice hollow body holds. Master wall handstand first. Be patient - this takes time!",
    prerequisites: [3],
    unlocks: [12, 13]
  },
  {
    id: 7,
    name: "Handstand Push-Up",
    category: "Push Strength",
    difficulty: 4,
    requiredPoints: 50,
    pointValue: 35,
    requiredReps: 5,
    holdTime: "N/A",
    learningTime: "2-6 months",
    description: "Vertical push-up requiring exceptional shoulder strength",
    instructions: [
      "Get into wall handstand position",
      "Lower head toward ground by bending elbows",
      "Keep core tight and legs straight",
      "Press back up to full handstand",
      "Control the movement throughout"
    ],
    tips: "Start with partial range of motion. Pike push-ups are great prep. Use wall for support initially.",
    prerequisites: [3],
    unlocks: [14, 15]
  },
  {
    id: 8,
    name: "Muscle-Up Progression",
    category: "Pull Strength",
    difficulty: 4,
    requiredPoints: 50,
    pointValue: 45,
    requiredReps: 3,
    holdTime: "N/A",
    learningTime: "3-8 months",
    description: "Transition from pull-up to dip in one fluid motion",
    instructions: [
      "Start with explosive pull-up",
      "Pull chest high over bar",
      "Transition by rolling wrists over bar",
      "Press up into dip position",
      "Lower with control for negative practice"
    ],
    tips: "Master high pull-ups first. Practice the transition separately. False grip helps on rings.",
    prerequisites: [4],
    unlocks: [16, 17]
  },
  {
    id: 9,
    name: "Front Lever Progression",
    category: "Core Strength",
    difficulty: 5,
    requiredPoints: 75,
    pointValue: 50,
    requiredReps: 3,
    holdTime: "10 seconds",
    learningTime: "6-18 months",
    description: "Horizontal hold demonstrating incredible core and lat strength",
    instructions: [
      "Hang from pull-up bar",
      "Lift legs up keeping body straight",
      "Hold body parallel to ground",
      "Keep arms straight and shoulders engaged",
      "Start with tuck front lever"
    ],
    tips: "Progress slowly: tuck → advanced tuck → straddle → full. Dragon flags are excellent prep.",
    prerequisites: [4],
    unlocks: [18, 19]
  },
  {
    id: 10,
    name: "Shrimp Squat",
    category: "Single Leg Strength",
    difficulty: 5,
    requiredPoints: 75,
    pointValue: 40,
    requiredReps: 5,
    holdTime: "N/A",
    learningTime: "4-10 months",
    description: "Advanced single leg squat with rear leg held",
    instructions: [
      "Stand on one leg",
      "Grab other foot behind you",
      "Squat down while pulling foot to glute",
      "Keep torso upright",
      "Return to standing while maintaining grip"
    ],
    tips: "Extreme ankle mobility required. Start with assisted version. Quad and hip flexor flexibility crucial.",
    prerequisites: [5],
    unlocks: [20]
  },
  {
    id: 11,
    name: "Dragon Squat",
    category: "Single Leg Strength",
    difficulty: 5,
    requiredPoints: 75,
    pointValue: 45,
    requiredReps: 4,
    holdTime: "N/A",
    learningTime: "6-12 months",
    description: "One leg squat with other leg extended behind",
    instructions: [
      "Stand with feet together",
      "Lift one leg straight behind you",
      "Squat down on standing leg",
      "Keep rear leg elevated and straight",
      "Maintain balance throughout movement"
    ],
    tips: "Start with hands on wall for balance. Hip flexibility is key. Very challenging balance element.",
    prerequisites: [5],
    unlocks: [21]
  },

  // Advanced Skills (150+ points)
  {
    id: 12,
    name: "One-Arm Handstand",
    category: "Elite Balance",
    difficulty: 6,
    requiredPoints: 150,
    pointValue: 75,
    requiredReps: 2,
    holdTime: "10 seconds",
    learningTime: "1-3 years",
    description: "The pinnacle of handstand mastery",
    instructions: [
      "Start in perfect two-arm handstand",
      "Shift weight slightly to one side",
      "Slowly lift one arm off ground",
      "Maintain balance with core and remaining arm",
      "Hold with perfect alignment"
    ],
    tips: "Master 2-arm handstand first. Hollow body lean essential. This is the hardest skill - be patient!",
    prerequisites: [6],
    unlocks: []
  },
  {
    id: 13,
    name: "Handstand Walk",
    category: "Balance",
    difficulty: 5,
    requiredPoints: 100,
    pointValue: 35,
    requiredReps: 10,
    holdTime: "N/A",
    learningTime: "3-12 months",
    description: "Walk on your hands with control",
    instructions: [
      "Start in solid handstand",
      "Shift weight to one arm",
      "Take small step with other hand",
      "Shift weight and step again",
      "Keep steps small and controlled"
    ],
    tips: "Master wall handstand walking first. Keep shoulders over hands. Small steps are better.",
    prerequisites: [6],
    unlocks: [22]
  },
  {
    id: 14,
    name: "Freestanding HSPU",
    category: "Push Strength",
    difficulty: 6,
    requiredPoints: 150,
    pointValue: 60,
    requiredReps: 3,
    holdTime: "N/A",
    learningTime: "6-18 months",
    description: "Handstand push-up without wall support",
    instructions: [
      "Kick up to freestanding handstand",
      "Lower head to ground with control",
      "Keep handstand balance throughout",
      "Press back up to full handstand",
      "Maintain perfect form"
    ],
    tips: "Master wall HSPU and freestanding handstand first. Incredible shoulder strength required.",
    prerequisites: [6, 7],
    unlocks: [23]
  },
  {
    id: 15,
    name: "90-Degree Push-Up",
    category: "Push Strength",
    difficulty: 5,
    requiredPoints: 100,
    pointValue: 40,
    requiredReps: 5,
    holdTime: "N/A",
    learningTime: "4-12 months",
    description: "Push-up with feet elevated 90 degrees",
    instructions: [
      "Place feet on high surface (wall or tall box)",
      "Walk feet up until body is nearly vertical",
      "Perform push-up in this position",
      "Lower chest to ground",
      "Press back up with control"
    ],
    tips: "Progression toward handstand push-up. Start with lower elevation and work up gradually.",
    prerequisites: [7],
    unlocks: [14]
  },
  {
    id: 16,
    name: "Weighted Muscle-Up",
    category: "Pull Strength",
    difficulty: 6,
    requiredPoints: 150,
    pointValue: 55,
    requiredReps: 2,
    holdTime: "N/A",
    learningTime: "6-15 months",
    description: "Muscle-up with additional weight",
    instructions: [
      "Attach weight belt or weighted vest",
      "Perform explosive pull-up with extra weight",
      "Transition over bar/rings as normal",
      "Complete dip portion with weight",
      "Control the negative descent"
    ],
    tips: "Master bodyweight muscle-ups first. Add weight gradually. Focus on explosive power.",
    prerequisites: [8],
    unlocks: [24]
  },
  {
    id: 17,
    name: "Archer Pull-Up",
    category: "Pull Strength",
    difficulty: 5,
    requiredPoints: 100,
    pointValue: 45,
    requiredReps: 6,
    holdTime: "N/A",
    learningTime: "4-10 months",
    description: "Pull-up emphasizing one arm while other assists",
    instructions: [
      "Hang from bar with wide grip",
      "Pull up toward one hand",
      "Keep pulling arm bent, other arm straight",
      "Lower with control",
      "Alternate sides each rep"
    ],
    tips: "Progression toward one-arm pull-up. Start with narrow range and increase gradually.",
    prerequisites: [8],
    unlocks: [25]
  },
  {
    id: 18,
    name: "Human Flag",
    category: "Core Strength",
    difficulty: 6,
    requiredPoints: 200,
    pointValue: 70,
    requiredReps: 2,
    holdTime: "8 seconds",
    learningTime: "8-24 months",
    description: "Hold body horizontal from vertical pole",
    instructions: [
      "Grab vertical pole with mixed grip",
      "Pull with top arm, push with bottom arm",
      "Lift body horizontal to ground",
      "Keep body straight like a flag",
      "Hold position with full tension"
    ],
    tips: "Start with flag raises. Side plank and front lever strength helps. Use wider grip initially.",
    prerequisites: [9],
    unlocks: [26]
  },
  {
    id: 19,
    name: "Back Lever",
    category: "Core Strength",
    difficulty: 5,
    requiredPoints: 125,
    pointValue: 50,
    requiredReps: 3,
    holdTime: "10 seconds",
    learningTime: "6-18 months",
    description: "Horizontal hold facing downward",
    instructions: [
      "Start in inverted hang position",
      "Lower body down while keeping arms straight",
      "Stop when body is horizontal, facing down",
      "Keep shoulders protracted",
      "Hold with full body tension"
    ],
    tips: "Easier than front lever but still very challenging. German hang is good preparation.",
    prerequisites: [9],
    unlocks: [27]
  },
  {
    id: 20,
    name: "Matrix Squat",
    category: "Single Leg Strength",
    difficulty: 6,
    requiredPoints: 175,
    pointValue: 55,
    requiredReps: 3,
    holdTime: "N/A",
    learningTime: "8-18 months",
    description: "Most advanced single leg squat variation",
    instructions: [
      "Start standing on one leg",
      "Reach other leg far behind and to the side",
      "Lower into deep squat",
      "Keep extended leg off ground throughout",
      "Return to standing with control"
    ],
    tips: "Requires extreme flexibility and strength. Master other single leg squats first.",
    prerequisites: [10, 11],
    unlocks: []
  },

  // Elite/Master Skills (300+ points)
  {
    id: 21,
    name: "One-Arm Pull-Up",
    category: "Elite Pull",
    difficulty: 7,
    requiredPoints: 300,
    pointValue: 100,
    requiredReps: 1,
    holdTime: "N/A",
    learningTime: "1-3 years",
    description: "The ultimate pulling strength achievement",
    instructions: [
      "Hang from bar with one arm",
      "Keep body straight, core tight",
      "Pull until chin clears bar",
      "Control the entire movement",
      "Lower with complete control"
    ],
    tips: "Train weighted pull-ups and archer pull-ups first. Requires exceptional lat and arm strength.",
    prerequisites: [17],
    unlocks: []
  },
  {
    id: 22,
    name: "Planche",
    category: "Elite Push",
    difficulty: 7,
    requiredPoints: 300,
    pointValue: 100,
    requiredReps: 1,
    holdTime: "5 seconds",
    learningTime: "1-4 years",
    description: "Horizontal hold supported only by hands",
    instructions: [
      "Place hands on ground, fingers forward",
      "Lean forward until shoulders are over hands",
      "Lift legs off ground until body is horizontal",
      "Keep arms straight and body aligned",
      "Hold with incredible shoulder strength"
    ],
    tips: "Progress through tuck → advanced tuck → straddle → full. Planche leans are essential prep.",
    prerequisites: [13],
    unlocks: []
  },
  {
    id: 23,
    name: "Iron Cross",
    category: "Elite Push",
    difficulty: 7,
    requiredPoints: 350,
    pointValue: 120,
    requiredReps: 1,
    holdTime: "3 seconds",
    learningTime: "2-5 years",
    description: "Hold body horizontal with arms extended to sides on rings",
    instructions: [
      "Start in ring support position",
      "Lower to horizontal with arms out to sides",
      "Keep arms straight in cross position",
      "Hold body perfectly horizontal",
      "Maintain position with rings stable"
    ],
    tips: "Ring-specific skill requiring immense strength. Cable cross training helps. Progress very slowly.",
    prerequisites: [14],
    unlocks: []
  },
  {
    id: 24,
    name: "Maltese",
    category: "Elite Push",
    difficulty: 7,
    requiredPoints: 400,
    pointValue: 150,
    requiredReps: 1,
    holdTime: "2 seconds",
    learningTime: "3-6 years",
    description: "The most advanced ring strength move",
    instructions: [
      "From ring support, lean forward",
      "Extend arms forward and to sides",
      "Hold body horizontal with unique arm position",
      "Maintain perfect form",
      "Requires years of specific training"
    ],
    tips: "Hardest skill in calisthenics. Master iron cross first. Very few people achieve this.",
    prerequisites: [16, 23],
    unlocks: []
  }
];

const CalisthenicsApp = () => {
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [workoutProgress, setWorkoutProgress] = useState({});
  const [workoutRatings, setWorkoutRatings] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentWorkoutForRating, setCurrentWorkoutForRating] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [showIngredientSelector, setShowIngredientSelector] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  
  // Shopping cart state
  const [shoppingCart, setShoppingCart] = useState(cartInitialState);
  const [showCart, setShowCart] = useState(false);
  
  // NEW: Search and filter states
  const [grocerySearchTerm, setGrocerySearchTerm] = useState('');
  const [groceryFilters, setGroceryFilters] = useState({
    category: '',
    store: '',
    healthyOnly: false,
    priceRange: { min: 0, max: 1000 },
    kosherOnly: false
  });
  const [recipeSearchTerm, setRecipeSearchTerm] = useState('');
  const [recipeFilters, setRecipeFilters] = useState({
    category: '',
    difficulty: '',
    maxPrepTime: 60,
    nutritionGoal: '',
    tags: []
  });
  
  // Recipe state
  const [selectedDetailedRecipe, setSelectedDetailedRecipe] = useState(null);
  const [dietSubView, setDietSubView] = useState('grocery'); // 'grocery' or 'recipes'
  
  // New state for level-based workouts
  const [workoutLevel, setWorkoutLevel] = useState('Beginner');
  
  // New state for meal plans
  const [dietTab, setDietTab] = useState('recipes');
  const [selectedMealCategory, setSelectedMealCategory] = useState('');
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  const [maxCalories, setMaxCalories] = useState(1000);
  const [kosherFilter, setKosherFilter] = useState('');

  // Core utility functions
  const getTotalPoints = useCallback(() => {
    return Object.values(userProgress).reduce((total, skill) => total + (skill.points || 0), 0);
  }, [userProgress]);

  const getRankInfo = useCallback((points) => {
    if (points >= 1000) return { rank: "Legendary Master", icon: Crown, color: "text-purple-800" };
    if (points >= 700) return { rank: "Calisthenics God", icon: Crown, color: "text-purple-600" };
    if (points >= 500) return { rank: "Elite Master", icon: Crown, color: "text-purple-500" };
    if (points >= 300) return { rank: "Elite Athlete", icon: Medal, color: "text-yellow-600" };
    if (points >= 200) return { rank: "Advanced Practitioner", icon: Star, color: "text-blue-600" };
    if (points >= 100) return { rank: "Intermediate", icon: Trophy, color: "text-green-600" };
    if (points >= 50) return { rank: "Developing", icon: Target, color: "text-yellow-600" };
    return { rank: "Beginner", icon: Play, color: "text-gray-600" };
  }, []);

  const getNextRank = useCallback((currentRank) => {
    const ranks = ["Beginner", "Developing", "Intermediate", "Advanced Practitioner", "Elite Athlete", "Elite Master", "Calisthenics God", "Legendary Master"];
    const currentIndex = ranks.indexOf(currentRank);
    return currentIndex < ranks.length - 1 ? ranks[currentIndex + 1] : currentRank;
  }, []);

  const getPrevRank = useCallback((currentRank) => {
    const ranks = ["Beginner", "Developing", "Intermediate", "Advanced Practitioner", "Elite Athlete", "Elite Master", "Calisthenics God", "Legendary Master"];
    const currentIndex = ranks.indexOf(currentRank);
    return currentIndex > 0 ? ranks[currentIndex - 1] : currentRank;
  }, []);

  const getAdjustedRank = useCallback((baseRank) => {
    const recent = Object.values(workoutRatings).filter(r => {
      const d = new Date(r.date); const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate()-7);
      return d >= weekAgo && typeof r.difficultyScore === 'number';
    });
    if (recent.length < 3) return baseRank;
    const avg = recent.reduce((s,r) => s + r.difficultyScore, 0) / recent.length;

    if (avg <= 1.4) return getNextRank(baseRank);
    if (avg >= 2.6) return getPrevRank(baseRank);
    return baseRank;
  }, [workoutRatings, getNextRank, getPrevRank]);

  // Memoized calculations
  const totalPoints = useMemo(() => getTotalPoints(), [getTotalPoints]);
  const baseRankInfo = useMemo(() => getRankInfo(totalPoints), [getRankInfo, totalPoints]);
  const adjustedRank = useMemo(() => getAdjustedRank(baseRankInfo.rank), [getAdjustedRank, baseRankInfo.rank]);

  // NEW: Filtered items based on search and filters
  const filteredGroceryItems = useMemo(() => {
    let items = israeliGroceryItems;

    // Apply search term
    if (grocerySearchTerm.trim()) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(grocerySearchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(grocerySearchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(grocerySearchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(grocerySearchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (groceryFilters.category) {
      items = items.filter(item => item.category === groceryFilters.category);
    }
    if (groceryFilters.store) {
      items = items.filter(item => item.store === groceryFilters.store);
    }
    if (groceryFilters.healthyOnly) {
      items = items.filter(item => item.healthyChoice);
    }
    if (groceryFilters.kosherOnly) {
      items = items.filter(item => item.kosher);
    }
    if (groceryFilters.priceRange.min > 0 || groceryFilters.priceRange.max < 1000) {
      items = items.filter(item => 
        item.price >= groceryFilters.priceRange.min && item.price <= groceryFilters.priceRange.max
      );
    }

    return items;
  }, [grocerySearchTerm, groceryFilters]);

  // NEW: Filtered recipes based on search and filters
  const filteredRecipes = useMemo(() => {
    let recipes = fitnessRecipes;

    // Apply search term
    if (recipeSearchTerm.trim()) {
      recipes = searchRecipes(recipeSearchTerm);
    }

    // Apply category filter
    if (recipeFilters.category) {
      const categoryRecipes = getRecipesByCategory(recipeFilters.category);
      recipes = recipes.filter(recipe =>
        categoryRecipes.some(cr => cr.id === recipe.id)
      );
    }

    // Apply difficulty filter
    if (recipeFilters.difficulty) {
      recipes = recipes.filter(recipe => recipe.difficulty === recipeFilters.difficulty);
    }

    // Apply prep time filter
    if (recipeFilters.maxPrepTime < 60) {
      recipes = recipes.filter(recipe => {
        const prepMinutes = parseInt(recipe.prepTime.split(' ')[0]);
        return prepMinutes <= recipeFilters.maxPrepTime;
      });
    }

    // Apply nutrition goal filter
    if (recipeFilters.nutritionGoal) {
      const nutritionRecipes = getRecipesByNutritionGoal(recipeFilters.nutritionGoal);
      recipes = recipes.filter(recipe =>
        nutritionRecipes.some(nr => nr.id === recipe.id)
      );
    }

    // Apply tag filters
    if (recipeFilters.tags.length > 0) {
      recipes = recipes.filter(recipe =>
        recipeFilters.tags.some(tag => recipe.tags.includes(tag))
      );
    }

    return recipes;
  }, [recipeSearchTerm, recipeFilters]);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedUsers = localStorage.getItem('calisthenics-users');
      const savedCurrentUser = localStorage.getItem('calisthenics-current-user');
      
      console.log('Loading from localStorage...');
      console.log('Saved users:', savedUsers);
      console.log('Saved current user:', savedCurrentUser);
      
      if (savedUsers) {
        const parsedUsers = JSON.parse(savedUsers);
        setUsers(parsedUsers);
        console.log('Loaded users:', Object.keys(parsedUsers));
      }
      
      if (savedCurrentUser) {
        const user = JSON.parse(savedCurrentUser);
        setCurrentUser(user);
        loadUserData(user.username);
        setCurrentView('home');
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('calisthenics-users');
      localStorage.removeItem('calisthenics-current-user');
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (Object.keys(users).length > 0) {
      try {
        console.log('Saving users to localStorage:', Object.keys(users));
        localStorage.setItem('calisthenics-users', JSON.stringify(users));
      } catch (error) {
        console.error('Error saving users to localStorage:', error);
      }
    }
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      try {
        console.log('Saving current user:', currentUser);
        localStorage.setItem('calisthenics-current-user', JSON.stringify(currentUser));
        saveUserData();
      } catch (error) {
        console.error('Error saving current user to localStorage:', error);
      }
    }
  }, [currentUser, userProgress, workoutProgress, workoutRatings, availableIngredients, shoppingCart]);

  const loadUserData = (username) => {
    try {
      const savedData = localStorage.getItem(`calisthenics-data-${username}`);
      if (savedData) {
        const data = JSON.parse(savedData);
        setUserProgress(data.userProgress || {});
        
        // Handle backward compatibility for workoutProgress
        const progress = data.workoutProgress || {};
        if (Object.keys(progress).length > 0) {
          const firstKey = Object.keys(progress)[0];
          if (Array.isArray(progress[firstKey])) {
            // Old format: convert to new format
            const newProgress = {};
            Object.keys(progress).forEach(date => {
              newProgress[date] = { 'Beginner': progress[date] };
            });
            setWorkoutProgress(newProgress);
          } else {
            setWorkoutProgress(progress);
          }
        }
        
        setWorkoutRatings(data.workoutRatings || {});
        setAvailableIngredients(data.availableIngredients || []);
        setShoppingCart(data.shoppingCart || cartInitialState);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const saveUserData = () => {
    if (currentUser) {
      try {
        const data = {
          userProgress,
          workoutProgress,
          workoutRatings,
          availableIngredients,
          shoppingCart
        };
        localStorage.setItem(`calisthenics-data-${currentUser.username}`, JSON.stringify(data));
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    }
  };

  const handleLogin = useCallback(async (loginForm) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { username, password } = loginForm;
    
    // Enhanced validation
    if (!username || !password) {
      return { success: false, error: 'Please fill in all fields' };
    }
    
    if (username.trim().length === 0) {
      return { success: false, error: 'Username cannot be empty' };
    }

    console.log('Login attempt for username:', username);
    console.log('Available users:', Object.keys(users));
    
    // Case-insensitive username lookup
    const normalizedUsername = username.toLowerCase();
    const userEntry = Object.entries(users).find(([key]) => key.toLowerCase() === normalizedUsername);
    
    if (!userEntry) {
      console.log('User not found:', username);
      return { success: false, error: `Username '${username}' not found. Please check your username or create a new account.` };
    }
    
    const [actualUsername, userData] = userEntry;
    
    if (userData.password !== password) {
      console.log('Password mismatch for user:', username);
      return { success: false, error: 'Invalid password. Please try again.' };
    }

    console.log('Login successful for:', actualUsername);
    setCurrentUser({ username: actualUsername }); // Use actual stored username
    loadUserData(actualUsername);
    setCurrentView('home');
    return { success: true };
  }, [users]);

  const handleSignup = useCallback(async (signupForm) => {
    await new Promise(resolve => setTimeout(resolve, 1200));

    const { username, password, confirmPassword } = signupForm;
    
    // Enhanced field validation
    if (!username || !password || !confirmPassword) {
      return { success: false, error: 'Please fill in all fields' };
    }
    
    // Username validation
    const trimmedUsername = username.trim();
    if (trimmedUsername.length === 0) {
      return { success: false, error: 'Username cannot be empty' };
    }
    
    if (trimmedUsername.length < 3) {
      return { success: false, error: 'Username must be at least 3 characters long' };
    }
    
    if (trimmedUsername.length > 20) {
      return { success: false, error: 'Username cannot exceed 20 characters' };
    }
    
    // Check for valid characters (alphanumeric and underscores only)
    if (!/^[a-zA-Z0-9_]+$/.test(trimmedUsername)) {
      return { success: false, error: 'Username can only contain letters, numbers, and underscores' };
    }

    // Password validation
    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }
    
    if (password.length > 50) {
      return { success: false, error: 'Password cannot exceed 50 characters' };
    }

    // Case-insensitive username conflict check
    const normalizedUsername = trimmedUsername.toLowerCase();
    const existingUser = Object.keys(users).find(key => key.toLowerCase() === normalizedUsername);
    
    if (existingUser) {
      return { success: false, error: 'Username already exists (case-insensitive)' };
    }

    console.log('Creating new user:', trimmedUsername);
    const newUsers = { ...users, [trimmedUsername]: { password, createdAt: new Date().toISOString() } };
    setUsers(newUsers);
    setCurrentUser({ username: trimmedUsername });
    
    // Initialize default user data
    const defaultUserData = {
      userProgress: {},
      workoutProgress: {},
      workoutRatings: {},
      availableIngredients: [],
      shoppingCart: cartInitialState
    };
    
    try {
      localStorage.setItem(`calisthenics-data-${trimmedUsername}`, JSON.stringify(defaultUserData));
    } catch (error) {
      console.warn('Could not save initial user data to localStorage');
    }
    
    setCurrentView('home');
    return { success: true };
  }, [users]);

  const logout = () => {
    setCurrentUser(null);
    setCurrentView('login');
    setUserProgress({});
    setWorkoutProgress({});
    setWorkoutRatings({});
    setSelectedSkill(null);
    setSelectedWorkout(null);
    setSelectedRecipe(null);
    setSelectedMealPlan(null);
    setSelectedDetailedRecipe(null);
    setAvailableIngredients([]);
    setShoppingCart(cartInitialState);
    setShowCart(false);
    setGrocerySearchTerm('');
    setRecipeSearchTerm('');
    setGroceryFilters({
      category: '',
      store: '',
      healthyOnly: false,
      priceRange: { min: 0, max: 1000 },
      kosherOnly: false
    });
    setRecipeFilters({
      category: '',
      difficulty: '',
      maxPrepTime: 60,
      nutritionGoal: '',
      tags: []
    });
    setDietSubView('grocery');
    try {
      localStorage.removeItem('calisthenics-current-user');
    } catch (error) {
      console.error('Error removing current user from localStorage:', error);
    }
  };

  // Updated complete workout function for level-based tracking
  const completeWorkout = (day) => {
    const today = new Date().toDateString();
    const next = { ...workoutProgress };
    if (!next[today]) next[today] = {};
    if (!next[today][workoutLevel]) next[today][workoutLevel] = [];
    if (!next[today][workoutLevel].includes(day)) next[today][workoutLevel].push(day);

    setWorkoutProgress(next);
    setCurrentWorkoutForRating(day);
    setShowRatingModal(true);
  };

  const submitWorkoutRating = (difficultyScore, enjoyment, notes = '') => {
    const ratingId = `${currentWorkoutForRating}-${Date.now()}`;
    const newRatings = {
      ...workoutRatings,
      [ratingId]: {
        workout: currentWorkoutForRating,
        level: typeof workoutLevel !== 'undefined' ? workoutLevel : 'Beginner',
        difficultyScore,
        enjoyment,
        notes,
        date: new Date().toISOString(),
        userRank: baseRankInfo.rank
      }
    };
    setWorkoutRatings(newRatings);
    setShowRatingModal(false);
    setCurrentWorkoutForRating(null);
  };

  const toggleIngredient = (ingredient) => {
    setAvailableIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(ing => ing !== ingredient)
        : [...prev, ingredient]
    );
  };

  // Shopping cart functions
  const addItemToCart = (item, quantity = 1) => {
    setShoppingCart(prevCart => addToCart(prevCart, item, quantity));
  };

  const removeItemFromCart = (itemId) => {
    setShoppingCart(prevCart => removeFromCart(prevCart, itemId));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setShoppingCart(prevCart => updateCartQuantity(prevCart, itemId, newQuantity));
  };

  const clearCart = () => {
    setShoppingCart(cartInitialState);
  };

  // NEW: Search handlers
  const handleGrocerySearch = useCallback((searchTerm) => {
    setGrocerySearchTerm(searchTerm);
  }, []);

  const handleGroceryFilterChange = useCallback((filters) => {
    setGroceryFilters(filters);
  }, []);

  const handleRecipeSearch = useCallback((searchTerm) => {
    setRecipeSearchTerm(searchTerm);
  }, []);

  const handleRecipeFilterChange = useCallback((filters) => {
    setRecipeFilters(filters);
  }, []);

  // Filtered meal plans
  const filteredMealPlans = useMemo(() => {
    return mealPlans.filter(plan => {
      if (selectedMealCategory && plan.category !== selectedMealCategory) return false;
      if (kosherFilter && plan.kosherStatus !== kosherFilter) return false;
      if (plan.calories > maxCalories) return false;
      return true;
    });
  }, [selectedMealCategory, kosherFilter, maxCalories]);

  // Today's workout check
  const getTodaysWorkout = () => {
    const today = new Date().getDay();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return dailyWorkoutsByLevel[workoutLevel]?.[dayNames[today]];
  };

  const todaysWorkout = getTodaysWorkout();
  const isCompletedToday = workoutProgress[new Date().toDateString()]?.[workoutLevel]?.includes(new Date().getDay().toString()) || false;

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-black p-4 border-b-2 border-red-600">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-black text-red-500 tracking-wider">CALISTHENICS ELITE</div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setCurrentView('home')}
            className={`font-bold transition ${currentView === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
          >
            HOME
          </button>
          <button 
            onClick={() => setCurrentView('workouts')}
            className={`font-bold transition ${currentView === 'workouts' ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
          >
            WORKOUTS
          </button>
          <button 
            onClick={() => setCurrentView('skills')}
            className={`font-bold transition ${currentView === 'skills' ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
          >
            SKILLS
          </button>
          <button 
            onClick={() => setCurrentView('diet')}
            className={`font-bold transition ${currentView === 'diet' ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
          >
            NUTRITION
          </button>
          <button 
            onClick={() => setCurrentView('stats')}
            className={`font-bold transition ${currentView === 'stats' ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
          >
            STATS
          </button>
          
          <div className="flex items-center space-x-3 pl-4 border-l-2 border-gray-600">
            <div className="text-right">
              <div className="text-sm text-gray-400">Welcome back</div>
              <div className="font-bold text-red-400">{currentUser?.username}</div>
            </div>
            <button 
              onClick={logout}
              className="p-2 bg-red-600 hover:bg-red-700 rounded transition"
              aria-label="Logout"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  // Home View Component
  const HomeView = () => {
    const { rank, icon: RankIcon, color } = getRankInfo(totalPoints);
    const currentRank = getAdjustedRank(rank);
    
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-black text-white mb-4 tracking-wider">
            WELCOME TO THE ELITE GYM
          </h1>
          <p className="text-gray-300 text-xl font-semibold">Transform your body with calisthenics mastery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rank Card */}
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <RankIcon size={48} className={color} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">{currentRank}</h3>
            <p className="text-gray-300 font-semibold">{totalPoints} Total Points</p>
            {currentRank !== rank && (
              <p className="text-sm text-blue-400 mt-2">Rank adjusted by recent feedback</p>
            )}
          </div>

          {/* Today's Plan Card */}
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-black text-white mb-3">TODAY'S PLAN</h3>
            {todaysWorkout ? (
              <div>
                <h4 className="font-bold text-red-400 mb-2">{todaysWorkout.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{todaysWorkout.focus}</p>
                <p className="text-gray-400 text-xs mb-4">Duration: {todaysWorkout.duration}</p>
                {isCompletedToday ? (
                  <div className="flex items-center text-green-400 font-bold">
                    <CheckCircle size={20} className="mr-2" />
                    COMPLETED
                  </div>
                ) : (
                  <button 
                    onClick={() => setCurrentView('workouts')}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded font-black hover:from-red-700 hover:to-red-800 transition"
                  >
                    START WORKOUT
                  </button>
                )}
              </div>
            ) : (
              <p className="text-gray-400">Rest day - perfect for recovery!</p>
            )}
          </div>

          {/* Level Selector Card */}
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-black text-white mb-3">TRAINING LEVEL</h3>
            <div className="space-y-2">
              {Object.keys(dailyWorkoutsByLevel).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setWorkoutLevel(lvl)}
                  className={`w-full px-3 py-2 rounded border-2 font-bold transition ${
                    workoutLevel === lvl 
                      ? 'bg-red-600 text-white border-red-500' 
                      : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                  }`}
                >
                  {lvl.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
          <h3 className="text-2xl font-black text-white mb-4">WEEKLY PROGRESS</h3>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
              const date = new Date();
              date.setDate(date.getDate() - date.getDay() + index);
              const dateString = date.toDateString();
              const completed = workoutProgress[dateString]?.[workoutLevel]?.length > 0;
              
              return (
                <div key={day} className="text-center">
                  <div className="text-sm text-gray-400 mb-1">{day}</div>
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center ${
                    completed ? 'bg-green-600' : 'bg-gray-600'
                  }`}>
                    {completed && <CheckCircle size={16} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Workouts View Component
  const WorkoutsView = () => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-black text-white tracking-wide">WORKOUTS</h1>
          
          {/* Level Switcher */}
          <div className="flex gap-2">
            {Object.keys(dailyWorkoutsByLevel).map(lvl => (
              <button
                key={lvl}
                onClick={() => setWorkoutLevel(lvl)}
                className={`px-3 py-2 rounded border-2 font-bold transition ${
                  workoutLevel === lvl 
                    ? 'bg-red-600 text-white border-red-500' 
                    : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                }`}
              >
                {lvl.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map(day => {
            const workout = dailyWorkoutsByLevel[workoutLevel]?.[day];
            const isCompleted = workoutProgress[new Date().toDateString()]?.[workoutLevel]?.includes(day);
            
            if (!workout) return null;
            
            return (
              <div key={day} className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-white">{day.toUpperCase()}</h3>
                  {isCompleted && (
                    <CheckCircle size={24} className="text-green-400" />
                  )}
                </div>
                
                <h4 className="font-bold text-red-400 mb-2">{workout.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{workout.focus}</p>
                <p className="text-gray-400 text-xs mb-4">Duration: {workout.duration}</p>
                
                <div className="space-y-2 mb-4">
                  {workout.blocks.map((block, index) => (
                    <div key={index} className="text-sm">
                      <span className="text-yellow-400 font-bold">{block.category}: </span>
                      <span className="text-gray-300">{block.exercises.length} exercises</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setSelectedWorkout({ day, workout })}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold transition"
                  >
                    VIEW DETAILS
                  </button>
                  <button 
                    onClick={() => completeWorkout(day)}
                    disabled={isCompleted}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded font-bold disabled:opacity-50 transition"
                  >
                    {isCompleted ? 'COMPLETED' : 'COMPLETE'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Skills View Component (keeping existing structure)
  const SkillsView = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-black text-white tracking-wide mb-6">SKILLS TREE</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsTree.map(skill => {
          const progress = userProgress[skill.id] || { completed: 0, points: 0 };
          const isUnlocked = skill.requiredPoints <= totalPoints;
          const completionPercentage = Math.min((progress.completed / skill.requiredReps) * 100, 100);
          
          return (
            <div 
              key={skill.id}
              className={`border-2 rounded-lg p-6 transition cursor-pointer ${
                isUnlocked
                  ? 'bg-gray-800 border-gray-600 hover:border-red-500'
                  : 'bg-gray-900 border-gray-700 opacity-50'
              }`}
              onClick={() => isUnlocked && setSelectedSkill(skill)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                {!isUnlocked && <Lock size={20} className="text-gray-500" />}
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{skill.description}</p>
              
              {isUnlocked && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-bold">{progress.completed}/{skill.requiredReps}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              )}
              
              <div className="mt-4 text-xs text-gray-400">
                <div>Hold Time: {skill.holdTime}</div>
                <div>Learning Time: {skill.learningTime}</div>
                <div>Point Value: {skill.pointValue}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // UPDATED: Diet View Component with Advanced Search
  const DietView = () => {
    // Get recipes that can be made with current cart items
    const availableRecipes = suggestedRecipes.filter(recipe => {
      const cartItemIds = shoppingCart.items.map(item => item.id);
      return recipe.requiredItems.every(requiredId => cartItemIds.includes(requiredId));
    });

    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-white tracking-wide">
              {dietSubView === 'grocery' ? 'Israeli Grocery Store' : 'Fitness Recipe Collection'}
            </h1>
            <p className="text-gray-300 mt-2">
              {dietSubView === 'grocery' 
                ? `Real prices from major Israeli supermarkets • ${filteredGroceryItems.length} items` 
                : `Professional fitness recipes with detailed nutrition • ${filteredRecipes.length} recipes`
              }
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {dietSubView === 'grocery' && (
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-bold transition flex items-center gap-2"
              >
                <ShoppingCart size={20} />
                CART ({shoppingCart.totalItems})
                <span className="bg-white text-green-700 px-2 py-1 rounded text-sm font-bold">
                  ₪{shoppingCart.totalPrice.toFixed(2)}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-6">
          <button 
            onClick={() => setDietSubView('grocery')} 
            className={`px-6 py-3 rounded-lg font-bold transition ${
              dietSubView === 'grocery'
                ? 'bg-red-600 text-white border-2 border-red-500'
                : 'bg-gray-700 text-gray-300 border-2 border-gray-600 hover:bg-gray-600'
            }`}
          >
            Grocery Store ({israeliGroceryItems.length} items)
          </button>
          <button 
            onClick={() => setDietSubView('recipes')} 
            className={`px-6 py-3 rounded-lg font-bold transition ${
              dietSubView === 'recipes'
                ? 'bg-red-600 text-white border-2 border-red-500'
                : 'bg-gray-700 text-gray-300 border-2 border-gray-600 hover:bg-gray-600'
            }`}
          >
            Fitness Recipes ({fitnessRecipes.length} recipes)
          </button>
        </div>

        {dietSubView === 'grocery' ? (
          // GROCERY STORE VIEW WITH ADVANCED SEARCH
          <>
            {/* Advanced Search Bar */}
            <SearchBar
              onSearch={handleGrocerySearch}
              onFilterChange={handleGroceryFilterChange}
              categories={groceryCategories}
              stores={israeliStores.map(store => store.name)}
              placeholder="Search Israeli grocery items by name, brand, or ingredient..."
            />

            {/* Shopping Cart Modal/Sidebar */}
            {showCart && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
                <div className="bg-gray-800 w-96 h-full p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Shopping Cart</h3>
                    <button
                      onClick={() => setShowCart(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  {shoppingCart.items.length === 0 ? (
                    <p className="text-gray-400 text-center mt-8">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      {shoppingCart.items.map(item => (
                        <div key={item.id} className="bg-gray-700 p-4 rounded border border-gray-600">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-white">{item.name}</h4>
                            <button
                              onClick={() => removeItemFromCart(item.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <X size={18} />
                            </button>
                          </div>
                          
                          <div className="text-sm text-gray-300 mb-2">
                            {item.brand} • {item.unit}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-white font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            <div className="text-white font-bold">
                              ₪{(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="border-t border-gray-600 pt-4">
                        <div className="flex justify-between items-center text-xl font-bold text-white mb-4">
                          <span>TOTAL:</span>
                          <span>₪{shoppingCart.totalPrice.toFixed(2)}</span>
                        </div>
                        
                        <button
                          onClick={clearCart}
                          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold mb-2"
                        >
                          CLEAR CART
                        </button>
                        
                        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 rounded font-bold">
                          Checkout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Recipe Suggestions */}
            {availableRecipes.length > 0 && (
              <div className="bg-gradient-to-r from-purple-800 to-purple-900 border-2 border-purple-600 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Recipes You Can Make</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableRecipes.map(recipe => (
                    <div key={recipe.id} className="bg-purple-700 p-4 rounded border border-purple-500">
                      <h4 className="font-bold text-white mb-2">{recipe.name}</h4>
                      <p className="text-purple-100 text-sm">{recipe.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGroceryItems.map(item => {
                const inCart = shoppingCart.items.find(cartItem => cartItem.id === item.id);
                
                return (
                  <div key={item.id} className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 hover:border-red-500 transition">
                    {/* Product Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{item.name}</h4>
                        <div className="text-sm text-gray-300">{item.brand}</div>
                        <div className="text-xs text-gray-400">{item.unit}</div>
                      </div>
                      
                      {/* Badges */}
                      <div className="flex flex-col gap-1">
                        {item.healthyChoice && (
                          <span className="bg-green-600 text-white px-2 py-1 text-xs rounded font-bold">HEALTHY</span>
                        )}
                        {item.kosher && (
                          <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded font-bold">✡️</span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>

                    {/* Nutrition Quick Info */}
                    <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-white">{item.nutrition.calories}</div>
                        <div className="text-gray-400">Cal</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{item.nutrition.protein}g</div>
                        <div className="text-gray-400">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{item.nutrition.fiber || item.nutrition.carbs}g</div>
                        <div className="text-gray-400">{item.nutrition.fiber ? 'Fiber' : 'Carbs'}</div>
                      </div>
                    </div>

                    {/* Store & Price */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm text-gray-400">{item.store}</div>
                      <div className="text-2xl font-black text-green-400">₪{item.price}</div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex items-center gap-2">
                      {inCart ? (
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateItemQuantity(item.id, inCart.quantity - 1)}
                              className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-white font-bold">{inCart.quantity}</span>
                            <button
                              onClick={() => updateItemQuantity(item.id, inCart.quantity + 1)}
                              className="bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItemFromCart(item.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-bold"
                          >
                            REMOVE
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addItemToCart(item)}
                          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded font-bold transition"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>

                    {/* Recipe Tags */}
                    {item.recipes && item.recipes.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-600">
                        <div className="text-xs text-gray-400 mb-1">Used in recipes:</div>
                        <div className="flex flex-wrap gap-1">
                          {item.recipes.slice(0, 2).map((recipe, index) => (
                            <span key={index} className="bg-purple-600 text-white px-2 py-1 text-xs rounded">
                              {recipe}
                            </span>
                          ))}
                          {item.recipes.length > 2 && (
                            <span className="text-gray-400 text-xs">+{item.recipes.length - 2} more</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredGroceryItems.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-xl mb-2">No items found</div>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            )}
          </>
        ) : (
          // RECIPES VIEW WITH ADVANCED SEARCH
          <>
            {/* Advanced Recipe Search Bar */}
            <RecipeSearchBar
              onSearch={handleRecipeSearch}
              onFilterChange={handleRecipeFilterChange}
              categories={recipeCategories}
              placeholder="Search fitness recipes by name, ingredients, cuisine, or nutrition goals..."
            />

            {/* Recipes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(recipe => {
                const getDifficultyColor = (difficulty) => {
                  switch(difficulty) {
                    case 'Easy': return 'bg-green-600 text-white';
                    case 'Medium': return 'bg-yellow-600 text-white';
                    case 'Hard': return 'bg-red-600 text-white';
                    default: return 'bg-gray-600 text-white';
                  }
                };

                return (
                  <div key={recipe.id} className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6 hover:border-red-500 transition">
                    {/* Recipe Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{recipe.name}</h4>
                        <div className="text-sm text-red-400 font-semibold">{recipe.category}</div>
                      </div>
                      
                      {/* Difficulty Badge */}
                      <span className={`px-2 py-1 text-xs rounded font-bold ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4">{recipe.description}</p>

                    {/* Recipe Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-400">Prep + Cook</div>
                        <div className="font-bold text-white">{recipe.prepTime} + {recipe.cookTime}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Servings</div>
                        <div className="font-bold text-white">{recipe.servings}</div>
                      </div>
                    </div>

                    {/* Nutrition Quick Info */}
                    <div className="grid grid-cols-4 gap-2 mb-4 text-xs">
                      <div className="text-center">
                        <div className="font-bold text-white">{recipe.nutrition.calories}</div>
                        <div className="text-gray-400">Cal</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{recipe.nutrition.protein}g</div>
                        <div className="text-gray-400">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{recipe.nutrition.carbs}g</div>
                        <div className="text-gray-400">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-white">{recipe.nutrition.fiber}g</div>
                        <div className="text-gray-400">Fiber</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {recipe.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {recipe.tags.length > 3 && (
                        <span className="text-gray-500 text-xs px-2 py-1">+{recipe.tags.length - 3} more</span>
                      )}
                    </div>

                    {/* Ingredients Preview */}
                    <div className="border-t border-gray-600 pt-4 mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Ingredients ({recipe.ingredients.length}):</div>
                      <div className="text-sm text-gray-300">
                        {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                          <span key={index}>
                            {ingredient.name.split(' ').slice(0, 2).join(' ')}
                            {index < 2 && index < recipe.ingredients.length - 1 && ', '}
                          </span>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <span className="text-gray-400"> +{recipe.ingredients.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    {/* View Recipe Button */}
                    <button 
                      onClick={() => setSelectedDetailedRecipe(recipe)}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded font-bold transition"
                    >
                      View Full Recipe
                    </button>
                  </div>
                );
              })}
            </div>

            {filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-xl mb-2">No recipes found</div>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  // Stats View Component (keeping existing)
  const StatsView = () => {
    const weeklyData = useMemo(() => {
      const data = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toDateString();
        const workouts = Object.values(workoutProgress[dateString] || {}).flat().length;
        data.push({
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          workouts
        });
      }
      return data;
    }, [workoutProgress]);

    const recentRatings = useMemo(() => {
      return Object.values(workoutRatings)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
    }, [workoutRatings]);

    return (
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-black text-white tracking-wide">PERFORMANCE ANALYTICS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">CURRENT RANK</h3>
            <div className="text-3xl font-black text-red-400 mb-2">{adjustedRank}</div>
            <div className="text-gray-300">{totalPoints} points earned</div>
          </div>
          
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">THIS WEEK</h3>
            <div className="text-3xl font-black text-green-400 mb-2">
              {weeklyData.reduce((sum, day) => sum + day.workouts, 0)}
            </div>
            <div className="text-gray-300">workouts completed</div>
          </div>
          
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">TOTAL RATINGS</h3>
            <div className="text-3xl font-black text-blue-400 mb-2">
              {Object.keys(workoutRatings).length}
            </div>
            <div className="text-gray-300">feedback sessions</div>
          </div>
        </div>

        {recentRatings.length > 0 && (
          <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">RECENT FEEDBACK</h3>
            <div className="space-y-3">
              {recentRatings.map((rating, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded">
                  <div>
                    <div className="font-bold text-white">{rating.workout}</div>
                    <div className="text-sm text-gray-400">
                      {new Date(rating.date).toLocaleDateString()} • {rating.level}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-lg">
                      {rating.difficultyScore === 1 ? '😌' : 
                       rating.difficultyScore === 2 ? '🙂' : '🥵'}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < rating.enjoyment ? 'text-yellow-400' : 'text-gray-600'} 
                          fill={i < rating.enjoyment ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render main app
  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg shadow-2xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-red-500 tracking-wider mb-2">CALISTHENICS</h1>
            <h2 className="text-2xl font-black text-white tracking-wide">ELITE GYM</h2>
            <p className="text-gray-300 mt-4 font-semibold">Join the ranks of calisthenics masters</p>
          </div>
          
          {isSignup ? (
            <SignupForm 
              onSignup={handleSignup}
              onSwitchToLogin={() => setIsSignup(false)}
            />
          ) : (
            <LoginForm 
              onLogin={handleLogin}
              onSwitchToSignup={() => setIsSignup(true)}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      {currentView === 'home' && <HomeView />}
      {currentView === 'workouts' && <WorkoutsView />}
      {currentView === 'skills' && <SkillsView />}
      {currentView === 'diet' && <DietView />}
      {currentView === 'stats' && <StatsView />}

      {/* Workout Rating Modal */}
      <WorkoutRatingModal
        showRatingModal={showRatingModal}
        setShowRatingModal={setShowRatingModal}
        currentWorkoutForRating={currentWorkoutForRating}
        workoutLevel={workoutLevel}
        dailyWorkoutsByLevel={dailyWorkoutsByLevel}
        dailyWorkouts={undefined} // backward compat
        submitWorkoutRating={submitWorkoutRating}
        baseRankInfo={baseRankInfo}
      />

      {/* Workout Details Modal */}
      <WorkoutDetailsModal
        selectedWorkout={selectedWorkout}
        setSelectedWorkout={setSelectedWorkout}
        completeWorkout={completeWorkout}
        workoutProgress={workoutProgress}
        workoutLevel={workoutLevel}
      />

      {/* Skill Details Modal */}
      <SkillDetailsModal
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        userProgress={userProgress}
        setUserProgress={setUserProgress}
        totalPoints={totalPoints}
      />

      {/* Recipe Details Modal */}
      <RecipeDetailsModal
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />

      {/* Meal Plan Details Modal */}
      <MealPlanDetailsModal
        selectedMealPlan={selectedMealPlan}
        setSelectedMealPlan={setSelectedMealPlan}
        availableIngredients={availableIngredients}
        toggleIngredient={toggleIngredient}
      />

      {/* Detailed Recipe Modal */}
      <DetailedRecipeModal
        selectedDetailedRecipe={selectedDetailedRecipe}
        setSelectedDetailedRecipe={setSelectedDetailedRecipe}
      />
    </div>
  );
};

export default CalisthenicsApp;