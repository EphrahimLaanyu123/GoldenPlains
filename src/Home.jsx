import React from 'react'
import InfoSection from './components/InfoSection'
import Space from './components/Space'
import Curriculum from './components/Curriculum'
import CoCurriculum from './components/Co-curriculim'
import Join from './components/Join'
import MapComponent from './components/Maps'
import Footer from './components/Footer'
import Hero2Slider  from '/home/user/GoldenPlainsSchool/src/components/Hero2.jsx'




function Home() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <Hero2Slider/>
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