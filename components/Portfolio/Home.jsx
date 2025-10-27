import Link from 'next/link'
import React from 'react'
import ViewContainer from '../ViewContainer'


import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});

const Home = ({ portfolioAllData }) => {

    const homeData = portfolioAllData?.info


    return (
        <div id='home' className='w-full bg-cover bg-no-repeat mt-10 relative' style={{ backgroundImage: `url("/assest/13338.jpg")` }}>
            <ViewContainer>
                <div className='w-full h-[900px] flex items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='portfolioHead'>{homeData?.top_heading}</h1>
                            <div className='mt-5'>
                                <h4 className='portfolioSubHeading flex items-center justify-center w-[80%] mx-auto'>
                                    <DynamicRichTextComponentWithNoSSR htmlContent={homeData?.top_bio} />
                                </h4>
                            </div>
                            <div className='flex items-center justify-center mt-12'>
                                <Link href="#project">
                                    <button className='btn btn-primary'>projects</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='absolute p-1 bg-white left-0'>
                        <div className='flex items-center justify-center px-[9px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={"https://www.linkedin.com/in/nomanhossain2/"}>
                                <picture>
                                    <img className='w-[34px]' src="/assest/linkedin-dark.svg" alt="" />
                                </picture>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={""}>
                                <picture>
                                    <img className='w-[34px]' src="/assest/twitter-dark.svg" alt="" />
                                </picture>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={"https://github.com/nomanscodes"}>
                                <picture>
                                    <img className='w-[34px]' src="/assest/github-dark.svg" alt="" />
                                </picture>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={""}>
                                <picture>
                                    <img className='w-[34px]' src="/assest/yt-dark.svg" alt="" />
                                </picture>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={"https://leetcode.com/nomanworld/"}>
                                <picture>
                                    <img className='w-[34px]' src="/assest/leetcode.avif" alt="" />
                                </picture>
                            </Link>
                        </div>
                    </div>
                </div>
            </ViewContainer>
        </div>
    )
}

export default Home

