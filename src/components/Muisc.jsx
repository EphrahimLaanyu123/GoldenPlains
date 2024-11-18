import React, { useState } from "react";
import Nav2 from "./Nav2";
import "./Music.css";
import violin from "../assets/DSC_5758 (1).jpg"; 
import computer from "../assets/computer.png";
import home from "../assets/home.png";
import Footer from "./Footer";

function Music() {
    const [selectedActivity, setSelectedActivity] = useState('homeScience'); // Default selection

    return (
        <div className="cocurriculumn">
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
                                At our school, we believe in learning that extends beyond the core subjects of the competency-based curriculum (CBC). <br /> That’s why we offer a vibrant selection of clubs designed to spark your interests, talents, and creativity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-div-2">
                    <div className="co-cards-scroll">
                        {/* Club cards */}
                        <div 
                            className={`co-card ${selectedActivity === 'homeScience' ? 'selected' : ''}`}
                            onClick={() => setSelectedActivity('homeScience')}
                        >
                            HOME SCIENCE CLUB
                        </div>
                        <div 
                            className={`co-card ${selectedActivity === 'scienceClub' ? 'selected' : ''}`}
                            onClick={() => setSelectedActivity('scienceClub')}
                        >
                            SCIENCE AND ENVIRONMENTAL CLUB
                        </div>
                        <div 
                            className={`co-card ${selectedActivity === 'dramaClub' ? 'selected' : ''}`}
                            onClick={() => setSelectedActivity('dramaClub')}
                        >
                            DRAMA CLUB
                        </div>
                        <div 
                            className={`co-card ${selectedActivity === 'artClub' ? 'selected' : ''}`}
                            onClick={() => setSelectedActivity('artClub')}
                        >
                            ART CLUB
                        </div>
                        <div 
                            className={`co-card ${selectedActivity === 'journalismClub' ? 'selected' : ''}`}
                            onClick={() => setSelectedActivity('journalismClub')}
                        >
                            JOURNALISM CLUB
                        </div>
                        <div 
                            className={`co-card ${selectedActivity === 'frenchClub' ? 'selected' : ''}`}
                            onClick={() => setSelectedActivity('frenchClub')}
                        >
                            CLUB DE FRANÇAIS
                        </div>
                    </div>

                    {/* Info section for selected activity */}
                    <div className="co-card-info">
                        {selectedActivity === 'homeScience' && (
                            <>
                                <img src={home} alt="Home Science Club" className="co-card-image" />
                                <h2 className="co-title">HOME SCIENCE CLUB</h2>
                                <p className="co-info">Science of managing a home. Learning is not limited, it is a voyage of discovery.</p>
                                <div className="co-description">
                                    <h3>Who We Are:</h3>
                                    <p>Home science concerns all things around ourselves, our home, our family members and our resources. It aims at maximizing satisfaction for us and our family members through the efficient and scientific use of your resources.</p>
                                </div>
                                <div className="co-offer">
                                    <h3 class="who-we-are">What We Offer:</h3>
                                    <ul class="who-we-are">
                                        <li>1. Harnessed skills in cookery: Essential cooking skills including cutting, measurement, and more.</li>
                                        <li>2. Sewing and stitch work: Use of thread and needle for fabric stitching.</li>
                                        <li>3. Thread and yarn skills: Skills in crocheting and knitting, e.g., socks, mats, and scarfs.</li>
                                        <li>4. Laundry work: Mending, washing, drying, ironing, and storing clothes.</li>
                                        <li>5. Food nutrition and value addition: Engaging in nutrition activities beyond regular cooking.</li>
                                        <li>6. Personal hygienic practices: Promoting well-being and confidence, preventing diseases.</li>
                                        <li>7. Plaiting: Hair styling and fixing skills.</li>
                                        <li>8. House melting: Skills in house cleaning and management.</li>
                                    </ul>
                                </div>
                                <div className="co-closing">
                                <a href="https://forms.gle/5JMRH5siRVSpyNuh9">Register</a>

                                    <p>Home science expertise is required in frozen food manufacturing, cooking, food preservatives, and food production. Learners can work as food analysts, quality controllers, quality managers in the food processing and preservation department.</p>
                                </div>
                            </>
                        )}

                        {selectedActivity === 'scienceClub' && (
                            <>
                                <img src={computer} alt="Science and Environmental Club" className="co-card-image" />
                                <h2 className="co-title">SCIENCE AND ENVIRONMENTAL CLUB</h2>
                                <p className="co-info">Explore the Wonders of Science: Join our school’s Science Club today!</p>
                                <div className="co-description">
                                    <h3>Who We Are:</h3>
                                    <p>The Science Club is a center for creativity, inquiry, and hands-on experimentation, where learners can explore the amazing world of science via a range of activities and projects.</p>
                                </div>
                                <div className="co-offer">
                                    <h3 class="who-we-are">What We Do:</h3>
                                    <ul class="who-we-are">
                                        <li>Field trips & Nature walks: Embark on interesting field trips to scientific museums, laboratories and research facilities.</li>
                                        <li>Science Fairs and Competitions: Participate in science fairs and challenges.</li>
                                        <li>Community outreach: Share your love for science with others and inspire the next generation.</li>
                                    </ul>
                                </div>
                                <div className="co-closing">
                                    <h3>Closing:</h3>
                                    <p>Join the Science Club today and experience an incredible journey of investigation, discovery and limitless possibilities.</p>
                                </div>
                            </>
                        )}

                        {selectedActivity === 'dramaClub' && (
                            <>
                                <img src={violin} alt="Drama Club" className="co-card-image" />
                                <h2 className="co-title">DRAMA CLUB</h2>
                                <p className="co-info">Ready to step into the limelight and let your inner performer loose? Look no further, Golden Plains Drama Club got you!</p>
                                <div className="co-offer">
                                    <h3 class="who-we-are">What We Do:</h3>
                                    <ul class="who-we-are">
                                        <li>Develop your acting skills: Participate in workshops, rehearsals, and performances.</li>
                                        <li>Community Involvement: Actively participate in community activities.</li>
                                        <li>Acting Workshops: Learn character development and improvisation techniques.</li>
                                        <li>Boost your confidence: Overcome stage fright and hone public speaking skills.</li>
                                        <li>Productions: Participate in modern dramas and classic plays.</li>
                                        <li>Make new acquaintances: Collaborate with cast and crew members.</li>
                                    </ul>
                                </div>
                                <div className="co-closing">
                                    <h3>Closing:</h3>
                                    <p>Come along with us as we ignite our passion for storytelling and experience the exciting world of theater!</p>
                                </div>
                            </>
                        )}

                        {selectedActivity === 'artClub' && (
                            <>
                                <img src={violin} alt="Art Club" className="co-card-image" />
                                <h2 className="co-title">ART CLUB</h2>
                                <p className="co-info">Calling all Creative Minds! Join the Art Club and explore your artistic potential.</p>
                                <div className="co-description">
                                    <h3 class="who-we-are">What We Offer:</h3>
                                    <ul class="who-we-are">
                                        <li>Inspiring Weekly Workshops: From painting to digital art, there’s something for everyone.</li>
                                        <li>Fun and Creativity: Enjoy a relaxed environment to experiment and express yourself.</li>
                                        <li>Guest Artist Sessions: Learn from professionals and gain insights into the art industry.</li>
                                        <li>Exhibition Opportunities: Showcase your work in school exhibitions and gain recognition.</li>
                                        <li>Community Projects: Participate in murals and public art initiatives.</li>
                                        <li>Field Trips: Visit galleries, museums, and cultural events for inspiration.</li>
                                    </ul>
                                </div>
                                <div className="co-closing">
                                    <p>Join us at the Art Club and become part of a supportive and passionate community!</p>
                                </div>
                            </>
                        )}

                        {selectedActivity === 'journalismClub' && (
                            <>
                                <img src={computer} alt="Journalism Club" className="co-card-image" />
                                <h2 className="co-title">JOURNALISM CLUB</h2>
                                <p className="co-info">Join the Journalism Club and develop your reporting, writing, and editing skills.</p>
                                <div className="co-offer">
                                    <h3 class="who-we-are">What We Do:</h3>
                                    <ul class="who-we-are">
                                        <li>News Writing: Learn to write articles, interviews, and news stories.</li>
                                        <li>Photojournalism: Capture key moments with expert photography guidance.</li>
                                        <li>Editing: Master the art of editing for print and digital formats.</li>
                                        <li>Public Speaking: Enhance your confidence and speaking skills.</li>
                                        <li>Press Visits: Visit media houses and gain insights from journalists.</li>
                                    </ul>
                                </div>
                                <div className="co-closing">
                                    <p>Get involved with the Journalism Club and voice your stories!</p>
                                </div>
                            </>
                        )}

                        {selectedActivity === 'frenchClub' && (
                            <>
                                <img src={violin} alt="French Club" className="co-card-image" />
                                <h2 className="co-title">CLUB DE FRANÇAIS</h2>
                                <p className="co-info">Embark on a journey to learn and appreciate the French language and culture.</p>
                                <div className="co-description">
                                    <h3>Who We Are:</h3>
                                    <p>Club de Français is an inclusive community that celebrates the French language and its rich culture. We invite all levels of French speakers to join and experience the magic of French culture together.</p>
                                </div>
                                <div className="co-offer">
                                    <h3 class="who-we-are">What We Offer:</h3>
                                    <ul class="who-we-are">
                                        <li>Conversational Practice: Build confidence in speaking French through dialogues and role-playing.</li>
                                        <li>Cultural Exchange: Learn about French traditions, cuisine, art, and music.</li>
                                        <li>Film Nights: Watch French movies and discuss their significance.</li>
                                        <li>French Celebrations: Participate in events like Bastille Day and French café days.</li>
                                        <li>Language Games: Fun activities that enhance vocabulary and grammar.</li>
                                    </ul>
                                </div>
                                <div className="co-closing">
                                    <h3>Closing:</h3>
                                    <p>Join Club de Français for an educational and entertaining exploration of French language and culture!</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Music;
