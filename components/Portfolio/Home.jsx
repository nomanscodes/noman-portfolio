import Link from 'next/link'
import React from 'react'


import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});

const Home = ({ portfolioAllData }) => {

    const homeData = portfolioAllData?.info


    return (
        <div id='home' className='w-[100%] h-[800px] bg-cover bg-no-repeat mt-10 ' style={{ backgroundImage: `url("/assest/13338.jpg")` }}>
            <div className='w-full h-full relative'>
                <div className='w-full absolute  mt-52 flex items-center justify-center'>
                    <div>
                        <h1 className='portfolioHead'>{homeData?.top_heading}</h1>
                        <div className='mt-5'>
                            <h4 className='portfolioSubHeading flex items-center justify-center w-[60%] mx-auto'>
                                <DynamicRichTextComponentWithNoSSR htmlContent={homeData?.top_bio}/>
                            </h4>
                        </div>
                        <div className='flex items-center justify-center mt-12'>
                            <Link href="#project">
                                <button className='portfolioButton transition ease-in-out delay-100  hover:-translate-x-1 hover:scale-110 duration-200'>projects</button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className='absolute p-1 mt-[240px] bg-white portfolio_side_link'>
                    <div className='flex items-center justify-center 
                    px-[9px] py-[10px] rounded hover:bg-[#dbcff7] duration-300'>
                        <Link href={"https://www.linkedin.com/in/nomanhossain2/"}>
                            <picture>
                                <img className='w-[34px]' src="/assest/linkedin-dark.svg" alt="" />
                            </picture>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center 
                    px-[7px] py-[10px] rounded hover:bg-[#dbcff7] duration-300'>
                        <Link href={""}>
                            <picture>
                                <img className='w-[34px]' src="/assest/twitter-dark.svg" alt="" />
                            </picture>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center 
                    px-[7px] py-[10px] rounded hover:bg-[#dbcff7] duration-300'>
                        <Link href={"https://github.com/nomanscodes"}>
                            <picture>
                                <img className='w-[34px]' src="/assest/github-dark.svg" alt="" />
                            </picture>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center 
                    px-[7px] py-[10px] rounded hover:bg-[#dbcff7] duration-300'>
                        <Link href={""}>
                            <picture>
                                <img className='w-[34px]' src="/assest/yt-dark.svg" alt="" />
                            </picture>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center 
                    px-[7px] py-[10px] rounded hover:bg-[#dbcff7] duration-300'>
                        <Link href={"https://leetcode.com/nomanworld/"}>
                            <picture>
                                <img className='w-[34px]' src="/assest/leetcode.avif" alt="" />
                            </picture>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

