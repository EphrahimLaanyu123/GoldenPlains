import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Sports from "../assets/sport.png";
import Stem from "../assets/stem.png";
import Social from "/home/user/Desktop/GoldenPlains/goldenPlains-4-main/src/assets/DSC_5920.jpg";
import { Link } from "react-router-dom";
import './Curriculum.css';

function Curriculum() {
    const [sci, setSci] = useState("");
    const [all, setAll] = useState("");
    const [drama, setDrama] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Example id; adjust based on your actual ID or dynamic fetching
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
        { title: "ARTS AND SPORTS", subSection: all, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Sports },
        { title: "SOCIAL SCIENCES", subSection: drama, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Social },
        { title: "STEM", subSection: sci, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Stem }
    ];

    // Generate URL from title
    const generateLink = (title) => {
        switch (title) {
            case "ARTS AND SPORTS":
                return "/arts-and-sports";
            case "SOCIAL SCIENCES":
                return "/social-sciences";
            case "STEM":
                return "/stem";
            default:
                return "/";
        }
    };

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
                        <div className="underline"></div>
                    </div>
                    <div className="images-div">
                        <img src={Sports} alt="Sports" />
                        <img src={Social} alt="Social Sciences" />
                        <img src={Stem} alt="STEM" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
