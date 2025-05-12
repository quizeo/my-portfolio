import rollDice from "../assets/mobile/rollDice.png";
import trackerExpenses from "../assets/mobile/trackerExpenses.png";
import meals from "../assets/mobile/meals.png";
import quizFlutter from "../assets/mobile/quizFlutter.png";
import taRides from "../assets/mobile/TaRides.png";

export const mobile = [
  {
    id: "mobile-001", // Using constant string IDs
    title: "Role Dice",
    description: "This project is centered around the concept of rolling dice",
    platform: ["full stack", "mobile"],
    tech: ["flutter"],
    githubLink: "https://github.com/zeo18/Roll_dice",
    link: "no link",
    image: { rollDice },
    featured: false,
  },
  {
    id: "mobile-002",
    title: "Tracker Expenses",
    description:
      "This project serves as an Expense Tracker, allowing users to carefully monitor their spending. The interface includes a dynamic line graph that visually represents how their expenses change over time.",
    platform: ["front-end", "mobile"],
    tech: ["flutter"],
    githubLink: "https://github.com/zeo18/Expenses-Tracker",
    link: "no link",
    image: { trackerExpenses },
    featured: false,
  },
  {
    id: "mobile-003",
    title: "Meals",
    description:
      "This project focuses on organizing various meal categories, where each specific meal is accompanied by a detailed list of ingredients and comprehensive step-by-step instructions guiding users on the cooking process.",
    platform: ["front-end", "mobile"],
    tech: ["flutter"],
    githubLink: "https://github.com/zeo18/Meals",
    link: "no link",
    image: { meals },
    featured: false,
  },
  {
    id: "mobile-004",
    title: "Quiz Flutter",
    description:
      "This project involves a Flutter-based quiz application where users respond to provided questions. Once all questions are answered, the application displays the overall result, highlighting both correct and incorrect answers to provide users with insights into their quiz performance.",
    platform: ["front-end", "mobile"],
    tech: ["flutter"],
    githubLink: "https://github.com/zeo18/Quiz_flutterr",
    link: "no link",
    image: { quizFlutter },
    featured: false,
  },
  {
    id: "mobile-005",
    title: "TaRides",
    description:
      "A community-based mobile application that allows bikers to interact with one another and complete challenges. This allows users to engage in friendly challenges with fellow cyclists. The app integrates social connectivity, enabling cyclists to share their experiences, tips, and accomplishments within the community. Emphasizing the benefits of exercise, TaRides aligns with the broader goal of enhancing physical well-being while creating a supportive environment for cyclists to thrive.",
    platform: ["full stack", "mobile"],
    tech: ["flutter", "firebase"],
    githubLink: "https://github.com/zeo18/Ta_Rides",
    link: "no link",
    image: { taRides },
    featured: true,
  },
];
