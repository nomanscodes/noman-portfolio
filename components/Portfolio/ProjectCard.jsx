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

        <div className='grid grid-cols-7 gap-6 mb-30'>
            <div className='col-span-4 relative overflow-hidden rounded-xl'>
                <Image
                    src={`${API__URL}${item?.thumbnail}`}
                    alt={item?.project_name || "Project thumbnail"}
                    width={800}
                    height={600}
                    className='w-full h-auto object-cover transition-transform duration-300 hover:scale-105'
                    priority
                    unoptimized
                />
            </div>
            <div className='col-span-3 flex items-center justify-center'>
                <div>
                    <h3 className='projectName'>{item?.project_name
                    }</h3>
                    <h3 className='projectShortDescription'>
                        <DynamicRichTextComponentWithNoSSR htmlContent={item?.short_description} />
                    </h3>

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