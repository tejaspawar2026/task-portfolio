import React, { useState, useEffect } from "react";
import CarouselImageOne from "../../../../assets/img-categ-2/carousel_img_one.jpg";
import CarouselImageTwo from "../../../../assets/img-categ-2/carousel_img_two.png";
import CarouselImageThree from "../../../../assets/img-categ-2/carousel_img_three.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
                className={`w-full h-full object-cover absolute transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
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

        <div className="col-span-1 md:col-span-3 p-4 bg-slate-200">
          <h2 className="text-2xl font-bold mb-4">Explore More Destinations</h2>
          <p className="text-gray-700 mb-6">
            Discover beautiful and historical places like Amruteshwar Temple and
            immerse yourself in the ancient architecture and culture.
          </p>
          <a href="/explore" className="text-blue-600 hover:underline">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
