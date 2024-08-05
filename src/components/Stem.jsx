import React from 'react';
import { Link } from 'react-router-dom';

import StemImage from "../assets/DSC_5967.jpg";
import students from "../assets/DSC_6055.jpg";



function Stem() {
    return (
        <div className="stem-container">
            <Navbar></Navbar>
            <header className="header">
                <img src={StemImage} alt="STEM" className="header-image" />
            </header>

            <div className='content-container'>
                <div className='sides'>
                    <div className='right-side'>
                        <h1 className="title">STEM</h1>
                        <p className="section-description">
                            Welcome to our STEM program. Our Science, Technology, Engineering, and Mathematics curriculum is designed to provide students with a strong foundation in these critical areas. Our program emphasizes hands-on learning, problem-solving, and innovation. Students have access to state-of-the-art labs and technology, and our experienced faculty members are dedicated to fostering a love of discovery and learning. We offer a wide range of courses and extracurricular activities, including robotics, coding clubs, and science fairs, to inspire and engage our students. Our STEM program prepares students for further studies and careers in these dynamic fields.
                        </p>
                    </div>
                    <div className='section-2'>
                        <div className='p-div'>
                            <p className='section-2-p'>"Our STEM program is committed to nurturing the next generation of innovators and problem-solvers. <br></br>We believe in providing students with the skills and knowledge they need to succeed in a rapidly changing world. <br></br>Through our rigorous curriculum and hands-on learning opportunities", <br></br>Jane Smith.
                            </p>
                        </div>
                        <img src={students} alt="STEM" className="header-image-2" />
                    </div>
                    <div className='left-side'>
                        <h1 className='ourcurr'>Our Curriculum</h1>
                        <Link to="/arts-and-sports" className="section-link">Arts and Sports</Link>
                        <Link to="/social-sciences" className="section-link">Social Sciences</Link>   
                        <p className='other'>Check out our other curriculum</p>      
                        <div className="underline"></div>
                        <div className="apply-section">
                            Apply
                        </div>  
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Stem;
