import React from 'react'
import FollowUsInstagram from '../Component/Home/FollowUsInstagram'
import NewsletterSignUp from '../Component/Home/NewsletterSignUp'
import RoomsSuits from './RoomsSuits'
import Navbar from '../Component/Home/Navbar'
import Banner from '../Component/Home/Banner'
import LuxuryHotel from '../Component/Home/LuxuryHotel'
import FaciliServices from '../Component/Home/FaciliServices'


function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <LuxuryHotel/>
      <RoomsSuits />
      <FaciliServices/>
      <NewsletterSignUp />
      <FollowUsInstagram />
    </>
  )
}

export default Home