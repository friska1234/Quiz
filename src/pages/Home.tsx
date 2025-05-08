import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ProgressBar from '@/components/quiz/ProgressBar';
import QuizOption from '@/components/quiz/QuizOption';
import QuizSuccessPage from '@/components/quiz/QuizSuccessPage';
import { fetchQuizQuestions } from '@/services/quizService';
import { toast } from "@/components/ui/sonner";
import { Loader } from "lucide-react";
import type { QuizState } from '@/types/quiz';

const Home = () => {
  // Define the quiz state and functions first
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    showExplanation: false,
    quizCompleted: false
  });

  // Define the calculateScore function early
  const calculateScore = (answers: Record<string, string>, questions: any[]) => {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };
  
  const resetQuiz = () => {
    setQuizState({
      questions: quizState.questions,
      currentQuestionIndex: 0,
      answers: {},
      showExplanation: false,
      quizCompleted: false
    });
  };

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        const questions = await fetchQuizQuestions();
        setQuizState(prevState => ({
          ...prevState,
          questions
        }));
        setLoading(false);
      } catch (err) {
        setError("Failed to load quiz questions. Please try again later.");
        toast.error("Failed to load quiz questions");
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  // If still loading or no questions available yet
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center h-64">
        <Loader className="h-8 w-8 animate-spin text-friska-purple mb-4" />
        <p className="text-lg text-gray-600">Loading quiz questions...</p>
      </div>
    );
  }

  // If there was an error fetching questions
  if (error || quizState.questions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong</h2>
          <p className="mb-6 text-gray-700">{error || "No quiz questions available."}</p>
          <Link to="/">
            <Button className="bg-friska-purple hover:bg-friska-light-purple text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // If quiz is completed, show result page
  if (quizState.quizCompleted) {
    const score = calculateScore(quizState.answers, quizState.questions);
    const totalQuestions = quizState.questions.length;
    
    return <QuizSuccessPage 
      score={score} 
      totalQuestions={totalQuestions} 
      onTryAgain={resetQuiz}
    />;
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers[currentQuestion.id] || '';
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleSelectOption = (option: string) => {
    if (quizState.showExplanation) return;
    
    setQuizState(prevState => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [currentQuestion.id]: option
      }
    }));
  };

  const handleNext = () => {
    if (!quizState.showExplanation) {
      // Show explanation first
      setQuizState(prevState => ({
        ...prevState,
        showExplanation: true
      }));
      return;
    }

    const isLastQuestion = quizState.currentQuestionIndex === quizState.questions.length - 1;

    if (isLastQuestion) {
      // Quiz completed
      setQuizState(prevState => ({
        ...prevState,
        quizCompleted: true
      }));
    } else {
      // Move to next question
      setQuizState(prevState => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        showExplanation: false
      }));
    }
  };

  const handleBack = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prevState => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex - 1,
        showExplanation: false
      }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex items-center mb-4">
        <Link to="/" className="text-sm text-gray-500 hover:text-friska-purple">Home</Link>
        <span className="mx-2 text-gray-400">›</span>
        <span className="text-sm font-medium">Quiz</span>
      </div>

      <ProgressBar 
        currentQuestion={quizState.currentQuestionIndex + 1} 
        totalQuestions={quizState.questions.length} 
      />

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-center text-gray-500 mb-2">QUESTION {quizState.currentQuestionIndex + 1} OF {quizState.questions.length}</h2>
        <h1 className="text-2xl font-bold text-center mb-8">{currentQuestion.question}</h1>

        <div className="space-y-1">
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              selected={selectedAnswer === option}
              correct={quizState.showExplanation ? option === currentQuestion.correctAnswer : null}
              showResult={quizState.showExplanation}
              onClick={() => handleSelectOption(option)}
            />
          ))}
        </div>

        {quizState.showExplanation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start mb-2">
              <div className="bg-friska-green/20 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#79c142" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Correct Answer: </span>
                <span className="font-medium text-friska-green">{currentQuestion.correctAnswer}</span>
              </div>
            </div>
            <h4 className="font-semibold mb-1">Explanation:</h4>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button 
          onClick={handleBack}
          variant="outline" 
          disabled={quizState.currentQuestionIndex === 0}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Back
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={!selectedAnswer}
          className="bg-friska-purple hover:bg-friska-light-purple text-white"
        >
          {quizState.showExplanation ? 
            (quizState.currentQuestionIndex === quizState.questions.length - 1 ? "Finish Quiz" : "Next Question") : 
            "Check Answer"
          }
        </Button>
      </div>
    </div>
  );
};

export default Home;
