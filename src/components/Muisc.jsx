import React, { useState } from "react";
import Nav2 from "./Nav2";
import "./Music.css";
import violin from "../assets/DSC_5758 (1).jpg"; 
import computer from "../assets/computer.png";
import home from "../assets/home.png";
import Footer from "./Footer";
import art from '../assets/co-image/pexels-pixabay-37539.jpg';
import journalism from '../assets/co-image/pexels-brotin-biswas-158640-518543.jpg';
import french from '../assets/co-image/pexels-atypeek-5781917.jpg';
import science from '../assets/co-image/pexels-chokniti-khongchum-1197604-2280571.jpg';
import hscience from "../assets/co-image/pexels-goumbik-616401.jpg"
import Navbar3 from "./Nav3";



function Music() {
    const [selectedActivity, setSelectedActivity] = useState('homeScience'); // Default selection
    const [showTranslation, setShowTranslation] = useState(false);

    return (
        <div className="cocurriculumn">
            <Navbar3 />
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
                                <img src={hscience} alt="Home Science Club" className="co-card-image" />
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
                                <div class="iframe-container">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdo1K_BXsU9QRkSF9Jo5yR_L4IVORRxfL8NywfC-3yEHRa5_A/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" loading="lazy">Loading…</iframe>
</div>                                    <p>Home science expertise is required in frozen food manufacturing, cooking, food preservatives, and food production. Learners can work as food analysts, quality controllers, quality managers in the food processing and preservation department.</p>
                                </div>
                            </>
                        )}

                        {selectedActivity === 'scienceClub' && (
                            <>
                                <img src={science} alt="Science and Environmental Club" className="co-card-image" />
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
                                <div class="iframe-container">
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7MtvPmcAVJIVBA3IqZ9WmfKVdWl_H2JWSPRPrDuLQIu_W1g/viewform?embedded=true" z>Loading…</iframe> 
                                </div>
                                </>
                        )}

                        {selectedActivity === 'dramaClub' && (
                            <>
                                <img src={violin} alt="Drama Club" className="co-card-image" />
                                <h2 className="co-title">DRAMA AND MUSIC CLUB</h2>
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
                                <div class="iframe-container">
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciE5_ldoPSyj6G9Y6NbUdZzSGjxYXZqAhORhKuBkCZZErD7Q/viewform?embedded=true" width="840" height="585" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                </div>
                                </>
                        )}

                        {selectedActivity === 'artClub' && (
                        <>
                            <img src={art} alt="Art Club" className="co-card-image" />
                            <h2 className="co-title">ART CLUB</h2>
                            <p className="co-info">
                            Calling all Creative Minds! Join the Art Club and explore your artistic potential.
                            </p>
                            <div className="co-description">
                            <p>
                                Do you find joy in expressing yourself through art? Are you passionate about any
                                form of artistic expression? Then, <strong>Golden Plains School Art Club</strong> is
                                the perfect place for you!
                            </p>
                            <p>
                                At Golden Plains School, we believe in nurturing artistic talents and providing
                                a platform for students to explore various forms of art. The Art Club is a vibrant
                                community where students can come together to share ideas, learn new techniques,
                                and collaborate on exciting projects.
                            </p>
                            <h3 className="who-we-are">What Our Art Club Has to Offer:</h3>
                            <ul className="who-we-are">
                                <li>
                                <strong>Inspiring Weekly Workshops:</strong> Whether you're a beginner or an
                                experienced artist, our workshops cater to all skill levels. From painting and
                                drawing to sculpture and digital art, there is something for everyone.
                                </li>
                                <li>
                                <strong>Fun and Creativity:</strong> We believe that art should be enjoyable.
                                Our club meetings are held in a fun and relaxed environment where you can
                                experiment, take risks, and express yourself creatively.
                                </li>
                                <li>
                                <strong>Guest Artist Sessions:</strong> We invite guest speakers, artists, and
                                professionals from the local arts communities to share their expertise and inspire
                                our learners. These sessions provide valuable insights into the art industry and
                                offer opportunities for networking.
                                </li>
                                <li>
                                <strong>Exhibition Opportunities:</strong> Showcase your artwork in our school
                                exhibitions and competitions. It's a fantastic way to gain recognition for your
                                talent and share your creations with the school community. Learners get the chance
                                to celebrate the power of art to inspire, provoke, and unite.
                                </li>
                                <li>
                                <strong>Community Projects:</strong> Make a positive impact through art by
                                participating in community projects. From murals to public installations, our Art
                                Club actively engages in initiatives that enrich our surroundings.
                                </li>
                                <li>
                                <strong>Field Trips:</strong> Explore the local art scene with exciting field
                                trips. We visit galleries, museums, and cultural events to gain inspiration and
                                broaden your artistic horizons.
                                </li>
                            </ul>
                            </div>
                            <div className="co-closing">
                            <p>
                                Joining the Art Club is not just about honing your artistic skills; it is also about
                                becoming part of a supportive and passionate community. Whether you're an aspiring
                                painter, sculptor, photographer, or designer, there's a place for you in our club.
                            </p>
                            <p>
                                So, if you're ready to embark on a journey of self-expression and creativity, come
                                join us at the Art Club!
                            </p>
                            </div>
                            <div class="iframe-container">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciE5_ldoPSyj6G9Y6NbUdZzSGjxYXZqAhORhKuBkCZZErD7Q/viewform?embedded=true" width="840" height="585" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
                            </div>                       
                            </>
                        )}


                        {selectedActivity === 'journalismClub' && (
                        <>
                            <img src={journalism} alt="Journalism Club" className="co-card-image" />
                            <h2 className="co-title">JOURNALISM CLUB</h2>
                            <p className="co-info">
                            Unleash Your Inner Voice: Join the Journalism Club!
                            </p>
                            <div className="co-description">
                            <p>
                                Are you curious? Do you have a knack for finding the truth and sharing compelling
                                stories? If so, then the <strong>Golden Plains School Journalism Club</strong> is
                                the perfect place for you!
                            </p>
                            <p>
                                Whether you are interested in news, sports, features, or arts and entertainment,
                                the Journalism Club offers a creative outlet and a chance to develop valuable
                                communication skills.
                            </p>
                            <h3 className="who-we-are">What We Do:</h3>
                            <ul className="who-we-are">
                                <li>
                                <strong>Write for the School Paper:</strong> Sharpen your writing skills and have
                                your work published in our very own student-run newspaper, the *Golden Plains
                                Newspaper*. Journalism Club members tackle news, features, sports, arts, and more!
                                </li>
                                <li>
                                <strong>Explore Different Media:</strong> Go beyond writing! Learn about
                                photography, videography, and social media to create multimedia content.
                                </li>
                                <li>
                                <strong>Develop Valuable Skills:</strong> Hone your interviewing techniques,
                                research abilities, and critical thinking. Learn the importance of accuracy,
                                fairness, and meeting deadlines – all essential skills for any future career path.
                                </li>
                                <li>
                                <strong>Connect with Like-Minded People:</strong> Meet other students who share
                                your passion for storytelling and current events. The Journalism Club is a fun and
                                collaborative environment where you can bounce ideas off each other and learn from
                                one another.
                                </li>
                            </ul>
                            <h3 className="who-we-are">Who Can Join?</h3>
                            <p>
                                Anyone with a curiosity about the world and a desire to learn is welcome! Whether
                                you're a budding writer, a photography enthusiast, or simply interested in the
                                news, the Journalism Club has something for you. No prior experience is necessary.
                            </p>
                            <h3 className="who-we-are">How to Get Involved:</h3>
                            <p>Come to our next meeting! We can't wait to meet you!</p>
                            </div>
                            <div className="co-closing">
                            <p>
                                Join the Journalism Club today and unleash your inner voice as you explore the art
                                of storytelling and reporting!
                            </p>
                            </div>
                            <div class="iframe-container">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeNkkFNurL0QNEL3tQ8_bHKAOsxyrMeg7pbu-RFI2AH-vEpKA/viewform?embedded=true" width="840" height="585" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
                            </div>

                            </>
                        )}


                        {selectedActivity === 'frenchClub' && (
                        <>
                            const [showTranslation, setShowTranslation] = useState(false);

                            <img src={french} alt="French Club" className="co-card-image" />
                            <h2 className="co-title">CLUB DE FRANÇAIS</h2>
                            <button 
                            onClick={() => setShowTranslation(!showTranslation)} 
                            className="translate-button"
                            >
                            {showTranslation ? "Voir en Français" : "Translate to English"}
                            </button>
                            <div className="co-description">
                            {showTranslation ? (
                                // English Translation
                                <div className="translated-text">
                                <p>
                                    The world has become a global village, and international relations are more than a necessity.  
                                    This phenomenon of globalization has led to many changes in the world of work.  
                                    The demand for language skills is therefore constantly increasing.
                                </p>
                                <p>
                                    The French language, spoken on five continents, is a major language of communication.  
                                    Mastery of French is thus a genuine professional, cultural, economic, and social asset.
                                </p>
                                <p>
                                    It is in this perspective that <strong>GOLDEN PLAINS</strong>, a pioneer in French language teaching,  
                                    established the French Club to prepare students early to meet current demands.
                                </p>
                                <p>
                                    Given that the level of French learning in Kenya leaves much to be desired, this club,  
                                    called <strong>"PARLER FRANÇAIS"</strong>, aims to create a space for meeting, discussion, and exchange  
                                    between <strong>GOLDEN PLAINS SCHOOL</strong> students and all those interested in promoting the French language.
                                </p>
                                </div>
                            ) : (
                                // Original French Text
                                <div className="original-text">
                                <p>
                                    Le monde est devenu un village, les relations internationales sont devenues plus qu'une nécessité.  
                                    Ce phénomène de mondialisation a conduit à de nombreux changements concernant le monde du travail.  
                                    La demande de compétences linguistiques est donc en constante augmentation.
                                </p>
                                <p>
                                    Deuxième langue parlée sur les cinq continents, le français est une langue de communication majeure.  
                                    Sa maîtrise est donc une véritable plus-value professionnelle, culturelle, économique et sociale.
                                </p>
                                <p>
                                    C’est dans cette perspective que <strong>GOLDEN PLAINS</strong>, pionnière dans l’enseignement de la langue française,  
                                    a mis en place le club de français en vue de préparer les élèves très tôt à faire face aux exigences du moment.
                                </p>
                                <p>
                                    Étant donné que le niveau d’apprentissage du français au Kenya reste à désirer, ce club dénommé  
                                    <strong>“PARLER FRANÇAIS”</strong> a pour but de créer un espace de rencontre, de discussion et d’échange entre  
                                    les élèves du <strong>GOLDEN PLAINS SCHOOL</strong> et de tous ceux qui sont intéressés à la promotion de la langue française.
                                </p>
                                </div>
                            )}
                            </div>
                            <div className="co-closing">
                            <p><strong>BIENVENUS AU GOLDEN PLAINS.</strong></p>
                            <p>Parlons français.</p>
                            </div>
                            <div class="iframe-container">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5e6otgzn3oYz72rqCDyg-07o0Zs2JkEJb4mui0i7OiGCvRw/viewform?embedded=true" width="840" height="585" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>                            
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
