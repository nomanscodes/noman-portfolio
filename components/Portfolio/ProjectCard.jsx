import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { API__URL } from '@/lib/constants';


import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});

const ProjectCard = ({ item }) => {

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-8 mb-20 md:mb-24 lg:mb-30'>
            <div className='md:col-span-1 lg:col-span-4 relative overflow-hidden rounded-xl'>
                <Image
                    src={`${API__URL}${item?.thumbnail}`}
                    alt={item?.project_name || "Project thumbnail"}
                    width={800}
                    height={600}
                    className='w-full h-auto object-cover'
                    priority
                    unoptimized
                />
            </div>
            <div className='md:col-span-1 lg:col-span-3 flex items-center justify-center px-4 md:px-6 lg:px-0'>
                <div className='text-center md:text-left w-full'>
                    <h3 className='projectName'>{item?.project_name}</h3>
                    <div className='projectShortDescription'>
                        <DynamicRichTextComponentWithNoSSR htmlContent={item?.short_description} />
                    </div>

                    <Link href={`/portfolio/${item?.project_name}`} className='btn btn-primary'>Case study</Link>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard



// font-size: 62.5%;
// line-height: 1.5;
// margin: 0;
// padding: 0;
// box-sizing: inherit;
// font-family: inherit;
// display: grid;
// grid-template-columns: 1.5fr 1fr;
// grid-gap: 5rem;
// margin-bottom: 11rem;