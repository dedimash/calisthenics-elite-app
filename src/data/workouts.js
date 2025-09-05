export const dailyWorkoutsByLevel = {
  Beginner: {
    monday: {
      name: "Push Fundamentals",
      focus: "Upper body push + core foundation",
      duration: "35-45 min",
      blocks: [
        {
          category: "Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Arm Circles", sets: 2, reps: "10 each direction", notes: "Dynamic warm-up", imageUrl: "" },
            { name: "Shoulder Rolls", sets: 2, reps: "10 each direction", notes: "Loosen shoulders", imageUrl: "" },
            { name: "Cat-Cow Stretches", sets: 1, reps: "10 reps", notes: "Mobilize spine", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "60-90s",
          exercises: [
            { name: "Wall Push-Ups", sets: 3, reps: "8-12", notes: "Stand arm's length from wall", imageUrl: "" },
            { name: "Incline Push-Ups", sets: 2, reps: "5-8", notes: "Use bench or sturdy surface", imageUrl: "" },
            { name: "Knee Push-Ups", sets: 2, reps: "3-6", notes: "Full range of motion", imageUrl: "" },
            { name: "Plank Hold", sets: 3, reps: "15-30s", notes: "Keep body straight", imageUrl: "" }
          ]
        }
      ]
    },
    tuesday: {
      name: "Pull Basics",
      focus: "Upper body pull + back strength",
      duration: "30-40 min",
      blocks: [
        {
          category: "Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Band Pull-Aparts", sets: 2, reps: "15", notes: "If band available", imageUrl: "" },
            { name: "Arm Swings", sets: 2, reps: "10 each direction", notes: "Dynamic movement", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "90s",
          exercises: [
            { name: "Inverted Rows", sets: 3, reps: "5-10", notes: "Use table or TRX", imageUrl: "" },
            { name: "Assisted Pull-Ups", sets: 2, reps: "3-8", notes: "Use chair or band", imageUrl: "" },
            { name: "Superman Holds", sets: 3, reps: "15-25s", notes: "Lift arms and legs", imageUrl: "" }
          ]
        }
      ]
    },
    wednesday: {
      name: "Core Foundation",
      focus: "Essential abs + core stability",
      duration: "30-40 min",
      blocks: [
        {
          category: "Core Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Cat-Cow Stretches", sets: 2, reps: "10", notes: "Gentle spine movement", imageUrl: "" },
            { name: "Hip Circles", sets: 2, reps: "10 each direction", notes: "Loosen hip flexors", imageUrl: "" },
            { name: "Knee to Chest", sets: 2, reps: "8 each side", notes: "Dynamic stretch", imageUrl: "" }
          ]
        },
        {
          category: "Core Strength",
          rest: "45-60s",
          exercises: [
            { name: "Plank Hold", sets: 3, reps: "20-45s", notes: "Perfect straight line", imageUrl: "" },
            { name: "Dead Bug", sets: 3, reps: "8-12 each side", notes: "Opposite arm/leg", imageUrl: "" },
            { name: "Glute Bridges", sets: 3, reps: "12-18", notes: "Squeeze glutes at top", imageUrl: "" },
            { name: "Modified Crunches", sets: 3, reps: "10-15", notes: "Knees bent, hands behind head", imageUrl: "" },
            { name: "Side Plank (Knees)", sets: 2, reps: "10-20s each side", notes: "Modified on knees", imageUrl: "" },
            { name: "Bird Dog", sets: 3, reps: "8-10 each side", notes: "Hold 2-3 seconds", imageUrl: "" }
          ]
        },
        {
          category: "Core Endurance",
          rest: "30s",
          exercises: [
            { name: "Hollow Body Hold", sets: 3, reps: "10-20s", notes: "Press lower back down", imageUrl: "" },
            { name: "Wall Sit", sets: 2, reps: "20-30s", notes: "Engage core throughout", imageUrl: "" },
            { name: "Standing Marches", sets: 2, reps: "10 each leg", notes: "High knees, control", imageUrl: "" }
          ]
        }
      ]
    },
    thursday: {
      name: "Lower Body Foundation",
      focus: "Leg strength basics",
      duration: "30-40 min",
      blocks: [
        {
          category: "Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Bodyweight Squats", sets: 2, reps: "8", notes: "Warm-up pace", imageUrl: "" },
            { name: "Leg Swings", sets: 2, reps: "10 each leg", notes: "Hold wall for balance", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "60-90s",
          exercises: [
            { name: "Bodyweight Squats", sets: 3, reps: "10-15", notes: "Full depth", imageUrl: "" },
            { name: "Lunges", sets: 2, reps: "6-10 each leg", notes: "Step forward", imageUrl: "" },
            { name: "Wall Sit", sets: 2, reps: "15-30s", notes: "Thighs parallel", imageUrl: "" },
            { name: "Calf Raises", sets: 3, reps: "15-20", notes: "Full range", imageUrl: "" }
          ]
        }
      ]
    },
    friday: {
      name: "Full Body Circuit",
      focus: "Basic conditioning",
      duration: "25-35 min",
      blocks: [
        {
          category: "Circuit Training",
          rest: "60s between rounds",
          exercises: [
            { name: "Modified Burpees", sets: 3, reps: "3-6", notes: "Step back instead of jump", imageUrl: "" },
            { name: "Mountain Climbers", sets: 3, reps: "10-15", notes: "Controlled pace", imageUrl: "" },
            { name: "Knee Push-Ups", sets: 3, reps: "5-8", notes: "Good form", imageUrl: "" },
            { name: "Bodyweight Squats", sets: 3, reps: "8-12", notes: "Steady rhythm", imageUrl: "" }
          ]
        }
      ]
    },
    saturday: {
      name: "Balance & Flexibility",
      focus: "Stability and mobility",
      duration: "20-30 min",
      blocks: [
        {
          category: "Balance Training",
          rest: "45s",
          exercises: [
            { name: "Single Leg Stand", sets: 3, reps: "15-30s each", notes: "Use wall if needed", imageUrl: "" },
            { name: "Heel-to-Toe Walk", sets: 2, reps: "10 steps", notes: "Straight line", imageUrl: "" },
            { name: "Tree Pose", sets: 2, reps: "20-30s each side", notes: "Yoga balance", imageUrl: "" }
          ]
        }
      ]
    },
    sunday: {
      name: "Rest & Recovery",
      focus: "Gentle stretching",
      duration: "15-25 min",
      blocks: [
        {
          category: "Stretching",
          rest: "As needed",
          exercises: [
            { name: "Child's Pose", sets: 2, reps: "30s", notes: "Rest and breathe", imageUrl: "" },
            { name: "Seated Forward Fold", sets: 2, reps: "30s", notes: "Gentle reach", imageUrl: "" },
            { name: "Supine Spinal Twist", sets: 2, reps: "30s each side", notes: "Gentle rotation", imageUrl: "" }
          ]
        }
      ]
    }
  },
  "Advanced Beginner": {
    monday: {
      name: "Push Progressions",
      focus: "Standard push patterns + core stability",
      duration: "40-50 min",
      blocks: [
        {
          category: "Dynamic Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Arm Circles", sets: 3, reps: "12 each direction", notes: "Gradually increase size", imageUrl: "" },
            { name: "Shoulder Rolls", sets: 2, reps: "12 each direction", notes: "Forward and backward", imageUrl: "" },
            { name: "Push-up to T", sets: 2, reps: "6", notes: "Rotate and reach up", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "75-90s",
          exercises: [
            { name: "Standard Push-Ups", sets: 4, reps: "6-12", notes: "Full range, chest to ground", imageUrl: "" },
            { name: "Wide-Grip Push-Ups", sets: 3, reps: "5-8", notes: "Hands wider than shoulders", imageUrl: "" },
            { name: "Tricep Push-Ups", sets: 2, reps: "4-8", notes: "Hands close, elbows in", imageUrl: "" },
            { name: "Plank Hold", sets: 3, reps: "30-45s", notes: "Perfect form", imageUrl: "" },
            { name: "Plank Up-Downs", sets: 3, reps: "8-12", notes: "Plank to forearms and back", imageUrl: "" }
          ]
        },
        {
          category: "Core Strength",
          rest: "60s",
          exercises: [
            { name: "Dead Bug", sets: 3, reps: "8 each side", notes: "Slow and controlled", imageUrl: "" },
            { name: "Bird Dog", sets: 3, reps: "10 each side", notes: "Hold 3 seconds each rep", imageUrl: "" }
          ]
        }
      ]
    },
    tuesday: {
      name: "Pull Development",
      focus: "Pull-up progression + back strength",
      duration: "40-50 min",
      blocks: [
        {
          category: "Activation",
          rest: "Minimal",
          exercises: [
            { name: "Band Pull-Aparts", sets: 3, reps: "15", notes: "Squeeze shoulder blades", imageUrl: "" },
            { name: "Scapular Shrugs", sets: 2, reps: "12", notes: "Hanging or standing", imageUrl: "" },
            { name: "Arm Swings", sets: 2, reps: "12 each direction", notes: "Large controlled circles", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "90-120s",
          exercises: [
            { name: "Negative Pull-Ups", sets: 4, reps: "3-5", notes: "5-second descent from top", imageUrl: "" },
            { name: "Assisted Pull-Ups", sets: 3, reps: "5-10", notes: "Use band or partner assist", imageUrl: "" },
            { name: "Inverted Rows", sets: 4, reps: "8-12", notes: "Body angle 45 degrees", imageUrl: "" },
            { name: "Superman Holds", sets: 3, reps: "20-30s", notes: "Lift arms and legs high", imageUrl: "" },
            { name: "Reverse Plank", sets: 3, reps: "20-30s", notes: "Squeeze glutes, open chest", imageUrl: "" }
          ]
        }
      ]
    },
    wednesday: {
      name: "Core Power",
      focus: "Advanced abs + core strength",
      duration: "35-45 min",
      blocks: [
        {
          category: "Core Activation",
          rest: "Minimal",
          exercises: [
            { name: "Cat-Cow Flow", sets: 2, reps: "12", notes: "Slow and controlled", imageUrl: "" },
            { name: "Hip Circles", sets: 2, reps: "12 each direction", notes: "Large range of motion", imageUrl: "" },
            { name: "Leg Swings", sets: 2, reps: "10 each leg", notes: "Dynamic hip mobility", imageUrl: "" }
          ]
        },
        {
          category: "Core Strength",
          rest: "60-75s",
          exercises: [
            { name: "Standard Plank", sets: 4, reps: "45-75s", notes: "Perfect form throughout", imageUrl: "" },
            { name: "Side Plank", sets: 3, reps: "20-35s each side", notes: "Full side plank", imageUrl: "" },
            { name: "Dead Bug Advanced", sets: 4, reps: "10-12 each side", notes: "Slower tempo", imageUrl: "" },
            { name: "Bicycle Crunches", sets: 4, reps: "15-20 each side", notes: "Control rotation", imageUrl: "" },
            { name: "Russian Twists", sets: 3, reps: "20-30", notes: "Lean back, lift feet", imageUrl: "" },
            { name: "Mountain Climbers", sets: 3, reps: "20-30", notes: "Maintain plank position", imageUrl: "" }
          ]
        },
        {
          category: "Core Power",
          rest: "45-60s",
          exercises: [
            { name: "Hollow Body Rocks", sets: 3, reps: "10-15", notes: "Rock back and forth", imageUrl: "" },
            { name: "V-Ups (Assisted)", sets: 3, reps: "8-12", notes: "Reach for toes", imageUrl: "" },
            { name: "Plank Up-Downs", sets: 3, reps: "10-15", notes: "Plank to forearms", imageUrl: "" },
            { name: "Single-Leg Glute Bridge", sets: 3, reps: "8-12 each", notes: "Hold and squeeze", imageUrl: "" }
          ]
        }
      ]
    },
    thursday: {
      name: "Lower Body Power",
      focus: "Leg strength + stability",
      duration: "40-50 min",
      blocks: [
        {
          category: "Dynamic Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Bodyweight Squats", sets: 2, reps: "10", notes: "Warm-up pace", imageUrl: "" },
            { name: "Leg Swings", sets: 2, reps: "12 each leg", notes: "Hold wall for balance", imageUrl: "" },
            { name: "Calf Raises", sets: 2, reps: "15", notes: "Full range of motion", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "75-90s",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: "12-15", notes: "Hold weight or water jug", imageUrl: "" },
            { name: "Reverse Lunges", sets: 3, reps: "10 each leg", notes: "Step back, knee to ground", imageUrl: "" },
            { name: "Wall Sit", sets: 3, reps: "30-45s", notes: "Thighs parallel to ground", imageUrl: "" },
            { name: "Single-Leg Glute Bridges", sets: 3, reps: "8-12 each", notes: "Squeeze at top", imageUrl: "" },
            { name: "Calf Raises", sets: 3, reps: "20-25", notes: "Pause at top", imageUrl: "" }
          ]
        },
        {
          category: "Balance Challenge",
          rest: "60s",
          exercises: [
            { name: "Single Leg Stand", sets: 3, reps: "30s each", notes: "Progress to eyes closed", imageUrl: "" }
          ]
        }
      ]
    },
    friday: {
      name: "Full Body Circuit",
      focus: "Conditioning + coordination",
      duration: "45-55 min",
      blocks: [
        {
          category: "Warm-up Circuit",
          rest: "Minimal",
          exercises: [
            { name: "Jumping Jacks", sets: 2, reps: "15", notes: "Full range motion", imageUrl: "" },
            { name: "Arm Circles", sets: 2, reps: "10 each direction", notes: "Progressive size", imageUrl: "" },
            { name: "High Knees", sets: 2, reps: "20", notes: "Bring knees to waist", imageUrl: "" }
          ]
        },
        {
          category: "Conditioning Circuit",
          rest: "60-90s between rounds",
          exercises: [
            { name: "Burpees", sets: 4, reps: "5-8", notes: "Full burpee with jump", imageUrl: "" },
            { name: "Mountain Climbers", sets: 4, reps: "20", notes: "Fast but controlled", imageUrl: "" },
            { name: "Push-Ups", sets: 4, reps: "8-12", notes: "Maintain form when tired", imageUrl: "" },
            { name: "Jump Squats", sets: 4, reps: "10-12", notes: "Land softly", imageUrl: "" }
          ]
        }
      ]
    },
    saturday: {
      name: "Skill Building",
      focus: "Handstand + L-sit progression",
      duration: "40-50 min",
      blocks: [
        {
          category: "Handstand Prep",
          rest: "90s",
          exercises: [
            { name: "Wall Handstand", sets: 4, reps: "30-60s", notes: "Chest to wall", imageUrl: "" },
            { name: "Hollow Body Rocks", sets: 3, reps: "15", notes: "Keep lower back down", imageUrl: "" },
            { name: "Pike Walks", sets: 3, reps: "8-10", notes: "Walk feet toward hands", imageUrl: "" },
            { name: "Wrist Circles", sets: 3, reps: "10 each direction", notes: "Prepare wrists", imageUrl: "" }
          ]
        },
        {
          category: "Core Skills",
          rest: "90s",
          exercises: [
            { name: "L-Sit Progression", sets: 4, reps: "10-20s", notes: "Bent knees to straight legs", imageUrl: "" },
            { name: "Crow Pose Hold", sets: 3, reps: "10-20s", notes: "Balance on hands", imageUrl: "" },
            { name: "Pike Compression", sets: 3, reps: "10-15s", notes: "Lift legs in pike", imageUrl: "" }
          ]
        }
      ]
    },
    sunday: {
      name: "Recovery & Flexibility",
      focus: "Deep stretching + relaxation",
      duration: "25-35 min",
      blocks: [
        {
          category: "Full Body Stretch",
          rest: "As needed",
          exercises: [
            { name: "Downward Dog", sets: 3, reps: "45s", notes: "Pedal feet, bend knees", imageUrl: "" },
            { name: "Pigeon Pose", sets: 2, reps: "60s each side", notes: "Hip opener", imageUrl: "" },
            { name: "Seated Forward Fold", sets: 2, reps: "60s", notes: "Reach for toes", imageUrl: "" },
            { name: "Child's Pose", sets: 3, reps: "45s", notes: "Rest and breathe deeply", imageUrl: "" },
            { name: "Supine Spinal Twist", sets: 2, reps: "45s each side", notes: "Gentle rotation", imageUrl: "" }
          ]
        }
      ]
    }
  },
  Intermediate: {
    monday: {
      name: "Push Power",
      focus: "Advanced push patterns + core",
      duration: "45-55 min",
      blocks: [
        {
          category: "Dynamic Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Arm Circles", sets: 2, reps: "15 each direction", notes: "Build up size", imageUrl: "" },
            { name: "Push-up to Downward Dog", sets: 2, reps: "8", notes: "Flow movement", imageUrl: "" },
            { name: "Shoulder Dislocations", sets: 2, reps: "10", notes: "With resistance band", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "90-120s",
          exercises: [
            { name: "Standard Push-Ups", sets: 4, reps: "8-15", notes: "Full range of motion", imageUrl: "" },
            { name: "Diamond Push-Ups", sets: 3, reps: "5-10", notes: "Hands in diamond shape", imageUrl: "" },
            { name: "Pike Push-Ups", sets: 3, reps: "5-8", notes: "Handstand preparation", imageUrl: "" },
            { name: "Archer Push-Ups", sets: 3, reps: "3-6 each side", notes: "Shift weight side to side", imageUrl: "" },
            { name: "Plank to Push-Up", sets: 3, reps: "8-12", notes: "Plank to push-up position", imageUrl: "" }
          ]
        },
        {
          category: "Core Finisher",
          rest: "60s",
          exercises: [
            { name: "Hollow Body Hold", sets: 3, reps: "20-40s", notes: "Lower back pressed down", imageUrl: "" },
            { name: "V-Ups", sets: 3, reps: "10-15", notes: "Touch toes", imageUrl: "" }
          ]
        }
      ]
    },
    tuesday: {
      name: "Pull Strength",
      focus: "Pull-up progressions + back development",
      duration: "45-55 min",
      blocks: [
        {
          category: "Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Band Pull-Aparts", sets: 3, reps: "20", notes: "Rear delt activation", imageUrl: "" },
            { name: "Scapular Wall Slides", sets: 2, reps: "15", notes: "Back against wall", imageUrl: "" },
            { name: "Dead Hangs", sets: 3, reps: "15-30s", notes: "Grip strength", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "2-3 minutes",
          exercises: [
            { name: "Pull-Ups", sets: 4, reps: "3-8", notes: "Chin over bar", imageUrl: "" },
            { name: "Chin-Ups", sets: 3, reps: "3-8", notes: "Palms facing you", imageUrl: "" },
            { name: "Inverted Rows", sets: 4, reps: "8-15", notes: "Body horizontal", imageUrl: "" },
            { name: "Single Arm Rows", sets: 3, reps: "8-12 each", notes: "Support on bench", imageUrl: "" },
            { name: "Face Pulls", sets: 3, reps: "15-20", notes: "With resistance band", imageUrl: "" }
          ]
        }
      ]
    },
    wednesday: {
      name: "Core Mastery",
      focus: "Intermediate abs + functional core",
      duration: "40-50 min",
      blocks: [
        {
          category: "Core Activation",
          rest: "Minimal",
          exercises: [
            { name: "Cat-Cow Flow", sets: 3, reps: "15", notes: "Full spinal mobility", imageUrl: "" },
            { name: "Hip Circles", sets: 3, reps: "15 each direction", notes: "Large controlled circles", imageUrl: "" },
            { name: "Leg Swings", sets: 2, reps: "12 each leg", notes: "All planes of motion", imageUrl: "" }
          ]
        },
        {
          category: "Core Strength",
          rest: "75-90s",
          exercises: [
            { name: "L-Sit Progression", sets: 4, reps: "15-30s", notes: "Legs straight if possible", imageUrl: "" },
            { name: "Dragon Flags (Assisted)", sets: 4, reps: "5-10", notes: "Lower slowly", imageUrl: "" },
            { name: "Plank Variations", sets: 4, reps: "60-90s", notes: "Standard, side, reverse", imageUrl: "" },
            { name: "V-Ups", sets: 4, reps: "12-18", notes: "Touch toes at top", imageUrl: "" },
            { name: "Russian Twists (Weighted)", sets: 4, reps: "25-35", notes: "Hold medicine ball", imageUrl: "" },
            { name: "Hollow Body Rocks", sets: 4, reps: "15-20", notes: "Controlled rocking", imageUrl: "" }
          ]
        },
        {
          category: "Core Power",
          rest: "60-75s",
          exercises: [
            { name: "Hanging Leg Raises", sets: 4, reps: "10-15", notes: "Knees to chest", imageUrl: "" },
            { name: "Pike Pulse Ups", sets: 3, reps: "12-15", notes: "Pike position, pulse up", imageUrl: "" },
            { name: "Side Plank Rotations", sets: 3, reps: "10-12 each side", notes: "Rotate under body", imageUrl: "" },
            { name: "Dead Bug Complex", sets: 3, reps: "8-10 each side", notes: "Add resistance band", imageUrl: "" }
          ]
        }
      ]
    },
    thursday: {
      name: "Lower Power",
      focus: "Jump training + single leg strength",
      duration: "45-55 min",
      blocks: [
        {
          category: "Dynamic Warm-up",
          rest: "30s",
          exercises: [
            { name: "Leg Swings", sets: 2, reps: "15 each direction", notes: "Dynamic stretching", imageUrl: "" },
            { name: "High Knees", sets: 2, reps: "20", notes: "Drive knees up", imageUrl: "" },
            { name: "Butt Kicks", sets: 2, reps: "20", notes: "Heels to glutes", imageUrl: "" }
          ]
        },
        {
          category: "Power Training",
          rest: "2-3 minutes",
          exercises: [
            { name: "Jump Squats", sets: 4, reps: "8-12", notes: "Land softly", imageUrl: "" },
            { name: "Single Leg Squats", sets: 3, reps: "5-10 each", notes: "Pistol squat progression", imageUrl: "" },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10-15 each", notes: "Rear foot elevated", imageUrl: "" },
            { name: "Lateral Lunges", sets: 3, reps: "10-12 each", notes: "Side to side", imageUrl: "" },
            { name: "Single Leg Glute Bridges", sets: 3, reps: "10-12 each", notes: "One leg extended", imageUrl: "" }
          ]
        },
        {
          category: "Plyometrics",
          rest: "90s",
          exercises: [
            { name: "Box Jumps", sets: 3, reps: "6-10", notes: "Step down", imageUrl: "" },
            { name: "Broad Jumps", sets: 3, reps: "5", notes: "Maximum distance", imageUrl: "" }
          ]
        }
      ]
    },
    friday: {
      name: "Conditioning Circuit",
      focus: "Metabolic conditioning + endurance",
      duration: "45-55 min",
      blocks: [
        {
          category: "Warm-up",
          rest: "Minimal",
          exercises: [
            { name: "Light Jogging", sets: 1, reps: "5 minutes", notes: "Get heart rate up", imageUrl: "" },
            { name: "Dynamic Stretching", sets: 1, reps: "5 minutes", notes: "Full body mobility", imageUrl: "" }
          ]
        },
        {
          category: "Circuit Training",
          rest: "30s work, 15s rest",
          exercises: [
            { name: "Burpees", sets: 4, reps: "30s", notes: "Full burpee with jump", imageUrl: "" },
            { name: "Mountain Climbers", sets: 4, reps: "30s", notes: "Fast pace", imageUrl: "" },
            { name: "Jump Squats", sets: 4, reps: "30s", notes: "Continuous jumping", imageUrl: "" },
            { name: "Push-Ups", sets: 4, reps: "30s", notes: "As many as possible", imageUrl: "" },
            { name: "High Knees", sets: 4, reps: "30s", notes: "Drive knees up high", imageUrl: "" }
          ]
        },
        {
          category: "Finisher",
          rest: "2 minutes",
          exercises: [
            { name: "Plank Hold", sets: 3, reps: "45-60s", notes: "Hold strong position", imageUrl: "" }
          ]
        }
      ]
    },
    saturday: {
      name: "Skill Development",
      focus: "Advanced skills + balance",
      duration: "50-60 min",
      blocks: [
        {
          category: "Skill Warm-up",
          rest: "1-2 minutes",
          exercises: [
            { name: "Wrist Circles", sets: 3, reps: "10 each direction", notes: "Prepare wrists", imageUrl: "" },
            { name: "Shoulder Shrugs", sets: 2, reps: "15", notes: "Activate shoulders", imageUrl: "" },
            { name: "Hollow Body Rocks", sets: 3, reps: "10", notes: "Core activation", imageUrl: "" }
          ]
        },
        {
          category: "Handstand Practice",
          rest: "2-3 minutes",
          exercises: [
            { name: "Wall Handstand", sets: 5, reps: "30-60s", notes: "Chest to wall", imageUrl: "" },
            { name: "Handstand Kick-Ups", sets: 4, reps: "5-10", notes: "Away from wall", imageUrl: "" },
            { name: "Crow Pose", sets: 4, reps: "15-30s", notes: "Balance on hands", imageUrl: "" },
            { name: "L-Sit Progression", sets: 4, reps: "10-20s", notes: "Knees bent or straight", imageUrl: "" }
          ]
        },
        {
          category: "Balance Training",
          rest: "60s",
          exercises: [
            { name: "Single Leg Stand", sets: 3, reps: "30-45s each", notes: "Eyes closed progression", imageUrl: "" },
            { name: "Warrior III Hold", sets: 3, reps: "20-30s each", notes: "Yoga balance pose", imageUrl: "" }
          ]
        }
      ]
    },
    sunday: {
      name: "Recovery Flow",
      focus: "Deep stretching + restoration",
      duration: "30-45 min",
      blocks: [
        {
          category: "Restorative Practice",
          rest: "As needed",
          exercises: [
            { name: "Yin Yoga Flow", sets: 1, reps: "20 minutes", notes: "Hold poses 3-5 minutes", imageUrl: "" },
            { name: "Foam Rolling", sets: 1, reps: "10 minutes", notes: "Target tight areas", imageUrl: "" },
            { name: "Meditation", sets: 1, reps: "10-15 minutes", notes: "Mindfulness practice", imageUrl: "" }
          ]
        }
      ]
    }
  },
  Advanced: {
    monday: {
      name: "Advanced Push Complex",
      focus: "High-level push patterns + planche progression",
      duration: "60-75 min",
      blocks: [
        {
          category: "Intensive Warm-up",
          rest: "30s",
          exercises: [
            { name: "Handstand Wall Walk", sets: 3, reps: "5", notes: "Walk up and down wall", imageUrl: "" },
            { name: "Archer Push-Up Flow", sets: 2, reps: "8 each side", notes: "Smooth transitions", imageUrl: "" },
            { name: "Pike Walk-Outs", sets: 3, reps: "10", notes: "Walk hands out and back", imageUrl: "" }
          ]
        },
        {
          category: "Strength Complex",
          rest: "3-4 minutes",
          exercises: [
            { name: "One-Arm Push-Up Progression", sets: 5, reps: "2-5 each", notes: "Use assistance as needed", imageUrl: "" },
            { name: "Handstand Push-Ups", sets: 4, reps: "3-8", notes: "Chest to wall or freestanding", imageUrl: "" },
            { name: "Planche Lean", sets: 5, reps: "15-30s", notes: "Lean forward, lift toes", imageUrl: "" },
            { name: "Pseudo Planche Push-Ups", sets: 4, reps: "5-12", notes: "Hands by hips", imageUrl: "" },
            { name: "90-Degree Push-Ups", sets: 3, reps: "3-8", notes: "Feet elevated high", imageUrl: "" }
          ]
        },
        {
          category: "Skill Integration",
          rest: "2 minutes",
          exercises: [
            { name: "Tuck Planche", sets: 4, reps: "5-15s", notes: "Knees to chest", imageUrl: "" },
            { name: "Crow to Chaturanga", sets: 3, reps: "5", notes: "Flow between poses", imageUrl: "" }
          ]
        }
      ]
    },
    tuesday: {
      name: "Elite Pull Training",
      focus: "One-arm pull-up progression + muscle-ups",
      duration: "60-75 min",
      blocks: [
        {
          category: "Activation",
          rest: "60s",
          exercises: [
            { name: "Scapular Pull-Ups", sets: 4, reps: "15", notes: "Shoulder blade movement only", imageUrl: "" },
            { name: "Typewriter Pull-Ups", sets: 3, reps: "5 each side", notes: "Side to side at top", imageUrl: "" },
            { name: "Archer Pull-Ups", sets: 3, reps: "3-6 each side", notes: "One arm emphasis", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "3-5 minutes",
          exercises: [
            { name: "Weighted Pull-Ups", sets: 5, reps: "3-6", notes: "Add weight as able", imageUrl: "" },
            { name: "One-Arm Pull-Up Negatives", sets: 4, reps: "3-5 each", notes: "5-10 second descent", imageUrl: "" },
            { name: "Muscle-Up Progression", sets: 4, reps: "1-5", notes: "Kipping or strict", imageUrl: "" },
            { name: "Commando Pull-Ups", sets: 3, reps: "6-10", notes: "Alternate sides over bar", imageUrl: "" },
            { name: "L-Sit Pull-Ups", sets: 3, reps: "3-6", notes: "Legs straight out", imageUrl: "" }
          ]
        },
        {
          category: "Endurance Set",
          rest: "As needed",
          exercises: [
            { name: "Max Pull-Ups", sets: 3, reps: "AMRAP", notes: "Rest-pause if needed", imageUrl: "" },
            { name: "Dead Hang", sets: 2, reps: "60-90s", notes: "Grip endurance", imageUrl: "" }
          ]
        }
      ]
    },
    wednesday: {
      name: "Elite Core",
      focus: "Advanced core + isometrics",
      duration: "50-65 min",
      blocks: [
        {
          category: "Advanced Activation",
          rest: "30s",
          exercises: [
            { name: "Jefferson Curls", sets: 3, reps: "8-10", notes: "Spinal articulation with weight", imageUrl: "" },
            { name: "Hip Flexor Marches", sets: 3, reps: "15 each leg", notes: "Resist with band", imageUrl: "" },
            { name: "90/90 Hip Switches", sets: 3, reps: "10", notes: "Complex hip mobility", imageUrl: "" }
          ]
        },
        {
          category: "Elite Core Strength",
          rest: "90-120s",
          exercises: [
            { name: "Dragon Flags", sets: 5, reps: "6-12", notes: "Full range, slow control", imageUrl: "" },
            { name: "Front Lever Raises", sets: 4, reps: "5-8", notes: "From dead hang", imageUrl: "" },
            { name: "Human Flag (Core)", sets: 4, reps: "8-20s", notes: "Focus on core stability", imageUrl: "" },
            { name: "One-Arm Plank", sets: 4, reps: "15-30s each", notes: "Remove one arm", imageUrl: "" },
            { name: "L-Sit to V-Sit", sets: 4, reps: "5-10", notes: "Advanced L-sit variation", imageUrl: "" },
            { name: "Weighted V-Ups", sets: 4, reps: "10-15", notes: "Hold weight overhead", imageUrl: "" }
          ]
        },
        {
          category: "Isometric Complex",
          rest: "2-3 minutes",
          exercises: [
            { name: "Full L-Sit", sets: 4, reps: "20-45s", notes: "Legs straight, parallel", imageUrl: "" },
            { name: "Manna Progression", sets: 3, reps: "5-15s", notes: "L-sit past vertical", imageUrl: "" },
            { name: "Hollow Body Hold (Weighted)", sets: 3, reps: "30-60s", notes: "Hold weight overhead", imageUrl: "" },
            { name: "Side Lever Hold", sets: 3, reps: "10-20s each side", notes: "Human flag variation", imageUrl: "" }
          ]
        }
      ]
    },
    thursday: {
      name: "Power & Plyometrics",
      focus: "Explosive lower body + advanced jumps",
      duration: "60-70 min",
      blocks: [
        {
          category: "Power Warm-up",
          rest: "45s",
          exercises: [
            { name: "Depth Jumps", sets: 3, reps: "5", notes: "Step down, immediate jump", imageUrl: "" },
            { name: "Pogo Jumps", sets: 3, reps: "15", notes: "Quick ground contact", imageUrl: "" },
            { name: "Lateral Bounds", sets: 3, reps: "8 each side", notes: "Side to side jumps", imageUrl: "" }
          ]
        },
        {
          category: "Strength Training",
          rest: "3-4 minutes",
          exercises: [
            { name: "Pistol Squats", sets: 4, reps: "6-10 each", notes: "Full single leg squats", imageUrl: "" },
            { name: "Jump Squats", sets: 4, reps: "10", notes: "Maximum height", imageUrl: "" },
            { name: "Dragon Squats", sets: 3, reps: "5-8 each", notes: "One leg behind other", imageUrl: "" },
            { name: "Shrimp Squats", sets: 3, reps: "3-6 each", notes: "Advanced single leg", imageUrl: "" },
            { name: "Cossack Squats", sets: 3, reps: "8-12 each", notes: "Side lunge variation", imageUrl: "" }
          ]
        },
        {
          category: "Plyometric Complex",
          rest: "2-3 minutes",
          exercises: [
            { name: "Box Jump to Depth Jump", sets: 4, reps: "5", notes: "Reactive jumping", imageUrl: "" },
            { name: "Single Leg Bounds", sets: 3, reps: "6 each", notes: "Distance emphasis", imageUrl: "" },
            { name: "Tuck Jumps", sets: 3, reps: "8", notes: "Knees to chest", imageUrl: "" }
          ]
        }
      ]
    },
    friday: {
      name: "High-Intensity Complex",
      focus: "Advanced conditioning + skill endurance",
      duration: "50-65 min",
      blocks: [
        {
          category: "Skill Conditioning",
          rest: "2 minutes",
          exercises: [
            { name: "Handstand Walk", sets: 4, reps: "10-20 steps", notes: "Against wall or freestanding", imageUrl: "" },
            { name: "Muscle-Up to Handstand", sets: 3, reps: "3-5", notes: "Ring or bar", imageUrl: "" },
            { name: "Human Flag Progression", sets: 4, reps: "5-15s", notes: "Side lever hold", imageUrl: "" },
            { name: "Front Lever Progression", sets: 4, reps: "5-20s", notes: "Tuck to advanced tuck", imageUrl: "" }
          ]
        },
        {
          category: "Metabolic Circuit",
          rest: "45s work, 15s rest",
          exercises: [
            { name: "Burpee Muscle-Ups", sets: 5, reps: "45s", notes: "If equipment available", imageUrl: "" },
            { name: "Pistol Jump Squats", sets: 5, reps: "45s", notes: "Alternating legs", imageUrl: "" },
            { name: "Handstand Push-Ups", sets: 5, reps: "45s", notes: "Scale as needed", imageUrl: "" },
            { name: "Archer Pull-Ups", sets: 5, reps: "45s", notes: "Alternating sides", imageUrl: "" },
            { name: "L-Sit to Handstand", sets: 5, reps: "45s", notes: "Advanced flow", imageUrl: "" }
          ]
        }
      ]
    },
    saturday: {
      name: "Elite Skills",
      focus: "Master-level calisthenics skills",
      duration: "70-90 min",
      blocks: [
        {
          category: "Handstand Mastery",
          rest: "2-3 minutes",
          exercises: [
            { name: "Freestanding Handstand", sets: 6, reps: "30-120s", notes: "Work toward 2+ minutes", imageUrl: "" },
            { name: "One-Arm Handstand Progression", sets: 5, reps: "5-15s each", notes: "Advanced skill", imageUrl: "" },
            { name: "Handstand on Parallettes", sets: 4, reps: "15-45s", notes: "Wrist-friendly", imageUrl: "" },
            { name: "Press to Handstand", sets: 4, reps: "3-8", notes: "No kicking up", imageUrl: "" }
          ]
        },
        {
          category: "Advanced Skills",
          rest: "3-4 minutes",
          exercises: [
            { name: "Full Planche", sets: 5, reps: "3-10s", notes: "Straight body lever", imageUrl: "" },
            { name: "One-Arm Pull-Up", sets: 5, reps: "1-3 each", notes: "Ultimate pull strength", imageUrl: "" },
            { name: "Iron Cross Progression", sets: 4, reps: "3-8s", notes: "Ring-specific skill", imageUrl: "" },
            { name: "Human Flag", sets: 4, reps: "5-15s", notes: "Side lever mastery", imageUrl: "" },
            { name: "Maltese Progression", sets: 3, reps: "3-8s", notes: "Ring skill", imageUrl: "" }
          ]
        },
        {
          category: "Skill Combinations",
          rest: "3-5 minutes",
          exercises: [
            { name: "Muscle-Up to Handstand", sets: 3, reps: "3-5", notes: "Flow combination", imageUrl: "" },
            { name: "Planche to Handstand", sets: 3, reps: "3-5", notes: "Advanced transition", imageUrl: "" }
          ]
        }
      ]
    },
    sunday: {
      name: "Active Recovery Plus",
      focus: "Advanced flexibility + restoration",
      duration: "45-60 min",
      blocks: [
        {
          category: "Advanced Stretching",
          rest: "As needed",
          exercises: [
            { name: "Jefferson Curl", sets: 3, reps: "8-10", notes: "Spinal articulation", imageUrl: "" },
            { name: "Oversplits", sets: 3, reps: "60s each leg", notes: "Elevated leg splits", imageUrl: "" },
            { name: "Pancake Stretch", sets: 3, reps: "90s", notes: "Wide leg forward fold", imageUrl: "" },
            { name: "Full Bridge", sets: 3, reps: "60s", notes: "Wheel pose hold", imageUrl: "" }
          ]
        },
        {
          category: "Recovery Techniques",
          rest: "As needed",
          exercises: [
            { name: "Contrast Stretching", sets: 1, reps: "20 minutes", notes: "PNF techniques", imageUrl: "" },
            { name: "Breathing Exercises", sets: 3, reps: "10 minutes", notes: "Box breathing, Wim Hof", imageUrl: "" },
            { name: "Meditation/Visualization", sets: 1, reps: "15-20 minutes", notes: "Mental training", imageUrl: "" }
          ]
        }
      ]
    }
  }
};

// TODO: Fill imageUrl fields from user-provided images for specific exercises
// TODO: Add videoUrl fields where demonstration videos are available