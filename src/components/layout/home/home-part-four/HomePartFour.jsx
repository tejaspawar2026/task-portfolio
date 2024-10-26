import React from "react";
import contactUsBg from "../../../../assets/img-categ-2/contact.png";

const HomePartFour = () => {
  return (
    <>
      <section className="home-part-two min-h-screen">
        <div className="heading">
          <h1 className="md:text-[50px] text-[30px] text-center font-bold text-black md:pt-6 pt-5">
            <span>
              Contact <span style={{ color: "#4A628A" }}>Me</span>
            </span>
          </h1>
        </div>

        <div id="contact" className="flex flex-col justify-center mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44">
            <img
              src={contactUsBg}
              className="w-[300px] mr-10"
              alt="contactbg_image"
            />
            <div className="w-full">
              <div className="flex flex-col ">
                <label className="text-black">Email</label>
                <input
                  type="text"
                  placeholder="yourname@gmail.com"
                  className="border-[1.5px] px-2 hover:border-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-black">Message</label>
                <textarea
                  type="text"
                  rows={7}
                  placeholder="Type your message here"
                  className="border-[1.5px] px-2 hover:border-black rounded-md"
                />
                <button className="transition-all ease-in-out hover:scale-110 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white rounded-md" style={{ backgroundColor: "#4A628A" }}>
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-2 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePartFour;
