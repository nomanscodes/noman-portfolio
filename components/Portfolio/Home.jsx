import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import ViewContainer from '../ViewContainer'


import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});

const Home = ({ portfolioAllData }) => {

    const homeData = portfolioAllData?.info


    return (
        <div
            id="home"
            className="w-full bg-cover bg-center bg-no-repeat mt-12 sm:mt-14 md:mt-16 lg:mt-20"
            style={{
                backgroundImage:
                    `linear-gradient(to right, rgba(245,245,245,0.8), rgba(245,245,245,0.8)), url('/assest/common-bg.svg')`
            }}>

            <ViewContainer>
                <div className='w-full h-[600px] sm:min-h-[600px] md:h-[700px] lg:h-[900px] flex items-center justify-center px-4 md:px-6 py-12 md:py-0'>
                    <div className='flex items-center justify-center w-full'>
                        <div className='w-full max-w-4xl text-center'>
                            <h1 className='text-6xl font-extrabold leading-20'>{homeData?.top_heading}</h1>
                            <div className='mt-3 md:mt-5'>
                                <div className='portfolioSubHeading w-full md:w-[90%] lg:w-[80%] mx-auto px-2 sm:px-4'>
                                    <DynamicRichTextComponentWithNoSSR htmlContent={homeData?.top_bio} />
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-6 sm:mt-8 md:mt-12'>
                                <Link href="#project">
                                    <button className='btn btn-primary'>projects</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className='absolute p-1 bg-white left-0 hidden md:block'>
                        <div className='flex items-center justify-center px-[9px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={"https://www.linkedin.com/in/nomanhossain2/"}       target='_blank' rel='noreferrer'>
                                <Image
                                    src="/assest/linkedin-dark.svg"
                                    alt="LinkedIn"
                                    width={34}
                                    height={34}
                                    className='w-[28px] lg:w-[34px]'
                                />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={""}>
                                <Image
                                    src="/assest/twitter-dark.svg"
                                    alt="Twitter"
                                    width={34}
                                    height={34}
                                    className='w-[28px] lg:w-[34px]'
                                />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={"https://github.com/nomanscodes"}       target='_blank' rel='noreferrer'>
                                <Image
                                    src="/assest/github-dark.svg"
                                    alt="GitHub"
                                    width={34}
                                    height={34}
                                    className='w-[28px] lg:w-[34px]'
                                />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={""}>
                                <Image
                                    src="/assest/yt-dark.svg"
                                    alt="YouTube"
                                    width={34}
                                    height={34}
                                    className='w-[28px] lg:w-[34px]'
                                />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center px-[7px] py-2.5 rounded hover:bg-[#dbcff7] duration-300'>
                            <Link href={"https://leetcode.com/u/nomanscodes/"}
                             target='_blank' rel='noreferrer'
                            >
                                <Image
                                    src="/assest/leetcode.avif"
                                    alt="LeetCode"
                                    width={34}
                                    height={34}
                                    className='w-[28px] lg:w-[34px]'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </ViewContainer>
        </div>
    )
}

export default Home

