import React from 'react';
import { Link } from 'react-router-dom';
import '/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/components/ArtsandSports.css';
import Sports from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/DSC_5967.jpg";
import kids from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/DSC_5832.jpg";
import Footer from './Footer'
import Navbar from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/components/Nav.jsx";

function ArtsAndSports() {
    return (
        <div className="arts-and-sports-container">
            <Navbar />
            <header className="header">
                <img src={Sports} alt="Arts and Sports" className="header-image" />
            </header>

            <div className='content-container'>
                <div className='sides'>
                    <div className='right-side'>
                        <h1 className="title">Arts and Sports</h1>
                        <p className="section-description">
                            Welcome to our Arts and Sports program. Here, we provide a diverse range of activities that promote creativity, teamwork, and physical fitness. Our state-of-the-art facilities for both arts and sports, along with our experienced and dedicated faculty members, ensure that students receive the best education and training. We offer a wide range of extracurricular activities and opportunities for competitions and showcases. Our strong focus on holistic development helps students to grow not only academically but also personally. Our Arts and Sports program is designed to cater to the needs and interests of all students, providing them with the skills and experiences necessary for personal growth and development.
                        </p>
                    </div>
                    <div className='section-2'>
                        <div className='p-div'>
                        <p className='section-2-p'>"Welcome to our Arts and Sports program. <br />Here, we provide a diverse range of activities that promote creativity, teamwork, and physical fitness. <br />Our state-of-the-art facilities for both arts and sports, along with our experienced and dedicated faculty members", <br />John Doe.
                        </p>
                        </div>

                    <img src={kids} alt="Arts and Sports" className="header-image-2" />
                    </div>
                    <div className='left-side'>
                        <h1 className='ourcurr'>Other Curriculum</h1>
                        <Link to="/stem" className="section-link">STEM</Link>
                        <Link to="/social-sciences" className="section-link">Social Sciences</Link>   
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

export default ArtsAndSports;
