import React from 'react'
import SpecialOffers01 from "/src/assets/SpecialOffers/SpecialOffers01.jpg"
import SpecialOffers02 from "/src/assets/SpecialOffers/SpecialOffers02.jpg"
import SpecialOffers03 from "/src/assets/SpecialOffers/SpecialOffers03.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import '/src/Component/Home/SpecialOffers.css';
import SwiperSiliderText from '../../Layer/SwiperSiliderText';


function SpecialOffers() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
        pagination={{
          clickable: true,
        }}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=' xl:w-[900px] xl:h-[700px] lg:h-[650px]  h-[580px]'>
                            <SwiperSiliderText src={SpecialOffers01} h4Text="Stay Longer" />
                </SwiperSlide>
                <SwiperSlide className='xl:w-[900px] xl:h-[700px] lg:h-[650px]  h-[580px] '>
                            <SwiperSiliderText src={SpecialOffers02} h4Text="Honeymoon Package" />
                </SwiperSlide>
                <SwiperSlide className=' xl:w-[900px] xl:h-[700px] lg:h-[650px] h-[580px]'>
                            <SwiperSiliderText src={SpecialOffers03} h4Text="E-Bike Sightseeing" />
                </SwiperSlide>
            
               
            </Swiper>

        </>
    )
}

export default SpecialOffers