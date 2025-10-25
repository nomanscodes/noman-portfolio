import Link from 'next/link'
import React from 'react'
import { convert } from 'html-to-text';


const CaseStudyHEad = ({ thisProject }) => {

    const data = thisProject

    // html to text 
    const convertHtmlToPlainText = (html) => {
        return convert(html, {
            wordwrap: false,
        });
    };

    const description = convertHtmlToPlainText(data?.short_description)

    return (
        <div className='w-[100%] h-[760px] bg-cover bg-no-repeat mt-10 ' style={{ backgroundImage: `url("/assest/13338.jpg")` }}>
            <div className='w-full h-full relative'>
                <div className='w-full absolute  mt-44 flex items-center justify-center'>
                    <div>
                        <h1 className='portfolioHead'>{data?.project_name}</h1>
                        <div className='mt-5'>
                            <h4 className='portfolioSubHeading flex items-center justify-center max-w-[55rem]'>
                                {description}
                            </h4>

                        </div>
                        <div className='flex items-center justify-center mt-12'>
                            <Link href={`${data?.live_link}`} target='_blank' className='portfolioButton transition ease-in-out delay-100  hover:-translate-x-1 hover:scale-110 duration-200'>project link</Link>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default CaseStudyHEad
