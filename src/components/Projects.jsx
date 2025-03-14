import React from "react";
import project1 from "../assets/project1.png";
import pro2 from "../assets/project2 (1).png";
import { IoLogoGithub } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";
import {
  MdOutlineMedicalInformation,
  MdOutlineDeveloperMode,
} from "react-icons/md";
function Projects() {
  const projects = [
    {
      id: 1,
      img: project1,
      title: "Project Management Tool",
      description: "Project Management is a Responsive website with mongoDb ",
      link: "https://github.com/naveengus/Project-Management-Frontend.git",
      visit: "https://project-tracker-tool.netlify.app",
    },
    {
      id: 2,
      img: pro2,
      title: "Shopfy",
      description: "Shopfy using a React-routeing",
      link: "https://github.com/your-repo2",
      visit: "https://project-tracker-tool.netlify.app",
    },
    {
      id: 3,
      img: pro2,
      title: "Angular Forms Crud",
      description: "This is my project 3",
      link: "https://github.com/your-repo3",
      visit: "https://project-tracker-tool.netlify.app",
    },
    {
      id: 3,
      img: pro2,
      title: "Angular Forms Crud",
      description: "This is my project 3",
      link: "https://github.com/your-repo3",
      visit: "https://project-tracker-tool.netlify.app",
    },
  ];

  return (
    <div className="container vh-md-100 proBox" id="Projects">
      <h1 className="text-center mb-4">
        <MdOutlineDeveloperMode />
        Projects
      </h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-6 col-md-4  position-relative ">
            <div className="project-card">
              <img
                className="proimg text-center"
                src={project.img}
                alt={project.title}
              />
              <div className="mt-2 text-left">
                <p>
                  <strong>Title:</strong> {project.title}
                </p>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
                {/* <div></div> */}
                <div className="pro-link-btn">
                  {" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-icon text-decoration-none"
                  >
                    Code
                    <IoLogoGithub className="icon  bg-dark" size={25} />
                  </a>
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-icon text-decoration-none"
                  >
                    Visit <FaChrome className="icon  bg-dark" size={25} />
                  </a>
                </div>
                {/* <div> </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
