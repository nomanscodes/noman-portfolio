'use client'

import React, { useState, useEffect, useCallback } from 'react'
import PortFolioHead from '@/components/Portfolio/PortFolioHead'
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter'
import CaseStudyHEad from '@/components/Portfolio/CaseStudyHEad'
import CaseStudyLoadingSkeleton from '@/components/CaseStudyLoadingSkeleton'
import ErrorState from '@/components/ErrorState'
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

    const [portfolioData, setPortfolioData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            // Check cache first
            const cachedData = sessionStorage.getItem('portfolioData')
            const cacheTimestamp = sessionStorage.getItem('portfolioDataTimestamp')
            const now = Date.now()
            const fiveMinutes = 5 * 60 * 1000

            if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < fiveMinutes) {
                setPortfolioData(JSON.parse(cachedData))
                setLoading(false)
                return
            }

            const res = await axios.get('/api/portfolio', {
                timeout: 10000
            })

            if (res.data.error) {
                throw new Error(res.data.message || 'Failed to fetch portfolio data')
            }

            sessionStorage.setItem('portfolioData', JSON.stringify(res.data))
            sessionStorage.setItem('portfolioDataTimestamp', now.toString())

            setPortfolioData(res.data)
        } catch (error) {
            console.error('Error fetching portfolio data:', error)
            setError(error.message || 'Failed to load project details. Please try again.')
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const handleRetry = () => {
        sessionStorage.removeItem('portfolioData')
        sessionStorage.removeItem('portfolioDataTimestamp')
        fetchData()
    }

    if (loading) {
        return <CaseStudyLoadingSkeleton />
    }

    if (error) {
        return <ErrorState message={error} onRetry={handleRetry} />
    }

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
                                <button className='btn btn-primary'>Live Link</button>
                            </Link>
                            <button onClick={handleGoBack} className='btn btn-outline'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioFooter />
        </>
    )
}

export default CaseStudy
