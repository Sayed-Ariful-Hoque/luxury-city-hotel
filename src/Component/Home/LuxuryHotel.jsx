import React from 'react'
import LuxuryHotel01 from '/src/assets/LuxuryHotel/LuxuryHotel01.jpg'
import TitleLogo from '../../Layer/TitleLogo'
import { CgArrowLongRight } from 'react-icons/cg'
import "/src/Component/Home/LuxuryHotel.css"
function LuxuryHotel() {
    return (
        <>
            <div className='py-36 bg-[#f7f6f6]'>
                <div className='  xl:w-[1200px] mx-auto xl:flex lg:flex justify-center items-center px-3 xl:px-0 lg:px-0 gap-6'>
                    <div className='leftPart'>
                        <div className=" flex justify-center items-center  ">
                            <div className=' xl:w-[400px] lg:w-[400px]    mx-auto'>
                                <TitleLogo className=" font-medium font-serif text-start flex flex-wrap justify-start " pText="welcome" h2Text="" />
                                <h2 className=' font-medium xl:text-6xl text-5xl  font-serif' >Luxury Hotel</h2>
                                <h4 className=' font-medium text-3xl font-serif mt-3'>Near The Montmartre, Paris</h4>
                                <p className=' text-[#473d35] font-semibold font-serif text-[14px] py-3'>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
                                <p className=' text-[#50473f]'>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. </p>
                                <h4 className='flex items-center text-[#bf885e] font-serif font-medium text-lg py-10   gap-x-3'><span>Explore More</span><span className=' text-[30px] font-thin '><CgArrowLongRight /></span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="rightPart xl:w-[700px] lg:w-[500px]  ">
                        <img src={LuxuryHotel01} alt="LuxuryHotel01" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LuxuryHotel