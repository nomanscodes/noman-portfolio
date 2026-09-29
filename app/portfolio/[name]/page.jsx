'use client'

import React from 'react'
import PortFolioHead from '@/components/Portfolio/PortFolioHead'
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter'
import CaseStudyHEad from '@/components/Portfolio/CaseStudyHEad'
import { useParams, useRouter } from 'next/navigation'
import { API__URL } from '@/lib/constants'
import dummyPortfolio from '@/lib/dummyPortfolio'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const DynamicRichTextComponentWithNoSSR = dynamic(() => import('../../../components/RichTextComponent'), {
    ssr: false,
})

const CaseStudy = () => {
    const params = useParams()
    const router = useRouter()
    const projectName = decodeURIComponent(params?.name || '')

    const handleGoBack = () => {
        router.push('/portfolio')
    }

    const portfolioData = dummyPortfolio?.payload
    const projectData = portfolioData?.portfolio
    const thisProject = projectData?.find((item) => item?.project_name === projectName) || projectData?.[0]
    const usesTools = thisProject?.uses_tools?.split(',')

    if (!thisProject) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-white px-4'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-[#111] mb-4'>Project not found</h2>
                    <button onClick={handleGoBack} className='btn btn-primary'>Back to portfolio</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <PortFolioHead portfolioAllData={portfolioData} />
            <div>
                <CaseStudyHEad thisProject={thisProject} handleGoBack={handleGoBack} />
                <div className='bg-[#ffffff]'>
                    <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-4 md:py-5'>
                        <Image
                            src={`${API__URL}${thisProject?.thumbnail}`}
                            alt={thisProject?.project_name || 'Project thumbnail'}
                            width={1200}
                            height={800}
                            className='w-full h-auto object-cover rounded-lg'
                            priority
                            unoptimized
                        />
                    </div>
                    <div className='mt-8 md:mt-12 lg:mt-16 w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-4'>
                        <h3 className='text-[#111] leading-[1.5] font-[700] text-xl md:text-2xl lg:text-[1.8rem] mb-4 md:mb-6'>Project Overview</h3>
                        <div className='text-[#555454] text-base md:text-lg lg:text-[1.2rem] leading-7 md:leading-8 lg:leading-9'>
                            <DynamicRichTextComponentWithNoSSR htmlContent={thisProject?.full_description} />
                        </div>
                    </div>
                    <div className='mt-8 md:mt-12 lg:mt-16 w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-4'>
                        <h3 className='text-[#111] leading-[1.5] font-[700] text-xl md:text-2xl lg:text-[1.8rem] mb-4 md:mb-6 lg:mb-8'>Tools Used</h3>
                        <div className='mt-4 md:mt-6 flex flex-wrap'>
                            {usesTools?.map((item, i) =>
                                <div key={i} className='skillCard text-sm md:text-base'>
                                    {item}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mt-8 md:mt-12 lg:mt-16 w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-4'>
                        <h3 className='text-[#111] leading-[1.5] font-[700] text-xl md:text-2xl lg:text-[1.8rem] mb-4 md:mb-6 lg:mb-8'>See Live</h3>
                        <div className='mt-4 md:mt-6 flex flex-col sm:flex-row gap-4 md:gap-6 pb-7'>
                            <button onClick={handleGoBack} className='btn btn-outline w-full sm:w-auto'>Go Back</button>
                            <Link href={thisProject?.live_link || '/portfolio'}>
                                <button className='btn btn-primary w-full sm:w-auto'>Live Link</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioFooter />
        </>
    )
}

export default CaseStudy
