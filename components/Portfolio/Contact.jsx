import React from 'react'
import ViewContainer from '../ViewContainer'

const Contact = () => {
    return (
        <div id='contact' className='min-h-[800px] md:min-h-[1000px] lg:h-[1100px] bg-cover bg-center bg-no-repeat py-16 md:py-20' style={{ backgroundImage: `url("/assest/5667004.jpg")` }}>
            <ViewContainer>

                <div className='w-full h-full mt-12 sm:mt-16 md:mt-20 lg:mt-24'>
                    <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16'>
                        <h3 className='about_me'>contact</h3>
                        <span className='w-10 md:w-12 h-1 rounded shadow bg-[#7843e9]'></span>
                        <div className='flex items-center mx-3 mt-3 md:mt-4 lg:mt-6'>
                            <div className='contactSubHeading max-w-full md:max-w-[54rem]'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</div>
                        </div>
                        <div className='mt-6 md:mt-7 w-full max-w-[90%] md:max-w-[60rem] bg-white shadow-md rounded p-4 md:p-6 lg:p-8'>
                            <div className='flex flex-col w-full mb-6 md:mb-8'>
                                <label className='text-[#666] text-base md:text-lg lg:text-[1.2rem] font-[700] mb-[.5rem] tracking-[1px]' htmlFor="">Name</label>
                                <input type="text"
                                    placeholder='Enter Your Name' className='focus:outline-none p-3 md:p-[.9rem] w-full bg-[#f0f0f0] text-[#333] rounded-[5px] font-[600] text-base md:text-lg' />
                            </div>
                            <div className='flex flex-col w-full mb-6 md:mb-8'>
                                <label className='text-[#666] text-base md:text-lg lg:text-[1.2rem] font-[700] mb-[.5rem] tracking-[1px]' htmlFor="">Email</label>
                                <input type="text"
                                    placeholder='Enter Your Email' className='focus:outline-none p-3 md:p-[.9rem] w-full bg-[#f0f0f0] text-[#333] rounded-[5px] font-[600] text-base md:text-lg' />
                            </div>
                            <div className='flex flex-col w-full mb-6 md:mb-8'>
                                <label className='text-[#666] text-base md:text-lg lg:text-[1.2rem] font-[700] mb-[.5rem] tracking-[1px]' htmlFor="">Message</label>
                                <textarea placeholder='Enter Your Message' className='focus:outline-none p-3 md:p-[.9rem] w-full bg-[#f0f0f0] text-[#333] rounded-[5px] font-[600] text-base md:text-lg max-h-[12rem] min-h-[12rem] md:max-h-[15rem] md:min-h-[15rem] tracking-[1px]'></textarea>
                            </div>
                            <div className='flex items-center justify-end w-full'>
                                <button className='btn btn-primary'>submit</button>
                            </div>

                        </div>
                    </div>

                </div>
            </ViewContainer>

        </div>
    )
}

export default Contact


// color: #333;
// padding: 2rem;
// width: 100%;
// border: 1px solid #ebebeb;
// font-size: 1.6rem;
// background: #f0f0f0;
// border-radius: 5px;
// font-weight: 600;