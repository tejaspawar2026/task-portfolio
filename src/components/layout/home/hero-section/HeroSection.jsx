import React, { useState, useEffect } from "react";
import CarouselImageOne from "../../../../assets/img-categ-2/carousel_img_one.jpg";
import CarouselImageTwo from "../../../../assets/img-categ-2/carousel_img_two.png";
import CarouselImageThree from "../../../../assets/img-categ-2/carousel_img_three.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Typewriter from "typewriter-effect";
import LinkedInLogo from "../../../common/icons/LinkedIn.jsx";
import GitHubLogo from "../../../common/icons/GitHub.jsx";
// import HeroBg from "../../../../assets/img-categ-2/hero-background-2.jpg";
// import "./HeroSection.css";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [CarouselImageOne, CarouselImageTwo, CarouselImageThree];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 relative shadow-lg h-screen object-cover flex items-center">
          <div className="relative w-full h-full overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover absolute transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-4 py-4 rounded-full hover:bg-opacity-60 transition z-10"
            >
              <IoIosArrowBack />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-4 py-4 rounded-full hover:bg-opacity-60 transition z-10"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div
          className="col-span-1 md:col-span-3 p-4 bg-slate-200 hero-section-two"
          style={{ backgroundColor: "#DFF2EB" }}
        >
          <div className="flex flex-col md:flex-row p-5 md:px-20 justify-between">
            <div className="flex flex-col items-start w-full">
              <h1 className="text-[22px] md:text-[40px] font-bold">Hello,</h1>
              <div className="flex items-center">
                <h1 className="text-[22px] md:text-[40px] font-bold mr-3">
                  I am
                </h1>
                <h1 className="text-[22px] md:text-[40px] font-bold text-purple-600">
                  <Typewriter
                    options={{
                      strings: [
                        "Tejas Pawar",
                        "Frontend Developer",
                        "Backend Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </div>
              <p className="mt-3 text-gray-400 text-[15px] md:text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi dolorum sunt eligendi vitae minus. Totam ea asperiores
                sunt unde nam eos neque pariatur iste sint.
              </p>
              <div className="flex items-center gap-3 my-2">
                <LinkedInLogo />
                <GitHubLogo />
              </div>
              <div className="flex items-center gap-3 my-2">
                <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 bg-purple-600 px-4 py-2 rounded-md text-white">
                  Resume
                </button>
                <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white border border-purple-600 px-4 py-2 rounded-md text-purple-600">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
