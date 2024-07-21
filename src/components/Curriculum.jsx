import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Sports from "../assets/sport.png";
import { Link } from "react-router-dom";
import Stem  from "../assets/stem.png";
import Social from "../assets/social.png"

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
        { title: "ARTS AND SPORTS", subSection: set, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",image:Sports },
        { title: "SOCIAL SCIENCES", subSection: drama, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",image:Social },
        { title: "STEM", subSection: sci, subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", image:Stem }
    ];

    return (
        <div className="flex flex-col items-center py-2 bg-orange-100">
            <div className="font-bold text-3xl md:text-4xl text-blue-900 bg-yellow-500 py-2 px-4 text-center">
                OUR CURRICULUM
            </div>
            <div className="flex justify-center flex-wrap pt-3 text-blue-900 font-bold text-xl md:text-2xl px-4 md:px-20 text-center">
                OUR CBC JUNIOR SCHOOL SECTION IS GUIDED BY THE MINISTRY OF EDUCATION
                GUIDELINES. GOLDEN PLAINS WILL PROVIDE THE STUDENTS WITH THE
                OPPORTUNITY TO FOLLOW ANY OF THE AVAILABLE PATHWAYS SINCE WE HAVE SET UP
                INFRASTRUCTURE THAT CAN SUPPORT ALL THREE
            </div>
            <div className="flex flex-wrap gap-10 pb-10 justify-center text-blue-900 pt-10 bg-orange-100 shadow-lg">
                {infoSection.map((info, index) => (
                    <div key={index} className={`${index === 1 ? 'bg-white' : 'bg-yellow-500'} p-4 w-full md:w-1/3 lg:w-1/5 shadow-2xl`}>
                        <img src={info.image} alt="Sports" className="w-full"/>
                        <div className="font-bold mb-2 pt-4 text-2xl md:text-3xl lg:text-4xl">
                            {info.title}
                            <hr className="border-t-2 w-3/4 border-gray-400 mt-2" />
                        </div>
                        <div className="text-sm md:text-base text-gray-700 font-bold" dangerouslySetInnerHTML={{ __html: info.subSection }}></div>
                        <div className='pt-5 pb-5'>
                            <div className={`${index === 1 ? 'bg-yellow-500' : 'bg-white'} flex w-48 p-2 shadow-lg font-semibold`}>
                                <Link to="/about"><div>Read More</div></Link>
                                <div className='pt-1 flex'>
                                    <FaChevronRight />
                                    <FaChevronRight />
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
