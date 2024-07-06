import React from 'react'
import TitleLogo from '../../Layer/TitleLogo'
import { Link } from 'react-router-dom'
import { FaRegCirclePlay } from 'react-icons/fa6'

function Banner() {
    return (
        <>
            <div>
                <div className=" relative  bg-[url('/src/assets/Banner/bannerImgs01.jpg')]   xl:h-[1100px] lg:h-[1000px] md:[h-800px] h-auto bg-cover bg-no-repeat bg-center">
                    <div  className=' w-full h-full absolute  opacity-[.3] bg-black  '></div>
                    <TitleLogo  classNameh2="drop-shadow-md" className="  xl:pt-[400px] lg:pt-[300px] md:pt-[300px] sm:pt-[200px]  text-white pt-10 " classNameP='drop-shadow-md text-white' pText="time to reconnect" h2Text=" New Vision of Comfort" />
                    <a className=' text-center block ' href="https://www.youtube.com/watch?v=6OE2JoqQM2c"><FaRegCirclePlay className=' mx-auto w-[200px]  block drop-shadow-md text-white text-7xl' /></a>
                    <p className=' text-center drop-shadow-md text-white uppercase text-xs tracking-[3px] pt-2 pb-20 '>watch the film</p>
                </div>
            </div>
        </>
    )
}

export default Banner