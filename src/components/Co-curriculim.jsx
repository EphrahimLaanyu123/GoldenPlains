import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Home from '../../src/assets/home.png';
import Music from "../../src/assets/piano.png";
import Computer from "../../src/assets/computer.png";
import './Courriculum.css'; // Import the CSS file

function Courriculum() {
  const infoSection = [
    { title: "MUSIC AND DRAMA", image: Music },
    { title: "HOME SCIENCE", image: Home },
    { title: "DIGITAL LITERACY", image: Computer },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(infoSection.length, 3),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: 'inline-flex' }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ margin: '0 5px' }}>
              {dot.props.children}
            </li>
          ))}
        </ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(infoSection.length, 2) } },
      { breakpoint: 768, settings: { slidesToShow: 1, prevArrow: false, nextArrow: false } },
    ],
  };

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} arrow arrow-prev`}
        style={{ ...style, left: '10px' }}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} arrow arrow-next`}
        style={{ ...style, right: '10px' }}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  }

  return (
    <div className="courriculum-container">
      <div className="courriculum-title">OUR CO-CURRICULUM</div>
      <div className="courriculum-description">
        AT OUR SCHOOL, WE BELIEVE IN LEARNING THAT EXTENDS BEYOND THE CORE
        SUBJECTS OF THE COMPETENCY BASED CURRICULUM (CBC). THAT’S WHY WE OFFER A
        VIBRANT SELECTION OF CLUBS DESIGNED TO SPARK YOUR INTERESTS, TALENTS AND
        CREATIVITY.
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {infoSection.map((info, index) => (
            <div key={index} className="slider-item">
              <div className={`courriculum-card ${index % 2 === 0 ? "bg-white" : "bg-yellow-500"}`}>
                <img src={info.image} alt={info.title} className="cardimage" />
                <div className="card-title">
                  {info.title}
                  <hr className="title-underline" />
                </div>
                <div className="card-footer">
                  <Link to={`/about`} className="read-more-link">
                    Read More
                    <FaChevronRight className="arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Courriculum;
