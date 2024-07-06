import React from 'react'
import SuperiorSingleRoom01 from "/src/assets/SuperiorSingleRoom/SuperiorSingleRoom01.jpg"
import SuperiorSingleRoom02 from "/src/assets/SuperiorSingleRoom/SuperiorSingleRoom02.jpg"
import SuperiorSingleRoom03 from "/src/assets/SuperiorSingleRoom/SuperiorSingleRoom03.jpg"
import SuperiorSingleRoom04 from "/src/assets/SuperiorSingleRoom/SuperiorSingleRoom04.jpg"
import Slider from '@ant-design/react-slick';
import "slick-carousel/slick/slick.css";
import SiliderText from '../../Layer/SiliderText'

function SuperiorSingleRoom() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div>

                <Slider {...settings}>
                    <div className="  bg-[url('/src/assets/SuperiorSingleRoom/SuperiorSingleRoom01.jpg')]  h-[700px] bg-cover bg-no-repeat object-center bg-center relative  ">
                            <p className='  bg-[#473b31] opacity-[0.8] absolute w-full h-full  '></p>
                            <SiliderText Texth2="Superior Double Room" />
                    </div>
                    <div className="  bg-[url('/src/assets/SuperiorSingleRoom/SuperiorSingleRoom02.jpg')]  h-[700px] bg-cover bg-no-repeat object-center bg-center relative  ">
                            <p className='  bg-[#473b31] opacity-[0.8] absolute w-full h-full  '></p>
                            <SiliderText Texth2="Famaliy Room" />
                    </div>
                    <div className="  bg-[url('/src/assets/SuperiorSingleRoom/SuperiorSingleRoom03.jpg')]  h-[700px] bg-cover bg-no-repeat object-center bg-center relative  ">
                            <p className='  bg-[#473b31] opacity-[0.8] absolute w-full h-full  '></p>
                            <SiliderText Texth2="Deluxe Double Room" />
                    </div>
                    <div className="  bg-[url('/src/assets/SuperiorSingleRoom/SuperiorSingleRoom04.jpg')]  h-[700px] bg-cover bg-no-repeat object-center bg-center relative  ">
                            <p className='  bg-[#473b31] opacity-[0.8] absolute w-full h-full  '></p>
                            <SiliderText Texth2="Superior Singile Room" />
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default SuperiorSingleRoom