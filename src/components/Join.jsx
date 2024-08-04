import React, { useRef, useEffect, useState } from "react";
import Hero from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/HeroImage.png";
import { Link } from "react-router-dom";
import './Join.css';

function Join() {
  const [isBlurred, setIsBlurred] = useState(false);
  const joinRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsBlurred(false);
          } else {
            setIsBlurred(true);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (joinRef.current) {
      observer.observe(joinRef.current);
    }

    return () => {
      if (joinRef.current) {
        observer.unobserve(joinRef.current);
      }
    };
  }, [joinRef]);

  return (
    <div className={`join-container ${isBlurred ? 'blurred' : ''}`} ref={joinRef}>
      <div
        className="join-background"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="join-overlay"></div>
        <div className="join-content">
          <div className="join-title">Join Our Team</div>
          <div className="join-subtitle">
            IF YOU ARE READY TO MAKE A DIFFERENCE IN THE LIVES OF CHILDREN, WE ENCOURAGE YOU TO EXPLORE OUR CAREERS TAB TODAY! WE LOOK FORWARD TO HEARING FROM YOU.
          </div>
          <div className="join-button">
            <Link to="/admissions" className="join-link">
              APPLY HERE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
