'use client'

import About from '@/components/Portfolio/About'
import Chating from '@/components/Portfolio/Chat'
import Contact from '@/components/Portfolio/Contact'
import Home from '@/components/Portfolio/Home'
import PortFolioHead from '@/components/Portfolio/PortFolioHead'
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter'
import Project from '@/components/Portfolio/Project'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import ErrorState from '@/components/ErrorState'
import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            // Check if data is cached in sessionStorage
            const cachedData = sessionStorage.getItem('portfolioData')
            const cacheTimestamp = sessionStorage.getItem('portfolioDataTimestamp')
            const now = Date.now()
            const fiveMinutes = 5 * 60 * 1000 // 5 minutes in milliseconds

            // Use cached data if it exists and is less than 5 minutes old
            if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < fiveMinutes) {
                setPortfolioData(JSON.parse(cachedData))
                setLoading(false)
                return
            }

            // Fetch fresh data
            const res = await axios.get('/api/portfolio', {
                timeout: 15000 // 15 second timeout (increased to account for external API call)
            })

            if (res.data.error) {
                throw new Error(res.data.message || 'Failed to fetch portfolio data')
            }

            // Cache the data
            sessionStorage.setItem('portfolioData', JSON.stringify(res.data))
            sessionStorage.setItem('portfolioDataTimestamp', now.toString())

            setPortfolioData(res.data)
        } catch (error) {
            console.error('Error fetching portfolio data:', error)
            setError(error.message || 'Failed to load portfolio. Please try again.')
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // Handle retry
    const handleRetry = () => {
        // Clear cache on retry
        sessionStorage.removeItem('portfolioData')
        sessionStorage.removeItem('portfolioDataTimestamp')
        fetchData()
    }

    // Show loading skeleton
    if (loading) {
        return <LoadingSkeleton />
    }

    // Show error state
    if (error) {
        return <ErrorState message={error} onRetry={handleRetry} />
    }

    const portfolioAllData = portfolioData?.payload

    return (
        <div className='fade-in'>
            <PortFolioHead portfolioAllData={portfolioAllData} />
            <Home portfolioAllData={portfolioAllData} />
            <About portfolioAllData={portfolioAllData} />
            <Project portfolioAllData={portfolioAllData} />
            <Contact />
            <PortfolioFooter />
            <Chating />
        </div>
    )
}

export default Portfolio
