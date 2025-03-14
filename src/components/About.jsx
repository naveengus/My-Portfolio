import React from "react";
import {
  MdOutlineMedicalInformation,
  MdOutlineDeveloperMode,
} from "react-icons/md";
function About() {
  return (
    <div>
      <div className="container   " id="About">
        <div className="col   align-items-center">
          <h1 className="text-center mb-1  pt-5 ">
            <MdOutlineMedicalInformation />
            About Me
          </h1>
          <div className=" p-5">
            <p className=" paraghraph">
              MERN Stack Developer with a BE in Computer Science and hands-on
              experience in building dynamic and responsive web applications.
              Completed comprehensive courses in the MERN stack, enhancing
              skills in MongoDB, Express.js, React.js, and Node.js.
            </p>{" "}
            <p className=" paraghraph">
              Successfully developed a capstone project using the MERN stack,
              showcasing expertise in designing full-stack applications with
              scalable architectures and seamless user experiences. Eager to
              learn, innovate, and contribute to impactful projects. Let's
              connect to collaborate on cutting-edge web solutions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
