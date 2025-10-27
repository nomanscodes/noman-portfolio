import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa"
import ViewContainer from '../ViewContainer'

const PortfolioFooter = () => {
    return (
        <div className='bg-[#000000]'>
            <ViewContainer>
                <div className='p-14 flex items-center justify-between'>
                <div>
                    <h1 className='text-white leading-[1.4] text-[1.4rem] uppercase tracking-[1px] font-[700]'>Md Noman Hossain</h1>
                    <p className='mt-[1rem] text-[#eee] text-[1rem] max-w-[40rem] leading-[1.6]'>
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                    </p>
                </div>
                <div className=''>
                    <h1 className='text-white leading-[1.4] text-[1.4rem] uppercase tracking-[1px] font-[700] flex items-center justify-end'>Social</h1>
                    <div className='flex items-center justify-end gap-2 text-white border-x-inherit leading-tight mt-[1rem]'>
                        <Link href={""}>
                            <FaGithub className='h-5 w-10' />

                        </Link>
                        <Link href={""}>
                            <FaLinkedinIn className='h-6 w-9' />

                        </Link>
                        <Link href={""}>
                            <FaTwitter className='h-6 w-9' />

                        </Link>
                        <Link href={""}>

                            <FaYoutube className='h-[22px] w-9' />
                        </Link>
                    </div>
                </div>
            </div>
            </ViewContainer>
        </div>
    )
}

export default PortfolioFooter
