import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./About.css";
import Navbar from "./components/Nav";
import students from "./assets/DSC_6014.jpg";
import book from "./assets/open-book.png";
import ball from "./assets/soccer-ball-variant.png";
import headphones from "./assets/music.png";
import solutions from "./assets/solutions.png";
import Footer from "./components/Footer.jsx";
import Nav2 from "./components/Nav2.jsx"; // Import Nav2 component

function DetailPage() {
  const [activeSection, setActiveSection] = useState("what-we-do");

  const items1 = [
    {
      image: book,
      title: "Studies",
      text: "Our library offers a vast collection of books to inspire and educate students."
    },
    {
      image: ball,
      title: "Sports",
      text: "We promote an active lifestyle with various physical education and sports activities."
    }
  ];
  
  const items2 = [
    {
      image: headphones,
      title: "Music",
      text: "Explore musical talents and skills through our engaging music program and activities."
    },
    {
      image: solutions,
      title: "Creative",
      text: "Engage in creative activities that foster innovation and artistic expression."
    }
  ];

  return (
    <div className="relative">
      <Nav2 className="navbar" />
      <div className="about-1">
        <img src={students} className="about-1-img" alt="Students" />
        <div className="overlay"></div>
        <div className="centered-text">
          <h1>ABOUT US</h1>
          <p>Empowering students to achieve their full potential</p>
        </div>
      </div>
      <div className="about-2">
        <div className="why-us-div">
          <h1 className="why-header">WHY CHOOSE US</h1>
          <p className="why-choose-us-text">
            Our institution is dedicated to fostering a supportive and enriching environment for our students. We provide a well-rounded education that emphasizes academic excellence, personal growth, and extracurricular development. From our extensive library resources to our dynamic sports and music programs, we offer opportunities that cater to diverse interests and needs. Our committed staff ensures that every student receives the guidance and support necessary to thrive and achieve their full potential.
          </p>
        </div>
        <div className="about-2-items">
          <div className="item1-div">
            {items1.map((item, index) => (
              <div key={index} className="item">
                <img src={item.image} alt={`item-${index}`} className="item-image" />
                <h2>{item.title}</h2>
                <p className="item-text">{item.text}</p>
              </div>
            ))}            
          </div>
          <div className="item2">
            {items2.map((item, index) => (
              <div key={index} className="item">
                <img src={item.image} alt={`item-${index}`} className="item-image" />
                <h2>{item.title}</h2>
                <p className="item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-3">
        <div className="section-content">
          <div className="section-tabs">
            <div className="tab-container">
              <span 
                className={`tab ${activeSection === 'what-we-do' ? 'active' : ''}`} 
                onClick={() => setActiveSection('what-we-do')}
              >
                WHAT WE DO
              </span>
              <span 
                className={`tab ${activeSection === 'who-we-are' ? 'active' : ''}`} 
                onClick={() => setActiveSection('who-we-are')}
              >
                WHO WE ARE
              </span>
              <div className="active-underline"></div>
            </div>
          </div>
          {activeSection === 'what-we-do' && (
            <div className="content">
              <h1>What We Do</h1>
              <h2>Programs</h2>
              <p>
                Golden Plains School offers programs approved by the Kenya Ministry of Education and follows the government curriculum as a minimum. The school is fully equipped to offer the Competency-Based Curriculum (CBC) with all the facilities, including a computer lab, a science lab, a home science workshop, and an agriculture demo farm in place.
              </p>
              <h2>Holistic Learning</h2>
              <p>
                With a strong emphasis on holistic learning and cultured discipline, the school aims to mould citizens who will serve the global community with integrity and unbridled faith. The school is a fountain of knowledge and strives to provide an excellent environment for the young to learn, play, and grow in all aspects of life.
              </p>
            </div>
          )}
          {activeSection === 'who-we-are' && (
            <div className="content">
              <h1>Who We Are</h1>
              <h2>Mission</h2>
              <p>
                Empowering future generations of Kenya to be responsible, innovative, and compassionate citizens who thrive in their immediate and globalized world.
              </p>
              <h2>Vision</h2>
              <p>
                Empowering the Future.
              </p>
              <h2>Values</h2>
              <p>
                <strong>Respect:</strong> Respect for self, others, diverse cultures, and the environment.<br />
                <strong>Curiosity:</strong> Curiosity, problem-solving skills, and a questioning mind.<br />
                <strong>Independence:</strong> Independence, initiative, and taking ownership of learning and actions.<br />
                <strong>Communication:</strong> Effective communication skills, active listening, and collaboration with others.<br />
                <strong>Imagination:</strong> Imagination, and the ability to think outside the box.<br />
                <strong>Patriotism:</strong> Patriotism, being a proud Kenyan who stands for what’s right.
              </p>
              <h2>Location</h2>
              <p>
                Golden Plains School is a co-educational private primary & junior secondary school located in Airview/Milimani estate of Kitengela Township in Kajiado County. It is about 4km from the township, off the old Namanga Road and along the Golden Plains Avenue.
              </p>
              <h2>Teaching Staff</h2>
              <p>
                The school boasts a very competent professional teaching staff headed by its founding director, Rael Kananga, who has over 40 years of teaching and school management experience. Rael Kananga is an expert on Early Childhood Education and has authored teaching materials in this regard. The complement of 25 teachers has a cumulative experience of over 100 years of teaching.
              </p>
              <h2>Christian Values</h2>
              <p>
                Golden Plains is founded on very strong Christian values and is an excellent environment for the young to learn, play, and grow in all aspects of life. Guided by its motto, ‘Nurturing the Future,’ Golden Plains School is a home where learning is fun, and every child is nurtured with ultimate care and scholarly passion to achieve their best potential.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="additional-texts">
        <h2>Learn more about us</h2>
        <p>Check out the following links:</p>
        <div className="links-1">
          <Link to="/arts-and-sports">Arts & Sports</Link>
          <Link to="/Stem">Stem</Link>
          <Link to="/social-sciences">Social Sciences</Link>
        </div>
        <div className="links-2">
          <Link to="/Contact">Contact</Link>
          <Link to="/apply">Apply</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DetailPage;
