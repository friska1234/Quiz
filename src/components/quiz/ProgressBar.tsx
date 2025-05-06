
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <div className="text-sm text-gray-500">Progress</div>
        <div className="text-sm font-medium">{`${currentQuestion} of ${totalQuestions}`}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-friska-purple h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div 
            key={i} 
            className={cn(
              "h-3 w-3 rounded-full",
              i < currentQuestion ? "bg-friska-purple" : "bg-gray-300"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
