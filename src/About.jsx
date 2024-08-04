import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./About.css";
import Navbar from "./components/Nav";
import students from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/DSC_6014.jpg";
import book from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/open-book.png";
import ball from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/soccer-ball-variant.png";
import headphones from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/music.png";
import solutions from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/solutions.png";
import Footer from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/components/Footer.jsx";

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
      <Navbar className="navbar" />
      <div className="about-1">
        <img src={students} className="about-1-img" alt="Students" />
        <div className="overlay"></div>
        <div className="centered-text">
          <h1>About Us</h1>
          <p>Empowering students to achieve their full potential</p>
        </div>
      </div>
      <div className="about-2">
        <div className="why-us-div">
          <h1 className="why-header">Why Choose Us</h1>
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
                What We Do
              </span>
              <span 
                className={`tab ${activeSection === 'who-we-are' ? 'active' : ''}`} 
                onClick={() => setActiveSection('who-we-are')}
              >
                Who We Are
              </span>
              <div className="active-underline"></div>
            </div>
          </div>
          {activeSection === 'what-we-do' && (
            <div className="content">
              <h1>What We Do</h1>
              <h2>Our Mission</h2>
              <p>
                Our mission is to create a supportive and inclusive environment where every student can excel. We focus on providing high-quality education that not only meets rigorous academic standards but also fosters personal growth and prepares students for future success.
              </p>
              <h2>Academic Excellence</h2>
              <p>
                We offer a challenging curriculum designed to inspire curiosity and critical thinking. Our diverse range of subjects caters to various interests, helping students discover and pursue their passions.
              </p>
              <h2>Personal Development</h2>
              <p>
                Beyond academics, we emphasize personal development through programs that build essential life skills. Activities and experiences are designed to boost confidence, leadership, and teamwork.
              </p>
              <h2>Extracurricular Activities</h2>
              <p>
                We provide numerous extracurricular opportunities, including sports, music, and arts. These activities complement academic learning and contribute to a balanced and engaging school experience.
              </p>
              <h2>Community Engagement</h2>
              <p>
                Our commitment to community involvement encourages students to participate in service projects. This fosters a sense of responsibility and empathy, helping students make a positive impact.
              </p>
              <h2>Supportive Environment</h2>
              <p>
                We create a safe and welcoming space where every student is valued. Our dedicated staff offers guidance and support to help students thrive academically and personally.
              </p>
            </div>
          )}
          {activeSection === 'who-we-are' && (
            <div className="content">
              <h1>Who We Are</h1>
              <h2>Our Values</h2>
              <p>
                We are driven by core values that define our institution and guide our actions. Integrity, respect, and excellence are at the heart of everything we do. We believe in fostering a culture of collaboration and inclusivity, where every student feels valued and supported.
              </p>
              <h2>Our Team</h2>
              <p>
                Our dedicated team of educators and staff are passionate about nurturing each student’s potential. With diverse backgrounds and expertise, they bring a wealth of knowledge and experience to our school community.
              </p>
              <h2>Our History</h2>
              <p>
                Founded with a vision to provide quality education, our institution has grown and evolved over the years. We have a rich history of achievements and milestones that reflect our commitment to educational excellence.
              </p>
              <h2>Community Involvement</h2>
              <p>
                We actively engage with the local community through various outreach programs and partnerships. Our goal is to build strong relationships and contribute positively to the society we are part of.
              </p>
              <h2>Future Goals</h2>
              <p>
                Looking ahead, we are focused on continuous improvement and innovation. Our future goals include expanding our programs, enhancing facilities, and further enriching the student experience.
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
          <Link to="/Social">Upcoming Events</Link>
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
