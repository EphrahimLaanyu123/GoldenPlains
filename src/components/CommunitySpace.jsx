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
    <div className="bg-orange-100 pb-20 font-cormorant">
      <div className="flex justify-center font-bold text-5xl text-black-900 pt-4">
        COMMUNITY SPACE
      </div>
      <div className="flex justify-center font-bold text-3xl text-black-900 pt-3 text-center px-4">
        OUR GOLDEN PLAINS COMMUNITY AND WHAT THEY HAVE BEEN UPTO
      </div>
      <div className="flex justify-center pt-10 text-black-900 px-4">
        <Slider {...settings} className="w-full max-w-5xl">
          {space.map((profile, index) => (
            <div key={index} className="p-4">
              <div className="shadow-lg rounded-lg">
                <div className="flex pl-10 py-4">
                  <img
                    src={profile.image}
                    alt={profile.Name}
                    className="w-[70px] h-[70px] border-4 border-yellow-500 rounded-full"
                  />
                  <p className="text-2xl font-bold pl-4">{profile.Name}</p>
                </div>
                <div className="text-center px-10 pb-4">
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
