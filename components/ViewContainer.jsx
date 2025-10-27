import React from 'react'

const ViewContainer = ({children}) => {
  return (
    <div className='max-w-[1500px] mx-auto overflow-hidden'>{children}</div>
  )
}

export default ViewContainer