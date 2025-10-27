import React from 'react'
import ProjectCard from './ProjectCard'
import ViewContainer from '../ViewContainer'

const Project = ({ portfolioAllData }) => {

  const project = portfolioAllData?.portfolio

  return (

    <div id='project' className='bg-[#ffffff] mt-24'>
      <ViewContainer>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='about_me'>project</h3>
          <span className='w-8 h-1 rounded shadow bg-[#7843e9]'></span>
          <div className='flex items-center mt-6'>
            <h5 className='aboutMeSubHeading'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</h5>
          </div>
        </div>
        <div className='mt-10'>
          {project?.slice().reverse().map((item) =>
            <ProjectCard item={item} key={item?.id} />
          )}
        </div>
      </ViewContainer>

    </div>
  )
}

export default Project