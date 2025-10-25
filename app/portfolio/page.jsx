'use client'

import About from '@/components/Portfolio/About'
import Chating from '@/components/Portfolio/Chat'
import Contact from '@/components/Portfolio/Contact'
import Home from '@/components/Portfolio/Home'
import PortFolioHead from '@/components/Portfolio/PortFolioHead'
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter'
import Project from '@/components/Portfolio/Project'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API__URL } from '@/lib/constants'

const Portfolio = () => {

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

    let portfolioAllData = portfolioData?.payload

    return (
        <>
            <div className='bg-[#ffffff]'>
                <PortFolioHead portfolioAllData={portfolioAllData} />
                <Home portfolioAllData={portfolioAllData} />
                <About portfolioAllData={portfolioAllData}/>
                <Project portfolioAllData={portfolioAllData}/>
                <Contact />
                <PortfolioFooter />
                <Chating />
            </div>
        </>
    )
}

export default Portfolio
