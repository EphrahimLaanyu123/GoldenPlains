import React from 'react'
import Nav from './components/Nav'
import HeroSlider from './components/Hero'
import InfoSection from './components/InfoSection'
import Space from './components/Space'
import Curriculum from './components/Curriculum'
import CoCurriculum from './components/Co-curriculim'
import Join from './components/Join'
import CommunitySpace from './components/CommunitySpace'
import MapComponent from './components/Maps'
import Footer from './components/Footer'
import AdminLogIn from './login/AdminLogIn'



function Home() {
  return (
    <div className="bg-orange-100 min-h-screen">

      <HeroSlider/>
      <Space/>
      <InfoSection/>
      <Space/>
      <Curriculum/>
      <Space/>
      <CoCurriculum/>
      <Space/>
      <Join/>
      <Space/>
      <CommunitySpace/>
      <Space/>
      <MapComponent/>
      <Space/>
      <Footer/>
      <AdminLogIn></AdminLogIn>
    </div>
  )
}

export default Home