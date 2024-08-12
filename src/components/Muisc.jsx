import React, { useState } from "react";
import Nav2 from "./Nav2";
import "./Music.css";
import violin from "../assets/DSC_5758 (1).jpg"; 
import computer from "../assets/computer.png";
import home from "../assets/home.png";
import Footer from "./Footer"

function Music() {
    const cos = [
        {
            title: "MUSIC CLUB",
            info: "The Music Club at our school is a haven for budding musicians and music enthusiasts alike. Here, students can explore their musical talents, learn to play various instruments, and understand the theory behind the music. The club provides an excellent platform for students to collaborate, compose, and perform music in a supportive environment. Members have the opportunity to participate in school concerts, inter-school competitions, and community events. With state-of-the-art musical instruments and guidance from experienced instructors, the Music Club nurtures creativity, teamwork, and a deep appreciation for the art of music.",
            image: violin
        },
        {
            title: "COMPUTER LAB",
            info: "Our Computer Lab is a state-of-the-art facility that provides students with access to the latest technology and software. It is a hub for learning, innovation, and discovery. Students can engage in a variety of activities, from coding and robotics to digital art and media production. The lab is equipped with high-speed internet and modern computers, ensuring that students have the resources they need to succeed. Through various projects and competitions, students can develop their technical skills and problem-solving abilities, preparing them for the technological challenges of the future.",
            image: computer
        },
        {
            title: "HOME CLUB",
            info: "The Home Club is dedicated to teaching students essential life skills that go beyond the classroom. This club focuses on activities such as cooking, sewing, home management, and financial literacy. Students learn to prepare nutritious meals, manage household chores, and understand the basics of budgeting and saving. The Home Club emphasizes the importance of self-sufficiency, responsibility, and practical knowledge. Through hands-on activities and workshops, students gain valuable skills that will serve them well in their personal lives and future careers.",
            image: home
        }
    ];

    const [selectedActivity, setSelectedActivity] = useState(cos[0]);

    return (
        <div className="cocurriculumn ">
            <Nav2 />
            <header className="header2">
    <img src={violin} alt="Arts and Sports" className="header-image-2" />
    <div className="header-text">
        OUR CO-CURRICULUM
    </div>
</header>


            <div className="content-divvv">
                <div className="content-div-1">
                    <div className="message">
                        <div className="the-title">
                        OUR CO-CURRICULUM
                        </div>
                        <div className="the-message">
                            <p>
                                At our school, we believe in learning that extends beyond the core
                                subjects of the competency-based curriculum (CBC). <br />That’s why we offer a
                                vibrant selection of clubs designed to spark your interests, talents, and
                                creativity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-div-2">
                    <div className="co-cards-scroll">
                        {cos.map((co, index) => (
                            <div 
                                key={index} 
                                className={`co-card ${selectedActivity.title === co.title ? 'selected' : ''}`}
                                onClick={() => setSelectedActivity(co)}
                            >
                                {co.title}
                            </div>
                        ))}
                    </div>
                    <div className="co-card-info">
                    {selectedActivity.image && (
                            <img 
                                src={selectedActivity.image} 
                                alt={selectedActivity.title} 
                                className="co-card-image"
                            />
                        )}
                        <h2 className="co-title">{selectedActivity.title}</h2>
                        <p className="co-info">{selectedActivity.info}</p>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Music;
