import React from "react";
import mypic1 from "../assets/mypic1.png";
import profile from "../assets/profile2.png";
import Button from "react-bootstrap/esm/Button";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Certificates from "./Certificate";
import Contacts from "./Contacts";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Home() {
  return (
    <>
      <div
        id="Home"
        className="container vh-md-100 d-flex  justify-content-center align-items-center home-box m-md-5"
      >
        <div className="row text-center text-md-start ">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0 intro-box">
            <div className="ms-md-5 mt-3 ">
              <p className="intro ">Hi ,I am </p> <br />
              <h1 className="name">
                <span className="h1">Naveen.G</span>{" "}
              </h1>
              <br />
              <h4 className="fsd uniquifier">Full-Stack Developer</h4>
              {/* <p className="paraghraph "> */}
              <p className=" ">
                A dedicated MERN Stack Developer with expertise in creating
                intuitive and responsive web applications, blending technical
                skills with creative problem-solving.
              </p>
              <div className="home-icons">
                <a
                  href="https://github.com/naveengus"
                  className="p-2 icon-link"
                >
                  <IoLogoGithub className="icon " size={25} />
                </a>
                <a
                  href="https://www.linkedin.com/in/naveen-g-devloper"
                  className="p-2 icon-link"
                >
                  <IoLogoLinkedin className="icon" size={25} />
                </a>
                {/* <a href="#" className="p-2 icon-link">
                  <FaPhoneSquareAlt className="icon" size={25} />
                </a>
                <a href="#" className="p-2 icon-link">
                  <MdOutgoingMail className="icon" size={30} />
                </a> */}
                <br />
                <button className="resume-btn mt-3  me-3 ms-2">Resume</button>
                <AnchorLink href="#Contacts">
                  <button className="hire-btn mt-3 me-3">Hire ME</button>
                </AnchorLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="home-img img-fluid ms-md-5 "
              // src={mypic1}
              src={profile}
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
