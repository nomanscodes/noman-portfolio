import Link from 'next/link'
import React from 'react'
import { API__URL } from '@/lib/constants';


import dynamic from "next/dynamic";
const DynamicRichTextComponentWithNoSSR = dynamic(() => import("../RichTextComponent"), {
    ssr: false,
});

const ProjectCard = ({ item }) => {

    return (

        <div className='grid grid-cols-7 gap-6  mb-[9rem]'>
            <div className='col-span-4'>
                <picture>
                    <img src={`${API__URL}${item?.thumbnail}`} alt="" />
                </picture>
            </div>
            <div className='col-span-3 flex items-center justify-center'>
                <div>
                    <h3 className='projectName'>{item?.project_name
                    }</h3>
                    <h3 className='projectShortDescription'>
                        <DynamicRichTextComponentWithNoSSR htmlContent={item?.short_description} />
                    </h3>

                    <Link href={`/portfolio/${item?.project_name}`} className=' text-[#fff] bg-[#7843e9] text-[1.2rem] font-[600] uppercase  py-2 px-7 rounded shadow transition ease-in-out delay-100  hover:-translate-x-1 hover:scale-110 duration-200'>Case study</Link>
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