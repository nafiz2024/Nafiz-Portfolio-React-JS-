import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-12 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Jr. Implemantation Engineer"
            subTitle="MySoft Ltd - (2023 - 2024)"
            result="Bangladesh"
            des="As a Junior Implementation Engineer in a Hospital Management System, you play a crucial role in blending technology and healthcare. Your work optimizes hospital processes, enhances user experience, and improves patient care. This position serves as a stepping stone for career growth while allowing you to make a significant impact in the healthcare sector."
          />
          <ResumeCard
            title="Jr. Front-end Developer"
            subTitle="eGeneration Ltd - (2023 - 2023)"
            result="Bangladesh"
            des="As a Junior Front-End Developer, you play a key role in creating user-friendly web applications. This position is an excellent starting point for your tech career, offering continuous learning and skill improvement in a dynamic environment. With a solid foundation in front-end development, you can progress to senior roles and explore various specializations in web development."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Jr. Implemantation Engineer"
            subTitle="MySoft Ltd - (2023 - 2024)"
            result="Bangladesh"
            des="As a Junior Implementation Engineer in a Hospital Management System, you play a crucial role in blending technology and healthcare. Your work optimizes hospital processes, enhances user experience, and improves patient care. This position serves as a stepping stone for career growth while allowing you to make a significant impact in the healthcare sector."
          />
          <ResumeCard
            title="Jr. Front-end Developer"
            subTitle="eGeneration Ltd - (2023 - 2023)"
            result="Bangladesh"
            des="As a Junior Front-End Developer, you play a key role in creating user-friendly web applications. This position is an excellent starting point for your tech career, offering continuous learning and skill improvement in a dynamic environment. With a solid foundation in front-end development, you can progress to senior roles and explore various specializations in web development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;