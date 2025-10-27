import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa"
import ViewContainer from '../ViewContainer'

const PortfolioFooter = () => {
    return (
        <div className='bg-[#000000]'>
            <ViewContainer>
                <div className='p-6 md:p-10 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6'>
                <div className='w-full md:w-auto'>
                    <h1 className='text-white leading-[1.4] text-lg md:text-xl lg:text-[1.4rem] uppercase tracking-[1px] font-[700]'>Md Noman Hossain</h1>
                    <p className='mt-3 md:mt-[1rem] text-[#eee] text-sm md:text-base lg:text-[1rem] max-w-full md:max-w-[40rem] leading-[1.6]'>
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>
                </div>
                <div className='w-full md:w-auto'>
                    <h1 className='text-white leading-[1.4] text-lg md:text-xl lg:text-[1.4rem] uppercase tracking-[1px] font-[700] flex items-center md:justify-end'>Social</h1>
                    <div className='flex items-center md:justify-end gap-3 md:gap-2 text-white border-x-inherit leading-tight mt-3 md:mt-[1rem]'>
                        <Link href={""}>
                            <FaGithub className='h-5 w-8 md:w-10 hover:text-[#7843e9] transition-colors' />

                        </Link>
                        <Link href={""}>
                            <FaLinkedinIn className='h-5 w-8 md:w-9 hover:text-[#7843e9] transition-colors' />

                        </Link>
                        <Link href={""}>
                            <FaTwitter className='h-5 w-8 md:w-9 hover:text-[#7843e9] transition-colors' />

                        </Link>
                        <Link href={""}>

                            <FaYoutube className='h-5 w-8 md:w-9 hover:text-[#7843e9] transition-colors' />
                        </Link>
                    </div>
                </div>
            </div>
            </ViewContainer>
        </div>
    )
}

export default PortfolioFooter
