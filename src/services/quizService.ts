
import { QuizQuestion } from "@/types/quiz";

const API_BASE_URL = "https://friskaaiapi.azurewebsites.net";

export async function fetchQuizQuestions(): Promise<QuizQuestion[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    throw error;
  }
}
