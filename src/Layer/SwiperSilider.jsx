import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { EffectCoverflow, Pagination , Navigation  } from 'swiper/modules';

import specialOfferImgs01 from "/src/assets/SpecialOffers/SpecialOffers01.jpg"
import specialOfferImgs02 from "/src/assets/SpecialOffers/SpecialOffers02.jpg"
import specialOfferImgs03 from "/src/assets/SpecialOffers/SpecialOffers03.jpg"

function SwiperSilider() {
  return (
    <div className='container'>
        <h1>sssssss</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlidesz={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate:0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        }}
        
        className='swiper_container'
        >
            <SwiperSilider>
                <img src={specialOfferImgs01} alt="specialOfferImgs01 " />
            </SwiperSilider>
            <SwiperSilider>
                <img src={specialOfferImgs02} alt="specialOfferImgs02 " />
            </SwiperSilider>
            <SwiperSilider>
                <img src={specialOfferImgs03} alt="specialOfferImgs03 " />
            </SwiperSilider>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    </div>
  )
}

export default SwiperSilider