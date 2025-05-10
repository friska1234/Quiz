import { useEffect, useState } from 'react';
import { X, Linkedin, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';
import Lottie from 'lottie-react';

interface AchievementCardProps {
    title: string;
    subtitle: string;
    description: string;
    shareText: string;
    hashtag: string;
    onClose: () => void;
}

const AchievementCard = ({
    title = "You're getting there",
    subtitle = "Congratulations, You're a NutriAi Pro Now",
    description = "Congratulations! You've successfully completed the quiz and proven your knowledge on Nutrition. Keep up the great work!",
    shareText = "I aced the NutriAi quiz! Think you've got what it takes? 💪 Take the challenge and earn your trophy! 🏆",
    hashtag = "#NutriAiPro",
    onClose,
}: AchievementCardProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(`${shareText} ${hashtag} ${shareUrl}`);
        setCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 3000);
    };
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("https://friskaaiapi.azurewebsites.net/image/static/Success_Popup")
            .then((data) => {
                console.log("Fetched animation data:", data.url);
                setAnimationData(data.url);
            })

    }, []);


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-3xl shadow-xl max-w-md w-full relative animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">You’re getting there</h2>
                    <p className="text-gray-600 mt-1">Share this achievement to your community</p>

                    <div className="mt-6 bg-[#fffbed] rounded-xl p-6">
                        <div className="mb-4 flex justify-center">
                            {animationData && (
                                <Lottie animationData={animationData} className="w-40 h-40" />
                            )}

                        </div>

                        <h3 className="font-bold text-lg">{subtitle}</h3>
                        <p className="text-sm text-gray-600 mt-1">{description}</p>
                    </div>

                    <p className="mt-6 text-gray-700 font-medium text-sm px-6">
                        {shareText} <span className="font-bold">{hashtag}</span>
                    </p>

                    <p className="mt-6 font-medium text-gray-800">Share this with your social community</p>

                    <div className="mt-4 flex justify-center gap-4">
                        <a href="#" className="bg-[#0077B5] text-white p-2 rounded-md hover:bg-[#005885] transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="bg-gradient-to-tr from-[#FD5949] to-[#D6249F] text-white p-2 rounded-md hover:opacity-90 transition-opacity">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="bg-[#1877F2] text-white p-2 rounded-md hover:bg-[#0d65d9] transition-colors">
                            <Facebook size={24} />
                        </a>
                    </div>

                    {/* <div className="mt-4 text-center">
                        <p className="text-gray-500">OR</p>
                    </div> */}

                    {/* <button
                        onClick={copyToClipboard}
                        className="mt-4 border border-gray-300 rounded-full py-2 px-4 flex items-center justify-center gap-2 w-full hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12H16M8.8 17.19L7.47 18.51C6.7 19.29 5.55 19.62 4.47 19.38C3.39 19.13 2.53 18.35 2.25 17.28C1.98 16.2 2.3 15.05 3.07 14.28L5.62 11.73M15.2 6.81L16.53 5.49C17.3 4.71 18.45 4.38 19.53 4.62C20.61 4.87 21.47 5.65 21.75 6.72C22.02 7.8 21.7 8.95 20.93 9.72L18.38 12.27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {copied ? "Copied!" : "Copy Link"}
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;