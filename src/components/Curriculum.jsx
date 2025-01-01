import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Sports from "../assets/sport.png";
import Stem from "../assets/stem.png";
import Social from "../assets/DSC_5920.jpg";
import './Curriculum.css';

function Curriculum() {
    const [sci, setSci] = useState("");
    const [all, setAll] = useState("");
    const [drama, setDrama] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://goldenplainspjs.com/wp-json/wp/v2/posts/1`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSci(data.content.rendered);  // Assuming `sci` is the science-related content
                setAll(data.title.rendered);     // Assuming `all` is the title
                setDrama(data.content.rendered); // Assuming `drama` content needs to be set
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    const infoSection = [
        { title: "ARTS AND SPORTS", subSection: all, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Sports, link: "/arts-and-sports" },
        { title: "SOCIAL SCIENCES", subSection: drama, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Social, link: "/social-sciences" },
        { title: "STEM", subSection: sci, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Stem, link: "/stem" }
    ];

    return (
        <main className="myfont curriculum-container">
            <Helmet>
                <meta name="description" content="Explore the diverse curriculum pathways offered at Golden Plains, including Arts and Sports, Social Sciences, and STEM." />
                <meta name="keywords" content="Curriculum, Golden Plains, Arts and Sports, Social Sciences, STEM, Education, CBC Pathways" />
                <meta name="author" content="Golden Plains Team" />
                <meta property="og:title" content="Golden Plains Curriculum" />
                <meta property="og:description" content="Golden Plains provides students the opportunity to follow various pathways, including Arts and Sports, Social Sciences, and STEM." />
                <meta property="og:image" content={Sports} />
                <meta property="og:url" content="https://goldenplainspjs.com/curriculum" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="title-description-container">
                <h1 className="curriculum-title">
                    OUR CURRICULUM
                </h1>
                <section className="curriculum-div">
                    <div className="description-underline-wrapper">
                    <article className="description-underline-wrapper-content">
                            <p className="curriculum-description">
                                Our CBC junior school section is guided by the ministry of education guidelines. 
                                Golden Plains will provide the students with the opportunity to follow any of the available pathways 
                                since we have set up infrastructure that can support all three.
                            </p>
                            <div className="underline-1"></div>
                            <nav className="link-container">
                                <Link to="/social-sciences">SOCIAL SCIENCE</Link>
                                <Link to="/arts-and-sports">ARTS AND SPORTS</Link>
                                <Link to="/stem">STEM</Link>
                            </nav>
                        </article>
                    </div>
                    <div className="bottom-part">
                        <section className="images-container">
                            <Link to="arts-and-sports" className="image-wrapper" data-name="Sports">
                                <img src={Sports} alt="Sports" />
                            </Link>
                            <Link to="stem" className="image-wrapper" data-name="Stem">
                                <img src={Stem} alt="Music Club" />
                            </Link>
                            <Link to="/social-sciences" className="image-wrapper" data-name="Social Sciences">
                                <img src={Social} alt="Computer Club" />
                            </Link>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Curriculum;
