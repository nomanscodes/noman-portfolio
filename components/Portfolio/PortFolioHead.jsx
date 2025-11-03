'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { API__URL } from '@/lib/constants'
import ViewContainer from '../ViewContainer'
import { usePathname, useRouter } from 'next/navigation'

const PortFolioHead = ({ portfolioAllData }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const headerInfo = portfolioAllData?.info
    const pathname = usePathname()
    const router = useRouter()

    // Check if we're on a sub-page (portfolio/[name])
    const isSubPage = pathname !== '/portfolio'

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleNavClick = (hash) => {
        closeDrawer()
        if (isSubPage) {
            // If on sub-page, navigate to main portfolio page with hash
            router.push(`/portfolio${hash}`)
        }
    }

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isDrawerOpen])

    return (
        <>
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

                        {/* Desktop Navigation */}
                        <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
                            <Link
                                className='portfolioHeaderLink text-sm lg:text-base duration-200'
                                href={isSubPage ? '/portfolio#home' : '#home'}
                            >
                                home
                            </Link>
                            <Link
                                className='portfolioHeaderLink text-sm lg:text-base duration-200'
                                href={isSubPage ? '/portfolio#about' : '#about'}
                            >
                                about
                            </Link>
                            <Link
                                className='portfolioHeaderLink text-sm lg:text-base duration-200'
                                href={isSubPage ? '/portfolio#project' : '#project'}
                            >
                                project
                            </Link>
                            <Link
                                className='portfolioHeaderLink text-sm lg:text-base duration-200'
                                href={isSubPage ? '/portfolio#contact' : '#contact'}
                            >
                                contact
                            </Link>
                        </nav>

                        {/* Mobile Hamburger Menu */}
                        <button
                            onClick={toggleDrawer}
                            className='md:hidden flex flex-col gap-1.5 p-2 z-[80] relative'
                            aria-label='Toggle menu'
                        >
                            <span className={`block w-6 h-0.5 bg-[#333] transition-all duration-300 ${isDrawerOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[#333] transition-all duration-300 ${isDrawerOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[#333] transition-all duration-300 ${isDrawerOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </ViewContainer>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-[60] md:hidden ${
                    isDrawerOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeDrawer}
            ></div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
                isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className='flex flex-col p-6 pt-20 gap-2'>
                    <Link
                        className='portfolioHeaderLink text-lg py-3 px-4 rounded-lg duration-200 hover:bg-[#f5f5f5] hover:text-[#7843e9] transition-all'
                        href={isSubPage ? '/portfolio#home' : '#home'}
                        onClick={() => handleNavClick('#home')}
                    >
                        Home
                    </Link>
                    <Link
                        className='portfolioHeaderLink text-lg py-3 px-4 rounded-lg duration-200 hover:bg-[#f5f5f5] hover:text-[#7843e9] transition-all'
                        href={isSubPage ? '/portfolio#about' : '#about'}
                        onClick={() => handleNavClick('#about')}
                    >
                        About
                    </Link>
                    <Link
                        className='portfolioHeaderLink text-lg py-3 px-4 rounded-lg duration-200 hover:bg-[#f5f5f5] hover:text-[#7843e9] transition-all'
                        href={isSubPage ? '/portfolio#project' : '#project'}
                        onClick={() => handleNavClick('#project')}
                    >
                        Project
                    </Link>
                    <Link
                        className='portfolioHeaderLink text-lg py-3 px-4 rounded-lg duration-200 hover:bg-[#f5f5f5] hover:text-[#7843e9] transition-all'
                        href={isSubPage ? '/portfolio#contact' : '#contact'}
                        onClick={() => handleNavClick('#contact')}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PortFolioHead



