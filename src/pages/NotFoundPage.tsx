
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-friska-purple mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button className="bg-friska-purple hover:bg-friska-light-purple text-white">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
