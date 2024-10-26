// Footer.js
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
    <section className="footer-section bg-[#4A628A] text-white py-5">
      <div className="px-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <h2 className="font-bold text-[30px] md:text-[20px] my-2">About</h2>
            <p className="text-justify text-[15px] mr-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Placeat, sint nulla! Sequi quo eius laudantium tempore vel
              animi ipsam quidem maiores. Quod eaque sit excepturi
              reprehenderit, obcaecati ullam assumenda aut architecto velit
              consectetur quaerat perferendis placeat adipisci animi error
              explicabo suscipit cum autem ex laboriosam odit voluptatum
              mollitia! Molestiae, voluptas?
            </p>

            <h3 className="text-[30px] md:text-[15px] font-bold my-4 text-center">Stay Connected</h3>
            <div className="flex justify-center items-center gap-3 my-2">
              <LinkedInLogo aria-label="LinkedIn" />
              <GitHubLogo aria-label="GitHub" />
              <InstagramLogo aria-label="Instagram" />
              <FacebookLogo aria-label="Facebook" />
              <XLogo aria-label="Twitter" />
              <YoutubeLogo aria-label="YouTube" />
            </div>
            <p className="text-center my-3 text-[15px] font-medium">
              Copyright &copy; Rudra Softs
            </p>
          </div>

          <div>
            <h3 className="text-[30px] md:text-[20px] font-bold my-2 text-start md:text-center">Contact</h3>
            <div className="flex items-center gap-3 my-4 text-[15px]">
              <HiLocationMarker />
              <p>Ahmednagar, India 414001</p>
            </div>
            <div className="flex items-center gap-3 my-4 text-[15px]">
              <FaPhoneAlt />
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center gap-3 my-4 text-[15px]">
              <MdEmail />
              <p>rsofts@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 my-4 text-[15px]">
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
