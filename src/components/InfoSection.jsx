import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function InfoSection() {
  const [who, setWho] = useState("");
  const [what, setWhat] = useState("");
  const [whotitle, setWhoTitle] = useState("");
  const [whattitle, setWhatTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/7"
        );
        const response2 = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/9"
        );
        if (!response1.ok || !response2.ok) {
          throw new Error("Network response was not ok");
        }
        const data1 = await response1.json();
        const data2 = await response2.json();
        setWho(trimText(data1.content.rendered, 100));
        setWhoTitle(data1.title.rendered);
        setWhat(trimText(data2.content.rendered, 220));
        setWhatTitle(data2.title.rendered);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const infoSection = [
    {
      title: whotitle,
      subSection: who,
      subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      id: "7"
    },
    {
      title: whattitle,
      subSection: what,
      subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      id: "9"
    },
    {
      title: "JOIN US",
      subSection: "Join our school today, download our admissions form",
      subTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      id: ""
    },
  ];

  const trimText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const handleDownload = () => {
    // Replace with your file URL
    const fileUrl =
      "https://goldenplainspjs.com/wp-content/uploads/2024/05/JUNIOR-SCHL-ADM-TEMPLATE.docx";

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", ""); // This attribute triggers the download

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up: remove the temporary link from the DOM
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-wrap gap-10 pb-10 justify-center text-blue-900 pt-10 bg-orange-100 shadow-lg">
      {infoSection.map((info, index) => (
        <div
          key={index}
          className={`${
            index === 1 ? "bg-white shadow-2xl " : "bg-yellow-500"
          } p-2 w-full md:w-1/4 lg:w-1/5 shadow-2xl `}
        >
          <div className="font-bold mb-2 pt-4 text-4xl  ">
            {info.title}
            <hr className="border-t-2 w-3/4 border-gray-400 mt-2" />
          </div>
          <div
            className="mb-2 text-lg pt-5 pb-5 font-bold"
            dangerouslySetInnerHTML={{ __html: info.subSection }}
          ></div>

          <div className="pt-5 pb-5">
            <div
              className={`${
                index === 1 ? "bg-yellow-500 shadow-2xl " : "bg-white"
              } flex w-48 p-2 shadow-lg font-semibold`}
            >
              {info.id ? (
                <Link to={"/about"}>
                  <div>ReadMore</div>
                </Link>
              ) : (
                <div onClick={handleDownload}>Download File</div>
              )}
              <div className="pt-1 flex">
                <FaChevronRight className="" />
                <FaChevronRight className="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoSection;
