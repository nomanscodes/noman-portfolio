import React from 'react'

const CaseStudyLoadingSkeleton = () => {
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

      {/* Case Study Header Section */}
      <div className='bg-gradient-to-br from-gray-50 to-white pt-24 pb-16'>
        <div className='max-w-[1500px] mx-auto px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            {/* Project Name */}
            <div className='w-96 h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-2xl mx-auto mb-6 shimmer'></div>

            {/* Project Description */}
            <div className='space-y-3'>
              <div className='w-full h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl mx-auto shimmer'></div>
              <div className='w-4/5 h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl mx-auto shimmer'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Image Section */}
      <div className='bg-white'>
        <div className='w-8/12 mx-auto py-5'>
          <div className='w-full h-[500px] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-2xl shimmer'></div>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className='mt-16 w-7/12 mx-auto'>
        <div className='w-64 h-9 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-6 shimmer'></div>
        <div className='space-y-4'>
          <div className='w-full h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
          <div className='w-full h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
          <div className='w-full h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
          <div className='w-full h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
          <div className='w-4/5 h-5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
        </div>
      </div>

      {/* Tools Used Section */}
      <div className='mt-16 w-7/12 mx-auto'>
        <div className='w-48 h-9 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-8 shimmer'></div>
        <div className='flex flex-wrap gap-3'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className='w-28 h-11 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shimmer'></div>
          ))}
        </div>
      </div>

      {/* Live Link Section */}
      <div className='mt-16 w-7/12 mx-auto pb-12'>
        <div className='w-40 h-9 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-xl mb-8 shimmer'></div>
        <div className='flex gap-6'>
          <div className='w-40 h-14 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 rounded-xl shimmer'></div>
          <div className='w-40 h-14 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl shimmer'></div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='bg-black mt-12'>
        <div className='max-w-[1500px] mx-auto'>
          <div className='p-14 flex items-center justify-between'>
            <div className='w-2/5'>
              <div className='w-48 h-7 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-xl mb-4 shimmer'></div>
              <div className='space-y-2'>
                <div className='w-full h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg shimmer'></div>
                <div className='w-4/5 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg shimmer'></div>
              </div>
            </div>
            <div>
              <div className='w-24 h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-xl mb-4 shimmer'></div>
              <div className='flex gap-3'>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className='w-10 h-10 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg shimmer'></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyLoadingSkeleton
