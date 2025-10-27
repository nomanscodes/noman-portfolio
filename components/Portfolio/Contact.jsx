import React from 'react'
import ViewContainer from '../ViewContainer'

const Contact = () => {
    return (
        <div id='contact' className='h-[1100px] bg-cover bg-no-repeat' style={{ backgroundImage: `url("/assest/5667004.jpg")` }}>
            <ViewContainer>

                <div className='w-full h-full mt-24'>
                    <div className='flex flex-col items-center justify-center px-[9rem]'>
                        <h3 className='about_me'>contact</h3>
                        <span className='w-12 h-1 rounded shadow bg-[#7843e9]'></span>
                        <div className='flex items-center mx-3 mt-6'>
                            <h5 className='contactSubHeading max-w-[54rem]'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h5>
                        </div>
                        <div className='mt-7 max-w-[60rem] bg-white shadow-md rounded p-6'>
                            <div className='flex flex-col md:min-w-[50rem] mb-[2rem]'>
                                <label className='text-[#666] text-[1.2rem] font-[700] mb-[.5rem] tracking-[1px]' htmlFor="">Name</label>
                                <input type="text"
                                    placeholder='Enter Your Name' className='focus:outline-none p-[.9rem] w-[100%] bg-[#f0f0f0] text-[#333] rounded-[5px] font-[600] text-[1.1rem]' />
                            </div>
                            <div className='flex flex-col md:min-w-[50rem] mb-[2rem]'>
                                <label className='text-[#666] text-[1.2rem] font-[700] mb-[.5rem] tracking-[1px]' htmlFor="">Email</label>
                                <input type="text"
                                    placeholder='Enter Your Email' className='focus:outline-none p-[.9rem] w-[100%] bg-[#f0f0f0] text-[#333] rounded-[5px] font-[600] text-[1.1rem]' />
                            </div>
                            <div className='flex flex-col md:min-w-[50rem] mb-[2rem]'>
                                <label className='text-[#666] text-[1.2rem] font-[700] mb-[.5rem] tracking-[1px]' htmlFor="">Message</label>
                                <textarea placeholder='Enter Your Message' className='focus:outline-none p-[.9rem] w-[100%] bg-[#f0f0f0] text-[#333] rounded-[5px] font-[600] text-[1.1rem] max-h-[15rem] min-h-[15rem] tracking-[1px]'></textarea>
                            </div>
                            <div className='flex items-center justify-end md:min-w-[50rem]'>
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