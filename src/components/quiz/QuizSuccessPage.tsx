
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Share2, Trophy, AlertTriangle } from "lucide-react";

interface QuizSuccessPageProps {
  score: number;
  totalQuestions: number;
}

const QuizSuccessPage = ({ score, totalQuestions }: QuizSuccessPageProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPro = percentage >= 70; // Assume 70% or higher is "Pro" status

  return (
    <div className="container mx-auto h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#fff8f8] rounded-lg p-8 text-center shadow-md">
          {isPro ? (
            <>
              <div className="relative mb-8 flex justify-center">
                <Trophy size={120} className="text-friska-green animate-pulse" strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl font-bold mb-2">
                Congratulations, You're a<br />NutriAI Pro Now
              </h1>
              <p className="text-gray-700 mb-8 max-w-md mx-auto">
                Congratulations! You've successfully completed the quiz 
                and proven your knowledge on Nutrition. Keep up the 
                great work!
              </p>
              <Button className="bg-friska-purple hover:bg-friska-light-purple text-white px-5 py-2 flex items-center justify-center gap-2">
                <span>Share Now</span> <Share2 size={18} />
              </Button>
            </>
          ) : (
            <>
              <div className="relative mb-8 flex justify-center">
                <AlertTriangle size={120} className="text-amber-500" strokeWidth={1.5} />
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
                <Button className="bg-friska-purple hover:bg-friska-light-purple text-white px-5 py-2">
                  Try Again
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizSuccessPage;
