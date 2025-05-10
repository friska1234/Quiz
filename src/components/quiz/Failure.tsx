import React from 'react';
import { Button } from "@/components/ui/button";

interface QuizFailurePageProps {
    score: number;
    totalQuestions: number;
    onTryAgain: () => void;isWinner:boolean;
}

const QuizFailurePage: React.FC<QuizFailurePageProps> = ({ score, totalQuestions, onTryAgain }) => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-lg">
            <div className="bg-[#FFF8F8] shadow-md rounded-3xl p-8 text-center">
                <div className="mb-6 relative">
                    {/* Trophy with sparkles */}
                    <div className="mx-auto w-28 h-28 relative">
                        <div className="absolute -right-3 -top-3">
                            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">!</span>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Trophy body */}
                            <div className="w-24 h-24 bg-trophy-gold rounded-md mx-auto relative">
                                {/* Trophy cup */}
                                <div className="absolute w-full h-16 bg-trophy-gold rounded-md top-0 overflow-hidden">
                                    {/* Star in trophy */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white transform rotate-45"></div>
                                    </div>
                                    {/* Red bookmark */}
                                    <div className="absolute top-0 right-6 w-4 h-8 bg-red-500"></div>
                                    {/* Trophy shine */}
                                    <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full opacity-50"></div>
                                </div>
                                {/* Trophy handles */}
                                <div className="absolute -left-6 top-6 w-6 h-12 border-4 border-trophy-gold rounded-l-full"></div>
                                <div className="absolute -right-6 top-6 w-6 h-12 border-4 border-trophy-gold rounded-r-full"></div>
                                {/* Trophy base */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-trophy-gold"></div>
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-trophy-gold rounded-md"></div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold mt-8 mb-2">You're getting there — not a NutriAi Pro just yet!</h1>

                    <p className="text-gray-600 mb-4">
                        Don't be discouraged — every expert starts with a few wrong answers. Take a moment to review and try again. You're almost there!
                    </p>

                    <div className="mt-8">
                        <Button
                            onClick={onTryAgain}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-3 rounded-md font-medium"
                        >
                            Try Again
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizFailurePage;
