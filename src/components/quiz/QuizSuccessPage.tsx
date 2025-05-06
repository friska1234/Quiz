
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface QuizSuccessPageProps {
  score: number;
  totalQuestions: number;
}

const QuizSuccessPage = ({ score, totalQuestions }: QuizSuccessPageProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPro = percentage >= 70; // Assume 70% or higher is "Pro" status

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-[#f8fef0] rounded-lg p-8 text-center">
        {isPro ? (
          <>
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/9a250ea3-aed2-4d6e-a7c3-4b9f2389001f.png" 
                alt="Trophy with confetti" 
                className="mx-auto h-64 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Congratulations, You're a<br />NutriAI Pro Now
            </h1>
            <p className="text-gray-700 mb-8 max-w-md mx-auto">
              Congratulations! You've successfully completed the quiz 
              and proven your knowledge on Nutrition. Keep up the 
              great work!
            </p>
            <Button className="bg-friska-purple hover:bg-friska-light-purple text-white">
              Share Now
            </Button>
          </>
        ) : (
          <>
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/08f1bbbc-d1a1-4387-8c9b-ede9c3d2d82e.png" 
                alt="Trophy with alert" 
                className="mx-auto h-64 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">
              You're getting there — not a<br />NutriAI Pro just yet!
            </h1>
            <p className="text-gray-700 mb-8 max-w-md mx-auto">
              Don't be discouraged — every expert starts with a few
              wrong answers. Take a moment to review and try again.
              You're almost there!
            </p>
            <Link to="/quiz">
              <Button className="bg-friska-purple hover:bg-friska-light-purple text-white">
                Try Again
              </Button>
            </Link>
          </>
        )}
      </div>

      <div className="mt-8 text-center">
        <div className="mb-6">
          <p className="text-lg mb-1">Your Score</p>
          <div className="w-24 h-24 flex items-center justify-center bg-friska-purple/10 rounded-full mx-auto">
            <span className="text-3xl font-bold text-friska-purple">{percentage}%</span>
          </div>
        </div>
        <p className="text-gray-600">
          You got <span className="font-bold text-friska-purple">{score}</span> out of <span className="font-bold">{totalQuestions}</span> questions correct
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/">
          <Button variant="outline" className="mr-4 border-friska-purple text-friska-purple hover:bg-friska-purple/10">
            Back to Home
          </Button>
        </Link>
        <Link to="/quiz">
          <Button variant="outline" className="border-friska-purple text-friska-purple hover:bg-friska-purple/10">
            Retake Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuizSuccessPage;
