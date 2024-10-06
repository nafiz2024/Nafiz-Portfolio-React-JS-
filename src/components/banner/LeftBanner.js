import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Freelancer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 5000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Nafiz Alam</span>
        </h1>
        <h2 className="lg:text-4xl text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          I'm a professional web developer and freelancer. With my expertise, I
          work on various projects, delivering quality solutions tailored to
          meet client needs. I'm proficient in modern web technologies and
          continuously strive to improve my skills to stay updated with trends.
          My ability to manage time and deliver within deadlines helps me
          maintain strong client relationships.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
