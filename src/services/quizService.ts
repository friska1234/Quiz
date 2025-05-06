
import { QuizQuestion } from "@/types/quiz";

const API_BASE_URL = "https://friskaaiapi.azurewebsites.net";

interface ApiQuestion {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  explanation: string;
}

interface ApiResponse {
  date: string;
  questions: ApiQuestion[];
}

export async function fetchQuizQuestions(): Promise<QuizQuestion[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
    // Transform the API response format to match our QuizQuestion type
    return data.questions.map((apiQuestion, index) => {
      const options = [
        apiQuestion.option1,
        apiQuestion.option2,
        apiQuestion.option3,
        apiQuestion.option4
      ];
      
      // Convert the answer from letter (A, B, C, D) to the actual option text
      const answerMap: Record<string, number> = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      const correctAnswerIndex = answerMap[apiQuestion.answer];
      const correctAnswer = options[correctAnswerIndex];

      return {
        id: index + 1, // Generate an id since the API doesn't provide one
        question: apiQuestion.question,
        options,
        correctAnswer,
        explanation: apiQuestion.explanation
      };
    });
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    throw error;
  }
}
