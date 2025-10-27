import React, { useState } from "react";
import Image from 'next/image';
import { BiSolidPencil, BiSolidSend } from "react-icons/bi";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineArrowOutward, MdOutlineEmojiEmotions } from "react-icons/md";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { RxCross2 } from "react-icons/rx";


const Chating = () => {
    const [showMessageBar, setshowMessageBar] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);
    const [shake_animat, setShake_animat] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [text, setText] = useState("");
    const [mail, setMail] = useState("");


    const createAccouont = () => {
        if (mail === "") {
            setShake_animat(!shake_animat)
        }
        else {
            localStorage.setItem("email", JSON.stringify(mail))

            setShowLogin(false)
            setshowMessageBar(true)
        }


    }



    const addEmoji = (e) => {
        const symb = e.unified.split("_")
        const codeArry = []
        symb.forEach((el) => codeArry.push("0x" + el))

        let emoji = String.fromCodePoint(...codeArry)
        setText(text + emoji)
    }



    const submitHandeler = () => {
        let guest = JSON.parse(localStorage.getItem("email"))

        if (text === "") {
            setShake_animat(!shake_animat)
        } else {
            if (!guest) {
                setShowLogin(true)
                setshowMessageBar(false)
            }
        }
    }



    return (
        <>
            <div className={`${showMessageBar || showLogin ? `hidden` : `fixed`} bottom-6 md:bottom-9 right-4 md:right-8 z-50`}>
                <div className="flex items-center gap-2">
                    <span onClick={() => setshowMessageBar(true)} className="hidden sm:flex items-center gap-1 bg-white chat_with_me p-2 rounded-full cursor-pointer">
                        <h3 className="text-[#353535] text-base md:text-[19px] font-medium px-2">Chat with me</h3>
                        <Image
                            src="/assest/hand.png"
                            alt="Hand wave"
                            width={25}
                            height={25}
                            className="w-[20px] md:w-[25px]"
                        />
                    </span>
                    <div onClick={() => setshowMessageBar(true)} className="bg-[#5616e0] h-[60px] w-[60px] md:h-[70px] md:w-[70px] rounded-full flex items-center justify-center md:cursor-pointer z-40 chat_with_me_logo relative group">
                        <BsFillChatLeftFill size={20} color="white" />
                        <div className="absolute bg-white h-0 w-0 group-hover:h-[63px] group-hover:w-[63px] md:group-hover:h-[73px] md:group-hover:w-[73px] rounded-full ease-in-out transition-all duration-300 flex items-center justify-center">
                            <BiSolidPencil size={29} color="#0a7bfd" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed z-50 chat_box rounded-[16px] transition-opacity duration-500 ${showMessageBar ? ` right-4 md:right-10 bottom-4 md:bottom-8 visible_chat` : `hidden_chat`} w-[calc(100%-2rem)] sm:w-[372px] max-w-[372px] flex flex-col`}>
                <div className="max-h-[600px] w-[100%] relative">
                    <div className="relative overflow-hidden">
                        <div className="chat_box_top p-[24px] rounded-t-[16px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 font-[400] text-[42px] break-words whitespace-pre-line textstr">
                                    Hi there
                                    <Image
                                        src="/assest/hand.png"
                                        alt="Hand wave"
                                        width={32}
                                        height={32}
                                        className="w-8"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiDotsVertical size={24} className="cursor-pointer" />
                                    <FaChevronDown onClick={() => setshowMessageBar(false)} size={24} className="cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex items-center gap-16">
                                <span>
                                    <h2>Welcome to my website </h2>
                                    <span className="flex items-center gap-2 mt-[2px]">
                                        Ask me anything
                                        <Image
                                            src="/assest/flower.png"
                                            alt="Flower"
                                            width={20}
                                            height={20}
                                            className="w-5"
                                        />
                                    </span>
                                </span>
                                <Image
                                    src="/assest/h3.jpeg"
                                    alt="Profile"
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="chat_box_top px-6 pt-2 flex items-center gap-2">
                                <span className="animate-pulse h-[14px] w-[14px] rounded-full bg-green-500"></span>
                                <h4 className="text-[14px]">I reply immediatley</h4>
                            </div>
                            <div className="w-[100%] h-4" style={{ backgroundImage: `url("/assest/style2.png")` }}>
                            </div>
                        </div>
                        {showEmoji && (
                            <div className="absolute top-2 left-2">
                                <Picker
                                    onEmojiSelect={addEmoji}
                                    previewPosition="none"
                                    emojiSize={20}
                                    perLine={9}
                                    searchPosition="none"
                                    data={data} />
                            </div>
                        )}
                    </div>
                    <div className="">
                        <div className="flex flex-col flex-grow max-h-[250px] p-4 overflow-y-auto">

                            <div className="flex mt-3 space-x-3 max-w-[85%] ml-auto justify-end">
                                <div>
                                    <div className="bg-gradient-to-l to-[#540af3] from-[#7843e9] text-white px-5 py-2 rounded-full">
                                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-3 space-x-3 max-w-[85%] mr-auto justify-end">
                                <div>
                                    <div className="bg-slate-100 text-[#4b4a4a] px-5 py-2 rounded-full">
                                        <p className="text-sm">Lorem ipsum consectetur adipiscing</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="px-3">
                            <div className="messsage_box_div">
                                <textarea value={text}
                                    onChange={(e) => setText(e.target.value)} placeholder="Enter your message..."
                                    className={`${shake_animat ? `shake_animation ` : ``}focus:outline-none w-[100%] min-h-[50px] text-[16px] font-medium p-2 resize-none leading-[20px] text-[#666] tracking-[.5px]`}></textarea>
                            </div>
                        </div>
                        <div className="w-[100%] py-3 relative rounded-b-[16px]">
                            <div className="flex items-center justify-between pl-5 pr-12">
                                <MdOutlineEmojiEmotions onClick={() => setShowEmoji(!showEmoji)} size={25} color="#666" className="cursor-pointer" />

                                <h3 className="text-[10px] text-[#666] uppercase tracking-[1px]">
                                    powerd by <span className="text-[#000000]">emoji mart</span>
                                </h3>
                            </div>
                            <div className="absolute -right-7 bottom-6">
                                <div onClick={submitHandeler} className="bg-[#5616e0] h-[70px] w-[70px] rounded-full flex items-center justify-center md:cursor-pointer z-40 chat_with_me_logo relative group">
                                    <BiSolidSend size={32} color="white" />
                                    <div className="absolute bg-white h-0 w-0 group-hover:h-[73px] group-hover:w-[73px] rounded-full ease-in-out transition-all duration-300 flex items-center justify-center">
                                        <BiSolidSend size={33} color="#0a7bfd" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${showLogin ? `right-4 md:right-10 bottom-4 md:bottom-16 visible_chat` : `hidden_chat`} fixed z-50 h-[550px] w-[calc(100%-2rem)] sm:w-[350px] max-w-[350px] bg-white rounded-[16px] flex flex-col justify-between login_box`}>

                <div className="flex items-center justify-end p-4">
                    <RxCross2
                        onClick={() =>
                            setshowMessageBar(true) & setShowLogin(false)}
                        className="text-[#666] cursor-pointer"
                        size={26} />
                </div>
                <div className="max-w-[80%] mx-auto flex flex-col">
                    <div className="flex items-center justify-center mb-[25px]">
                        <Image
                            src="/assest/h3.jpeg"
                            alt="Profile"
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-full object-cover"
                        />
                    </div>

                    <h3 className="tracking-[0.24px] font-[600] text-[22px] text-[#00122e] mb-[20px]">Please Introduce Yourself</h3>

                    <div className="mb-[20px]">
                        <input onChange={(e) => setMail(e.target.value)} type="email" placeholder="Enter Your Email"
                            className={`${shake_animat ? `shake_animation ` : ``}focus:outline-none border border-[#9c9a9a] py-2.5 pl-7 text-[16px] font-medium text-[#666] rounded relative w-full`} />
                        <MdOutlineArrowOutward size={22}
                            className={`${shake_animat ? `shake_animation ` : ``}absolute rotate-90 -mt-[33px] ml-1 text-[#0075ff]`} />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-[20px]">
                        <input type="checkbox" className="border border-[#9c9a9a]" />
                        <h1 className="text-[12px] font-medium text-[#666]">Sign up for our newsletter</h1>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={createAccouont} className='btn btn-gradient w-full'>Send</button>
                    </div>
                </div>
                <div className="bg-gradient-to-l to-[#5409f5] from-[#6627ee] rounded-b-[16px]">
                    <div className="shape mb-4">
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chating;
