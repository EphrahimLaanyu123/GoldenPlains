import React from 'react';
import { Link } from 'react-router-dom';
import './ArtsandSports.css';  // Reusing the same CSS file for consistent styling
import SocialSciencesImage from "../assets/DSC_5967.jpg";  // Replace with the correct image path
import students from "../assets/DSC_5947.jpg";  // Replace with the correct image path

import Footer from './Footer';
import Nav2 from "./Nav2"; // Import Nav2 component

function SocialSciences() {
    return (
        <div className="arts-and-sports-container"> {/* Using the same container class */}
            <Nav2 />
            <header className="header">
                <img src={SocialSciencesImage} alt="Social Sciences" className="header-image" />
            </header>
            <div className='content-container'>
                <div className='sides'>
                    <div className='right-side'>
                        <h1 className="title">Social Sciences</h1>
                        <p className="section-description">
                            Welcome to our Social Sciences program. Our curriculum is designed to provide students with a deep understanding of human behavior, societies, and cultures. We offer courses in history, geography, psychology, sociology, and political science, taught by experienced and knowledgeable faculty members. Our program emphasizes critical thinking, research skills, and a global perspective. Students will engage in various activities, including debates, field trips, and research projects, that enhance their learning experience and prepare them for further studies and careers in social sciences.
                        </p>
                    </div>
                    <div className='section-2'>
                        <div className='p-div'>
                            <p className='section-2-p'>
                                "Our Social Sciences program is committed to developing informed and engaged citizens. <br />
                                We strive to foster a deep understanding of societal issues and encourage students to contribute positively to their communities. <br />
                                Through our comprehensive curriculum and experiential learning opportunities."
                            </p>
                        </div>
                        <img src={students} alt="Social Sciences" className="header-image-2" />
                    </div>
                    <div className='left-side'>
                        <h1 className='ourcurr'>Our Curriculum</h1>
                        <Link to="/stem" className="section-link">STEM</Link>
                        <Link to="/arts-and-sports" className="section-link">Arts and Sports</Link>   
                        <p className='other'>Check out our other curriculum</p>      
                        <div className="underline"></div>
                        <div className="apply-section">
                            <Link to='./admissions'>Apply</Link>
                        </div>  
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SocialSciences;
