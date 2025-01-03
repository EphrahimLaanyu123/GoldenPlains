import React from 'react';
import { Helmet } from 'react-helmet';
import InfoSection from './components/InfoSection';
import Space from './components/Space';
import Curriculum from './components/Curriculum';
import CoCurriculum from './components/Co-curriculim';
import Join from './components/Join';
import MapComponent from './components/Maps';
import Footer from './components/Footer';
import Hero2Slider from './components/Hero2.jsx';

function Home() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <Helmet>
        {/* SEO Metadata */}
        <title>Home | Golden Plains</title>
        <meta
          name="description"
          content="Welcome to Golden Plains, where education meets excellence. Explore our diverse curriculum, co-curricular activities, and a vibrant community for holistic development."
        />
        <meta name="keywords" content="Golden Plains, Curriculum, Co-Curriculum, Education, CBC, Holistic Development" />
        <meta name="author" content="Golden Plains Team" />

        {/* Open Graph Metadata (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Home | Golden Plains" />
        <meta
          property="og:description"
          content="Discover the opportunities at Golden Plains, offering a comprehensive curriculum, co-curricular activities, and a supportive community."
        />
        <meta property="og:image" content="../assets/logo.png" />
        <meta property="og:url" content="https://goldenplainschool.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Golden Plains" />
        <meta
          name="twitter:description"
          content="Explore Golden Plains, your partner in education, offering diverse pathways and opportunities for holistic growth."
        />
        <meta name="twitter:image" content="../src/assets/logo.png" />
        <meta name="twitter:site" content="@GoldenPlains" />
        <meta name="twitter:creator" content="@GoldenPlains" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="../assets/logo.png" />
      </Helmet>
      <Hero2Slider />
      <InfoSection />
      <Space />
      <Curriculum />
      <Space />
      <CoCurriculum />
      <Space />
      <Join />
      <Space />
      <Space />
      <MapComponent />
      <Space />
      <Footer />
    </div>
  );
}

export default Home;
