import React, { useState } from 'react'
import { MdOutlineLocalPhone } from 'react-icons/md'
import NavbarLogo1 from '/src/assets/Navbar/NavbarLogo1.png'
import { Link } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2'
import Button from '../../Layer/Button'
function Navbar() {
    let [bar, setBar] = useState(false)

    let barClick = () => {
        setBar(!bar)
    }


    return (
        <>
            <div className="Navbar bg-[#473d35] py-7 ">
                <div className=' xl:w-[1424px] mx-auto flex flex-wrap lg:w-[1000px]  justify-between px-4 '>
                    <div className="LeftPart text-white flex justify-center  gap-4 ">
                        <div className=' '>
                            <div className='LogoPart'>
                                <HiMiniBars3CenterLeft onClick={barClick} />
                                {
                                    bar && (
                                        <ul className=' flex flex-col gap-y-2 mt-2'>
                                            <li><Link to="/">Home</Link> </li>
                                            <li><Link to="/singleroom">SingleRoom</Link> </li>

                                        </ul>
                                    )
                                }
                            </div>
                        </div>
                        <div className=' bg-none'>
                            <select className=' select-box border-none  bg-transparent'>
                                <option className=' bg-red-300 outline-none' value="">En</option>
                                <option className=' bg-red-300 outline-none' value="ER">ER</option>
                                <option className=' bg-red-300 outline-none' value="DR">DR</option>
                            </select>
                        </div>

                    </div>
                    <div className="MiddlePart ">
                        <img className='w-[150px]' src={NavbarLogo1} alt="NavbarLogo1" />
                    </div>
                    <div className="RightPart flex justify-between py-10 xl:py-0 lg:py-0 md:py-0 sm:py-0 items-start gap-x-10">
                        <p className='flex items-center py-2 gap-x-3 text-white'><span><MdOutlineLocalPhone /></span>+1 800 603 6035</p>
                        <Button ButtonText="Book Now" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar