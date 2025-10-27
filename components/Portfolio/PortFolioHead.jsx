import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { API__URL } from '@/lib/constants'
import ViewContainer from '../ViewContainer'

const PortFolioHead = ({ portfolioAllData }) => {

    const headerInfo = portfolioAllData?.info

    return (
        <div className='py-3 md:py-6 bg-white portfolio_header fixed top-0 w-full z-50'>
            <ViewContainer>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 md:gap-3'>
                    <div className='relative w-9 h-9 md:w-12 md:h-12 rounded-full overflow-hidden'>
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
                    <span className='logo_name hover:text-[#7843e9] duration-200 text-xs md:text-base lg:text-lg hidden sm:inline-block'>{headerInfo?.icon_name}</span>
                </div>

                <nav className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
                    <Link className='portfolioHeaderLink text-[10px] sm:text-xs md:text-sm lg:text-base duration-200' href="#home">
                        home
                    </Link>
                    <Link className='portfolioHeaderLink text-[10px] sm:text-xs md:text-sm lg:text-base duration-200' href="#about">
                        about
                    </Link>
                    <Link className='portfolioHeaderLink text-[10px] sm:text-xs md:text-sm lg:text-base duration-200' href="#project">
                        project
                    </Link>
                    <Link className='portfolioHeaderLink text-[10px] sm:text-xs md:text-sm lg:text-base duration-200' href="#contact">
                        contact
                    </Link>
                </nav>
            </div>
            </ViewContainer>
        </div>
    )
}

export default PortFolioHead



