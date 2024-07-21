import React, { useState, useEffect } from "react";
import Navbar from "./components/Nav";
import bgImage from "./assets/Hero5.png"; // Import your background image file

function DetailPage() {
  const title = "About Us";
  const [who, setWho] = useState({});
  const [title2, setTitle] = useState("");
  const [what, setWhat] = useState({});
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [err, setError] = useState({});
  const [about, setAbout] = useState();
  const [aboutt, setAboutt] = useState("");

  const [mission, setMission] = useState("");
  const [missiont, setMissiont] = useState("");

  const [values, setValues] = useState("");
  const [values2, setValues2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/102"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setValues(data.content.rendered);
        setValues2(data.title.rendered);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/97"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMission(data.content.rendered);
        setMissiont(data.title.rendered);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/95"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAbout(data.content.rendered);
        setAboutt(data.title.rendered);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/7"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWho(data.content.rendered);
        setTitle(data.title.rendered);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/9"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWhat(data.content.rendered);
        setTitle3(data.title.rendered);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://goldenplainspjs.com/wp-json/wp/v2/posts/88"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCurriculum(data.content.rendered);
        setTitle4(data.title.rendered);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div
        className="h-[40vh] relative flex justify-center items-center font-bold text-4xl md:text-8xl text-white pt-8 md:pt-52"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative z-10">{title}</div>
      </div>
      <div className="bg-orange-100 px-4 sm:px-8 lg:px-32 py-10">
        <div className="bg-orange-100 shadow-2xl p-4 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="max-w-3xl p-1 w-40 bg-yellow-500 text-center font-bold text-blue-900">
              {aboutt}
            </div>
          </div>
          <div className="flex justify-center pt-4 text-blue-900 font-bold">
            <div
              className="max-w-screen-lg w-full px-4 consistent-font"
              dangerouslySetInnerHTML={{ __html: about }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 px-4 sm:px-8 lg:px-32 py-10">
        <div className="bg-orange-100 shadow-2xl p-4 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="max-w-3xl p-1 w-40 bg-yellow-500 text-center font-bold text-blue-900">
              {title2}
            </div>
          </div>
          <div
            className="flex justify-center pt-4 text-blue-900 font-bold px-4 consistent-font"
            dangerouslySetInnerHTML={{ __html: who }}
          ></div>
        </div>
      </div>
      <div className="bg-orange-100 px-4 sm:px-8 lg:px-32 py-10">
        <div className="bg-orange-100 shadow-2xl p-4 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="max-w-3xl p-1 w-65 bg-yellow-500 text-center font-bold text-blue-900">
              {missiont}
            </div>
          </div>
          <div className="flex justify-center pt-4 text-blue-900 font-bold px-4 consistent-font">
            <div
              className="max-w-screen-lg w-full px-4"
              dangerouslySetInnerHTML={{ __html: mission }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 px-4 sm:px-8 lg:px-32 py-10">
        <div className="bg-orange-100 shadow-2xl p-4 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="max-w-3xl p-1 w-65 bg-yellow-500 text-center font-bold text-blue-900">
              {values2}
            </div>
          </div>
          <div className="flex justify-center pt-4 text-blue-900 font-bold px-4 consistent-font">
            <div
              className="max-w-screen-lg w-full px-4"
              dangerouslySetInnerHTML={{ __html: values }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 px-4 sm:px-8 lg:px-32 py-10">
        <div className="bg-orange-100 shadow-2xl p-4 sm:p-8">
          <div className="flex justify-center mb-4">
            <div className="max-w-3xl p-1 w-65 bg-yellow-500 text-center font-bold text-blue-900">
              {title4}
            </div>
          </div>
          <div className="flex justify-center pt-4 text-blue-900 font-bold px-4 consistent-font">
            <div
              className="max-w-screen-lg w-full px-4"
              dangerouslySetInnerHTML={{ __html: curriculum }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
