
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ProgressBar from '@/components/quiz/ProgressBar';
import QuizOption from '@/components/quiz/QuizOption';
import { quizQuestions } from '@/data/quizQuestions';
import type { QuizState } from '@/types/quiz';

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: quizQuestions,
    currentQuestionIndex: 0,
    answers: {},
    showExplanation: false,
    quizCompleted: false
  });

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

  const calculateScore = () => {
    let correctAnswers = 0;
    quizState.questions.forEach(question => {
      if (quizState.answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  if (quizState.quizCompleted) {
    const score = calculateScore();
    const totalQuestions = quizState.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Nutrition Quiz Results</h1>
          <div className="mb-6">
            <div className="w-36 h-36 flex items-center justify-center bg-friska-purple/10 rounded-full mx-auto">
              <span className="text-4xl font-bold text-friska-purple">{percentage}%</span>
            </div>
          </div>
          <p className="text-lg mb-2">You got <span className="font-bold text-friska-purple">{score}</span> out of <span className="font-bold">{totalQuestions}</span> questions correct.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Nutrition Knowledge Summary</h3>
          <p className="text-gray-700 mb-4">
            {percentage >= 80 
              ? "Excellent job! You have a strong understanding of nutrition fundamentals." 
              : percentage >= 60 
              ? "Good work! You have a solid foundation of nutrition knowledge with some areas to improve." 
              : "Thanks for taking the quiz! There are several nutrition concepts you might want to learn more about."}
          </p>
          <p className="text-gray-700">
            Understanding nutrition is the first step toward making healthier choices. Friska NutriAI can help you continue your learning journey with personalized recommendations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => setQuizState({
              questions: quizQuestions,
              currentQuestionIndex: 0,
              answers: {},
              showExplanation: false,
              quizCompleted: false
            })}
            variant="outline"
            className="border-friska-purple text-friska-purple hover:bg-friska-purple/10"
          >
            Retake Quiz
          </Button>
          <Link to="/">
            <Button className="bg-friska-purple hover:bg-friska-light-purple text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

export default Quiz;
