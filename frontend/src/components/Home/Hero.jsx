import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Open source <span className="text-blue-600">AI Resume Builder</span>
              </h1>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
                that lands you tech jobs
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-md">
              Create ATS-optimized tech resumes in under 10 minutes. 3x your interview chances with AI-powered resume tailoring.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                Create Resume <span className="ml-2">→</span>
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition duration-300">
                Open Source on GitHub
              </button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 py-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                AI-Powered
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-50 text-teal-700">
                ATS-Optimized
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700">
                100% Free
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-50 text-orange-700">
                Privacy-First
              </span>
            </div>

            
          </div>

          {/* Right Side - Hero Image */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full">
              <img 
                src="/src/assets/hero-img.png" 
                alt="AI Resume Builder Demo" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
