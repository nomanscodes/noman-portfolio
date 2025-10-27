import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='bg-white min-h-screen'>
      {/* Header Skeleton */}
      <div className='py-6 bg-white fixed top-0 w-full z-50 border-b border-gray-100'>
        <div className='max-w-[1500px] mx-auto'>
          <div className='flex items-center justify-between px-8'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full shimmer'></div>
              <div className='w-32 h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
            </div>
            <div className='flex gap-8'>
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className='w-16 h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Home Section Skeleton */}
      <div className='w-full bg-gradient-to-br from-gray-50 to-gray-100 mt-10 relative' style={{ height: '800px' }}>
        <div className='max-w-[1500px] mx-auto'>
          <div className='w-full h-[800px] flex items-center justify-center'>
            <div className='text-center space-y-6'>
              <div className='w-96 h-14 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl mx-auto shimmer'></div>
              <div className='w-80 h-7 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mx-auto shimmer'></div>
              <div className='w-32 h-12 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl mx-auto shimmer'></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section Skeleton */}
      <div className='bg-gray-50 py-24'>
        <div className='max-w-[1500px] mx-auto'>
          <div className='flex flex-col items-center justify-center mb-14'>
            <div className='w-32 h-9 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-4 shimmer'></div>
            <div className='w-10 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 rounded-full shimmer'></div>
            <div className='w-3/4 h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mt-6 shimmer'></div>
          </div>

          <div className='grid grid-cols-2 gap-8 px-8'>
            <div>
              <div className='w-48 h-7 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-5 shimmer'></div>
              <div className='space-y-3'>
                <div className='w-full h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                <div className='w-full h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                <div className='w-3/4 h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
              </div>
              <div className='w-32 h-11 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl mt-12 shimmer'></div>
            </div>
            <div>
              <div className='w-32 h-7 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-5 shimmer'></div>
              <div className='flex flex-wrap gap-3'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className='w-24 h-9 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section Skeleton */}
      <div className='bg-white mt-24'>
        <div className='max-w-[1500px] mx-auto'>
          <div className='flex flex-col items-center justify-center mb-14'>
            <div className='w-32 h-9 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-4 shimmer'></div>
            <div className='w-8 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 rounded-full shimmer'></div>
            <div className='w-3/4 h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mt-6 shimmer'></div>
          </div>

          <div className='space-y-16 px-8 pb-16'>
            {[1, 2, 3].map((item) => (
              <div key={item} className='grid grid-cols-2 gap-12 items-center'>
                <div className='w-full h-72 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl shimmer'></div>
                <div>
                  <div className='w-48 h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-4 shimmer'></div>
                  <div className='space-y-3 mb-6'>
                    <div className='w-full h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                    <div className='w-full h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                    <div className='w-2/3 h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                  </div>
                  <div className='flex gap-3'>
                    {[1, 2, 3].map((tool) => (
                      <div key={tool} className='w-20 h-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
                    ))}
                  </div>
                  <div className='w-36 h-11 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl mt-6 shimmer'></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section Skeleton */}
      <div className='bg-gradient-to-br from-gray-50 to-gray-100 py-24'>
        <div className='max-w-[1500px] mx-auto py-24'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-32 h-9 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-4 shimmer'></div>
            <div className='w-12 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 rounded-full mb-6 shimmer'></div>
            <div className='w-2/3 h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-12 shimmer'></div>
            <div className='w-full max-w-[60rem] bg-white rounded-2xl shadow-sm p-8'>
              <div className='space-y-6'>
                <div className='w-full h-14 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-xl shimmer'></div>
                <div className='w-full h-14 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-xl shimmer'></div>
                <div className='w-full h-48 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-xl shimmer'></div>
                <div className='w-32 h-12 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl ml-auto shimmer'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeleton
