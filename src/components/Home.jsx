import React from "react";
import mypic1 from "../assets/mypic1.png";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
function Home() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center mt-2 home-box">
        <div className="row text-center text-md-start ">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <div className="ms-md-5">
              <h1>Hi , I'm Naveen.G</h1>
              <br />
              <h4 className="fsd">Full-Stack Developer</h4>
              <p>
                A dedicated MERN Stack Developer with expertise in creating
                intuitive and responsive web applications, blending technical
                skills with creative problem-solving.
              </p>
              <div className="home-icons">
                <a href="#" className="p-2 icon-link">
                  <IoLogoGithub className="icon icon:hover-blue" size={25} />
                </a>
                <a href="#" className="p-2 icon-link">
                  <IoLogoLinkedin className="icon" size={25} />
                </a>
                <a href="#" className="p-2 icon-link">
                  <FaPhoneSquareAlt className="icon" size={25} />
                </a>
                <a href="#" className="p-2 icon-link">
                  <MdOutgoingMail className="icon" size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="home-img img-fluid ms-md-5"
              src={mypic1}
              // style={{ maxWidth: "150%", height: "auto" }}
              alt="Naveen's Picture"
            />
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default Home;
