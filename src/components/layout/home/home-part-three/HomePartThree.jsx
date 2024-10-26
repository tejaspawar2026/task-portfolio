import "./HomePartThree.css";
import React, { useState, useEffect } from "react";

const HomePartThree = () => {
  const portfolio = [
    {
      id: 1,
      title: "E-Learning",
      type: "All",
      desc: "Web App Build using PHP and Laravel for easy students and teachers to connect and interact.",
      imageUrl:
        "https://cdn.dribbble.com/userupload/15364659/file/original-868feb2e1c1794e8ae25f36fa218a9c4.png?resize=752x359&vertical=center",
    },
    {
      id: 2,
      title: "Virtual Noticeboard",
      type: "website",
      desc: "Web App Build using PHP Laravel and Bootstrap for posting information about the organization",
      imageUrl:
        "https://cdn.dribbble.com/userupload/15364696/file/original-aee2b3e93082234a516aa172e20301f7.png?resize=752x339&vertical=center",
    },
  ];

  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type) => {
    if (type === "All") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
      console.log(result);
    }
  };

  return (
    <>
      <section
        className="home-part-two min-h-screen"
      >
        <div className="heading">
          <h1 className="md:text-[50px] text-[30px] text-center font-bold text-black md:pt-6 pt-5">
            <span>
              My Creative <span style={{ color: "#4A628A" }}>Portfolio</span>
            </span>
          </h1>
        </div>
        <div className="flex flex-row justify-evenly px-4 mt-3 md:px-[500px]">
          <button
            onClick={() => filterPortfolio("All")}
            className="custom-button"
          >
            All
          </button>
          <button
            onClick={() => filterPortfolio("website")}
            className="custom-button"
          >
            Web App
          </button>
        </div>

        <div
          className="grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 "
        >
          {portfolioList.map((item, index) => (
            <div
              key={index}
              className="p-2 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110"
            >
              <img
                src={item.imageUrl}
                className="md:h-[150px] h-[150px] object-fill rounded-lg"
                alt="project_image"
              />
              <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center font-bold">
                {item.title}
              </h1>
              <h1 className="md:text-[12px] text-[10px] text-justify text-gray-500 px-1 pb-3">
                {item.desc}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePartThree;
