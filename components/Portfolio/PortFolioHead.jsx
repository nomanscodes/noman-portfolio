import Link from 'next/link'
import React from 'react'
import { API__URL } from '@/lib/constants'

const PortFolioHead = ({ portfolioAllData }) => {

    const headerInfo = portfolioAllData?.info

    return (
        <div className='py-6 bg-[#fff] portfolio_header fixed top-0 w-full z-50'>
            <div className='w-11/12 mx-auto flex flex-wrap items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <picture>
                        <img src={`${API__URL}${headerInfo?.icon_image
                            }`} className='w-12 h-12 rounded-full' alt="" />
                    </picture>
                    <span className='logo_name hover:text-[#7843e9] duration-200'>{headerInfo?.icon_name}</span>
                </div>

                <div className='flex items-center gap-8'>
                    <Link className='portfolioHeaderLink duration-200' href="#home">
                        home
                    </Link>
                    <Link className='portfolioHeaderLink duration-200' href="#about">
                        about
                    </Link>
                    <Link className='portfolioHeaderLink duration-200' href="#project">
                        porject
                    </Link>
                    <Link className='portfolioHeaderLink duration-200' href="#contact">
                        contact
                    </Link>
                    <Link className='portfolioHeaderLink duration-200' href={"/"}>
                        blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortFolioHead



