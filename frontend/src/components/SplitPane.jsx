import React from 'react'

function SplitPane({ 
  imageSrc, 
  imageAlt = "Feature Image",
  badgeText, 
  heading, 
  description, 
  features = [],
  reverseLayout = false 
}) {
  const contentSection = (
    <div className={`w-[38%] bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 flex items-center px-8 py-12 ${reverseLayout ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex flex-col justify-center space-y-5 max-w-md ${reverseLayout ? 'items-start text-left' : 'items-end text-right'}`}>
          {/* Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-purple-600 shadow-sm">
              <span>{badgeText}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          )}

          {/* Main Heading */}
          {heading && (
            <h1 className='text-5xl font-bold leading-tight tracking-tight'>
              {heading.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  <span className='bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
                    {line}
                  </span>
                  {index < heading.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
          )}

          {/* Description */}
          {description && (
            <div className='text-sm text-gray-700 leading-relaxed space-y-1'>
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          )}

          {/* Feature List */}
          {features.length > 0 && (
            <div className={`flex flex-col space-y-2.5 pt-4 w-full ${reverseLayout ? 'items-start text-left' : 'items-end text-right'}`}>
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-2.5 ${reverseLayout ? '' : 'flex-row-reverse'}`}>
                  <div className='flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-900 flex-shrink-0'>
                    <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className='text-sm text-gray-800'>{feature}</span>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );

  const imageSection = (
    <div className='flex-1 items-center justify-center'>
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className='max-w-full max-h-full object-contain'
      />
    </div>
  );

  return (
    <div className='flex w-full min-h-screen mt-60'>
      {reverseLayout ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  )
}

export default SplitPane