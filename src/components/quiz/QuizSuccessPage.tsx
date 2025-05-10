
 
import { Share } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import AchievementCard from './ShareNow';


 

 interface CongratulationsCardProps {
  title: string;
  message: string;
}

const CongratulationsCard: React.FC<CongratulationsCardProps> = ({ title, message }) => {
  const handleShare = () => {
    setShowAchievement(true)
    console.log("Share button clicked");
    // Implement sharing functionality here
  };
  const [showAchievement, setShowAchievement] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#fafdf6]">
      {/* <Confetti /> */}
       {/* <img src="/2.png" width={100} height={100} alt="image"/> */}
      <div className="w-full max-w-md mx-auto bg-[#fafdf6] rounded-3xl shadow-lg p-8 flex flex-col items-center">
        <div className="relative mb-6 animate-float">
          {/* Trophy */}
          
          <img src="/2.png" width={300} height={300} alt="image" />

        </div>

        {/* Text content */}
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">{title}</h1>
        <p className="text-gray-700 text-center mb-8">
          {message}
        </p>

        {/* Share button */}
          <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg transition-colors"
        >
          Share Now <Share size={18} />
        </button>
      </div> {showAchievement && (
        <AchievementCard
          onClose={() => setShowAchievement(false)} title={''} subtitle={''} description={''} shareText={''} hashtag={''} />
      )} 
    </div>
  );
};

interface QuizSuccessPageProps {
  score: number;
  totalQuestions: number;
  isWinner: boolean;
  onTryAgain: () => void;
}


const QuizSuccessPage = ({ score, totalQuestions, onTryAgain }: QuizSuccessPageProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPro = percentage >= 70; // Assume 70% or higher is "Pro" status

  return (
    <div className="min-h-screen bg-[#fafdf6]">
      <CongratulationsCard
        title="Congratulations, You're a NutriAi Pro Now"
        message="Congratulations! You've successfully completed the quiz and proven your knowledge on Nutrition. Keep up the great work!"
      />
    </div>
  );
};

export default QuizSuccessPage;
