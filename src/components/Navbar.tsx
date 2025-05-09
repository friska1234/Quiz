
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/https://friskanutriai.com" className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-friska-green">Friska</span>
            <span className="text-friska-purple"> NutriAI</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <div className="hidden">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700"
          >
            <Menu />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-6 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-friska-purple transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" className="text-gray-700 hover:text-friska-purple transition">
              How it Works
            </Link>
          </li>
          <li>
            <Link to="/why-choose" className="text-gray-700 hover:text-friska-purple transition">
              Why Choose
            </Link>
          </li>
          <li>
            <Link to="/who-can-benefit" className="text-gray-700 hover:text-friska-purple transition">
              Who Can Benefit
            </Link>
          </li>
          <li>
            <Link to="/smart-features" className="text-gray-700 hover:text-friska-purple transition">
              Smart Features
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-gray-700 hover:text-friska-purple transition">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/quiz">
              <Button className="bg-friska-purple hover:bg-friska-light-purple text-white">
                Try NutriAI
              </Button>
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute hidden top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <ul className="py-2 px-4">
              <li className="py-2">
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-friska-purple"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/how-it-works" 
                  className="block text-gray-700 hover:text-friska-purple"
                  onClick={() => setIsOpen(false)}
                >
                  How it Works
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/why-choose" 
                  className="block text-gray-700 hover:text-friska-purple"
                  onClick={() => setIsOpen(false)}
                >
                  Why Choose
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/who-can-benefit" 
                  className="block text-gray-700 hover:text-friska-purple"
                  onClick={() => setIsOpen(false)}
                >
                  Who Can Benefit
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/smart-features" 
                  className="block text-gray-700 hover:text-friska-purple"
                  onClick={() => setIsOpen(false)}
                >
                  Smart Features
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/testimonials" 
                  className="block text-gray-700 hover:text-friska-purple"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/quiz"
                  className="block" 
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-friska-purple hover:bg-friska-light-purple text-white">
                    Try NutriAI
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
