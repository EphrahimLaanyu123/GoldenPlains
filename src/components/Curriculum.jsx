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
        <div className="myfont curriculum-container">
            <div className="title-description-container">
                <div className="curriculum-title">
                    OUR CURRICULUM
                </div>
                <div className="curriculum-div">
                    <div className="description-underline-wrapper">
                        <div className="description-underline-wrapper-content">
                            <div className="curriculum-description">
                                Our CBC junior school section is  guided by the ministry of education guidelines. Golden Plains will provide the students with the opportunity to follow any of the available pathways since we have set up infrastructure <br />that can support all three.
                            </div>
                            <div className="underline-1"></div>
                            <div className="link-container"> 
                                <Link to="/social-sciences">SOCIAL</Link>
                                <Link to="/arts-and-sports">ARTS AND SPORTS</Link>
                                <Link to="/stem">STEM</Link>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-part">
                        <div className="images-container">
                            <Link to="/social-sciences" className="image-wrapper" data-name="Home Club">
                                <img src={Sports} alt="Home Club" />
                            </Link>
                            <Link to="arts-and-sports" className="image-wrapper" data-name="Music Club">
                                <img src={Stem} alt="Music Club" />
                            </Link>
                            <Link to="/stem" className="image-wrapper" data-name="Computer Club">
                                <img src={Social} alt="Computer Club" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
