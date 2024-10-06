import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nafiz Alam</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide text-justify">
          I'm a skilled MERN developer specializing in building dynamic and
          responsive web applications using the MongoDB, Express.js, React &
          Tailwind CSS.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801876566181</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nafizalam.dev@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/nafiz.alam.733">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/nafiz-alam-6299911b5/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/nafiz2024">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
