import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-12 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2014 - Running
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Northern University Bangladesh (2024 - Running)"
            result="Running"
            des="A BSc in Computer Science and Engineering provides students with essential technical skills and knowledge to succeed in the dynamic tech industry. It lays a strong foundation for advanced studies, like a Master’s degree, and prepares graduates for various career opportunities in technology."
          />
          <ResumeCard
            title="Diplomain Computer Science "
            subTitle="Faridpur Polytechnic Institute (2019 - 2023)"
            result="3.42/4.00"
            des="A Diploma in Computer Science is a great option for those wanting to quickly enter the tech industry. It equips students with essential skills and knowledge, making them competitive candidates for various tech roles. The diploma also serves as a pathway for further studies, like a Bachelor's degree in Computer Science."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Baish Roshi Shib Sundary Academy (2014 - 2019)"
            result="4.28/5.00"
            des="The Secondary School Certificate is a vital educational credential that plays a significant role in shaping students' academic and professional futures. By successfully completing the SSC, students lay the groundwork for their next steps in education and career development."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-12 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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

export default Education;
