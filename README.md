# 🏋️ Calisthenics Elite App

A comprehensive fitness and nutrition platform featuring level-based calisthenics workouts and kosher meal planning.

## ✨ Features

- **🎯 Level-Based Workouts**: Beginner → Intermediate → Advanced progression
- **🍽️ 66 Kosher Meal Plans**: Across 6 categories with smart filtering
- **😌🙂🥵 Emoji Rating System**: Smart difficulty adjustment based on feedback
- **📊 Progress Tracking**: Weekly completion streaks and analytics
- **🏆 Ranking System**: Dynamic rank adjustment based on performance
- **🔄 Data Persistence**: All progress saved locally

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation Steps

1. **Create the project folder** on your desktop:
   ```bash
   mkdir ~/Desktop/calisthenics-elite-app
   cd ~/Desktop/calisthenics-elite-app
   ```

2. **Copy all project files** to this folder (see file structure below)

3. **Install dependencies**:
   ```bash
   npm install
   ```
   *This will download all required packages (~2-3 minutes)*

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The app will automatically open in your browser at http://localhost:3000*

## 📁 Project Structure

```
calisthenics-elite-app/
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
├── postcss.config.js               # PostCSS config
├── index.html                      # Main HTML file
├── README.md                       # This file
└── src/
    ├── main.jsx                    # React entry point
    ├── index.css                   # Global styles
    ├── CalisthenicsApp.jsx         # Main app component
    ├── components/
    │   ├── LoginForm.jsx           # Login component
    │   ├── SignupForm.jsx          # Signup component
    │   └── WorkoutRatingModal.jsx  # Emoji rating modal
    └── data/
        ├── mealPlans.js            # 66 kosher meal plans
        └── workouts.js             # Level-based workout programs
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎮 How to Use

1. **Sign up** or **login** with any credentials
2. **Select your training level**: Beginner, Intermediate, or Advanced  
3. **Complete workouts** and rate difficulty with emojis
4. **Explore meal plans** with kosher filtering
5. **Track your progress** and watch your rank improve!

## 📊 Data Storage

All your progress is saved locally in your browser:
- Workout completions by level
- Emoji ratings and feedback
- Available ingredients list
- User progress and rankings

## 🎯 Training Levels

- **🟢 Beginner**: Foundation building (35-45 min workouts)
- **🟡 Intermediate**: Skill development (45-55 min workouts)  
- **🔴 Advanced**: Elite mastery (60-90 min workouts)

## 🍽️ Meal Plan Categories

- **🌅 Breakfast** (12 plans): 300-600 kcal
- **🍽️ Lunch** (12 plans): 450-750 kcal
- **🌙 Dinner** (12 plans): 500-850 kcal
- **🥗 Low Calorie** (10 plans): 250-450 kcal
- **🍰 Dessert** (10 plans): 150-350 kcal
- **🌱 Vegan** (10 plans): 300-700 kcal

All plans include kosher status (Fleishig/Milchig/Pareve) and detailed macros.

## 🔧 Troubleshooting

**App won't start?**
- Make sure Node.js is installed: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Missing dependencies?**
- Run `npm install` again
- Check your internet connection

**Port already in use?**
- The app will try port 3001, 3002, etc. automatically
- Or manually specify: `npm run dev -- --port 4000`

## 🚀 Production Build

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 📝 License

MIT License - feel free to modify and distribute!

---

**Ready to become a calisthenics elite? Let's get started! 💪**