import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-pink-400">ReframeYou</h2>
          <div className="flex items-center gap-6">
            <a href="#explore" className="text-gray-700 hover:text-pink-400">Explore Topics</a>
            <a href="#consultation" className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-2 rounded-full">Book Consultation</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">
            Empowering You to Feel Better in Your Own Skin
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A safe, professional space to explore wellness topics with practitioner-approved guidance.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full font-medium">
              Start Your Journey
            </button>
            <button className="border-2 border-navy-900 text-navy-900 px-8 py-3 rounded-full font-medium hover:bg-navy-900 hover:text-white">
              Watch How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Wellness Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-12">Wellness Topics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Skin & Complexion", desc: "Expert guidance for acne, wrinkles, and skin concerns" },
              { name: "Hair & Scalp Health", desc: "Natural solutions for hair loss and scalp issues" },
              { name: "Body Confidence", desc: "Holistic strategies for body image and wellness" }
            ].map((category, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-pink-100 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.desc}</p>
                <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">ReframeYou</h3>
          <p className="mb-4">Email: hello@reframeyou.org</p>
          <div className="flex justify-center gap-4">
            <span>📘</span> <span>📷</span> <span>🐦</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
