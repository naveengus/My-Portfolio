import React from "react";
import mypic1 from "../assets/mypic1.png";
import Button from "react-bootstrap/esm/Button";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Certificates from "./Certificate";
import Contacts from "./Contacts";
function Home() {
  return (
    <>
      <div className="container vh-100 d-flex  justify-content-center align-items-center home-box">
        <div className="row text-center text-md-start ">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
            <div className="ms-md-5">
              <p className="intro ">Hi ,I am </p> <br />
              <h1 className="name">
                <span className="h1">Naveen.G</span>{" "}
              </h1>
              <br />
              <h4 className="fsd uniquifier">Full-Stack Developer</h4>
              <p className="paraghraph">
                A dedicated MERN Stack Developer with expertise in creating
                intuitive and responsive web applications, blending technical
                skills with creative problem-solving.
              </p>
              <div className="home-icons">
                <a href="#" className="p-2 icon-link">
                  <IoLogoGithub className="icon " size={25} />
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
                <br />
                <Button className="bg-primary mt-3  me-3 ms-2">Resume</Button>
                <Button className="bg-primary mt-3 me-3">Hire ME</Button>
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
      <Education />
      <Certificates />
      <Contacts />
    </>
  );
}

export default Home;
