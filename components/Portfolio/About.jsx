import React from 'react'
import Link from 'next/link';

import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});


const About = ({ portfolioAllData }) => {

    const infoData = portfolioAllData?.info
    const skillList = portfolioAllData?.skills
    
    return (
        <div id='about' className='py-7 bg-[#f9f9f9]'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='about_me'>about me</h3>
                <span className='w-10 h-1 rounded shadow bg-[#7843e9]'></span>
                <div className='flex items-center max-w-[55rem] mt-6'>
                    <h5 className='aboutMeSubHeading '>
                       <DynamicRichTextComponentWithNoSSR htmlContent={infoData?.about_me}/>
                    </h5>
                </div>
            </div>

            <div className='mt-14 grid grid-cols-2 gap-8 px-14'>
                <div>
                    <h1 className='text-[#333] text-[1.6rem] font-bold'>GET TO KNOW ME</h1>
                    <h4 className='get_to_know_me mt-5 '>
                    <DynamicRichTextComponentWithNoSSR htmlContent={infoData?.get_to_know}/>
                    </h4>
                    <div className='flex items-center  mt-12'>
                        <Link href="#contact">
                            <button className=' text-[#fff] bg-[#7843e9] text-[1.2rem] font-[600] uppercase  py-2 px-7 rounded shadow transition ease-in-out delay-100  hover:-translate-x-1 hover:scale-110 duration-200'>contact</button>
                        </Link>

                    </div>
                </div>
                <div>
                    <h1 className='text-[#333] text-[1.6rem] font-bold'>MY SKILLS</h1>
                    <div className='mt-6 flex flex-wrap'>
                        {skillList?.map((item, i) =>
                            <div key={item?.id} className='skillCard capitalize' >
                                {item?.teck_name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

