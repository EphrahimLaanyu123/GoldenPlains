import React from 'react'
import HeroSlider from './components/Hero'
import InfoSection from './components/InfoSection'
import Space from './components/Space'
import Curriculum from './components/Curriculum'
import CoCurriculum from './components/Co-curriculim'
import Join from './components/Join'
import MapComponent from './components/Maps'
import Footer from './components/Footer'




function Home() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <HeroSlider/>
      <InfoSection/>
      <Space/>
      <Curriculum/>
      <Space/>
      <CoCurriculum/>
      <Space/>
      <Join/>
      <Space/>
      <Space/>
      <MapComponent/>
      <Space/>
      <Footer/>
    </div>
  )
}

export default Home