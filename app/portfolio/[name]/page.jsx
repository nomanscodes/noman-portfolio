'use client'

import React, { useState, useEffect } from 'react'
import PortFolioHead from '@/components/Portfolio/PortFolioHead'
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter'
import CaseStudyHEad from '@/components/Portfolio/CaseStudyHEad'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { API__URL } from '@/lib/constants'
import Link from 'next/link'
import dynamic from "next/dynamic"

const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../../../components/RichTextComponent"), {
    ssr: false,
})

const CaseStudy = () => {
    const params = useParams()
    const router = useRouter()
    const projectName = decodeURIComponent(params?.name || '')

    const handleGoBack = () => {
        router.back()
    }

    const [portfolioData, setPortfolioData] = useState()

    const featchData = async () => {
        try {
            const res = await axios.get('/api/portfolio')
            setPortfolioData(res.data)
        } catch (error) {
            console.error('Error fetching portfolio data:', error)
        }
    }
    
    useEffect(() => {
        featchData()
    }, [])

    const headerData = portfolioData?.payload
    const projectData = portfolioData?.payload?.portfolio
    const thisProject = projectData?.find((item => item?.project_name === projectName))
    const usesTools = thisProject?.uses_tools?.split(",")

    return (
        <>
            <PortFolioHead portfolioAllData={headerData} />
            <div>
                <CaseStudyHEad thisProject={thisProject} />
                <div className='bg-[#ffffff]'>
                    <div className='w-8/12 mx-auto py-5'>
                        <picture>
                            <img src={`${API__URL}${thisProject?.thumbnail}`} alt="" />
                        </picture>
                    </div>
                    <div className='mt-[4rem] w-7/12 mx-auto'>
                        <h3 className='text-[#111] leading-[1.5] font-[700] text-[1.8rem] mb-[24px]'>Project Overview</h3>
                        <div className='text-[#555454] text-[1.2rem] leading-9'>
                            <DynamicRichTextComponentWithNoSSR htmlContent={thisProject?.full_description} />
                        </div>
                    </div>
                    <div className='mt-[4rem] w-7/12 mx-auto'>
                        <h3 className='text-[#111] leading-[1.5] font-[700] text-[1.8rem] mb-[2rem]'>Tools Used</h3>
                        <div className='mt-6 flex flex-wrap'>
                            {usesTools?.map((item, i) =>
                                <div key={i} className='skillCard' >
                                    {item}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mt-[4rem] w-7/12 mx-auto'>
                        <h3 className='text-[#111] leading-[1.5] font-[700] text-[1.8rem] mb-[2rem]'>See Live</h3>
                        <div className='mt-6 flex gap-6 pb-7'>
                            <Link href={`${thisProject?.live_link}`} >
                                <button className=' text-[#fff] bg-[#7843e9] text-[1.6rem] 
                        font-[500] uppercase  py-[10px] px-7 rounded shadow transition ease-in-out delay-100  hover:-translate-x-1 hover:scale-110 duration-200'>Live Link</button>
                            </Link>
                            <button onClick={handleGoBack} className=' text-[#2c2c2c] border border-[#7843e9] text-[1.6rem] font-[700] uppercase  py-2 px-7 rounded shadow transition ease-in-out delay-100  hover:-translate-x-1 hover:scale-110 duration-200'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioFooter />
        </>
    )
}

export default CaseStudy
