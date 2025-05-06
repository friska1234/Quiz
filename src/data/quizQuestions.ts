
import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of the following is a good source of complex carbohydrates?",
    options: ["Butter", "Brown Rice", "Soda", "Butter"],
    correctAnswer: "Brown Rice",
    explanation: "Brown rice is a whole grain and a rich source of complex carbohydrates, which digest slowly and provide long-lasting energy. Unlike simple carbs (like white sugar and soda), complex carbs are high in fiber, vitamins, and minerals, helping with satiety and blood sugar control. Butter, on the other hand, is primarily fat—not a source of carbs at all."
  },
  {
    id: 2,
    question: "Which nutrient is most important for building and repairing muscles?",
    options: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
    correctAnswer: "Proteins",
    explanation: "Proteins are essential for muscle growth and repair. They are made up of amino acids, which are the building blocks of muscle tissue. When you exercise, you create micro-tears in your muscle fibers, and protein helps repair this damage, resulting in muscle growth and increased strength."
  },
  {
    id: 3,
    question: "Which vitamin is produced when your skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    correctAnswer: "Vitamin D",
    explanation: "Vitamin D is synthesized in the skin when it's exposed to ultraviolet B (UVB) rays from sunlight. This vitamin plays a crucial role in calcium absorption for bone health, immune function, and reducing inflammation. Many people, especially those living in northern latitudes or with limited sun exposure, may be deficient in vitamin D."
  },
  {
    id: 4,
    question: "Which food is the richest source of omega-3 fatty acids?",
    options: ["Chicken", "Fatty Fish", "Whole Wheat Bread", "Carrots"],
    correctAnswer: "Fatty Fish",
    explanation: "Fatty fish like salmon, mackerel, sardines, and herring are the best sources of omega-3 fatty acids, particularly EPA and DHA. These essential fatty acids have numerous health benefits, including reducing inflammation, supporting heart health, and promoting brain function. Plant sources like flaxseeds and walnuts contain ALA, another type of omega-3, but in smaller amounts and less bioavailable forms."
  },
  {
    id: 5,
    question: "Which of these has the highest fiber content?",
    options: ["White Bread", "Chicken Breast", "Chia Seeds", "Olive Oil"],
    correctAnswer: "Chia Seeds",
    explanation: "Chia seeds are one of the richest sources of dietary fiber available, containing about 10 grams of fiber per ounce (28 grams). Fiber promotes digestive health, helps maintain stable blood sugar levels, and contributes to feeling full longer. White bread has had most of its fiber removed during processing, chicken breast contains no fiber (as it's an animal product), and olive oil has no fiber as it's pure fat."
  }
];
