import React from 'react'
import "/src/Component/Home/FollowusInstagram.css"
import FollowUsInstagram01 from "/src/assets/FollowUsInstagram/FollowUsInstagram01.jpg"
import FollowUsInstagram02 from "/src/assets/FollowUsInstagram/FollowUsInstagram02.jpg"
import FollowUsInstagram03 from "/src/assets/FollowUsInstagram/FollowUsInstagram03.jpg"
import FollowUsInstagram04 from "/src/assets/FollowUsInstagram/FollowUsInstagram04.jpg"
import FollowUsInstagram05 from "/src/assets/FollowUsInstagram/FollowUsInstagram05.jpg"
import ContenerTow from '../AllComponent/ContenerTow'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import TitleLogo from '../../Layer/TitleLogo'
function FollowUsInstagram() {
    return (
        <>
            <div className="FollowUsInstagram py-32  font-serif">
                <div className="FollowUsInstagramPart ">
                    <div className="topPart text-center">
                       <TitleLogo h2Text="Follow Us on Instagram" pText="#hotelprive"/>
                    </div>
                    <div className="bootomPart">
                        <ContenerTow className="  lg:pl-0 lg:flex lg:gap-6 lg:justify-center md:pl-0 md:flex md:gap-3 md:justify-center  pl-4 flex flex-wrap gap-x-3 gap-y-6 ">
                            <div className="imgs01 w-[150px] h-[170px] xl:w-[250px] xl:h-[250px] lg:w-[155px] lg:h-[155px]   md:w-[125px] md:h-[125px] ">
                                <Link className='imges ' to="#" ><img className='w-full h-full'  src={FollowUsInstagram01} alt="FollowUsInstagram01" /></Link>
                                <div className="overlay xl:bottom-[60%] xl:left-[35%] lg:bottom-[70%] lg:left-[30%] md:bottom-[70%] md:left-[30%] bottom-[70%] left-[30%]">
                                    <p className='icons'><FaInstagram /></p>
                                </div>
                            </div>
                            <div className="imgs01 w-[150px] h-[170px] xl:w-[250px] xl:h-[250px] lg:w-[155px] lg:h-[155px] md:w-[125px] md:h-[125px]">
                                <Link className='imges' to="#" ><img className='w-full h-full' src={FollowUsInstagram02} alt="FollowUsInstagram02" /></Link>
                                <div className="overlay xl:bottom-[60%] xl:left-[35%] lg:bottom-[70%] lg:left-[30%] md:bottom-[70%] md:left-[30%] bottom-[70%] left-[30%] ">
                                    <p className='icons'><FaInstagram /></p>
                                </div>
                            </div>
                            <div className="imgs01 w-[150px] h-[170px] xl:w-[250px] xl:h-[250px] lg:w-[155px] lg:h-[155px] md:w-[125px] md:h-[125px]">
                                <Link className='imges' to="#" ><img className='w-full h-full' src={FollowUsInstagram03} alt="FollowUsInstagram03" /></Link>
                                <div className="overlay xl:bottom-[60%] xl:left-[35%] lg:bottom-[70%] lg:left-[30%] md:bottom-[70%] md:left-[30%] bottom-[70%] left-[30%] ">
                                    <p className='icons'><FaInstagram /></p>
                                </div>
                            </div>
                            <div className="imgs01 w-[150px] h-[170px] xl:w-[250px] xl:h-[250px] lg:w-[155px] lg:h-[155px] md:w-[125px] md:h-[125px]">
                                <Link className='imges' to="#" ><img className='w-full h-full' src={FollowUsInstagram04} alt="FollowUsInstagram04" /></Link>
                                <div className="overlay xl:bottom-[60%] xl:left-[35%] lg:bottom-[70%] lg:left-[30%] md:bottom-[70%] md:left-[30%] bottom-[70%] left-[30%] ">
                                    <p className='icons'><FaInstagram /></p>
                                </div>
                            </div>
                            <div className="imgs01 w-[150px] h-[170px] xl:w-[250px] xl:h-[250px] lg:w-[155px] lg:h-[155px] md:w-[125px] md:h-[125px]">
                                <Link className='imges' to="#" ><img className='w-full h-full' src={FollowUsInstagram05} alt="FollowUsInstagram05" /></Link>
                                <div className="overlay xl:bottom-[60%] xl:left-[35%] lg:bottom-[70%] lg:left-[30%] md:bottom-[70%] md:left-[30%] bottom-[70%] left-[30%] ">
                                    <p className='icons'><FaInstagram /></p>
                                </div>
                            </div>
                            
                        </ContenerTow>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowUsInstagram