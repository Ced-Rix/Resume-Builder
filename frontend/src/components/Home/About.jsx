import React from 'react'
import SplitPane from './SplitPane'
import aboutImg1 from '../../assets/about-img1.png'
import aboutImg2 from '../../assets/about-img2.png'
import aboutImg3 from '../../assets/about-img3.png'


function Landing() {
  const description1 = (
    <>
      <p className='text-[#64748B]'>
        Get real-time feedback and suggestions from our advanced AI assistant. Optimize your resume content, improve your bullet points, and ensure your skills stand out to recruiters and ATS systems.
      </p>
    </>
  );

  const description2 = (
    <>
      <p className='text-[#64748B]'>
        Manage all your resumes in one place. Keep track of different versions, organize by job type, and never lose track of your applications again.
      </p>
    </>
  );

  const description3 = (
    <>
      <p className='text-[#64748B]'>
        Get actionable insights on your resume performance. See how your resume scores against ATS systems and get recommendations to improve your chances of landing interviews.
      </p>
    </>
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center px-6 py-20 mt-40">
      {/* Badge Container */}
      <div className="flex gap-4 mb-8">
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
          AI-Powered
        </span>
        <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
          ATS-Optimized
        </span>
        <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
          100% Free
        </span>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-2">
          <span className="text-purple-600">The Resume Builder</span>
        </h1>
        <h1 className="text-6xl md:text-7xl font-bold">
          <span className="text-cyan-600">That Gets You Hired</span>
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-16">
        Smart AI tools that optimize your resume for each job, increasing your
        <br />
        interview chances by up to <span className="font-semibold text-gray-800">3x</span>
      </p>

      {/* Decorative Lines */}
      <div className="flex gap-3 items-center">
        <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
        <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
        <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
      </div>

      <SplitPane 
        imageSrc={aboutImg1}
        imageAlt="Resume Editor Interface"
        badgeText="90% more effective bullets"
        heading={`AI-Powered
        Resume Assistant`}
        description={description1}
        features={[
          "Smart content suggestions based on your experience",
          "Real-time feedback on your resume",
          "Industry-specific optimization"
        ]}
        reverseLayout={false}
      />

      <SplitPane 
        imageSrc={aboutImg2}
        imageAlt="Resume Editor Interface"
        badgeText="Organize your job search"
        heading={`Beautiful Resume
        Dashboard`}
        description={description2}
        features={[
          "Centralized resume management",
          "Version control for all your resumes",
          "Track application status"
        ]}
        reverseLayout={true}
      />

      <SplitPane 
        imageSrc={aboutImg3}
        imageAlt="Resume Editor Interface"
        badgeText="3x higher response rate"
        heading={`Resume
        Performance
        Scoring`}
        description={description3}
        features={[
          "Centralized resume managemens",
          "Version control for all your resumes",
          "Track application status"
        ]}
        reverseLayout={false}
      />

        <div className='flex '>

        </div>

    </div>


  )
}

export default Landing
