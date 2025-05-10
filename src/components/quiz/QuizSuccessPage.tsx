import { useEffect, useState } from 'react';
import { X, Linkedin, Instagram, Facebook, Copy } from 'lucide-react';

// Mock toast function for our demonstration
const toast = {
  success: (message) => console.log(message),
  error: (message) => console.error(message)
};

const AchievementCard = ({
  title = "You're getting there",
  subtitle = "Congratulations, You're a NutriAi Pro Now",
  description = "Congratulations! You've successfully completed the quiz and proven your knowledge on Nutrition. Keep up the great work!",
  shareText = "I aced the NutriAi quiz! Think you've got what it takes? 💪 Take the challenge and earn your trophy! 🏆",
  hashtag = "#NutriAiPro",
  onClose = () => { },
}) => {
  const [copied, setCopied] = useState(false);
  const [imageCopied, setImageCopied] = useState(false);
  const imageUrl = "/12.png"; // Direct reference to image in public folder

  const copyToClipboard = () => {
    try {
      const shareUrl = window.location.href;
      navigator.clipboard.writeText(`${shareText} ${hashtag} ${shareUrl}`);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const copyImageToClipboard = async () => {
    try {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Create an Image object
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageUrl;

      // Wait for the image to load
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Convert the canvas to a blob
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));

      if (!blob) {
        throw new Error("Failed to create blob from canvas");
      }

      // Copy the blob to clipboard
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);

      setImageCopied(true);
      toast.success("Image copied to clipboard!");
      setTimeout(() => setImageCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy image:", err);
      toast.error("Failed to copy image to clipboard");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-1">Share this achievement to your community</p>

          <div className="mt-6 bg-[#fffbed] rounded-xl">
            <div className="mb-4  w-full flex justify-center relative">
              <img
                src={imageUrl}
                alt="Achievement"
                className="w-60  h-full object-fill  "
                onError={() => {
                  toast.error("Failed to display image");
                }}
              />
              <button
                onClick={copyImageToClipboard}
                className="absolute top-0 right-0 bg-white p-1 rounded-md shadow-md hover:bg-gray-100"
                title="Copy image"
              >
                <Copy size={16} />
              </button>
            </div>

            {/* <h3 className="font-bold text-lg">{subtitle}</h3> */}
            {/* <p className="text-sm text-gray-600 mt-1">{description}</p> */}
          </div>

          <p className="mt-6 text-gray-700 font-medium text-sm px-6">
            {shareText} <span className="font-bold">{hashtag}</span>
          </p>

          <p className="mt-6 font-medium text-gray-800">Share this with your social community</p>

          {/* <div className="mt-4 flex justify-center gap-4">
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
          </div> */}

          <div className="mt-6 flex gap-3">
            <button
              onClick={copyToClipboard}
              className="flex-1 border border-gray-300 rounded-full py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16M8.8 17.19L7.47 18.51C6.7 19.29 5.55 19.62 4.47 19.38C3.39 19.13 2.53 18.35 2.25 17.28C1.98 16.2 2.3 15.05 3.07 14.28L5.62 11.73M15.2 6.81L16.53 5.49C17.3 4.71 18.45 4.38 19.53 4.62C20.61 4.87 21.47 5.65 21.75 6.72C22.02 7.8 21.7 8.95 20.93 9.72L18.38 12.27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copied ? "Copied!" : "Copy Link"}
            </button>
            {/* <button
              onClick={copyImageToClipboard}
              className="flex-1 border border-gray-300 rounded-full py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Copy size={20} />
              {imageCopied ? "Copied!" : "Copy Image"}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;