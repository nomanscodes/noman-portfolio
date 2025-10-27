import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { API__URL } from '@/lib/constants'
import ViewContainer from '../ViewContainer'

const PortFolioHead = ({ portfolioAllData }) => {

    const headerInfo = portfolioAllData?.info

    return (
        <div className='py-6 bg-white portfolio_header fixed top-0 w-full z-50'>
            <ViewContainer>
            <div className='flex flex-wrap items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                        <Image
                            src={`${API__URL}${headerInfo?.icon_image}`}
                            alt={headerInfo?.icon_name || "Profile"}
                            width={48}
                            height={48}
                            className='rounded-full object-cover'
                            priority
                            unoptimized
                        />
                    </div>
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
            </ViewContainer>
        </div>
    )
}

export default PortFolioHead



