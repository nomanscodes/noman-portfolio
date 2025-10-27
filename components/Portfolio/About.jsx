import React from 'react'
import Link from 'next/link';
import ViewContainer from '../ViewContainer'

import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});


const About = ({ portfolioAllData }) => {

    const infoData = portfolioAllData?.info
    const skillList = portfolioAllData?.skills

    return (
        <div id='about' className='bg-[#f9f9f9] py-12 sm:py-16 md:py-20 lg:py-24'>
            <ViewContainer>
                <div className='flex flex-col items-center justify-center px-4'>
                    <h3 className='about_me'>about me</h3>
                    <span className='w-8 md:w-10 h-1 rounded shadow bg-[#7843e9]'></span>
                    <div className='flex items-center max-w-full md:max-w-[55rem] mt-3 md:mt-4 lg:mt-6'>
                        <div className='aboutMeSubHeading'>
                            <DynamicRichTextComponentWithNoSSR htmlContent={infoData?.about_me} />
                        </div>
                    </div>
                </div>

                <div className='mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 px-4'>
                    <div>
                        <h1 className='text-[#333] text-xl md:text-2xl lg:text-[1.6rem] font-bold'>GET TO KNOW ME</h1>
                        <h4 className='get_to_know_me mt-4 md:mt-5 text-base md:text-lg'>
                            <DynamicRichTextComponentWithNoSSR htmlContent={infoData?.get_to_know} />
                        </h4>
                        <div className='flex items-center mt-8 md:mt-10 lg:mt-12'>
                            <Link href="#contact">
                                <button className='btn btn-primary'>contact</button>
                            </Link>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#333] text-xl md:text-2xl lg:text-[1.6rem] font-bold'>MY SKILLS</h1>
                        <div className='mt-4 md:mt-6 flex flex-wrap'>
                            {skillList?.map((item, i) =>
                                <div key={item?.id} className='skillCard capitalize text-sm md:text-base' >
                                    {item?.teck_name}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ViewContainer>

        </div>
    )
}

export default About

