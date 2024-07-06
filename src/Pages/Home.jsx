import React from 'react'
import FollowUsInstagram from '../Component/Home/FollowUsInstagram'
import NewsletterSignUp from '../Component/Home/NewsletterSignUp'
import RoomsSuits from './RoomsSuits'
import Navbar from '../Component/Home/Navbar'
import Banner from '../Component/Home/Banner'


function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <RoomsSuits />
      <NewsletterSignUp />
      <FollowUsInstagram />
    </>
  )
}

export default Home