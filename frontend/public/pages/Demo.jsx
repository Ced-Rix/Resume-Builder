import React from 'react'

function Demo() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-40'>
        <h1 className='text-4xl font-bold text-[#0D9488]'>See RixsumeLM in Action</h1>
        <p className='text-[#64748B]'>Watch how our AI-powered platform transforms your resume in minutes</p>

        <div className='w-11/12 max-w-6xl h-screen mt-8 mx-auto'>
            <video 
                controls 
                width="100%" 
                height="100%"
                className='w-full h-full rounded-lg shadow-lg border border-gray-300 object-cover'
            >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div className='flex justify-between items-center gap-8'>
            <span class="inline-flex items-center rounded-full border border-purple-300 bg-purple-100 px-2.5 py-1 text-sm text-purple-800">Interactive Demo</span>
            <span class="inline-flex items-center rounded-full border border-purple-300 bg-purple-100 px-2.5 py-1 text-sm text-purple-800">User-friendly Interface</span>
            <span class="inline-flex items-center rounded-full border border-purple-300 bg-purple-100 px-2.5 py-1 text-sm text-purple-800">Real-time AI Assistance</span>

        </div>
    </div>
  )
}

export default Demo