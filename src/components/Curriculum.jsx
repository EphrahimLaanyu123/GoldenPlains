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
                    OUR CURRICULUM
                </div>
                <div className="curriculum-description">
                    OUR CBC JUNIOR SCHOOL SECTION IS <br /> GUIDED BY THE MINISTRY OF EDUCATION GUIDELINES.<br /> GOLDEN PLAINS WILL PROVIDE THE STUDENTS WITH THE OPPORTUNITY TO FOLLOW ANY OF THE AVAILABLE PATHWAYS SINCE <br /> WE HAVE SET UP INFRASTRUCTURE THAT CAN SUPPORT ALL THREE
                </div>
            </div>
            <div className="cards-container">
                {infoSection.map((info, index) => (
                    <div key={index} className="curriculum-card">
                        <img src={info.image} alt={info.title} className="card-image" />
                        <div className="card-content">
                            <div className="card-title">
                                {info.title}
                            </div>
                            <div className="card-description" dangerouslySetInnerHTML={{ __html: info.subSection }}></div>
                            <Link to={generateLink(info.title)} className="read-more-btn">
                                Read More
                                <FaChevronRight className="read-more-icon" />
                                <FaChevronRight className="read-more-icon" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Curriculum;
