import Link from 'next/link'
import React from 'react'
import { convert } from 'html-to-text';


const CaseStudyHEad = ({ thisProject, handleGoBack }) => {

    const data = thisProject

    // html to text 
    const convertHtmlToPlainText = (html) => {
        return convert(html, {
            wordwrap: false,
        });
    };

    const description = convertHtmlToPlainText(data?.short_description)

    return (
        <div className='w-full min-h-[500px] md:h-[650px] lg:h-[760px] bg-cover bg-center bg-no-repeat mt-16 md:mt-20' style={{ backgroundImage: `url("/assest/13338.jpg")` }}>
            <div className='w-full h-full relative'>
                <div className='w-full absolute mt-24 md:mt-32 lg:mt-44 flex items-center justify-center px-4'>
                    <div className='w-full'>
                        <h1 className='portfolioHead text-3xl md:text-5xl lg:text-6xl'>{data?.project_name}</h1>
                        <div className='mt-4 md:mt-5'>
                            <h4 className='portfolioSubHeading flex items-center justify-center max-w-full md:max-w-[55rem] mx-auto px-4 text-base md:text-lg lg:text-xl'>
                                {description}
                            </h4>

                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12'>
                            <button onClick={handleGoBack} className='btn btn-outline w-full sm:w-auto'>Go Back</button>
                            <Link href={`${data?.live_link}`} target='_blank'>
                                <button className='btn btn-primary w-full sm:w-auto'>project link</button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default CaseStudyHEad
