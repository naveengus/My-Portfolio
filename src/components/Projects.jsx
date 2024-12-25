import React from "react";
import project1 from "../assets/project1.png";
import pro2 from "../assets/project2 (1).png";
import { IoLogoGithub } from "react-icons/io5";

function Projects() {
  const projects = [
    {
      id: 1,
      img: project1,
      description: "Project Management is a Responsive website with mongoDb ",
      link: "https://github.com/your-repo1",
    },
    {
      id: 2,
      img: pro2,
      description: "Shoppyfy using a React-routeing",
      link: "https://github.com/your-repo2",
    },
    {
      id: 3,
      img: pro2,
      description: "This is my project 3",
      link: "https://github.com/your-repo3",
    },
  ];

  return (
    <div className="container proBox">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-12 col-md-4 text-center position-relative"
          >
            <img
              className="proimg"
              src={project.img}
              alt={`Project ${project.id}`}
            />

            <p className="prodes">
              {project.description}
              <br />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer "
                className="proicon"
              >
                <IoLogoGithub className="icon  mt-3 " size={40} />
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
