import React, { useState } from 'react'
import FacilitiesServices01 from "/src/assets/FacilitiesServices/FacilitiesServices01.jpg"
import { CgArrowLongRight } from 'react-icons/cg'
import TitleLogo from '../../Layer/TitleLogo'

function FaciliServices() {

    // service01 
    let [service01, setService01] = useState(true)

    let Service01Click = () => {
        setService01(!service01)
    }

    // service02 
    let [service02, setService02] = useState(true)

    let Service02Click = () => {
        setService02(!service02)
    }

    // service03 
    let [service03, setService03] = useState(true)

    let Service03Click = () => {
        setService03(!service03)
    }

    // service04 
    let [service04, setService04] = useState(true)

    let Service04Click = () => {
        setService04(!service04)


    }
    return (
        <>
            <div className=' bg-[#664831]  py-40 mb-1'>
                <div className='  xl:flex  xl:w-[1200px] lg:flex lg:w-[1000px] md:flex md:w-[700px] px-3 xl:px-0 m  gap-x-6 items-center mx-auto justify-center'>
                    <div className="leftPart">
                        <img src={FacilitiesServices01} alt="FacilitiesServices01" />
                    </div>
                    <div className="RightPart text-white flex flex-col gap-y-4">
                        <TitleLogo className=" flex text-[#b8a597] " classNameP="  text-base " pText="Facilities and Services" />
                        <div className="service01 xl:w-[400px] lg:w-[300px] md:w-[300px] w-auto">
                            <h2 className=' font-bold font-serif text-3xl text-[#bba89a] cursor-pointer' onClick={Service01Click}>Wellness & Spa</h2>
                            {
                                service01 && (
                                    <div>
                                        <b className=' text-wrap font-semibold font-serif text-[14px] py-3 pb-40'>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</b>
                                        <p className=' text-white'>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. </p>
                                        <h4 className='flex items-center text-[#bf885e] font-serif font-medium text-lg py-10   gap-x-3'><span>Explore More</span><span className=' text-[30px] font-thin '><CgArrowLongRight /></span></h4>
                                    </div>
                                )
                            }
                        </div>
                        <div className="service02 xl:w-[400px] lg:w-[300px] md:w-[300px] w-auto">
                            <h2 className=' font-bold font-serif text-3xl text-[#bba89a] cursor-pointer' onClick={Service02Click}>Restaurants</h2>
                            {
                                service02 && (
                                    <div>
                                        <b className=' text-wrap font-semibold font-serif text-[14px] py-3 pb-40'>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</b>
                                        <p className=' text-white'>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. </p>
                                        <h4 className='flex items-center text-[#bf885e] font-serif font-medium text-lg py-10   gap-x-3'><span>Explore More</span><span className=' text-[30px] font-thin '><CgArrowLongRight /></span></h4>
                                    </div>
                                )
                            }
                        </div>
                        <div className="service03 xl:w-[400px] lg:w-[300px] md:w-[300px] w-auto">
                            <h2 className=' font-bold font-serif text-3xl text-[#bba89a] cursor-pointer' onClick={Service03Click}>Lounge Bar</h2>
                            {
                                service03 && (
                                    <div>
                                        <b className=' text-wrap font-semibold font-serif text-[14px] py-3 pb-40'>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</b>
                                        <p className=' text-white'>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. </p>
                                        <h4 className='flex items-center text-[#bf885e] font-serif font-medium text-lg py-10   gap-x-3'><span>Explore More</span><span className=' text-[30px] font-thin '><CgArrowLongRight /></span></h4>
                                    </div>
                                )
                            }
                        </div>
                        <div className="service04 xl:w-[400px] lg:w-[300px] md:w-[300px] w-auto">
                            <h2 className=' font-bold font-serif text-3xl text-[#bba89a] cursor-pointer' onClick={Service04Click}>Conference Hall</h2>
                            {
                                service04 && (
                                    <div>
                                        <b className=' text-wrap font-semibold font-serif text-[14px] py-3 pb-40'>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</b>
                                        <p className=' text-white'>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. </p>
                                        <h4 className='flex items-center text-[#bf885e] font-serif font-medium text-lg py-10   gap-x-3'><span>Explore More</span><span className=' text-[30px] font-thin '><CgArrowLongRight /></span></h4>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default FaciliServices