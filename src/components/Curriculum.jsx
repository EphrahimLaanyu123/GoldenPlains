import React, { useState, useEffect } from "react";
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
                const response = await fetch(
                    `https://goldenplainspjs.com/wp-json/wp/v2/posts/1`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSci(data.content.rendered);
                setAll(data.title.rendered);
            } catch (error) {
                setError(error);
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
        <div className="curriculum-container">
            <div className="title-description-container">
                <div className="curriculum-title">
                    Our curriculum
                </div>
                <div className="curriculum-div">
                    <div className="description-underline-wrapper">
                        <div className="curriculum-description">
                            Our CBC junior school section is <br /> guided by the ministry of education  <br />guidelines.<br /> Golden Plains will provide  the <br />students with the  opportunity to<br /> follow any  of the available pathways <br />since  we have set up infrastructure <br />that can support all three.
                        </div>
                        <div className="underline-1"></div>
                        <div className="link-container"> 
                            <Link to="/social-sciences">Social</Link>
                            <Link to="/arts-and-sports">Arts and Sports</Link>
                            <Link to="/stem">STEM</Link>
                        </div>
                    </div>
                    <div className="images-div">
                        {infoSection.map((section, index) => (
                            <Link to={section.link} key={index} className="image-container">
                                <img src={section.image} alt={section.title} />
                                <div className="image-title">{section.title}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
