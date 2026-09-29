'use client'

import About from '@/components/Portfolio/About'
import Chating from '@/components/Portfolio/Chat'
import Contact from '@/components/Portfolio/Contact'
import Experience from '@/components/Portfolio/Experience'
import Home from '@/components/Portfolio/Home'
import PortFolioHead from '@/components/Portfolio/PortFolioHead'
import PortfolioFooter from '@/components/Portfolio/PortfolioFooter'
import Project from '@/components/Portfolio/Project'
import dummyPortfolio from '@/lib/dummyPortfolio'

const Portfolio = () => {
    const portfolioAllData = dummyPortfolio?.payload

    return (
        <div className='fade-in'>
            <PortFolioHead portfolioAllData={portfolioAllData} />
            <Home portfolioAllData={portfolioAllData} />
            <About portfolioAllData={portfolioAllData} />
            <Experience portfolioAllData={portfolioAllData} />
            <Project portfolioAllData={portfolioAllData} />
            <Contact />
            <PortfolioFooter />
            <Chating />
        </div>
    )
}

export default Portfolio
