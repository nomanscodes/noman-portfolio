import React from 'react'
import ProjectCard from './ProjectCard'
import ViewContainer from '../ViewContainer'

const Project = ({ portfolioAllData }) => {

  const project = [...(portfolioAllData?.portfolio || [])].sort((a, b) => Number(a?.id || 0) - Number(b?.id || 0))

  return (

    <div id='project' className='bg-[#ffffff] mt-10 sm:mt-12 md:mt-16 lg:mt-20 py-10 sm:py-12 md:py-16'>
      <ViewContainer>
        <div className='flex flex-col items-center justify-center px-4'>
          <h3 className='about_me'>project</h3>
          <span className='w-8 md:w-10 h-1 rounded shadow bg-[#7843e9]'></span>
          <div className='flex items-center mt-3 md:mt-4 lg:mt-6 max-w-full md:max-w-3xl'>
            <div className='aboutMeSubHeading text-center'>Here you will find selected work from client and product projects, each presented with its own detailed case study.</div>
          </div>
        </div>
        <div className='mt-8 md:mt-10 lg:mt-12'>
          {project.map((item) =>
            <ProjectCard item={item} key={item?.id} />
          )}
        </div>
      </ViewContainer>

    </div>
  )
}

export default Project