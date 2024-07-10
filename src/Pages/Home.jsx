import React from 'react'
import FollowUsInstagram from '../Component/Home/FollowUsInstagram'
import NewsletterSignUp from '../Component/Home/NewsletterSignUp'
import RoomsSuits from './RoomsSuits'
import Navbar from '../Component/Home/Navbar'
import Banner from '../Component/Home/Banner'
import LuxuryHotel from '../Component/Home/LuxuryHotel'
import FaciliServices from '../Component/Home/FaciliServices'
import SuperiorSingleRoom from '../Component/Home/SuperiorSingleRoom'
import SpecialOffers from '../Component/Home/SpecialOffers'


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <LuxuryHotel />
      <RoomsSuits />
      <SuperiorSingleRoom />
      <FaciliServices />
      <RoomsSuits />
      <SpecialOffers/>
      <NewsletterSignUp />
      <FollowUsInstagram />
    </>
  )
}

export default Home