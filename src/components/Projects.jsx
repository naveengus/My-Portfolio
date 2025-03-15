import React from "react";
import project1 from "../assets/project1.png";
import pro2 from "../assets/project2 (1).png";
import pro3 from "../assets/project3.png";
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
      description:
        "This is the frontend for a Project Management Tool built using React.js. The application enables team leaders to manage projects and allows users to submit their work. It incorporates React Router DOM for navigation and Axios for making API requests to a connected MongoDB backend. ",
      link: "https://github.com/naveengus/Project-Management-Frontend.git",
      visit: "https://project-tracker-tool.netlify.app",
    },
    {
      id: 2,
      img: pro3,
      title: "MY todo",
      description:
        "Welcome to the To-Do List Application! This project is a simple yet powerful tool to help you manage your daily tasks efficiently.",
      link: "https://github.com/naveengus/todoapp.git",
      visit: "https://todo-react-mode.netlify.app/",
    },
    {
      id: 3,
      img: pro2,
      title: "Angular Forms Crud",
      description: "This is my project 3",
      link: "https://github.com/naveengus/Angular-first.git",
      visit: "https://angular-forms",
    },
    // {
    //   id: 4,
    //   img: pro2,
    //   title: "Angular Forms Crud",
    //   description: "This is my project 3",
    //   link: "https://github.com/your-repo3",
    //   visit: "https://project-tracker-tool.netlify.app",
    // },
  ];

  return (
    <div className="container vh-md-100 proBox" id="Projects">
      <h1 className="text-center mb-4">
        <MdOutlineDeveloperMode />
        Projects
      </h1>
      <div className="row ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-6 col-sm-6 col-md-4 position-relative "
          >
            <div className="project-card">
              <img
                className="proimg text-center"
                src={project.img}
                alt={project.title}
              />
              <div className="mt-2 text-left">
                <div className="pro-body">
                  <h6>{project.title}</h6>
                  <p>{project.description}</p>
                </div>

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
                    <IoLogoGithub className="pro-git " />
                  </a>
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-icon text-decoration-none "
                  >
                    Visit <FaChrome className="pro-chrome " />
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
