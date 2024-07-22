import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Sports from "../assets/sport.png";
import { Link } from "react-router-dom";
import Stem from "../assets/stem.png";
import Social from "../assets/social.png";
import './Curriculum.css'; // Import the CSS file

function Curriculum() {
    const [set, setShow] = useState();
    const [err, setError] = useState();
    const [drama, setDrama] = useState();
    const [sci, setSci] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://goldenplainspjs.com/wp-json/wp/v2/posts/${id}`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setSci(data.content.rendered);
            setAll(data.title.rendered);
          } catch (error) {
            setError(error);
          } finally {
          }
        };
    
        fetchData();
      }, []);

    
    const infoSection = [
        { title: "ARTS AND SPORTS", subSection: set, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Sports },
        { title: "SOCIAL SCIENCES", subSection: drama, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Social },
        { title: "STEM", subSection: sci, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image: Stem }
    ];
    
    return (
        <div className="px-6 py-12">
            <div className="curriculum-title">
                OUR CURRICULUM
            </div>
            <div className="curriculum-description">
                OUR CBC JUNIOR SCHOOL SECTION IS GUIDED BY THE MINISTRY OF EDUCATION GUIDELINES. GOLDEN PLAINS WILL PROVIDE THE STUDENTS WITH THE OPPORTUNITY TO FOLLOW ANY OF THE AVAILABLE PATHWAYS SINCE WE HAVE SET UP INFRASTRUCTURE THAT CAN SUPPORT ALL THREE
            </div>
            <div className="grid gap-10 lg:grid-cols-3">
                {infoSection.map((info, index) => (
                    <div key={index} className={`curriculum-card ${index === 1 ? 'bg-white' : 'bg-yellow-400'} shadow-md rounded-lg overflow-hidden`}>
                        <img src={info.image} alt={info.title} className="card-image"/>
                        <div className="p-4"> {/* Reduced padding */}
                            <div className="text-xl font-semibold text-gray-800 mb-2">
                                {info.title}
                                <hr className="border-t-2 border-gray-200 mt-2 mb-4" />
                            </div>
                            <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: info.subSection }}></div>
                            <div className="pt-4 pb-4"> {/* Reduced padding */}
                                <div className={`${index === 1 ? 'bg-yellow-500' : 'bg-gray-800'} flex w-40 p-2 shadow-lg font-semibold text-white rounded-full mx-auto`}> {/* Reduced width */}
                                    <Link to="/about" className="flex-1 text-center">Read More</Link>
                                    <div className="pt-1 flex">
                                        <FaChevronRight />
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Curriculum;
