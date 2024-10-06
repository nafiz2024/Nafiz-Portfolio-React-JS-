import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard1 from "./projectCard/ProjectsCard1";
import ProjectsCard2 from "./projectCard/ProjectsCard2";
import ProjectsCard3 from "./projectCard/ProjectsCard3";
import ProjectsCard4 from "./projectCard/ProjectsCard4";
import ProjectsCard5 from "./projectCard/ProjectsCard5";
import ProjectsCard6 from "./projectCard/ProjectsCard6";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard1
          title="Discover Website Traffic"
          des=" Knowing which companies visit your website can provide valuable insights for your business. It helps identify potential leads and improve marketing strategies. With tracking tools, you can gather details like company names and interests, helping you reach the right audience at the right time."
          src={projectOne}
        />
        <ProjectsCard2
          title="Custom Furniture Made"
          des="At our company, your convenience comes first. You provide the measurements, and we create custom furniture that fits your space perfectly. With precision and quality, we craft pieces for your home or office. You measure, we make — simple as that!"
          src={projectTwo}
        />
        <ProjectsCard3
          title="Travel Guide Website"
          des=" Welcome to - Explore the New World, your gateway to hidden gems and uncharted territories. Discover travel guides and cultural insights that inspire your next adventure. Join our community to share experiences and explore new places together!"
          src={projectThree}
        />
        <ProjectsCard4
          title="Halloween Fun Awaits"
          des=" At - Spooktacular Halloween, find creative ideas and stories to celebrate the spooky season. From costume guides and DIY decorations to tasty recipes, we have everything you need for an unforgettable celebration. Join our community and make this Halloween the spookiest yet!"
          src={projectFour}
        />
        <ProjectsCard5
          title="Personal Portfolio"
          des=" A portfolio is essential for showcasing your skills and experiences to potential clients or employers. Choose your best projects and present them creatively. Include insights about your work process and add a contact section for inquiries. Start highlighting your talents with a unique portfolio!"
          src={projectFive}
        />
        <ProjectsCard6
          title="Website Admin Dashboard"
          des="An admin dashboard is essential for any website, serving as the central hub for managing operations. It allows admins to monitor and control user data, content, and activities while ensuring security and improving performance. The dashboard also facilitates quick updates, keeping the website relevant."
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
