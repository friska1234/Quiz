
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-friska-purple/10 to-friska-green/10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Personal <span className="text-friska-purple">Nutrition</span> Assistant
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Discover personalized nutrition advice powered by AI. Get tailored meal plans, nutritional insights, and health recommendations based on your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quiz">
                  <Button className="bg-friska-purple hover:bg-friska-light-purple text-white px-8 py-6">
                    Take the Quiz
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-friska-purple text-friska-purple hover:bg-friska-purple/10 px-8 py-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-friska-green/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-friska-purple/20 rounded-full blur-2xl"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop"
                    alt="Healthy food on a table"
                    className="w-full object-cover h-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Friska NutriAI</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-friska-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b2cbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Advice</h3>
              <p className="text-gray-600">Receive nutrition recommendations tailored specifically to your body's needs and health goals.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-friska-green/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#79c142" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">Our AI is trained on the latest nutritional science and research to give you accurate information.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-friska-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b2cbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Adaptive Plans</h3>
              <p className="text-gray-600">As your health and wellness goals change, our recommendations adapt with you.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-friska-green/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#79c142" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
              <p className="text-gray-600">All recommendations are grounded in scientific studies and nutritional research.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-friska-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b2cbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple interface and clear guidance make healthy eating accessible to everyone.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-friska-green/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#79c142" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with others on similar health journeys for motivation and shared experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-friska-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Nutrition?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Take our comprehensive nutrition quiz to receive personalized advice and start your journey to better health today.
          </p>
          <Link to="/quiz">
            <Button className="bg-white text-friska-purple hover:bg-gray-100 px-8 py-6 text-lg">
              Start Your Nutrition Quiz
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
