import React from "react";
import LinkedInLogo from "../../../components/common/icons/LinkedIn.jsx";
import GitHubLogo from "../../../components/common/icons/GitHub.jsx";
import InstagramLogo from "../../../components/common/icons/Instagram.jsx";
import FacebookLogo from "../../../components/common/icons/Facebook.jsx";
import XLogo from "../../../components/common/icons/X.jsx";
import YoutubeLogo from "../../../components/common/icons/Youtube.jsx";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialSkype } from "react-icons/ti";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="grid grid-cols-1 md:grid-cols-4 text-white bg-black">
        <div className="col-span-1 md:col-span-3">
          <div className="heading-row my-2 ml-2">
            <h2 className="heading-first font-bold text-[30px] md:text-[20px]">
              About
            </h2>
          </div>
          <div className="des-row my-2 ml-2">
            <p className="about-des text-justify text-[15px] md:text-[15px] mr-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              sint nulla! Sequi quo eius laudantium tempore vel animi ipsam
              quidem maiores. Quod eaque sit excepturi reprehenderit, obcaecati
              ullam assumenda aut architecto velit consectetur quaerat
              perferendis placeat adipisci animi error explicabo suscipit cum
              autem ex laboriosam odit voluptatum mollitia! Molestiae, voluptas?
            </p>
          </div>

          <div className="connection-row my-2 ml-2">
            <h3 className="connection-heading text-[30px] md:text-[15px] text-center font-bold">
              Stay Connected
            </h3>
          </div>

          <div className="flex justify-center items-center gap-3 my-2">
            <LinkedInLogo />
            <GitHubLogo />
            <InstagramLogo />
            <FacebookLogo />
            <XLogo />
            <YoutubeLogo />
          </div>
          <div className="copyright-text">
            <p className="text-center my-3 text-[15px] md:text-[15px] font-medium">
              Copyright &copy; Rudra Softs
            </p>
          </div>
        </div>

        <div className="col-span-1 bg-black text-white">
          <div className="contact-row my-2 ml-2">
            <h3 className="contact-heading text-[30px] md:text-[20px] text-start md:text-center font-bold">
              Contact
            </h3>
            <div className="flex justify-start items-center gap-3 my-4 text-[15px] md:text-[15px]">
              <HiLocationMarker />
              <p>Ahmednagar, India 414001</p>
            </div>
            <div className="flex justify-start items-center gap-3 my-4 text-[15px] md:text-[15px]">
              <FaPhoneAlt />
              <p>+91 1234567890</p>
            </div>
            <div className="flex justify-start items-center gap-3 my-4 text-[15px] md:text-[15px]">
              <MdEmail />
              <p>rsofts@gmail.com</p>
            </div>
            <div className="flex justify-start items-center gap-3 my-4 text-[15px] md:text-[15px]">
              <TiSocialSkype />
              <p>rudra_rudra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
