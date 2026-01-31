import React from 'react'

function Demo() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-40'>
        <h1 className='text-4xl font-bold text-slate-900'>See AinoLM in Action</h1>
        <p className='text-slate-600'>Watch how our AI-powered platform transforms your resume in minutes</p>

        <div className='w-11/12 max-w-6xl h-screen mt-8 mx-auto'>
            <video 
                controls 
                width="100%" 
                height="100%"
                className='w-full h-full rounded-lg shadow-lg border border-slate-200 object-cover'
            >
                <source src="/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div className='flex justify-between items-center gap-8'>
            <span className="inline-flex items-center rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 font-medium">Interactive Demo</span>
            <span className="inline-flex items-center rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 font-medium">User-friendly Interface</span>
            <span className="inline-flex items-center rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 font-medium">Real-time AI Assistance</span>

        </div>
    </div>
  )
}

export default Demo