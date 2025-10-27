import React from 'react'
import ProjectCard from './ProjectCard'
import ViewContainer from '../ViewContainer'

const Project = ({ portfolioAllData }) => {

  const project = portfolioAllData?.portfolio

  return (

    <div id='project' className='bg-[#ffffff] mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 sm:py-10 md:py-12'>
      <ViewContainer>
        <div className='flex flex-col items-center justify-center px-4'>
          <h3 className='about_me'>project</h3>
          <span className='w-8 md:w-10 h-1 rounded shadow bg-[#7843e9]'></span>
          <div className='flex items-center mt-3 md:mt-4 lg:mt-6 max-w-full md:max-w-3xl'>
            <div className='aboutMeSubHeading text-center'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</div>
          </div>
        </div>
        <div className='mt-8 md:mt-10 lg:mt-12'>
          {project?.slice().reverse().map((item) =>
            <ProjectCard item={item} key={item?.id} />
          )}
        </div>
      </ViewContainer>

    </div>
  )
}

export default Project