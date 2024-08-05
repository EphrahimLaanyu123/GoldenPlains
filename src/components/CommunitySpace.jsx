import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../assets/profile-photos-4.webp";

function CommunitySpace() {
  const space = [
    {
      image: Profile,
      Name: "JILL MUTEMBEI",
      Description: "QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT.",
    },
    {
      image: Profile,
      Name: "JILL MUTEMBEI",
      Description: "QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT.",
    },
    {
      image: Profile,
      Name: "JILL MUTEMBEI",
      Description: "QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT.",
    },
    {
      image: Profile,
      Name: "JILL MUTEMBEI",
      Description: "QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-orange-100  font-cormorant">
      <div className="flex justify-center font-bold text-6xl md:text-7xl text-black-900 pt-8">
        COMMUNITY SPACE
      </div>
      <div className="flex justify-center font-bold text-4xl md:text-5xl text-black-900 pt-4 text-center px-6">
        OUR GOLDEN PLAINS COMMUNITY AND WHAT THEY HAVE BEEN UPTO
      </div>
      <div className="flex justify-center pt-12 px-6">
        <Slider {...settings} className="w-full max-w-6xl">
          {space.map((profile, index) => (
            <div key={index} className="p-6">
              <div className="shadow-2xl rounded-lg border-yellow-500 overflow-hidden">
                <div className="flex items-center pl-6 py-6">
                  <img
                    src={profile.image}
                    alt={profile.Name}
                    className="w-[100px] h-[100px] border-4 border-yellow-500 rounded-full"
                  />
                  <p className="text-3xl font-bold pl-6">{profile.Name}</p>
                </div>
                <div className="text-center px-6 pb-6 text-xl font-medium text-black-700">
                  {profile.Description}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CommunitySpace;
