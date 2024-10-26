import React from "react";
// import "./HomePartTwo.css";
import AboutPhoto from "../../../../assets/img-categ-2/photo.jpg";
import react from "../../../../assets/img-categ-1/react.png";
import laravel from "../../../../assets/img-categ-1/laravel.png";
import mongodb from "../../../../assets/img-categ-1/mongodb.png";
import mysql from "../../../../assets/img-categ-1/mysql.png";
import nodejs from "../../../../assets/img-categ-1/nodejs.png";
import github from "../../../../assets/img-categ-1/github.png";
import jira from "../../../../assets/img-categ-1/jira.png";
import javascript from "../../../../assets/img-categ-1/javascript.png";
import php from "../../../../assets/img-categ-1/php.png";
import html from "../../../../assets/img-categ-1/html.png";
import css from "../../../../assets/img-categ-1/css.png";
import tailwind from "../../../../assets/img-categ-1/tailwind.png";

const skills = [
  { id: 1, icon: react },
  { id: 2, icon: laravel },
  { id: 3, icon: mongodb },
  { id: 4, icon: mysql },
  { id: 5, icon: nodejs },
  { id: 6, icon: github },
  { id: 7, icon: jira },
  { id: 8, icon: javascript },
  { id: 9, icon: php },
  { id: 10, icon: html },
  { id: 11, icon: css },
  { id: 12, icon: tailwind },
];

const education = [
  { id: 1, name: "M.Sc.(Computer Science)" },
  { id: 2, name: "B.Sc.(Computer Science)" },
  { id: 3, name: "HSC (Science)" },
  { id: 4, name: "SSC" },
];

const HomePartTwo = () => {
  return (
    <>
      <section className="home-part-two min-h-screen">
        <div>
          <div className="heading">
            <h1 className="md:text-[50px] text-[30px] text-center font-bold text-black md:pt-6 pt-5">
              <span className="border-b-4 border-[#4A628A]">
                About <span style={{ color: "#4A628A" }}>Me</span>
              </span>
            </h1>
          </div>

          <div className="about-content mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 my-5">
              <div className="col-span-1 md:col-span-1 mb-5">
                <div className="flex justify-center items-center w-60 md:w-full md:h-full mx-auto md:m-0">
                  <img
                    src={AboutPhoto}
                    alt="about_photo"
                    className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 md:px-10">
                <div className="about-descrp px-2">
                  <p className="text-justify text-[15px] md:text-[18px] mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque quas natus est, dolorem deleniti nam temporibus
                    quisquam ipsam officiis repellendus ea rerum veritatis minus
                    eveniet obcaecati maiores quos, voluptate ducimus
                    dignissimos aperiam, qui cum dolores? Necessitatibus
                    officiis asperiores, quam magnam aperiam temporibus, porro
                    perferendis quia cumque eaque doloribus molestiae. Fugiat
                    quod id inventore repudiandae aspernatur est assumenda rem
                    itaque. At ad impedit nobis minima reiciendis delectus atque
                    soluta natus numquam?
                  </p>
                  <div className="tech-skills max-w-full mb-5">
                    <h1 className="text-[22px] mb-3 text-start font-bold text-black pt-2 sm:text-[18px]">
                      <span>
                        Technical{" "}
                        <span style={{ color: "#4A628A" }}>Skills</span>
                      </span>
                    </h1>
                    <div className="flex justify-start gap-3 flex-wrap">
                      {skills.map((item) => (
                        <div
                          key={item.id}
                          className="md:w-[50px] w-[50px] transition ease-in-out delay-100 hover:scale-110 bg-purple-100 md:p-3 p-2 rounded-full"
                        >
                          <img
                            src={item.icon}
                            className="md:w-[60px] w-[60px]"
                            alt="tech_logo"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="education max-w-full">
                    <h1 className="text-[22px] mb-3 text-start font-bold text-black pt-2 sm:text-[18px]">
                      <span>Education</span>
                    </h1>
                    <div className="flex justify-start gap-4 flex-wrap">
                      {education.map((item) => (
                        <div
                          key={item.id}
                          className="md:w-auto w-auto transition ease-in-out delay-100 hover:scale-105 bg-purple-100 md:p-3 p-2 rounded-lg shadow-sm"
                        >
                          <span className="text-[10px] md:text-[18px] font-bold text-black">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePartTwo;
