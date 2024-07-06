import React from 'react'
import ContenerOne from '../Component/AllComponent/ContenerOne'

import footerLogo01 from '/src/assets/Footer/footerlogo-1.png'
import footerLogo02 from '/src/assets/Footer/footerlogo-2.png'
import footerLogo03 from '/src/assets/Footer/footerlogo-3.png'
import footerLogo04 from '/src/assets/Footer/footerlogo-4.png'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'
function Footer() {
    return (
        <>

            <footer className='bg-[#473d35] py-20 xl:py-[160px]  font-serif'>
                <ContenerOne className="text-white md:flex md:flex-wrap md:gap-x-10 lg:flex lg:flex-wrap xl:gap-x-5 lg:gap-x-[150px] lg:gap-y-20 xl:flex  xl:justify-between mx-3 ">
                    <div className="leftPart md:mt-20 lg:mt-auto">
                        <div className='w-[290px]'>
                            <img className='w-full' src={footerLogo01} alt="footerLogo01" />
                        </div>
                        <ul className='mt-5 flex  flex-col gap-y-4 text-[#cec8c6]'>
                            <li>7 Rue Caulaincourt, 75018 Paris, France</li>
                            <li><span className=' font-bold'>Phone:</span> <span>+1 800 603 6035 (Viber, WhatsApp)</span></li>
                            <li><span className=' font-bold'>Fax:</span> <span>+1 800 889 9898</span></li>
                            <li><span className=' font-bold'>Email:</span> <span className='text-[#bf885e]'>mail@companyname.com </span></li>
                        </ul>
                    </div>

                    {/* middle Part start */}

                    <div className="leftPartText mt-20 lg:mt-0">
                        <h3 className='text-2xl '>Menu</h3>
                        <ul className='mt-8 flex flex-col gap-y-4 text-[#bf885e]'>

                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>About</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Special Offers</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>News</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="MiddelPartText  mt-20 lg:mt-0">
                        <h3 className='  text-2xl '>Rooms & Suits</h3>
                        <ul className='mt-8 flex flex-col gap-y-4  text-[#bf885e]'>

                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Classic</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Superior Superior</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Deluxe Deluxe</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Master</Link></li>
                        </ul>
                    </div>


                    <div className="rightPartText  mt-20 lg:mt-0">
                        <h3 className='  text-2xl '>Stay Connected</h3>
                        <ul className='mt-8 flex flex-col gap-y-4  transition-all duration-500 text-[#bf885e]'>

                            <li className='  hover:'><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Facebook</Link></li>
                            <li><Link className='flex items-center gap-x-2  hover:text-red-400' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Instagram</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Twitter</Link></li>
                            <li><Link className='flex items-center gap-x-2' to="#"><span className='text-4xl'><CgArrowLongRight className='h-7' /></span>Tripadvisor</Link></li>
                        </ul>
                    </div>

                    {/* <div className="middilePart ">
                        <div className=' xl:flex lg:flex lg:gap-[500px]  items-center gap-x-32 xl:justify-between'>
                        </div>
                    </div> */}
                    {/* middle Part end */}
                    <div className="RightPart  mt-20 lg:mt-0 lg:ml-44 md:ml-40 xl:ml-0">
                        <h3 className='text-2xl'>Our Awards</h3>
                        <div className='flex xl:justify-between xl:gap-x-5 gap-3   mt-8'>
                            <Link to="#" className=' xl:w-20 lg:w-36 md:28 w-24 '>
                                <img className='w-full' src={footerLogo02} alt="footerLogo02" />
                            </Link>

                            <Link to="#" className='xl:w-20  lg:w-36 md:28 w-24'>
                                <img className='w-full' src={footerLogo03} alt="footerLogo03" />
                            </Link>
                            <Link to="#" className='xl:w-24 lg:w-[160px] md:w-32 w-28 '>
                                <img className='w-full' src={footerLogo04} alt="footerLogo04" />
                            </Link>
                        </div>
                    </div>
                </ContenerOne>

                {/* Copyright © 2021 Hôtel Privé. All Rights Reserved.  start  */}
                <p className='text-[#c9c4c1] text-center mt-20 font-sans text-sm xl:text-base '>Copyright © 2021 Hôtel Privé. All Rights Reserved. </p>
                {/* Copyright © 2021 Hôtel Privé. All Rights Reserved.  end */}
            </footer>
        </>
    )
}

export default Footer