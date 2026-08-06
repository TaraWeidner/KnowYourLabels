window.LABEL_QUESTIONS = [
  {
    id: "cereal-calories",
    difficulty: "easy",
    difficultyLabel: "Label Rookie",
    topic: "Serving-size math",
    category: "Breakfast",
    product: "Crunchy Oat Cereal",
    servings: "About 8 servings per container",
    servingSize: "1 cup (55g)",
    calories: 210,
    nutrients: [
      ["Total Fat", "4g", "5%"], ["Sodium", "230mg", "10%"], ["Total Carbohydrate", "42g", "15%"],
      ["Dietary Fiber", "3g", "11%", true], ["Total Sugars", "12g", ""], ["Includes Added Sugars", "8g", "16%", true], ["Protein", "4g", ""]
    ],
    question: "If you eat 2 cups, how many calories is that?",
    choices: ["210", "320", "420", "840"],
    answer: 2,
    explanation: "One cup is one serving and has 210 calories. Two cups have 210 × 2 = 420 calories."
  },
  {
    id: "chips-serving",
    difficulty: "easy",
    difficultyLabel: "Label Rookie",
    topic: "Serving sizes",
    category: "Snack",
    product: "Classic Potato Chips",
    servings: "About 8 servings per bag",
    servingSize: "About 15 chips (28g)",
    calories: 160,
    nutrients: [
      ["Total Fat", "10g", "13%"], ["Sodium", "170mg", "7%"], ["Total Carbohydrate", "15g", "5%"],
      ["Dietary Fiber", "1g", "4%", true], ["Total Sugars", "1g", ""], ["Includes Added Sugars", "0g", "0%", true], ["Protein", "2g", ""]
    ],
    question: "About how many servings are 30 chips?",
    choices: ["1 serving", "1.5 servings", "2 servings", "3 servings"],
    answer: 2,
    explanation: "The serving size is about 15 chips. Thirty chips is about 2 servings."
  },
  {
    id: "yogurt-protein",
    difficulty: "easy",
    difficultyLabel: "Label Rookie",
    topic: "% Daily Value",
    category: "Dairy",
    product: "Vanilla Greek Yogurt",
    servings: "1 serving per container",
    servingSize: "1 container (150g)",
    calories: 140,
    nutrients: [
      ["Total Fat", "2g", "3%"], ["Sodium", "65mg", "3%"], ["Total Carbohydrate", "17g", "6%"],
      ["Dietary Fiber", "0g", "0%", true], ["Total Sugars", "14g", ""], ["Includes Added Sugars", "6g", "12%", true], ["Protein", "12g", "24%"]
    ],
    question: "Which nutrient is high based on the 20% Daily Value rule?",
    choices: ["Total fat", "Sodium", "Protein", "Added sugar"],
    answer: 2,
    explanation: "Protein is 24% Daily Value. A nutrient at 20% DV or more is generally considered high."
  },
  {
    id: "soda-added-sugar",
    difficulty: "easy",
    difficultyLabel: "Label Rookie",
    topic: "Added sugar",
    category: "Beverage",
    product: "Cola Soft Drink",
    servings: "1 serving per bottle",
    servingSize: "1 bottle (20 fl oz)",
    calories: 240,
    nutrients: [
      ["Total Fat", "0g", "0%"], ["Sodium", "75mg", "3%"], ["Total Carbohydrate", "65g", "24%"],
      ["Dietary Fiber", "0g", "0%", true], ["Total Sugars", "65g", ""], ["Includes Added Sugars", "65g", "130%", true], ["Protein", "0g", ""]
    ],
    question: "What percent of the Daily Value for added sugar is in the bottle?",
    choices: ["24%", "65%", "100%", "130%"],
    answer: 3,
    explanation: "The label lists 65g of added sugar, equal to 130% of the Daily Value."
  },
  {
    id: "oatmeal-fiber",
    difficulty: "easy",
    difficultyLabel: "Label Rookie",
    topic: "Finding nutrients",
    category: "Breakfast",
    product: "Maple Instant Oatmeal",
    servings: "1 packet per container",
    servingSize: "1 packet (43g)",
    calories: 170,
    nutrients: [
      ["Total Fat", "3g", "4%"], ["Sodium", "260mg", "11%"], ["Total Carbohydrate", "33g", "12%"],
      ["Dietary Fiber", "4g", "14%", true], ["Total Sugars", "12g", ""], ["Includes Added Sugars", "9g", "18%", true], ["Protein", "4g", ""]
    ],
    question: "How many grams of dietary fiber are in one packet?",
    choices: ["3g", "4g", "9g", "14g"],
    answer: 1,
    explanation: "One packet contains 4g of dietary fiber. The 14 beside it is the percent Daily Value, not grams."
  },
  {
    id: "soup-sodium",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "Whole-container math",
    category: "Meal",
    product: "Creamy Tomato Soup",
    servings: "2 servings per container",
    servingSize: "1 cup (245g)",
    calories: 150,
    nutrients: [
      ["Total Fat", "4g", "5%"], ["Sodium", "790mg", "34%"], ["Total Carbohydrate", "24g", "9%"],
      ["Dietary Fiber", "2g", "7%", true], ["Total Sugars", "12g", ""], ["Includes Added Sugars", "6g", "12%", true], ["Protein", "3g", ""]
    ],
    question: "How much sodium is in the whole container?",
    choices: ["790mg", "1,180mg", "1,580mg", "2,370mg"],
    answer: 2,
    explanation: "The container has 2 servings. 790mg × 2 = 1,580mg of sodium."
  },
  {
    id: "sports-drink-calories",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "Decimal servings",
    category: "Beverage",
    product: "Sports Drink",
    servings: "2.5 servings per bottle",
    servingSize: "12 fl oz (355mL)",
    calories: 90,
    nutrients: [
      ["Total Fat", "0g", "0%"], ["Sodium", "160mg", "7%"], ["Total Carbohydrate", "23g", "8%"],
      ["Dietary Fiber", "0g", "0%", true], ["Total Sugars", "21g", ""], ["Includes Added Sugars", "21g", "42%", true], ["Protein", "0g", ""]
    ],
    question: "How many calories are in the whole bottle?",
    choices: ["180", "210", "225", "250"],
    answer: 2,
    explanation: "The bottle has 2.5 servings. 90 × 2.5 = 225 calories."
  },
  {
    id: "granola-bar-low",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "% Daily Value",
    category: "Snack",
    product: "Chocolate Granola Bar",
    servings: "1 serving per package",
    servingSize: "1 bar (40g)",
    calories: 190,
    nutrients: [
      ["Total Fat", "7g", "9%"], ["Sodium", "95mg", "4%"], ["Total Carbohydrate", "29g", "11%"],
      ["Dietary Fiber", "3g", "11%", true], ["Total Sugars", "12g", ""], ["Includes Added Sugars", "10g", "20%", true], ["Protein", "4g", ""]
    ],
    question: "Which listed nutrient is low using the 5% Daily Value rule?",
    choices: ["Total fat", "Sodium", "Dietary fiber", "Added sugar"],
    answer: 1,
    explanation: "Sodium is 4% Daily Value. A nutrient at 5% DV or less is generally considered low."
  },
  {
    id: "peanut-butter-servings",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "Serving-size math",
    category: "Spread",
    product: "Creamy Peanut Butter",
    servings: "About 14 servings per jar",
    servingSize: "2 Tbsp (32g)",
    calories: 190,
    nutrients: [
      ["Total Fat", "16g", "21%"], ["Sodium", "140mg", "6%"], ["Total Carbohydrate", "7g", "3%"],
      ["Dietary Fiber", "2g", "7%", true], ["Total Sugars", "3g", ""], ["Includes Added Sugars", "2g", "4%", true], ["Protein", "7g", ""]
    ],
    question: "You use 1 tablespoon. About how many calories is that?",
    choices: ["48", "95", "190", "380"],
    answer: 1,
    explanation: "One serving is 2 tablespoons and 190 calories. One tablespoon is half a serving, or about 95 calories."
  },
  {
    id: "pizza-slices",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "Serving-size math",
    category: "Meal",
    product: "Frozen Cheese Pizza",
    servings: "4 servings per pizza",
    servingSize: "1/4 pizza (129g)",
    calories: 330,
    nutrients: [
      ["Total Fat", "14g", "18%"], ["Sodium", "720mg", "31%"], ["Total Carbohydrate", "39g", "14%"],
      ["Dietary Fiber", "2g", "7%", true], ["Total Sugars", "5g", ""], ["Includes Added Sugars", "2g", "4%", true], ["Protein", "14g", "28%"]
    ],
    question: "How many calories are in half the pizza?",
    choices: ["330", "495", "660", "1,320"],
    answer: 2,
    explanation: "Half a pizza is 2 servings. 330 × 2 = 660 calories."
  },
  {
    id: "yogurt-natural-sugar",
    difficulty: "hard",
    difficultyLabel: "Label Ninja",
    topic: "Sugar math",
    category: "Dairy",
    product: "Vanilla Greek Yogurt",
    servings: "1 serving per container",
    servingSize: "1 container (150g)",
    calories: 140,
    nutrients: [
      ["Total Fat", "2g", "3%"], ["Sodium", "65mg", "3%"], ["Total Carbohydrate", "17g", "6%"],
      ["Dietary Fiber", "0g", "0%", true], ["Total Sugars", "14g", ""], ["Includes Added Sugars", "6g", "12%", true], ["Protein", "12g", "24%"]
    ],
    question: "How many grams of sugar are not added sugar?",
    choices: ["6g", "8g", "12g", "14g"],
    answer: 1,
    explanation: "Total sugar is 14g and added sugar is 6g. 14 − 6 = 8g that is not added sugar."
  },
  {
    id: "pasta-high",
    difficulty: "hard",
    difficultyLabel: "Label Ninja",
    topic: "% Daily Value",
    category: "Meal",
    product: "Frozen Pasta Bowl",
    servings: "1 serving per container",
    servingSize: "1 bowl (310g)",
    calories: 430,
    nutrients: [
      ["Total Fat", "14g", "18%"], ["Sodium", "980mg", "43%"], ["Total Carbohydrate", "58g", "21%"],
      ["Dietary Fiber", "6g", "21%", true], ["Total Sugars", "8g", ""], ["Includes Added Sugars", "3g", "6%", true], ["Protein", "18g", "36%"]
    ],
    question: "Which answer correctly identifies every nutrient at 20% Daily Value or more?",
    choices: ["Sodium only", "Sodium and protein", "Carbohydrate, fiber, and protein", "Sodium, carbohydrate, fiber, and protein"],
    answer: 3,
    explanation: "Sodium (43%), carbohydrate (21%), fiber (21%), and protein (36%) are all at or above 20% Daily Value."
  },
  {
    id: "juice-servings",
    difficulty: "hard",
    difficultyLabel: "Label Ninja",
    topic: "Fractional servings",
    category: "Beverage",
    product: "Orange Juice",
    servings: "About 6 servings per bottle",
    servingSize: "8 fl oz (240mL)",
    calories: 110,
    nutrients: [
      ["Total Fat", "0g", "0%"], ["Sodium", "0mg", "0%"], ["Total Carbohydrate", "26g", "9%"],
      ["Dietary Fiber", "0g", "0%", true], ["Total Sugars", "22g", ""], ["Includes Added Sugars", "0g", "0%", true], ["Protein", "2g", ""]
    ],
    question: "A 12-ounce glass contains about how many calories?",
    choices: ["110", "145", "165", "220"],
    answer: 2,
    explanation: "Twelve ounces is 1.5 servings. 110 × 1.5 = 165 calories."
  },
  {
    id: "crackers-sodium",
    difficulty: "hard",
    difficultyLabel: "Label Ninja",
    topic: "Comparing amounts",
    category: "Snack",
    product: "Whole-Grain Crackers",
    servings: "About 7 servings per box",
    servingSize: "16 crackers (30g)",
    calories: 130,
    nutrients: [
      ["Total Fat", "4g", "5%"], ["Sodium", "250mg", "11%"], ["Total Carbohydrate", "22g", "8%"],
      ["Dietary Fiber", "3g", "11%", true], ["Total Sugars", "2g", ""], ["Includes Added Sugars", "1g", "2%", true], ["Protein", "3g", ""]
    ],
    question: "If you eat 24 crackers, how much sodium do you consume?",
    choices: ["250mg", "325mg", "375mg", "500mg"],
    answer: 2,
    explanation: "Twenty-four crackers is 1.5 servings. 250mg × 1.5 = 375mg sodium."
  },
  {
    id: "cookie-package",
    difficulty: "hard",
    difficultyLabel: "Label Ninja",
    topic: "Whole-package math",
    category: "Treat",
    product: "Chocolate Sandwich Cookies",
    servings: "About 5 servings per sleeve",
    servingSize: "3 cookies (34g)",
    calories: 160,
    nutrients: [
      ["Total Fat", "7g", "9%"], ["Sodium", "135mg", "6%"], ["Total Carbohydrate", "25g", "9%"],
      ["Dietary Fiber", "1g", "4%", true], ["Total Sugars", "14g", ""], ["Includes Added Sugars", "14g", "28%", true], ["Protein", "1g", ""]
    ],
    question: "How many grams of added sugar are in the whole sleeve?",
    choices: ["14g", "28g", "56g", "70g"],
    answer: 3,
    explanation: "The sleeve has about 5 servings. 14g × 5 = 70g of added sugar."
  },
  {
    id: "trail-mix-calories",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "Serving-size math",
    category: "Snack",
    product: "Fruit & Nut Trail Mix",
    servings: "About 9 servings per bag",
    servingSize: "1/4 cup (30g)",
    calories: 150,
    nutrients: [
      ["Total Fat", "9g", "12%"], ["Sodium", "80mg", "3%"], ["Total Carbohydrate", "15g", "5%"],
      ["Dietary Fiber", "2g", "7%", true], ["Total Sugars", "10g", ""], ["Includes Added Sugars", "5g", "10%", true], ["Protein", "4g", ""]
    ],
    question: "How many calories are in 1/2 cup of trail mix?",
    choices: ["150", "225", "300", "600"],
    answer: 2,
    explanation: "One-half cup is 2 servings of one-quarter cup. 150 × 2 = 300 calories."
  },
  {
    id: "ramen-sodium",
    difficulty: "medium",
    difficultyLabel: "Label Detective",
    topic: "Whole-package math",
    category: "Meal",
    product: "Instant Noodle Cup",
    servings: "2 servings per container",
    servingSize: "1/2 container (43g dry)",
    calories: 190,
    nutrients: [
      ["Total Fat", "7g", "9%"], ["Sodium", "790mg", "34%"], ["Total Carbohydrate", "27g", "10%"],
      ["Dietary Fiber", "1g", "4%", true], ["Total Sugars", "2g", ""], ["Includes Added Sugars", "0g", "0%", true], ["Protein", "4g", ""]
    ],
    question: "If you eat the whole cup, what percent Daily Value of sodium is that?",
    choices: ["34%", "50%", "68%", "79%"],
    answer: 2,
    explanation: "The cup contains 2 servings. 34% × 2 = 68% of the Daily Value for sodium."
  },
  {
    id: "smoothie-sugar",
    difficulty: "hard",
    difficultyLabel: "Label Ninja",
    topic: "Sugar math",
    category: "Beverage",
    product: "Bottled Fruit Smoothie",
    servings: "2 servings per bottle",
    servingSize: "8 fl oz (240mL)",
    calories: 120,
    nutrients: [
      ["Total Fat", "0g", "0%"], ["Sodium", "15mg", "1%"], ["Total Carbohydrate", "29g", "11%"],
      ["Dietary Fiber", "2g", "7%", true], ["Total Sugars", "23g", ""], ["Includes Added Sugars", "4g", "8%", true], ["Protein", "1g", ""]
    ],
    question: "How many grams of total sugar are in the whole bottle?",
    choices: ["23g", "27g", "46g", "58g"],
    answer: 2,
    explanation: "There are 2 servings, each with 23g total sugar. 23g × 2 = 46g."
  }
];
