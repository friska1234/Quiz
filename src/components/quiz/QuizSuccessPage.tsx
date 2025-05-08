
 
 import { Share } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type ConfettiPiece = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: string;
  rotation: number;
  delay: number;
};

const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#FF5252', '#FF7B52', '#FFB352', '#52BCFF', '#A552FF', '#FF52E3', '#52FF94', '#F2FF52'];
    const sizes = ['w-3 h-1.5', 'w-4 h-2', 'w-5 h-2'];

    const pieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position
      y: -10 - (Math.random() * 20), // Start above the viewport
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      rotation: Math.random() * 360,
      delay: Math.random() * 3,
    }));

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${piece.size} rounded-sm animate-confetti-fall`}
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

 interface CongratulationsCardProps {
  title: string;
  message: string;
}

const CongratulationsCard: React.FC<CongratulationsCardProps> = ({ title, message }) => {
  const handleShare = () => {
    console.log("Share button clicked");
    // Implement sharing functionality here
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#fafdf6]">
      <Confetti />

      <div className="w-full max-w-md mx-auto bg-[#fafdf6] rounded-3xl shadow-lg p-8 flex flex-col items-center">
        <div className="relative mb-6 animate-float">
          {/* Trophy */}
          <div className="relative">
            {/* Trophy body */}
            <div className="w-32 h-36 bg-amber-300 rounded-b-lg relative">
              {/* Trophy cup top */}
              <div className="absolute -top-4 -left-1 w-34 h-10 bg-amber-300 rounded-t-3xl"></div>

              {/* Trophy handles */}
              <div className="absolute -left-8 top-6 w-8 h-16 bg-amber-300 rounded-full"></div>
              <div className="absolute -right-8 top-6 w-8 h-16 bg-amber-300 rounded-full"></div>

              {/* Trophy base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-amber-400"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-amber-400"></div>

              {/* Trophy star */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* Red ribbon */}
              <div className="absolute top-0 right-2 w-6 h-12 bg-red-500">
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-red-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
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
      </div>
    </div>
  );
};

 interface QuizSuccessPageProps {
  score: number;
  totalQuestions: number;
  onTryAgain?: () => void;
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
