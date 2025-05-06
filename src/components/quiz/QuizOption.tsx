
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  option: string;
  selected: boolean;
  correct?: boolean | null;
  showResult: boolean;
  onClick: () => void;
}

const QuizOption = ({
  option,
  selected,
  correct,
  showResult,
  onClick
}: QuizOptionProps) => {
  return (
    <button
      className={cn(
        "w-full text-left p-4 border rounded-lg mb-3 transition-all",
        selected && !showResult && "border-friska-purple bg-friska-purple/5",
        !selected && !showResult && "border-gray-200 hover:border-friska-purple/50 hover:bg-friska-purple/5",
        showResult && selected && correct && "border-green-500 bg-green-50",
        showResult && selected && correct === false && "border-red-500 bg-red-50",
        showResult && !selected && correct && "border-green-200 bg-green-50/50"
      )}
      onClick={onClick}
      disabled={showResult}
    >
      <div className="flex items-center">
        <div 
          className={cn(
            "w-5 h-5 rounded-full mr-3 flex items-center justify-center border",
            selected && !showResult && "border-friska-purple bg-friska-purple text-white",
            !selected && !showResult && "border-gray-300",
            showResult && selected && correct && "border-green-500 bg-green-500 text-white",
            showResult && selected && correct === false && "border-red-500 bg-red-500 text-white",
            showResult && !selected && correct && "border-green-500 bg-green-50"
          )}
        >
          {(selected || (showResult && correct)) && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
        <span className={cn(
          selected && !showResult && "font-medium text-friska-purple",
          showResult && selected && correct && "font-medium text-green-700",
          showResult && selected && correct === false && "font-medium text-red-700",
          showResult && !selected && correct && "font-medium text-green-700"
        )}>
          {option}
        </span>
      </div>
    </button>
  );
};

export default QuizOption;
