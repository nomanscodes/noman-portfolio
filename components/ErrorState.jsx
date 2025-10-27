import React from 'react'

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full mx-auto p-8'>
        <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
          <div className='w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6'>
            <svg
              className='w-10 h-10 text-red-600'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
            </svg>
          </div>

          <h2 className='text-2xl font-bold text-gray-800 mb-3'>
            Oops! Something went wrong
          </h2>

          <p className='text-gray-600 mb-6'>
            {message || 'Unable to load portfolio data. Please try again.'}
          </p>

          <button
            onClick={onRetry}
            className='btn btn-primary'
          >
            Try Again
          </button>

          <p className='text-sm text-gray-500 mt-6'>
            If the problem persists, please contact support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorState
