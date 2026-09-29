import React from 'react'
import ViewContainer from '../ViewContainer'

const Experience = ({ portfolioAllData }) => {
    const experienceList = portfolioAllData?.experience || []

    return (
        <div id='experience' className='bg-[#f5f3ff] py-12 sm:py-16 md:py-20 lg:py-24'>
            <ViewContainer>
                <div className='flex flex-col items-center justify-center px-4'>
                    <h3 className='about_me'>professional experience</h3>
                    <span className='w-8 md:w-10 h-1 rounded shadow bg-[#7843e9]'></span>
                </div>

                <div className='mt-10 md:mt-12 lg:mt-14 space-y-6 md:space-y-8 px-4'>
                    {experienceList.map((item) => (
                        <div
                            key={item?.id}
                            className='bg-white border border-[#ece7ff] rounded-2xl shadow-sm p-5 md:p-8 lg:p-10'
                        >
                            <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6'>
                                <div>
                                    <p className='text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#7843e9]'>
                                        {item?.role}
                                    </p>
                                    <h3 className='mt-2 text-xl md:text-2xl font-bold text-[#111111]'>
                                        {item?.company}
                                    </h3>
                                </div>

                                <div className='text-sm md:text-base text-[#4d4d4d] md:text-right'>
                                    <p className='font-medium'>{item?.period}</p>
                                    <p className='mt-1'>{item?.location}</p>
                                </div>
                            </div>

                            {item?.summary && (
                                <p className='mt-5 text-base md:text-lg leading-7 text-[#555454]'>
                                    {item.summary}
                                </p>
                            )}

                            <ul className='mt-5 space-y-3'>
                                {item?.points?.map((point, index) => (
                                    <li key={`${item?.id}-${index}`} className='flex gap-3 items-start text-[#333333] text-sm md:text-base leading-7'>
                                        <span className='mt-2 h-2.5 w-2.5 rounded-full bg-[#7843e9] shrink-0'></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ViewContainer>
        </div>
    )
}

export default Experience
